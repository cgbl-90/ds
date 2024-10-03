import React from "react";
import "./progressBar.css";

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar">
      <div
        className="progress-bar__fill"
        style={{ width: `${progress}%` }} // Dynamically set the width
      />
      <div className="progress-markers">
        <div className="progress-marker">0%</div>
        <div className="progress-marker">25%</div>
        <div className="progress-marker">50%</div>
        <div className="progress-marker">75%</div>
        <div className="progress-marker">100%</div>
      </div>
    </div>
  );
};

export default ProgressBar;
