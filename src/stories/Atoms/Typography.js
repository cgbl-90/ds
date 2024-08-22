import React from "react";
import PropTypes from "prop-types";
import "./typography.css";

export const Typography = ({ type, styleType, label, ...props }) => {
  const typeClass = `typography--${type}`;
  const styleClass = styleType ? `typography--${styleType}` : "";

  return (
    <div className={`typography ${typeClass} ${styleClass}`} {...props}>
      {label}
    </div>
  );
};

Typography.propTypes = {
  type: PropTypes.oneOf(["title", "subtitle", "text", "code"]).isRequired,
  styleType: PropTypes.oneOf(["italic", "bold", "underline"]),
  label: PropTypes.node.isRequired,
};

Typography.defaultProps = {
  styleType: null,
};
