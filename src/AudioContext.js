import React from 'react';

const AudioContext = React.createContext({
  isMuted: false,
  toggleAudio: () => {},
});

export default AudioContext;
