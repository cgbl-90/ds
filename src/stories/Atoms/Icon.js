import React from "react";
import PropTypes from "prop-types";
import "./icon.css";
import logo from "../logo.png";

export const Icon = ({ size }) => {
  return (
    <img
      src={logo}
      alt="Logo"
      className={`storybook-icon storybook-icon--${size}`}
    />
  );
};

Icon.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

Icon.defaultProps = {
  size: "medium",
};
