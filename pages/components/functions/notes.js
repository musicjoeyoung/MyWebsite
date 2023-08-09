/* export function generatePianoKeys() {
  const notes = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
  const keyboard = [];

  let currentOctave = 0;
  let currentNoteIndex = 0;

  for (let i = 0; i < 88; i++) {
    const note = notes[currentNoteIndex];
    const key = note + currentOctave;
    const isBlackKey = note.length > 1;
    const keyObject = { [key]: isBlackKey ? "black" : "white" };

    keyboard.push(keyObject);

    currentNoteIndex++;
    if (currentNoteIndex === notes.length) {
      currentNoteIndex = 0;
      currentOctave++;
    }
  }

  return keyboard;
}


const pianoKeys = generatePianoKeys();
console.log(pianoKeys);
 */