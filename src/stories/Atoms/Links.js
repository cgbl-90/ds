import React from "react";
import "./links.css";

const Links = ({ text, href, style, bold, italic }) => {
  let className = `link link--${style}`;
  if (bold) className += " link--bold";
  if (italic) className += " link--italic";

  return (
    <a href={href} className={className}>
      {text}
    </a>
  );
};

export default Links;
