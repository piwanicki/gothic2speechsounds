import React from "react";
import Sound from "react-sound";
import { soundsURL } from "../../assets/sounds/Sounds";

class SoundComponent extends React.Component {
  state = {
    soundIDX: 0
  };

  onFinishHandler = () => {
    const category = this.props.category;

    if (category === "vatrasSpeech" ) {
      const currentIdx = this.state.soundIDX;
      const idx = this.state.soundIDX === 20 ? 0 : currentIdx + 1;
      if (idx !== 0) {
        this.setState({
          soundIDX: idx
        });
      }
    }

    if(category === "xardasIntro") {
      const currentIdx = this.state.soundIDX;
      console.log(currentIdx);
      const idx = this.state.soundIDX === 8 ? 0 : currentIdx + 1;
      if (idx !== 0) {
        this.setState({
          soundIDX: idx
        });
      }
    }
  };

  render() {
    const category = this.props.category;
    const soundCategory = soundsURL[category];
    let soundIDX = this.props.soundForCategory; 

    if(this.props.category === "vatrasSpeech" || this.props.category === 'xardasIntro') {
      soundIDX = this.state.soundIDX
    } else if (this.props.category === "howManyGold") {
      soundIDX = this.props.soundForCategory
    } else {
      soundIDX = Math.floor(Math.random() * soundCategory.length);
    } 
    return (
      <Sound
        url={soundCategory[soundIDX]}
        playStatus={this.props.playStatus}
        autoLoad={true}
        autoPlay={false}
        onFinishedPlaying={this.onFinishHandler}
      />
    );
  }
}

export default SoundComponent;
