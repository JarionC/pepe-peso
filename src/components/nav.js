import React, { Component } from 'react';
import '../styles/nav.css';
import IsPlayingContext from '../contexts/IsPlayingContext';


const NavBar = () => { 
  const { isPlaying, setIsPlaying, isPlayingOutside, setIsPlayingOutside } = React.useContext(IsPlayingContext);

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional, adds smooth scrolling effect
    });
  }
 
  const handleClick = () => {
    setIsPlayingOutside(!isPlayingOutside);
  }
    return (
      <div className="nav-container">
        <div onClick={toTop} className="logo-container">
          <div className="logo-box"></div>
          
        </div>
        <div className={"sound-btn " + (isPlaying ? "unmuted" : "muted")} onClick={handleClick}>
          </div>
      </div>
    );
  
};

export default NavBar;
