import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import "./LoadingInfo";
import LoadingInfo from "./LoadingInfo";

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

export default function LoadingSpinner() {
  const [counter, setCounter] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [spinning, setSpinning] = useState(false);

  /* toggle loading animation */
  const handlePlayToggle = () => {
    setCounter(0);
    setIsPlaying((prevPlaying) => !prevPlaying);
    console.log("isPlaying : " + isPlaying);
  };

  useInterval(() => {
    if (counter < 100 && isPlaying) {
      setCounter(counter + 1);
      setSpinning(true);
    } else if (counter == 100) {
      setSpinning(false);
    }
  }, 80);

  const leftRotation = () => {
    if (counter <= 50) {
      let leftDeg = counter * 3.6;
      return leftDeg;
    }
  };

  const rightRotation = () => {
    if (counter > 50) {
      let rightDeg = counter * 3.6 - 180;
      return rightDeg;
    }
  };

  const fullRotation = () => {
    let fullDeg = counter * 3.6 - 90;
    return fullDeg;
  };

  const counterPosition = () => {
    if (counter < 10) {
      return 173;
    } else if (counter >= 10 && counter < 100) {
      return 155;
    } else {
      return 140;
    }
  };

  const pctPosition = () => {
    if (counter < 10) {
      return 155;
    } else if (counter >= 10 && counter < 100) {
      return 173;
    } else {
      return 185;
    }
  };

  return (
    <>
      <div className="container">
        <div className="number" style={{ left: `${counterPosition()}px` }}>
          {counter}
        </div>
        <div className="number-pct" style={{ left: `${pctPosition()}px` }}>
          %
        </div>
        <div
          className="circular"
          style={{
            animation: spinning ? `spinAll 2s linear both infinite` : ``,
          }}
        >
          <div className="spin-container">
            <div className="inner"></div>
            <div className="circle">
              <div
                className="dot"
                style={{
                  transform: `rotate(${fullRotation()}deg)`,
                  display: isPlaying ? `block` : `none`,
                }}
              >
                <span></span>
              </div>
              {isPlaying && (
                <div className="staticDot">
                  <span></span>
                </div>
              )}
              <div className="bar left">
                <div
                  className="progress"
                  style={{
                    transform: `rotate(${leftRotation()}deg)`,
                    display: isPlaying ? `block` : `none`,
                  }}
                ></div>
              </div>
              <div id="barRight" className="bar right">
                <div
                  className="progress"
                  style={{
                    transform: isPlaying
                      ? `rotate(${rightRotation()}deg)`
                      : `rotate(0deg)`,
                    display: isPlaying ? `block` : `none`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <LoadingInfo />
        <div className="btnContainer">
          <button className="toggleBtn" onClick={handlePlayToggle}>
            {isPlaying ? `End` : `Start`}
          </button>
        </div>
      </div>
    </>
  );
}
