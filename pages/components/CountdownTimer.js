import { useState, useEffect } from "react";
import styles from "styles/countdowntimer.module.scss";

function CountdownTimer() {
  const [timer, setTimer] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let countdownInterval;
    if (timer > 0 && !isPaused) {
      countdownInterval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      clearInterval(countdownInterval);
    }
    return () => clearInterval(countdownInterval);
  }, [timer, isPaused]);

  const handleStart = () => {
    if (!timer || isPaused) {
      const totalSeconds = hours * 3600 + minutes * 60 + seconds;
      setTimer(totalSeconds);
      setIsPaused(false);
    }
  };

  const handleStop = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setTimer(0);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused((prevIsPaused) => !prevIsPaused);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  const handleReset = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setTimer(0);
    setIsPaused(false);
  };

  return (
    <div className={styles.timerContainer}>
      <div className={styles.timerContainer__inputContainer}>
        <div>
          <label className={styles.timerContainer__label}>Hours: </label>
          <input
            className={styles.timerContainer__input}
            type="number"
            min="0"
            value={hours}
            onChange={(e) => setHours(parseInt(e.target.value))}
          />
        </div>
        <div>
          <label className={styles.timerContainer__label}>Minutes: </label>
          <input
            type="number"
            min="0"
            max="59"
            value={minutes}
            onChange={(e) => setMinutes(parseInt(e.target.value))}
          />
        </div>
        <div>
          <label className={styles.timerContainer__label}>Seconds: </label>
          <input
            type="number"
            min="0"
            max="59"
            value={seconds}
            onChange={(e) => setSeconds(parseInt(e.target.value))}
          />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={handleStart}
          className={`${styles.buttonContainer__button} ${styles.buttonContainer__start}`}
        >
          {!timer || isPaused ? "Start" : "Resume"}
        </button>
        <button
          onClick={handleStop}
          className={`${styles.buttonContainer__button} ${styles.buttonContainer__stop}`}
        >
          Stop
        </button>
        <button
          onClick={handlePause}
          className={styles.buttonContainer__button}
          disabled={!timer || isPaused}
        >
          Pause
        </button>
        {/*         <button
          onClick={handleResume}
          className={styles.buttonContainer__button}
          disabled={!isPaused}
        >
          Resume
        </button> */}
        <button
          onClick={handleReset}
          className={styles.buttonContainer__button}
          disabled={!timer}
        >
          Reset
        </button>
      </div>
      {timer > 0 ? (
        <div className={styles.floatZoom}>
          <h2 className={styles.floatZoom__h2}>
            {Math.floor(timer / 3600)} : {/* // prettier-ignore */}
            {Math.floor((timer % 3600) / 60)} : {/* // prettier-ignore */}
            {timer % 60}
          </h2>
        </div>
      ) : (
        <h2 className={styles.floatZoom__h2}>Timer Complete</h2>
      )}
    </div>
  );
}

export default CountdownTimer;
