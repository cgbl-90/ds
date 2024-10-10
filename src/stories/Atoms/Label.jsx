// Label.jsx
import React from "react";
import PropTypes from "prop-types";
import "./label.css";

export const Label = ({ text, size, color }) => {
  const sizeClass = `storybook-label--${size}`;
  const colorClass =
    color === "primary"
      ? "storybook-label--primary"
      : color === "secondary"
      ? "storybook-label--secondary"
      : "";

  return (
    <label className={["storybook-label", sizeClass, colorClass].join(" ")}>
      {text}
    </label>
  );
};

Label.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf(["default", "primary", "secondary"]),
};

Label.defaultProps = {
  size: "medium",
  color: "default",
};
