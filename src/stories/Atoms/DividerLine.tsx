import React from "react";
import "./divider-line.css";

export interface DividerProps {
  /** The color theme of the line */
  style?: "primary" | "secondary" | "success" | "warning" | "danger";
  /** Renders a dashed border style */
  dashed?: boolean;
  /** Renders a dotted border style */
  dotted?: boolean;
  /** Increases the line thickness to 3px */
  bold?: boolean;
}

/**
 * A horizontal rule used to separate content sections visually.
 */
const Divider: React.FC<DividerProps> = ({
  style = "primary",
  dashed,
  dotted,
  bold,
}) => {
  let className = `divider divider--${style}`;
  if (dashed) className += " divider--dashed";
  if (dotted) className += " divider--dotted";
  if (bold) className += " divider--bold";

  return <hr className={className} />;
};

export default Divider;
