import React from "react";
import { Label } from "../Atoms/Label";
import { Input } from "../Atoms/Input";
import Badge from "../Atoms/Badge";

export interface InputFieldGroupProps {
  /** The descriptive text for the input */
  label: string;
  /** The current value of the input field */
  value: string;
  /** Status or hint text displayed in the badge */
  badgeText: string;
  /** Matches the Badge atom's style: "new", "success", or "warning" */
  badgeVariant: "new" | "success" | "warning";
  /** Callback triggered on every keystroke */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * A composite field group that includes a label, input, and status badge.
 */
export const InputFieldGroup: React.FC<InputFieldGroupProps> = ({
  label,
  value,
  badgeText,
  badgeVariant, // Renamed from badgeText logic to match Badge props
  onChange,
}) => (
  <div>
    <Label text={label} />
    <Input value={value} onChange={onChange} />
    {/* Corrected the prop name from 'variant' to 'style' to match BadgeProps */}
    <Badge text={badgeText} style={badgeVariant} />
  </div>
);
