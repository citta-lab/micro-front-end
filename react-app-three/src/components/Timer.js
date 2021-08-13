import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const ticker = () => setTime(new Date().toLocaleTimeString());

  useEffect(() => setInterval(ticker, 1000));

  return (
    <div>
      <h1>Hello, humans!</h1>
      <h2>
        Current time is :
        {time}
        .
      </h2>
    </div>
  );
};

export default Timer;
