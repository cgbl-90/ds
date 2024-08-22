import React from "react";
import PropTypes from "prop-types";
import "./button.css";

export const Button = ({
  primary,
  backgroundColor,
  size,
  label,
  state,
  ...props
}) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  const stateClass = state ? `storybook-button--${state}` : "";

  return (
    <button
      type="button"
      className={[
        "storybook-button",
        `storybook-button--${size}`,
        mode,
        stateClass,
      ].join(" ")}
      style={backgroundColor ? { backgroundColor } : {}}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  state: PropTypes.oneOf(["hover", "pressed", "noborder"]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  state: null,
  onClick: undefined,
};
