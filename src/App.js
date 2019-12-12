import React, { Component } from 'react';
import './App.css';
import SoundComponent from './SoundsComponent/SoundComponent';
import Sound from 'react-sound';




class App extends Component {

  state = {
    playStatus: Sound.status.STOPPED
  }


  playSongHandler = () => {
    this.setState({playStatus: Sound.status.PLAYING})
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.playSongHandler}>PLAY</button>
        <SoundComponent playStatus={this.state.playStatus}/>
      </div>
    );
  }

}

export default App;
