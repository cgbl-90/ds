import React from "react";
import { Label } from "../Atoms/Label";
import { Input } from "../Atoms/Input";
import Tooltip from "../Atoms/Tooltip";

export interface SettingsRowProps {
  /** Display label for the configuration option */
  label: string;
  /** Hint text shown inside the input field */
  placeholder: string;
  /** Contextual help text shown on tooltip hover */
  tooltip: string;
}

export const SettingsRow: React.FC<SettingsRowProps> = ({ label, placeholder, tooltip }) => (
  <div>
    <Tooltip text={tooltip}>
      <Label text={label} />
    </Tooltip>
    <Input placeholder={placeholder} />
  </div>
);