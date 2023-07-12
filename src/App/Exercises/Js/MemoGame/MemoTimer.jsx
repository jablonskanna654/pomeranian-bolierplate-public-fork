import React from 'react';

const CountdownTimer = ({ countdown }) => {
  return (
    <div>
      <h2>Countdown Timer</h2>
      <p>Time remaining: {countdown} seconds</p>
    </div>
  );
};
export default CountdownTimer;