import React, { useState } from 'react';
import './App.css';
import HomePage from './components/home';
import NavBar from './components/nav';
import BottomBar from './components/bottom';
import IsPlayingContext from './contexts/IsPlayingContext';

function App() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isPlayingOutside, setIsPlayingOutside] = React.useState(false);



  return (
      <div className="App">
      <IsPlayingContext.Provider value={{ isPlaying, setIsPlaying, isPlayingOutside, setIsPlayingOutside }}>
        <NavBar></NavBar>
        <HomePage></HomePage>
        <BottomBar></BottomBar>
      </IsPlayingContext.Provider>
      </div>
  );
}

export default App;
