import React, { useEffect, useState } from 'react';
import Meyda from 'meyda';
import AudioContext from '../../AudioContext';
import { PitchDetector} from 'pitchy';

import IsPlayingContext from '../../contexts/IsPlayingContext';

const Visualizer = ({ classNames }) => {
    
  const contextType = AudioContext;
  const [elementIndex, setElementIndex] = useState(1);
  const [audioContext, setAudioContext] = useState(null);
  const [source, setSource] = useState(null);
  const [meydaAnalyzer, setMeydaAnalyzer] = useState(null);
  const [intervalId, setIntervalId] = useState(null);
  
  const { isPlaying, setIsPlaying, setIsPlayingOutside, isPlayingOutside } = React.useContext(IsPlayingContext);

  const startAudio = () => {
    if (audioContext) {
        const newSource = audioContext.createBufferSource();
        setSource(newSource);
        const analyser = audioContext.createAnalyser();
        const detector = PitchDetector.forFloat32Array(analyser.frequencyBinCount);
        let audioData = new Float32Array(analyser.frequencyBinCount);

        fetch('../../sounds/jarabe.mp3') // replace 'audio.mp3' with the path to your audio file
            .then(response => response.arrayBuffer())
            .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
            .then(audioBuffer => {
                newSource.buffer = audioBuffer;
                newSource.connect(audioContext.destination);
                newSource.connect(analyser);

                // Initialize Meyda
                const newMeydaAnalyzer = Meyda.createMeydaAnalyzer({
                    "audioContext": audioContext,
                    "source": newSource,
                    "bufferSize": 512,
                    "featureExtractors": ["rms"],
                    "callback": features => {
                        let rms = features.rms;
                        updateElementVisibility(rms);
                    }
                });

                setMeydaAnalyzer(newMeydaAnalyzer);
                
                newMeydaAnalyzer.start();
                newSource.start();
                setIsPlaying(true);

                const intervalId = setInterval(() => {
                    analyser.getFloatTimeDomainData(audioData);
                    const [freq, clarity] = detector.findPitch(audioData, audioContext.sampleRate);
if (freq) {
    updateElementVisibilityByPitch(freq, clarity);
}
                }, 200); // analyze every 100 milliseconds

                // Remember to clear the interval when you stop the audio
                
                setIntervalId(intervalId); 
            });
    }
};


const pauseAudio = () => {
    if (audioContext && source && meydaAnalyzer) {
      clearInterval(intervalId); // clear the interval
      meydaAnalyzer.stop();
      source.stop(0); // It's a good practice to pass a delay (0 for immediate stop)
      setIsPlaying(false);
    }
  };
  const pitchThresholds = [80, 120, 200, 360, 640]; 

// Define threshold for clarity
const clarityThreshold = 0.7;

  
function updateElementVisibilityByPitch(pitch, clarity) {
    // Determine which element to display based on pitch value, but only if clarity is above the threshold
    /*let element;
    if (clarity > clarityThreshold) {
      if (pitch < pitchThresholds[0]) {
        element = 1;
      } else if (pitch < pitchThresholds[1]) {
        element = 2;
      } else if (pitch < pitchThresholds[2]) {
        element = 3;
      } else if (pitch < pitchThresholds[3]) {
        element = 4;
      } else {
        element = 5;
      }
  
      setElementIndex(element);
    }*/
  //  let pitchFactor = 100*(pitch/900);
   // let elementToModify = document.querySelector('.audio-elem'); // replace '#myElement' with the id or class of your element
   // elementToModify.style.height = `${pitchFactor}px`;
   // elementToModify.style.width = `${pitchFactor}px`;
  }

// Update element visibility based on rms value
function updateElementVisibility(rms) {
  // Define thresholds for rms values
  //console.log("rms : " + rms*10);
 /* let thresholds = [0.2, 0.4, 0.6, 0.8];
  
  // Determine which element to display based on rms value
  let element;
  let factor = rms * 10
  if (factor < thresholds[0]) {
    element = 1;
  } else if (factor < thresholds[1]) {
    element = 2;
  } else if (factor < thresholds[2]) {
    element = 3;
  } else if (factor < thresholds[3]) {
    element = 4;
  } else {
    element = 5;
  }

  setElementIndex(element);*/
  
  let rmsFactor = rms * 1000;
 
  if(rmsFactor > 75){
    classNames.forEach(className => {
        let elementToModifyPos = document.querySelector('.' + className.replace(/ /g, '.'));

        elementToModifyPos.style.top = `${-100+(Math.floor(Math.random() * 200))}%`;
        elementToModifyPos.style.right = `${-100+(Math.floor(Math.random() * 200))}%`;
      })
  }
  let elementToModify = document.querySelector('.audio-elem'); // replace '#myElement' with the id or class of your element
   // elementToModify.style.height = `${rmsFactor}px`;
    //elementToModify.style.width = `${rmsFactor}px`;
    
    elementToModify.style.marginRight = `${102-(parseInt(elementToModify.style.width) + (rmsFactor/3))}px`;

    classNames.forEach(className => {
        let elementToModifySize = document.querySelector('.' + className.replace(/ /g, '.'));

        elementToModifySize.style.height = `${rmsFactor-Math.floor(Math.random()*20)}px`;
        elementToModifySize.style.width = `${rmsFactor-Math.floor(Math.random()*20)}px`;
      })
}

  const handleClick = () => {
    let elementToModify = document.querySelector('.audio-elem'); // replace '#myElement' with the id or class of your element
    elementToModify.style.height = "100px";
    elementToModify.style.width = "100px";
    if (audioContext === null) {


        


      // Create AudioContext only after user interaction



      const newAudioContext = new (window.AudioContext || window.webkitAudioContext)();
      setAudioContext(newAudioContext);
    } else if (audioContext.state === "suspended") {
      // If AudioContext was created but is suspended, resume it
      audioContext.resume();
    }
    
    if(isPlaying){
      pauseAudio();
    } else {
      startAudio();
    }
  }


  useEffect(() => {
    if (audioContext === null) {
    const newAudioContext = new (window.AudioContext || window.webkitAudioContext)();
      setAudioContext(newAudioContext);
      classNames.forEach(className => {
        let elementToModify = document.querySelector('.' + className.replace(/ /g, '.'));

        elementToModify.style.top = `${-100+(Math.floor(Math.random() * 200))}%`;
        elementToModify.style.right = `${-100+(Math.floor(Math.random() * 200))}%`;
      })
    }
  });
  useEffect(() => {
    handleClick();
  }, [isPlayingOutside]);
  

  return (
    <div className="audio-holder">
        <div className={"sound-btn home " + (isPlaying ? "unmuted" : "muted")} onClick={handleClick}>
          </div>
          <div className="audio-elem">
      {classNames.map((className, index) => 
        <div key={index} className={className} >
          
        </div>
      )}
      </div>
    </div>
  );
};

export default Visualizer;
