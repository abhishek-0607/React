import React, { useEffect, useState, useRef } from "react";

export default function Useref1() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef();
  useEffect(() => {
    startTimer();

    return stopTimer;
  }, []);

  const startTimer = () => {
    if (isRunning) {
      return;
    }
    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    setIsRunning(true);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  };
  return (
    <div>
      <h1>Counter</h1>
      <h3>{time}</h3>
      <button onClick={startTimer}>START</button>
      <button onClick={stopTimer}>STOP</button>
    </div>
  );
}
