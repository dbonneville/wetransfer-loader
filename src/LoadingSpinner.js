import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // set up the interval.
  useEffect(() => {
    let id = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
}

export default function LoadingSpinner() {
  const [counter, setCounter] = useState(0);

  useInterval(() => {
    if (counter < 100) {
      setCounter(counter + 1);
    }
  }, 80);

  const leftRotation = () => {
    if (counter <= 50) {
      let leftDeg = counter * 3.6;
      return leftDeg;
    }
  };

  const rightRotation = () => {
    if (counter > 51) {
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
        <div className="circular">
          <div className="spin-container">
            <div className="inner"></div>
            <div className="circle">
              <div
                className="dot"
                style={{
                  transform: `rotate(${fullRotation()}deg)`,
                }}
              >
                <span></span>
              </div>
              <div className="staticDot">
                <span></span>
              </div>
              <div className="bar left">
                <div
                  className="progress"
                  style={{
                    transform: `rotate(${leftRotation()}deg)`,
                  }}
                ></div>
              </div>
              <div className="bar right">
                <div
                  className="progress"
                  style={{ transform: `rotate(${rightRotation()}deg)` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
