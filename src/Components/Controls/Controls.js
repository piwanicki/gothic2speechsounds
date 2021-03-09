import React, {useState} from "react";
import SoundComponent from "../SoundsComponent/SoundComponent";
import Sound from "react-sound";
import classes from "./Controls.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import queryString from 'query-string';
import {soundsURL, soundsCategories} from '../../assets/sounds/Sounds'

const Controls = (props) =>  {

  const [playStatus, setPlayStatus] = useState(Sound.status.STOPPED);
  const [category, setCategory] = useState('maleSmallTalk');
  const [soundForCategory, setSoundForCategory] = useState(0);
  const [showGoldSelect,setShowGoldSelect] = useState(false);

  const playSongHandler = () => {
    setPlayStatus(Sound.status.PLAYING);
  };

  const categoryHandler = (value) => {
    if (value === "howManyGold") {
      setShowGoldSelect(!showGoldSelect);
    } else {
      setShowGoldSelect(false);
    }
    setCategory(value);
    setPlayStatus(Sound.status.STOPPED);
  };

  const soundHandler = (value) => {
    setSoundForCategory(parseInt(value));
  }

  const onFinishedPlayingHandler = () => {
    setPlayStatus(Sound.status.STOPPED);
  };

  const queryObj = queryString.parse(window.location.search);
  if(Object.keys(queryObj).length > 0 ) {
    const category = queryObj.cat;
    const soundsID = queryObj.id;
    console.log(category, soundsID)
    if(soundsCategories.includes(queryObj.cat)) {
      if(queryObj.id <= soundsURL[queryObj.cat]) {
        setCategory(category);
        setSoundForCategory(soundsID);
      }
    }
  } 

    return (
        <div className={classes.Controls}>
          <div className={classes.SelectContainer}>
            <p className={classes.voiceP}>Głos</p>
            <select onChange={(e) => categoryHandler(e.target.value)}>
              <option value={"maleSmallTalk"}>Obywatel</option>
              <option value={"femaleSmalltalk"}>Obywatelka</option>
              <option value={"vatrasSpeech"}>Przemówienie Vatrasa</option>
              <option value={"xardasIntro"}>Xardas intro</option>
              <option value={"howManyGold"}>ZŁOTO</option>
              <option value={"fight"}>Ah walka!</option>
            </select>
            {showGoldSelect && (
              <select onChange={(e) => soundHandler(e.target.value)}>
                <option value={0}>10</option>
                <option value={1}>20</option>
                <option value={2}>30</option>
                <option value={3}>40</option>
                <option value={4}>50</option>
                <option value={5}>60</option>
                <option value={6}>70</option>
                <option value={7}>80</option>
                <option value={8}>90</option>
                <option value={9}>100</option>
                <option value={10}>150</option>
                <option value={11}>200</option>
                <option value={12}>250</option>
                <option value={13}>300</option>
                <option value={14}>350</option>
                <option value={15}>400</option>
                <option value={16}>450</option>
                <option value={17}>500</option>
                <option value={18}>550</option>
                <option value={19}>600</option>
                <option value={20}>650</option>
                <option value={21}>700</option>
                <option value={22}>750</option>
                <option value={23}>800</option>
                <option value={24}>850</option>
                <option value={25}>900</option>
                <option value={26}>950</option>
                <option value={27}>1000</option>
              </select>
            )}
          </div>
          <button onClick={playSongHandler} className={classes.PlayBtn}>
            <FontAwesomeIcon icon={faPlay} />
          </button>
          <SoundComponent
            playStatus={playStatus}
            category={category}
            soundForCategory={soundForCategory}
            onFinishedPlaying={onFinishedPlayingHandler}
          />
        </div>
     
    );
}

export default Controls;
