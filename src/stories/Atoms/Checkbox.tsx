import React from "react";
import "./checkbox.css";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  checked?: boolean;
  /** Forced visual states for documentation */
  state?: "hover" | "pressed" | null;
  loading?: boolean;
}

/** * Modern Checkbox atom with custom styling and brand blue accents. */
export const Checkbox = ({
  label,
  checked = false,
  state = null,
  disabled = false,
  loading = false,
  ...props
}: CheckboxProps) => {
  const stateClass = state ? `storybook-checkbox--${state}` : "";
  const checkedClass = checked ? "storybook-checkbox--checked" : "";
  const loadingClass = loading ? "storybook-checkbox--loading" : "";

  return (
    <label
      className={["storybook-checkbox", stateClass, checkedClass, loadingClass]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled || loading}
          {...props}
        />
        <span className="checkbox-custom" />
      </div>
      <span className="checkbox-label">{label}</span>
    </label>
  );
};
