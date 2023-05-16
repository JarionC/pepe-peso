import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/home';
import NavBar from './components/nav';
import BottomBar from './components/bottom';
import AudioContext from './AudioContext';
import soundFile from './sounds/jarabe.mp3';

function App() {
  const [audio, setAudio] = useState(new Audio(soundFile));
  const [isMuted, setIsMuted] = useState(true);

  const toggleAudio = () => {
    if (isMuted) {
      audio.play();
    } else {
      audio.pause();
    }
    setIsMuted(!isMuted);
  };

  return (
    <AudioContext.Provider value={{ audio, isMuted, toggleAudio }}>
      <div className="App">
        <NavBar></NavBar>
        <HomePage></HomePage>
        <BottomBar></BottomBar>
      </div>
    </AudioContext.Provider>
  );
}

export default App;
