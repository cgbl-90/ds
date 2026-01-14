import React from "react";
import "./input.css";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Forced visual state for documentation */
  state?: "hover" | "focused" | null;
  /** Standard HTML disabled attribute */
  disabled?: boolean;
}

/**
 * Enhanced text input component with focus states and brand styling.
 */
export const Input: React.FC<InputProps> = ({
  size = "medium",
  state,
  disabled,
  className,
  ...props
}) => {
  const sizeClass = `storybook-input--${size}`;
  const stateClass = state ? `storybook-input--${state}` : "";
  const disabledClass = disabled ? "storybook-input--disabled" : "";

  return (
    <input
      className={[
        "storybook-input",
        sizeClass,
        stateClass,
        disabledClass,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      disabled={disabled}
      {...props}
    />
  );
};
