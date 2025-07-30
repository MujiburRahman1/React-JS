import { useState, useEffect } from "react";

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup to prevent memory leaks
  }, []);

  const hours = time.getHours();
  const inNights = hours >= 18 || hours < 6;

  return (
    <div className="clock-container">
      <h1 className="time">{time.toLocaleTimeString()}</h1>
      <p className={`status ${inNights ? "night" : "day"}`}>
        {inNights ? "Good Night" : "Good Day"}
      </p>
      <p className="date">{time.toLocaleDateString()}</p>
    </div>
  );
}
