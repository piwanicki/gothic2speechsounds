import React, {useState} from "react";
import SoundComponent from "../SoundsComponent/SoundComponent";
import Sound from "react-sound";
import classes from "./Controls.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faStop, faLink} from "@fortawesome/free-solid-svg-icons";
import queryString from "query-string";
import {soundsURL, soundsCategories} from "../../assets/sounds/Sounds";
import GoldSelect from "./SelectComponent/GoldSelect";
import CategorySelect from "./SelectComponent/CategorySelect";
import CopiedToCliboard from "./CopiedToCliboard/CopiedToClipboard";


// some workaround to autoplay sound
const queryObj = queryString.parse(window.location.search);
if (Object.keys(queryObj).length > 0) {
  setTimeout(() => {
    const playBtn = document.querySelector("#btn-play");
    playBtn.focus();
    playBtn.click();
  }, 1000);
}

const Controls = (props) => {
  let initCategory = "maleSmallTalk";
  let initSoundID = 0;
  let initShowGoldSelect = false;
  let initAutoPlay = false;

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
  const [showCopiedClipboard, setShowCopiedClipboard] = useState(false);

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
    setsoundID(0);
    stopSongHandler();
  };

  const soundHandler = (value) => {
    setsoundID(parseInt(value));
  };

  const onFinishedPlayingHandler = () => {
    stopSongHandler();
    setAutoPlay(false);
  };

  const showCopiedInfo = () => {
    setShowCopiedClipboard(true);
  };

  const linkCopied = () => {
    const generateLink = `${window.location.origin}?cat=${category}&id=${soundID}`;
    const input = document.querySelector(`.${classes.LinkInputHidden}`);
    input.value = generateLink;
    input.select();
    document.execCommand("copy");
    showCopiedInfo();
    setTimeout(() => {
      setShowCopiedClipboard(false);
    }, 1500);
  };

  return (
    <>
      {showCopiedClipboard && <CopiedToCliboard />}
      <div className={classes.Controls}>
        <div className={classes.SelectContainer}>
          <p className={classes.voiceP}>Kategoria</p>
          <CategorySelect
            onChangeHandler={(e) => categoryHandler(e.value)}
            value={category}
          />
          {showGoldSelect && (
            <GoldSelect
              onChangeHandler={(e) => soundHandler(e.value)}
              value={soundID}
            />
          )}
        </div>
        {playStatus === Sound.status.STOPPED ? (
          <button
            onClick={playSongHandler}
            className={classes.PlayBtn}
            id="btn-play"
          >
            <FontAwesomeIcon icon={faPlay} title="Odtwórz" />
          </button>
        ) : (
          <button onClick={stopSongHandler} className={classes.PlayBtn}>
            <FontAwesomeIcon icon={faStop} title="Stop" />
          </button>
        )}
        <FontAwesomeIcon
          icon={faLink}
          className={classes.GenerateLinkBtn}
          title="Skopiuj link"
          onClick={linkCopied}
        />
        <SoundComponent
          playStatus={playStatus}
          category={category}
          soundForCategory={soundID}
          onFinishedPlaying={onFinishedPlayingHandler}
          autoPlay={autoPlay}
        />
      </div>
      <input type="text" className={classes.LinkInputHidden} />
    </>
  );
};

export default Controls;
