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

  /*
    <div className="nav-disclaimer">
          Hola, Amigos! Unfortunately, our launch did not go according to plan. But worry not, investors were
          reimbursed and we are revising our strategy and social media and plan to relaunch better than ever! We are learning from our
          mistakes and the lessons taught by successful coins, and we hope you will join us in looking forward to our future development!
        </div>
  */
    return (
      <div className="nav-wrapper">
         
        <div className="nav-container">
          <div onClick={toTop} className="logo-container">
            <div className="logo-box"></div>
          </div>
          <div className="add-text">
            {"Contract Address : N/A"}
          </div>
          <div className={"sound-btn " + (isPlaying ? "unmuted" : "muted")} onClick={handleClick}>
            </div>
        </div>
      </div>
    );
  
};

export default NavBar;
