import { useEffect, useState } from "react";

let ClockTime = () => {
  // let time = new Date();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
    
  }, []);

  return (
    <p className="lead fs-4 fw-medium">
      {" "}
      The current time is : {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default ClockTime;
