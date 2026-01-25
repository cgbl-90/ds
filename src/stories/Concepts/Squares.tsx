import React from "react";
import "./squares.css";

export interface SquareProps {
  /** The CSS class defining height/width (e.g., 'square-50') */
  sizeClass?: "square-50" | "square-100" | "square-200";
  /** Optional extra class names */
  className?: string;
}

export const Square: React.FC<SquareProps> = ({ sizeClass = "square-50", className = "" }) => {
  const combinedClassName = `square ${sizeClass} ${className}`.trim();
  return (
    <span>
      <span>
        <div className={combinedClassName} title="The Square" />
      </span>
    </span>
  );
};