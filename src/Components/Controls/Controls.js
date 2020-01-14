import React, { Component } from "react";
import SoundComponent from "../SoundsComponent/SoundComponent";
import Sound from "react-sound";
import classes from './Controls.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons'


class Controls extends Component {
  state = {
    playStatus: Sound.status.STOPPED,
    category: "maleSmallTalk",
  };

  playSongHandler = () => {
    this.setState({ playStatus: Sound.status.PLAYING });
  };

  smalltalkHandler = (value) => {
    this.setState({
      category: value,
      playStatus: Sound.status.STOPPED,
      });
  }

  onFinishedPlayingHandler = () => {
    this.setState({ playStatus: Sound.status.STOPPED });
  }

  render() {
    return (
      <>
        <div className={classes.Controls}>
          <div className={classes.SelectContainer}>
          <p className={classes.voiceP}>Głos</p>
          <select onChange={(e) => this.smalltalkHandler(e.target.value)}>
            <option value={"maleSmallTalk"}>Obywatel</option>
            <option value={"femaleSmalltalk"}>Obywatelka</option>
            <option value={"vatrasSpeech"}>Przemówienie Vatrasa</option>
          </select>
          </div>
          <button onClick={this.playSongHandler} className={classes.PlayBtn}><FontAwesomeIcon icon={faPlay}/></button>
          <SoundComponent playStatus={this.state.playStatus} category={this.state.category} onFinish={this.onFinishedPlayingHandler}/>
        </div>
      </>
    );
  }
}

export default Controls;
