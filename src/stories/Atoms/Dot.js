import React from "react";
import PropTypes from "prop-types";
import "./dot.css";

/**
 * A simple, animated SVG dot component.
 */
export const Dot = ({ color, size }) => {
  // By creating a unique key based on the props that change between stories,
  // we tell React to treat each instance of the circle as a distinct element.
  // This forces a re-mount when the story changes, preventing the animation
  // from the previous story from being aborted incorrectly.
  const uniqueKey = `${color}-${size}`;

  return (
    <svg
      className="storybook-dot"
      width={size}
      height={size}
      viewBox="0 0 6 6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        key={uniqueKey}
        className="storybook-dot-circle"
        fill={color}
        cx="3"
        cy="3"
        r="0"
      />
    </svg>
  );
};

Dot.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

Dot.defaultProps = {
  color: "green",
  size: 6,
};
