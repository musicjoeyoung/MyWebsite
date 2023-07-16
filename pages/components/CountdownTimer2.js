import { useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import styles from 'styles/countdowntimer2.module.scss';


const CountdownTimer2 = () => {
  const [duration, setDuration] = useState(300);
  const [windowSize, setWindowSize] = useState({ width: undefined, height: undefined });
  

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize(); // Initial window size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDurationChange = (e) => {
    const value = e.target.value;

    if (value === '') {
      // Handle empty input
      setDuration(0);
    } else {
      const inputDuration = /* parseInt(value); */value;
      //if ":" is included, how to recognize and parse into hr/min/sec?
      if (isNaN(inputDuration)) {
        // Handle input with colon
        const [minutes, seconds] = value.split(':');
        const totalSeconds = parseInt(minutes) * 60 + parseInt(seconds);
        setDuration(totalSeconds);
      } else {
        // Handle input without colon
        setDuration(inputDuration);
      }
    }
  };

  const formatTime = (time) => {
    if (time >= 60) {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
    return time;
  };

  const colorsArray = [
    '#004777',
    '#F7B801',
    '#A30000',
    '#A30000',
    '#FF0000',
    '#00FF00',
    '#0000FF',
    '#FFFF00',
    '#00FFFF',
    '#FF00FF',
    '#C0C0C0',
    '#808080',
    '#800000',
    '#808000',
    '#008000',
    '#800080',
    '#008080',
    '#000080',
    '#FFA500',
    '#FFC0CB',
    '#FF4500',
  ];

  const colorsTimeArray = colorsArray.map((_, index) => (colorsArray.length - index - 1) * (duration / colorsArray.length));

  return (
    <div className={styles.container}>
      <input
        type="text"
        onChange={handleDurationChange}
        value={formatTime(duration)}
        placeholder="Enter duration (e.g., 5:00 or 59 seconds)"
        className={styles.container__input}
        
      />

      <CountdownCircleTimer
        key={duration}
        isPlaying
        duration={duration}
        colors={colorsArray}
        colorsTime={colorsTimeArray}
        size={windowSize.width < 525 ? 300 : 500}
        strokeWidth={15}
      /*   onComplete={() => {
          //console.log('complete');
          //setDuration(10)
        }} */
      >
        {({ remainingTime }) => formatTime(remainingTime)}
      </CountdownCircleTimer>
    </div>
  );
};

export default CountdownTimer2;
