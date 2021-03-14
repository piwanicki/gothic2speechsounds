import React, {useState} from "react";
import Sound from "react-sound";
import {soundsURL} from "../../assets/sounds/Sounds";

const SoundComponent = (props) => {
  window.soundManager.setup({debugMode: false});

  const [soundIDX, setSoundIDX] = useState(props.soundForCategory);

  const onFinishHandler = () => {
    switch (props.category) {
      case "vatrasSpeech": {
        continueAutoPlay(20);
        break;
      }
      case "xardasIntro": {
        continueAutoPlay(8);
        break;
      }
      default: {
        props.onFinishedPlaying();
      }
    }
  };

  const continueAutoPlay = (soundFileLength) => {
    const idx = soundIDX === soundFileLength ? 0 : soundIDX + 1;
    if (idx !== 0) {
      setSoundIDX(idx);
    }
  };

  const category = props.category;
  const soundCategory = soundsURL[category];
  let soundIdx = props.soundForCategory;
  if (props.category === "vatrasSpeech" || props.category === "xardasIntro" || props.fromLink) {
    soundIdx = soundIDX;
  } else if (props.category === "howManyGold") {
    soundIdx = props.soundForCategory;
  } else  {
    soundIdx = Math.floor(Math.random() * soundCategory.length);
  }
  return (
    <Sound
      url={soundCategory[soundIdx]}
      playStatus={props.playStatus}
      autoLoad={true}
      autoPlay={props.autoPlay}
      onFinishedPlaying={onFinishHandler}
    />
  );
};

export default SoundComponent;
