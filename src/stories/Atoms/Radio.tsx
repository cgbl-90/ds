import React from "react";
import "./radio.css";

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  state?: "hover" | "pressed";
}

export const Radio: React.FC<RadioProps> = ({
  label,
  checked,
  state,
  ...props
}) => {
  const stateClass = state ? `radio--${state}` : "";

  return (
    <label className={`radio-container ${stateClass}`}>
      <input
        type="radio"
        checked={checked}
        {...props}
        className="radio-input"
      />
      <span className="radio-label">{label}</span>
    </label>
  );
};
