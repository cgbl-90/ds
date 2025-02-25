import React from "react";
import PropTypes from "prop-types";

/**
 * React fragments test
 */
export const LabelFragments = ({ text }) => {
  return <>{text}</>;
};

LabelFragments.propTypes = {
  text: PropTypes.string.isRequired,
};

LabelFragments.defaultProps = {
  text: "Fragment Label",
};
