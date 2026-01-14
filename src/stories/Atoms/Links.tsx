import React from "react";
import "./links.css";

export interface LinksProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** The text content of the link */
  text: string;
  /** The URL the link points to */
  href: string;
  /** Apply bold font weight */
  bold?: boolean;
  /** Apply italic font style */
  italic?: boolean;
  /** Disable the link visually and functionally */
  disabled?: boolean;
}

/**
 * Modern anchor component with various semantic color states and typography options.
 */
const Links: React.FC<LinksProps> = ({
  text,
  href,
  style = "primary",
  bold,
  italic,
  disabled,
  className,
  ...props
}) => {
  let combinedClassName = `link link--${style}`;
  if (bold) combinedClassName += " link--bold";
  if (italic) combinedClassName += " link--italic";
  if (disabled) combinedClassName += " link--disabled";
  if (className) combinedClassName += ` ${className}`;

  return (
    <a
      href={disabled ? undefined : href}
      className={combinedClassName}
      {...props}
    >
      {text}
    </a>
  );
};

export default Links;
