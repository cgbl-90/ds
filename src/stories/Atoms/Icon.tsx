import React from "react";
import "./icon.css";
// @ts-ignore - assuming logo path is valid in your environment
import logo from "../logo.png";

export interface IconProps {
  /** Controls the predefined scale of the icon */
  size?: "small" | "medium" | "large" | "xlarge";
  /** Optional click handler */
  onClick?: () => void;
}

/**
 * Brand Icon component. Primarily used for the company logo
 * in different navigation contexts.
 */
export const Icon: React.FC<IconProps> = ({ size = "medium", onClick }) => {
  return (
    <img
      src={logo}
      alt="Brand Logo"
      onClick={onClick}
      className={`storybook-icon storybook-icon--${size}`}
      style={{ cursor: onClick ? "pointer" : "default" }}
    />
  );
};
