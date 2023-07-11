import { useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const CountdownTimer2 = () => {
  const [duration, setDuration] = useState(60); 

  const handleDurationChange = (e) => {
    const value = parseInt(e.target.value);
    setDuration(value);
  };

  return (
    <div>
      <input
        type="number"
        value={duration}
        onChange={handleDurationChange}
        placeholder="Enter duration in seconds"
      />

      <CountdownCircleTimer
        key={duration} 
        isPlaying
        duration={duration}
        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[7, 5, 2, 0]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
};

export default CountdownTimer2;
