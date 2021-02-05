import React, {Component} from "react";
import SoundComponent from "../SoundsComponent/SoundComponent";
import Sound from "react-sound";
import classes from "./Controls.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";

class Controls extends Component {
  state = {
    playStatus: Sound.status.STOPPED,
    category: "maleSmallTalk",
    showGoldSelect: false,
  };

  playSongHandler = () => {
    this.setState({playStatus: Sound.status.PLAYING});
  };

  categoryHandler = (value) => {
    if (value === "howManyGold") {
      this.setState({showGoldSelect: !this.state.showGoldSelect});
    } else {
      this.setState({showGoldSelect: false});
    }
    this.setState({
      category: value,
      soundForCategory : 0, // set first index
      playStatus: Sound.status.STOPPED,
    });
  };

  soundHandler = (value) => {
    this.setState({
      soundForCategory : value
    })
  }

  onFinishedPlayingHandler = () => {
    this.setState({playStatus: Sound.status.STOPPED});
  };

  render() {
    console.log(this.state)
    return (
      <>
        <div className={classes.Controls}>
          <div className={classes.SelectContainer}>
            <p className={classes.voiceP}>Głos</p>
            <select onChange={(e) => this.categoryHandler(e.target.value)}>
              <option value={"maleSmallTalk"}>Obywatel</option>
              <option value={"femaleSmalltalk"}>Obywatelka</option>
              <option value={"vatrasSpeech"}>Przemówienie Vatrasa</option>
              <option value={"xardasIntro"}>Xardas intro</option>
              <option value={"howManyGold"}>ZŁOTO</option>
              <option value={"fight"}>Ah walka!</option>
            </select>
            {this.state.showGoldSelect && (
              <select onChange={(e) => this.soundHandler(e.target.value)}>
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
          <button onClick={this.playSongHandler} className={classes.PlayBtn}>
            <FontAwesomeIcon icon={faPlay} />
          </button>
          <SoundComponent
            playStatus={this.state.playStatus}
            category={this.state.category}
            soundForCategory={this.state.soundForCategory}
            onFinish={this.onFinishedPlayingHandler}
          />
        </div>
      </>
    );
  }
}

export default Controls;
