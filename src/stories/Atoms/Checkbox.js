import React from "react";
import PropTypes from "prop-types";
import "./checkbox.css";

export const Checkbox = ({ label, checked, state, ...props }) => {
  const stateClass = state ? `storybook-checkbox--${state}` : "";
  const checkedClass = checked ? "storybook-checkbox--checked" : "";

  return (
    <label className={["storybook-checkbox", stateClass, checkedClass].join(" ")}
      {...props}
    >
      <input type="checkbox" checked={checked} readOnly />
      {label}
    </label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  state: PropTypes.oneOf(["hover", "pressed"]),
};

Checkbox.defaultProps = {
  checked: false,
  state: null,
};
