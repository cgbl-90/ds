import React from "react";
import "./loader.css";

/**
 * Standard CSS-based spinning loader for indicating background activity.
 */
const Loader: React.FC = () => {
  return <div className="loader" role="status" aria-label="loading" />;
};

export default Loader;
