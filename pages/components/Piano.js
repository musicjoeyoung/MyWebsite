import { useEffect, useState } from 'react'
import * as Tone from 'tone'
import styles from "styles/piano.module.scss"

export const Piano = () => {
  const [piano, setPiano] = useState()


  useEffect(() => {

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

  setPiano(piano)


}, [])

const playSound = (note) =>{
  piano.triggerAttackRelease(note, "8n");
}

  return (
    <div>Piano

      <div className={styles.piano}>
        <div className={`${styles.pianoKey} ${styles.white}`} onClick={() => playSound('C1', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.black}`} onClick={() => playSound('Db1', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.white}`} onClick={() => playSound('D1', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.black}`} onClick={() => playSound('Eb1', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.white}`} onClick={() => playSound('E1', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.white}`} onClick={() => playSound('F1', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.black}`} onClick={() => playSound('F#1', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.white}`} onClick={() => playSound('G1', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.black}`} onClick={() => playSound('G#1', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.white}`} onClick={() => playSound('A1', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.black}`} onClick={() => playSound('Bb1', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.white}`} onClick={() => playSound('B1', '8n')}></div>

        <div className={`${styles.pianoKey} ${styles.white}`} onClick={() => playSound('C2', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.black}`} onClick={() => playSound('Db2', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.white}`} onClick={() => playSound('D2', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.black}`} onClick={() => playSound('Eb2', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.white}`} onClick={() => playSound('E2', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.white}`} onClick={() => playSound('F2', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.black}`} onClick={() => playSound('F#2', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.white}`} onClick={() => playSound('G2', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.black}`} onClick={() => playSound('G#2', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.white}`} onClick={() => playSound('A2', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.black}`} onClick={() => playSound('Bb2', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.white}`} onClick={() => playSound('B2', '8n')}></div>

        <div className={`${styles.pianoKey} ${styles.white}`} onClick={() => playSound('C3', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.black}`} onClick={() => playSound('Db3', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.white}`} onClick={() => playSound('D3', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.black}`} onClick={() => playSound('Eb3', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.white}`} onClick={() => playSound('E3', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.white}`} onClick={() => playSound('F3', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.black}`} onClick={() => playSound('F#3', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.white}`} onClick={() => playSound('G3', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.black}`} onClick={() => playSound('G#3', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.white}`} onClick={() => playSound('A3', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.black}`} onClick={() => playSound('Bb3', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.white}`} onClick={() => playSound('B3', '8n')}></div>
        
        <div className={`${styles.pianoKey} ${styles.white}`} onClick={() => playSound('C4', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.black}`} onClick={() => playSound('Db4', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.white}`} onClick={() => playSound('D4', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.black}`} onClick={() => playSound('Eb4', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.white}`} onClick={() => playSound('E4', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.white}`} onClick={() => playSound('F4', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.black}`} onClick={() => playSound('F#4', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.white}`} onClick={() => playSound('G4', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.black}`} onClick={() => playSound('G#4', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.white}`} onClick={() => playSound('A4', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.black}`} onClick={() => playSound('Bb4', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.white}`} onClick={() => playSound('B4', '8n')}></div>
        
        <div className={`${styles.pianoKey} ${styles.white}`} onClick={() => playSound('C5', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.black}`} onClick={() => playSound('Db5', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.white}`} onClick={() => playSound('D5', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.black}`} onClick={() => playSound('Eb5', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.white}`} onClick={() => playSound('E5', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.white}`} onClick={() => playSound('F5', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.black}`} onClick={() => playSound('F#5', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.white}`} onClick={() => playSound('G5', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.black}`} onClick={() => playSound('G#5', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.white}`} onClick={() => playSound('A5', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.black}`} onClick={() => playSound('Bb5', '8n')}></div>
        <div className={`${styles.pianoKey} ${styles.white}`} onClick={() => playSound('B5', '8n')}></div>
      </div>


    </div>
  )
}

export default Piano