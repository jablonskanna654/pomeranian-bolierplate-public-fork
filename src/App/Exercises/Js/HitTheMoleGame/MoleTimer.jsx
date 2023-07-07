import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialCountdownState }) => {
  const [countdown, setCountdown] = useState(initialCountdownState);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [countdown]);

  return (
    <div>
      <h2>Countdown Timer</h2>
      <p>Time remaining: {countdown} seconds</p>
    </div>
  );
};
export default CountdownTimer;
