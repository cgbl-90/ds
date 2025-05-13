import React from "react";
import "./notification-dot.css";

const NotificationDot = ({
  color = "red",
  size = 10,
  position = "top-right",
}) => {
  // Inline styles to apply color, size, and position dynamically
  const dotStyle = {
    backgroundColor: color,
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: "50%",
    position: "absolute",
    // Dynamic positioning based on the `position` prop
    ...(position === "top-right" && { top: "20px", right: "20px" }),
    ...(position === "top-left" && { top: "20px", left: "20px" }),
    ...(position === "bottom-right" && { bottom: "20px", right: "20px" }),
    ...(position === "bottom-left" && { bottom: "20px", left: "20px" }),
  };

  return <span className="notification-dot" style={dotStyle}></span>;
};

export default NotificationDot;
