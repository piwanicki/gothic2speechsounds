import React, { Component } from "react";
import SoundComponent from "../SoundsComponent/SoundComponent";
import Sound from "react-sound";
import classes from './Controls.module.css';

class Controls extends Component {
  state = {
    playStatus: Sound.status.STOPPED
  };

  playSongHandler = () => {
    this.setState({ playStatus: Sound.status.PLAYING });
  };

  render() {
    return (
      <>
        <div className={classes.Controls}>
          <select>
            <option value={"test1"}>TEST1</option>
            <option value={"test2"}>TEST2</option>
          </select>
          <button onClick={this.playSongHandler}>PLAY</button>
          <SoundComponent playStatus={this.state.playStatus} />
        </div>
      </>
    );
  }
}

export default Controls;
