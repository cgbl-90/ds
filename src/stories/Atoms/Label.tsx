import React from "react";
import "./label.css";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /** The ID of the form element this label describes */
  htmlFor?: string;
  /** Text content (fallback if children aren't provided) */
  text?: string;
  /** Content to be rendered inside the label */
  children?: React.ReactNode;
  /** Font size variants */
  size?: "small" | "medium" | "large";
  /** Color themes matching the brand */
  color?: "default" | "primary" | "secondary";
  /** Choose which HTML element to render as (e.g., span for groups) */
  as?: React.ElementType;
}

/**
 * Standard accessible label component for form elements.
 */
export const Label: React.FC<LabelProps> = ({
  htmlFor,
  text,
  children,
  size = "medium",
  color = "default",
  as: Component = "label",
  ...props
}) => {
  const sizeClass = `storybook-label--${size}`;
  const colorClass = color !== "default" ? `storybook-label--${color}` : "";

  return (
    <Component
      className={["storybook-label", sizeClass, colorClass].join(" ")}
      htmlFor={Component === "label" ? htmlFor : undefined}
      {...props}
    >
      {children || text}
    </Component>
  );
};
