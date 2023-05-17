import React, { Component } from 'react';
import '../styles/nav.css';
import IsPlayingContext from '../contexts/IsPlayingContext';


const NavBar = () => { 
  const { isPlaying, setIsPlaying, isPlayingOutside, setIsPlayingOutside } = React.useContext(IsPlayingContext);


 
  const handleClick = () => {
    setIsPlayingOutside(!isPlayingOutside);
  }
    return (
      <div className="nav-container">
        <div className="logo-container">
          <div className="logo-box"></div>
          
        </div>
        <div className={"sound-btn " + (isPlaying ? "unmuted" : "muted")} onClick={handleClick}>
          </div>
      </div>
    );
  
};

export default NavBar;
