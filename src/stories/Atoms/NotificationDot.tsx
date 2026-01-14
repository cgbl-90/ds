import React from "react";
import "./notification-dot.css";

export interface NotificationDotProps {
  /** The background color of the dot */
  color?: "red" | "green" | "blue" | "yellow" | "brand";
  /** Diameter of the dot in pixels */
  size?: number;
  /** Where the dot should be anchored relative to its container */
  position?:
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left"
    | "center";
  /** Should the dot have a subtle breathing animation? */
  animated?: boolean;
}

/**
 * A versatile notification indicator used to draw attention to updates.
 * Best used as a child of a relative-positioned container (like an Icon or Avatar).
 */
const NotificationDot: React.FC<NotificationDotProps> = ({
  color = "red",
  size = 10,
  position = "top-right",
  animated = false,
}) => {
  // Logic to determine CSS classes based on props
  const classes = [
    "notification-dot",
    `notification-dot--${color}`,
    `notification-dot--${position}`,
    animated ? "notification-dot--animated" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const dotStyle = {
    width: `${size}px`,
    height: `${size}px`,
  };

  return (
    <span
      className={classes}
      style={dotStyle}
      role="status"
      aria-label="Notification Indicator"
    ></span>
  );
};

export default NotificationDot;
