import styles from "styles/piano.module.scss"
import * as Tone from 'tone'
import { generatePianoKeys } from './functions/notes';
import {useEffect, useRef} from "react"

const Piano = () => {
//const synth = new Tone.Synth().toDestination();


    const piano = new Tone.Sampler({
      urls: {
        C4: "C4.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        A4: "A4.mp3",
      },
      release: 1,
      baseUrl: "https://tonejs.github.io/audio/salamander/",
    }).toDestination();

const pianoKeys = generatePianoKeys()
const isMouseDown = useRef(false)
const hoveredKeys = useRef(new Set())


const playSound = (note) =>{
  piano.triggerAttackRelease(note, "8n");}
  const handleMouseDown = () => {
    isMouseDown.current = true;
  };

  const handleMouseUp = () => {
    isMouseDown.current = false;
  };

  const handleMouseOver = (event) => {
    if (isMouseDown.current) {
      const pianoKey = event.target.closest(".pianoKey");
      if (pianoKey) {
        const keyId = pianoKey.id;
        if (!hoveredKeys.current.has(keyId)) {
          hoveredKeys.current.add(keyId);
          playSound(keyId);
        }
      }
    }
  };
  useEffect(() => {
    const handleMouseDown = () => {
      isMouseDown.current = true;
    };

    const handleMouseUp = () => {
      isMouseDown.current = false;
    };

    const handleMouseOver = (event) => {
      if (isMouseDown.current) {
        const pianoKey = event.target.closest(".pianoKey");
        if (pianoKey) {
          const keyId = pianoKey.id;
          if (!hoveredKeys.current.has(keyId)) {
            hoveredKeys.current.add(keyId);
            playSound(keyId);
          }
        }
      }
    };
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div className={styles.piano}>
      {pianoKeys.map((keyObject, index) => {
        const keyName = Object.keys(keyObject)[0];
        const keyColor = keyObject[keyName];
        
        return (
          <div key={index}
          id={keyName}
          className={`${styles.pianoKey} ${keyColor}`}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseOver={handleMouseOver}
          onClick={() => playSound(keyName)}>
            {keyName}
          </div>
        );
      })}
    </div>
  )
}

export default Piano


/* import React from 'react'

const Piano = () => {
  return (
    <div>Piano</div>
  )
}

export default Piano */
