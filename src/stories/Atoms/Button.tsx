import React from "react";
import "./button.css";
import isChromatic from "chromatic/isChromatic";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Is this the principal call to action? */
  primary?: boolean;
  /** Custom hex or CSS color for background */
  backgroundColor?: string;
  /** Custom background gradient or shorthand */
  background?: string;
  /** Size variants */
  size?: "small" | "medium" | "large";
  /** Button text content */
  label: string;
  /** Forced visual states for documentation/testing */
  state?: "hover" | "pressed" | "noborder" | null;
}

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  backgroundColor,
  background,
  size = "medium",
  label,
  state = null,
  ...props
}) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  const stateClass = state ? `storybook-button--${state}` : "";

  // Conditional style for Chromatic
  const chromaticStyle = isChromatic()
    ? { border: "2px solid red" } // Only applies in Chromatic
    : {};

  return (
    <button
      type="button"
      className={[
        "storybook-button",
        `storybook-button--${size}`,
        mode,
        stateClass,
      ]
        .filter(Boolean)
        .join(" ")}
      // Merge chromaticStyle with other styles
      style={{
        ...chromaticStyle,
        ...(backgroundColor ? { backgroundColor } : {}),
        ...(background ? { background } : {}),
      }}
      {...props}
    >
      {label}
    </button>
  );
};
