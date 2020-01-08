import React from "react";
import Sound from "react-sound";
import { soundsURL } from "../../assets/sounds/Sounds";

class SoundComponent extends React.Component {
  render() {
    const smallTalkSex = this.props.smallTalk;
    const talkCategory = soundsURL[smallTalkSex];
    const soundIDX = Math.floor(Math.random() * talkCategory.length);
    return (
      <Sound
        url={talkCategory[soundIDX]}
        playStatus={this.props.playStatus}
        autoLoad={true}
        autoPlay={false}
        onFinishedPlaying={this.props.onFinish}
      />
    );
  }
}

export default SoundComponent;
