/* import styles from 'styles/dronepiano.module.scss'
import * as Tone from "tone";
import ParticlesBg from "particles-bg";

const DronePiano = (note) => {
  const synth = new Tone.Synth().toDestination();
  const AMsynth = new Tone.AMSynth().toDestination();
  const FMsynth = new Tone.FMSynth().toDestination();
  const pluckSynth = new Tone.PluckSynth().toDestination();
  const metalSynth = new Tone.MetalSynth().toDestination();
  const duoSynth = new Tone.DuoSynth().toDestination();
  const membraneSynth = new Tone.MembraneSynth().toDestination();
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
  const casio = new Tone.Sampler({
    urls: {
      A1: "A1.mp3",
      A2: "A2.mp3",
    },
    baseUrl: "https://tonejs.github.io/audio/casio/",
    onload: () => {
      casio.triggerAttackRelease(`${note}`);
    },
  }).toDestination();

  function playNote(note) {
    if (document.getElementById("synthOption").value === "synth") {
      synth.triggerAttackRelease(`${note}`, "4n");
    }
    if (document.getElementById("synthOption").value === "AMSynth") {
      AMsynth.triggerAttackRelease(`${note}`, "4n");
    }
    if (document.getElementById("synthOption").value === "FMSynth") {
      FMsynth.triggerAttackRelease(`${note}`, "4n");
    }
    if (document.getElementById("synthOption").value === "PluckSynth") {
      pluckSynth.triggerAttackRelease(`${note}`, "4n");
    }
    if (document.getElementById("synthOption").value === "MetalSynth") {
      metalSynth.triggerAttackRelease(`${note}`, "4n");
    }
    if (document.getElementById("synthOption").value === "DuoSynth") {
      duoSynth.triggerAttackRelease(`${note}`, "4n");
    }
    if (document.getElementById("synthOption").value === "MembraneSynth") {
      membraneSynth.triggerAttackRelease(`${note}`, "4n");
    }
    if (document.getElementById("synthOption").value === "piano") {
      Tone.loaded().then(() => {
        piano.triggerAttackRelease(`${note}`, 4);
      });
    }
    if (document.getElementById("synthOption").value === "pianoSustain") {
      Tone.loaded().then(() => {
        piano.triggerAttackRelease(`${note}`, 16);
      });
    }
    if (document.getElementById("synthOption").value === "casio") {
      casio.triggerAttackRelease(`${note}`, 1);
    }
  }
  function playLowNote(note) {
    const vol = new Tone.Volume(-10).toDestination();
    const piano = new Tone.Sampler({
      urls: {
        C4: "C4.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        A4: "A4.mp3",
      },
      release: 1,
      baseUrl: "https://tonejs.github.io/audio/salamander/",
    })
      .connect(vol)
      .toDestination();
    Tone.loaded().then(() => {
      piano.triggerAttackRelease(`${note}`, 32); 
    });
  }
  return (
    <div className="mainPiano">
      <ParticlesBg type="circle" bg={true} />

      <div className="main">
        <div className="circle" onClick={() => playNote("D3")}></div>
        <div className="circle" onClick={() => playNote("B4")}></div>
        <div className="circle" onClick={() => playNote("B6")}></div>
        <div className="circle" onClick={() => playNote("E1")}></div>
        <div className="circle" onClick={() => playNote("F1")}></div>
        <div className="circle" onClick={() => playNote("G1")}></div>
        <div className="circle" onClick={() => playNote("A1")}></div>
        <div className="circle" onClick={() => playNote("B1")}></div>
        <div className="circle" onClick={() => playNote("C2")}></div>
        <div className="circle" onClick={() => playNote("D2")}></div>
        <div className="circle" onClick={() => playNote("F2")}></div>
        <div className="circle" onClick={() => playNote("F1")}></div>
        <div className="circle" onClick={() => playNote("F1")}></div>
        <div className="circle" onClick={() => playNote("E2")}></div>
        <div className="circle" onClick={() => playNote("G2")}></div>
        <div className="circle" onClick={() => playNote("A2")}></div>
        <div className="circle" onClick={() => playNote("B2")}></div>
        <div className="circle" onClick={() => playNote("C3")}></div>
        <div className="circle" onClick={() => playNote("E3")}></div>
        <div className="circle" onClick={() => playNote("F3")}></div>
        <div className="circle" onClick={() => playNote("G3")}></div>
        <div className="circle" onClick={() => playNote("A3")}></div>
        <div className="circle" onClick={() => playNote("B3")}></div>
        <div className="circle" onClick={() => playNote("C4")}></div>
        <div className="circle" onClick={() => playNote("D4")}></div>
        <div className="circle" onClick={() => playNote("E4")}></div>
        <div className="circle" onClick={() => playNote("F4")}></div>
        <div className="circle" onClick={() => playNote("G4")}></div>
        <div className="circle" onClick={() => playNote("A4")}></div>
        <div className="circle" onClick={() => playNote("E5")}></div>
        <div className="circle" onClick={() => playNote("C5")}></div>
        <div className="circle" onClick={() => playNote("D5")}></div>
        <div className="circle" onClick={() => playNote("F5")}></div>
        <div className="circle" onClick={() => playNote("G5")}></div>
        <div className="circle" onClick={() => playNote("A5")}></div>
        <div className="circle" onClick={() => playNote("B5")}></div>
        <div className="circle" onClick={() => playNote("C6")}></div>
        <div className="circle" onClick={() => playNote("D6")}></div>
        <div className="circle" onClick={() => playNote("E6")}></div>
        <div className="circle" onClick={() => playNote("F6")}></div>
        <div className="circle" onClick={() => playNote("G6")}></div>
        <div className="circle" onClick={() => playNote("A6")}></div>
        <div className="circle" onClick={() => playNote("C7")}></div>
        <div className="circle" onClick={() => playNote("D7")}></div>
        <div className="circle" onClick={() => playNote("E7")}></div>
        <div className="circle" onClick={() => playNote("F7")}></div>
        <div className="circle" onClick={() => playNote("G7")}></div>
        <div className="circle" onClick={() => playNote("A7")}></div>
        <div className="circle" onClick={() => playNote("B7")}></div>
        <div className="circle" onClick={() => playNote("C8")}></div>
        <div className="circle" onClick={() => playNote("D8")}></div>
        <div className="circle" onClick={() => playNote("E8")}></div>
        <div className="circle" onClick={() => playNote("F8")}></div>
        <div className="circle" onClick={() => playNote("G8")}></div>
        <div className="circle" onClick={() => playNote("A8")}></div>
        <div className="circle" onClick={() => playNote("B8")}></div>
        <div className="circle" onClick={() => playNote("F0")}></div>
        <div className="circle" onClick={() => playNote("G0")}></div>
        <div className="circle" onClick={() => playNote("A0")}></div>
        <div className="circle" onClick={() => playNote("B0")}></div>
        <div className="circle" onClick={() => playNote("C1")}></div>
        <div className="circle" onClick={() => playNote("D1")}></div>
        black keys
        <div className="circle" onClick={() => playNote("Ab0")}></div>
        <div className="circle" onClick={() => playNote("Bb8")}></div>
        <div className="circle" onClick={() => playNote("Gb0")}></div>
        <div className="circle" onClick={() => playNote("Db1")}></div>
        <div className="circle" onClick={() => playNote("Eb1")}></div>
        <div className="circle" onClick={() => playNote("Gb1")}></div>
        <div className="circle" onClick={() => playNote("Ab1")}></div>
        <div className="circle" onClick={() => playNote("Bb1")}></div>
        <div className="circle" onClick={() => playNote("Db2")}></div>
        <div className="circle" onClick={() => playNote("Eb2")}></div>
        <div className="circle" onClick={() => playNote("Gb2")}></div>
        <div className="circle" onClick={() => playNote("Ab2")}></div>
        <div className="circle" onClick={() => playNote("Bb2")}></div>
        <div className="circle" onClick={() => playNote("Db3")}></div>
        <div className="circle" onClick={() => playNote("Eb3")}></div>
        <div className="circle" onClick={() => playNote("Gb3")}></div>
        <div className="circle" onClick={() => playNote("Ab3")}></div>
        <div className="circle" onClick={() => playNote("Bb3")}></div>
        <div className="circle" onClick={() => playNote("Db4")}></div>
        <div className="circle" onClick={() => playNote("Eb4")}></div>
        <div className="circle" onClick={() => playNote("Gb4")}></div>
        <div className="circle" onClick={() => playNote("Ab4")}></div>
        <div className="circle" onClick={() => playNote("Bb4")}></div>
        <div className="circle" onClick={() => playNote("Db5")}></div>
        <div className="circle" onClick={() => playNote("Eb5")}></div>
        <div className="circle" onClick={() => playNote("Gb5")}></div>
        <div className="circle" onClick={() => playNote("Ab5")}></div>
        <div className="circle" onClick={() => playNote("Bb5")}></div>
        <div className="circle" onClick={() => playNote("Db6")}></div>
        <div className="circle" onClick={() => playNote("Eb6")}></div>
        <div className="circle" onClick={() => playNote("Gb6")}></div>
        <div className="circle" onClick={() => playNote("Ab6")}></div>
        <div className="circle" onClick={() => playNote("Bb6")}></div>
        <div className="circle" onClick={() => playNote("Db7")}></div>
        <div className="circle" onClick={() => playNote("Eb7")}></div>
        <div className="circle" onClick={() => playNote("Gb7")}></div>
        <div className="circle" onClick={() => playNote("Ab7")}></div>
        <div className="circle" onClick={() => playNote("Bb7")}></div>
        <div className="circle" onClick={() => playNote("Db8")}></div>
        <div className="circle" onClick={() => playNote("Eb8")}></div>
        <div className="circle" onClick={() => playNote("Gb8")}></div>
        <div className="circle" onClick={() => playNote("Ab8")}></div>
        <div className="circle" onClick={() => playNote("Bb0")}></div>
        inner drones
        <div className="chromaticDivsMain">
          <select id="synthOption">
            <option value="piano">Piano</option>
            <option value="pianoSustain">Piano(sustain)</option>
            <option value="casio">Casio</option>
            <option value="synth">Synth</option>
            <option value="AMSynth">AM Synth</option>
            <option value="FMSynth">FM Synth</option>
            <option value="PluckSynth">Pluck</option>
            <option value="MetalSynth">Metal</option>
            <option value="DuoSynth">Duo</option>
            <option value="MembraneSynth">Membrane</option>
          </select>
          <div
            className="chromaticDivs"
            onClick={() => playLowNote("Ab0")}
          ></div>
          <div
            className="chromaticDivs"
            onClick={() => playLowNote("A0")}
          ></div>
          <div
            className="chromaticDivs"
            onClick={() => playLowNote("Bb0")}
          ></div>
          <div
            className="chromaticDivs"
            onClick={() => playLowNote("B0")}
          ></div>
          <div
            className="chromaticDivs"
            onClick={() => playLowNote("C1")}
          ></div>
          <div
            className="chromaticDivs"
            onClick={() => playLowNote("Db1")}
          ></div>
          <div
            className="chromaticDivs"
            onClick={() => playLowNote("D1")}
          ></div>
          <div
            className="chromaticDivs"
            onClick={() => playLowNote("Eb1")}
          ></div>
          <div
            className="chromaticDivs"
            onClick={() => playLowNote("E1")}
          ></div>
          <div
            className="chromaticDivs"
            onClick={() => playLowNote("F1")}
          ></div>
          <div
            className="chromaticDivs"
            onClick={() => playLowNote("Gb1")}
          ></div>
          <div
            id="lowG"
            className="chromaticDivs"
            onClick={() => playLowNote("G1")}
          ></div>
        </div>
      </div>
    </div>
  );
}
export default DronePiano;
 */