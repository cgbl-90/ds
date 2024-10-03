// Divider.js
import React from "react";
import "./divider.css";

const Divider = ({ style, dashed, dotted, bold }) => {
  let className = `divider divider--${style}`;
  if (dashed) className += " divider--dashed";
  if (dotted) className += " divider--dotted";
  if (bold) className += " divider--bold";

  return <hr className={className} />;
};

export default Divider;
