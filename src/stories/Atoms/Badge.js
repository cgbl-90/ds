import React from "react";
import "./badge.css";

const Badge = ({ text, style }) => {
  return (
    <span className={`badge badge--${style}`}>
      <span className="badge-text">{text}</span>
    </span>
  );
};

export default Badge;
