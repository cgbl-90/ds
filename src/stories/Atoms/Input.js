import React from "react";
import PropTypes from "prop-types";
import "./input.css";

export const Input = ({
  size,
  placeholder,
  value,
  state,
  disabled,
  ...props
}) => {
  const sizeClass = size ? `storybook-input--${size}` : "";
  const stateClass = state ? `storybook-input--${state}` : "";
  const disabledClass = disabled ? "storybook-input--disabled" : "";

  return (
    <input
      type="text"
      className={["storybook-input", sizeClass, stateClass, disabledClass].join(
        " "
      )}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      {...props}
    />
  );
};

Input.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  placeholder: PropTypes.string,
  value: PropTypes.string,
  state: PropTypes.oneOf(["hover", "focused"]),
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  size: "medium",
  placeholder: "",
  value: "",
  state: null,
  disabled: false,
};
