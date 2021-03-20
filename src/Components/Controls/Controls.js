import React, {useState} from "react";
import SoundComponent from "../SoundsComponent/SoundComponent";
import classes from "./Controls.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLink} from "@fortawesome/free-solid-svg-icons";
import queryString from "query-string";
import {soundsURL, soundsCategories} from "../../assets/sounds/Sounds";
import GoldSelect from "./SelectComponent/GoldSelect";
import CategorySelect from "./SelectComponent/CategorySelect";
import CopiedToCliboard from "./CopiedToCliboard/CopiedToClipboard";

const Controls = (props) => {
  let initCategory = "maleSmallTalk";
  let initSoundID = 0;
  let initShowGoldSelect = false;
  let initAutoPlay = false;

  const queryObj = queryString.parse(window.location.search);
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

  const [category, setCategory] = useState(initCategory);
  const [soundID, setsoundID] = useState(initSoundID);
  const [showGoldSelect, setShowGoldSelect] = useState(initShowGoldSelect);
  const [autoPlay, setAutoPlay] = useState(initAutoPlay);
  const [showCopiedClipboard, setShowCopiedClipboard] = useState(false);

  const categoryHandler = (value) => {
    if (value === "howManyGold") {
      setShowGoldSelect(!showGoldSelect);
    } else {
      setShowGoldSelect(false);
    }
    setCategory(value);
    setsoundID(0);
    setAutoPlay(false);
  };

  const soundHandler = (value) => {
    setsoundID(parseInt(value));
  };

  const showCopiedInfo = () => {
    setShowCopiedClipboard(true);
  };


  const setRandomSound = () => {
    const soundCategory = soundsURL[category];
    const randomSound = Math.floor(Math.random() * soundCategory.length);
    setsoundID(randomSound);
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

  const onFinishHandler = () => {
    if (category === "vatrasSpeech") {
      continueAutoPlay(20);
    }
    if (category === "xardasIntro") {
      continueAutoPlay(8);
    }

    if (category !== "howManyGold") {
      setRandomSound();
      setAutoPlay(false);
    }
  };

  const continueAutoPlay = (soundFileLength) => {
    const idx = soundID === soundFileLength ? 0 : soundID + 1;
    if (idx !== 0) {
      setsoundID(idx);
      setAutoPlay(true);
    } else {
      setAutoPlay(false);
    }
  };

  return (
    <>
      {showCopiedClipboard && <CopiedToCliboard />}
      <div className={classes.Controls}>
        <div className={classes.SelectContainer}>
          <p className={classes.voiceP}>Kategoria</p>
          <div className={classes.CategprySelectBox}>
            <CategorySelect
              onChangeHandler={(e) => categoryHandler(e.value)}
              value={category}
            />
            <FontAwesomeIcon
              icon={faLink}
              className={classes.GenerateLinkBtn}
              title="Skopiuj link"
              onClick={linkCopied}
            />
          </div>
          {showGoldSelect && (
            <GoldSelect
              onChangeHandler={(e) => soundHandler(e.value)}
              value={soundID}
            />
          )}
        </div>
        <SoundComponent
          category={category}
          soundForCategory={soundID}
          onFinishedPlaying={onFinishHandler}
          autoPlay={autoPlay}
        />
      </div>
      <input type="text" className={classes.LinkInputHidden} />
    </>
  );
};

export default Controls;
