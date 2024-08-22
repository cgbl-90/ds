import React from "react";
import PropTypes from "prop-types";
import "./radio.css";

export const Radio = ({ label, checked, state, ...props }) => {
  const stateClass = state ? `storybook-radio--${state}` : "";
  const checkedClass = checked ? "storybook-radio--checked" : "";

  return (
    <label
      className={["storybook-radio", stateClass, checkedClass].join(" ")}
      {...props}
    >
      <input type="radio" checked={checked} readOnly />
      {label}
    </label>
  );
};

Radio.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  state: PropTypes.oneOf(["hover", "pressed"]),
};

Radio.defaultProps = {
  checked: false,
  state: null,
};
