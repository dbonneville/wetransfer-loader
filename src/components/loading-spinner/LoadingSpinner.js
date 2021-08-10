import React from "react";
import "../../App.css";

export default function LoadingSpinner({
  counter: percentage,
  isPlaying,
  spinning,
}) {
  //
  const leftRotation = () => {
    // let leftDeg = 0;
    if (percentage <= 50) {
      let leftDeg = percentage * 3.6;
      return leftDeg;
    }
  };

  const rightRotation = () => {
    if (percentage > 50) {
      let rightDeg = percentage * 3.6 - 180;
      return rightDeg;
    }
  };

  const fullRotation = () => {
    let fullDeg = percentage * 3.6 - 90;
    return fullDeg;
  };

  const counterPosition = () => {
    if (percentage < 10) {
      return 173;
    } else if (percentage >= 10 && percentage < 100) {
      return 155;
    } else {
      return 140;
    }
  };

  const pctPosition = () => {
    if (percentage < 10) {
      return 155;
    } else if (percentage >= 10 && percentage < 100) {
      return 173;
    } else {
      return 185;
    }
  };

  return (
    <>
      <div
        className="number"
        data-testid="number"
        style={{ left: `${counterPosition()}px` }}
      >
        {percentage}
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
    </>
  );
}
