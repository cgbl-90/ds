import React from "react";
import PropTypes from "prop-types";
import "./list.css";

export const List = ({ items, styleType, icon }) => {
  return (
    <ul className={`storybook-list storybook-list--${styleType}`}>
      {items.map((item, index) => (
        <li key={index}>
          {styleType === "custom-icon" && icon ? `${icon} ` : ""}
          {item}
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  styleType: PropTypes.oneOf([
    "none",
    "decimal",
    "circle",
    "devanagari",
    "custom-icon",
  ]),
  icon: PropTypes.string,
};

List.defaultProps = {
  styleType: "none",
  icon: "",
};
