import React from "react";
import { Label } from "../Atoms/Label";
import { Radio } from "../Atoms/Radio";

export interface Option {
  label: string;
  value: string;
}

export interface OptionSelectorProps {
  /** Title for the group of options */
  label: string;
  /** The list of selectable options */
  options: Option[];
  /** The value of the currently selected option */
  selected: string;
  /** Callback function when a new option is chosen */
  onChange: (value: string) => void;
}

export const OptionSelector: React.FC<OptionSelectorProps> = ({ 
  label, 
  options, 
  selected, 
  onChange 
}) => (
  <div>
    <Label text={label} />
    {options.map((opt) => (
      <Radio
        key={opt.value}
        label={opt.label}
        checked={selected === opt.value}
        onChange={() => onChange(opt.value)}
      />
    ))}
  </div>
);