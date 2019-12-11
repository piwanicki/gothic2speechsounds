import React from 'react';
import Sound from 'react-sound';
import {soundsURL} from '../sounds/Sounds';

class SoundComponent extends React.Component {

  render() {


    const soundIDX = Math.floor(Math.random() * soundsURL.length);
    console.log(soundIDX)
    return <Sound 
      url={soundsURL[soundIDX]}
      playStatus={this.props.playStatus}
      autoLoad={true}
      autoPlay={true}
    />
  }


}


export default SoundComponent;