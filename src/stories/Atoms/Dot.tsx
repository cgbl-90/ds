import React from "react";
import "./dot.css";

export interface DotProps {
  /** Hex or CSS color for the dot */
  color?: string;
  /** Diameter of the dot in pixels */
  size?: number;
}

/**
 * A simple, animated SVG dot component used for status indicators.
 * It features a bouncy 'appear' animation on mount.
 */
export const Dot: React.FC<DotProps> = ({ color = "green", size = 6 }) => {
  // Forces a re-mount when props change to restart the CSS animation
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
