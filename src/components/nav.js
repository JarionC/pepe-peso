import React, { Component } from 'react';
import AudioContext from '../AudioContext';
import '../styles/nav.css';

class NavBar extends Component {
  static contextType = AudioContext;

  render() {
    const { isMuted, toggleAudio } = this.context;
    return (
      <div className="nav-container">
        <div className="logo-container">
          <div className="logo-box"></div>
          
        </div>
        <div className={"sound-btn " + (isMuted ? "muted" : "unmuted")} onClick={toggleAudio}>
          </div>
      </div>
    );
  }
}

export default NavBar;
