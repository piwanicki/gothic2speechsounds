import React from "react";
import {soundsURL} from "../../assets/sounds/Sounds";
import ReactAudioPlayer from 'react-audio-player';


const SoundComponent = (props) => {
  const soundCategory = soundsURL[props.category];
  const soundIdx = props.soundForCategory;
  return (
    <ReactAudioPlayer
      src={soundCategory[soundIdx]}
      autoPlay={props.autoPlay} 
      controls
      onEnded={props.onFinishedPlaying}
      controlsList="nodownload"
      onPlay={props.onPlay}
/>
  );
};

export default SoundComponent;
