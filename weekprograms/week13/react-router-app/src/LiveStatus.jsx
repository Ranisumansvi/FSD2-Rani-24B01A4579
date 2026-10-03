import { useState, useEffect } from "react";

function LiveStatus() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="page">
      <h2>Campus Live Status</h2>

      <h1>{time.toLocaleTimeString()}</h1>

      <p>Screen updates every second</p>
    </div>
  );
}

export default LiveStatus;