import React from "react";
import PropTypes from "prop-types";
import "./button.css";
import isChromatic from "chromatic/isChromatic";

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

  // Conditional style for Chromatic
  const chromaticStyle = isChromatic()
    ? { border: "2px solid red" } // Only applies in Chromatic
    : {};

  return (
    <button
      type="button"
      className={[
        "storybook-button",
        `storybook-button--${size}`,
        mode,
        stateClass,
      ].join(" ")}
      // Merge chromaticStyle with other styles
      style={{
        ...chromaticStyle,
        ...(backgroundColor ? { backgroundColor } : {}),
      }}
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
