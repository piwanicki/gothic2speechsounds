import React, {useState} from "react";
import SoundComponent from "../SoundsComponent/SoundComponent";
import Sound from "react-sound";
import classes from "./Controls.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faStop, faLink} from "@fortawesome/free-solid-svg-icons";
import queryString from "query-string";
import {soundsURL, soundsCategories} from "../../assets/sounds/Sounds";
import GoldSelect from './SelectComponent/GoldSelect';
import CategorySelect from "./SelectComponent/CategorySelect";



const Controls = (props) => {
  const queryObj = queryString.parse(window.location.search);

  let initCategory = "maleSmallTalk";
  let initSoundID = 0;
  let initShowGoldSelect = false;
  let initAutoPlay = false;
  //let initPlayStatus = Sound.status.STOPPED;

  if (Object.keys(queryObj).length > 0) {
    const category = queryObj.cat;
    const soundID = parseInt(queryObj.id);
    if (soundsCategories.includes(category)) {
      if (queryObj.id <= soundsURL[category].length) {
        initCategory = category;
        initSoundID = soundID;
        if (category === "howManyGold") {
          initShowGoldSelect = true;
        }
        initAutoPlay = true;
      }
    }
  }

  const [playStatus, setPlayStatus] = useState(Sound.status.STOPPED);
  const [category, setCategory] = useState(initCategory);
  const [soundID, setsoundID] = useState(initSoundID);
  const [showGoldSelect, setShowGoldSelect] = useState(initShowGoldSelect);
  const [autoPlay, setAutoPlay] = useState(initAutoPlay);

  const playSongHandler = () => {
    setPlayStatus(Sound.status.PLAYING);
  };

  const stopSongHandler = () => {
    setPlayStatus(Sound.status.STOPPED);
  };

  const categoryHandler = (value) => {
    if (value === "howManyGold") {
      setShowGoldSelect(!showGoldSelect);
    } else {
      setShowGoldSelect(false);
    }
    setCategory(value);
    stopSongHandler();
  };

  const soundHandler = (value) => {
    setsoundID(parseInt(value));
  };

  const onFinishedPlayingHandler = () => {
    stopSongHandler();
    setAutoPlay(false);
  };

  return (
    <div className={classes.Controls}>
      <div className={classes.SelectContainer}>
        <p className={classes.voiceP}>Głos</p>
        <CategorySelect onChangeHandler={(e) => categoryHandler(e.value)} value={category}/>
        {showGoldSelect && (
          <GoldSelect onChangeHandler={(e) => soundHandler(e.value)} value={soundID}/>
        )}
      </div>
      {playStatus === Sound.status.STOPPED ? (
        <button onClick={playSongHandler} className={classes.PlayBtn}>
          <FontAwesomeIcon icon={faPlay} />
        </button>
      ) : (
        <button onClick={stopSongHandler} className={classes.PlayBtn}>
          <FontAwesomeIcon icon={faStop} />
        </button>
      )}
      <FontAwesomeIcon icon={faLink} className={classes.GenerateLinkBtn} />
      <SoundComponent
        playStatus={playStatus}
        category={category}
        soundForCategory={soundID}
        onFinishedPlaying={onFinishedPlayingHandler}
        autoPlay={autoPlay}
      />
      
    </div>
  );
};

export default Controls;
