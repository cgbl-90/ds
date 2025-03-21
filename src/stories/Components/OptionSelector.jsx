import React from "react";
import { Label } from "../Atoms/Label";
import { Radio } from "../Atoms/Radio";

export const OptionSelector = ({ label, options, selected, onChange }) => (
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
