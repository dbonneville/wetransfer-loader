import React, { useState, useEffect, useRef } from "react";
import "../../App.css";
import LoadingInfo from "../loading-info/LoadingInfo";
import LoadingSpinner from "../loading-spinner/LoadingSpinner";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // remember the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // set up the interval
  useEffect(() => {
    let id = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
}

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [spinning, setSpinning] = useState(false);

  /* toggle loading animation */
  const handlePlayToggle = () => {
    setCounter(0);
    setIsPlaying((prevPlaying) => !prevPlaying);
    setSpinning((prevSpin) => !prevSpin);
  };

  useInterval(() => {
    if (counter < 100 && isPlaying) {
      setCounter(counter + 1);
      setSpinning(true);
    } else if (counter === 100) {
      setSpinning(false);
    }
  }, 40);

  return (
    <>
      <div className="container">
        <LoadingSpinner
          counter={counter}
          isPlaying={isPlaying}
          spinning={spinning}
        />
        <LoadingInfo />
        <div className="btnContainer">
          <button className="toggleBtn" onClick={handlePlayToggle}>
            {isPlaying ? `End / Reset` : `Start`}
          </button>
        </div>
      </div>
    </>
  );
}
