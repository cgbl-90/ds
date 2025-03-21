import React from "react";
import { Label } from "../Atoms/Label";
import { Input } from "../Atoms/Input";
import Badge from "../Atoms/Badge";

export const InputFieldGroup = ({ label, value, badgeText, onChange }) => (
  <div>
    <Label text={label} />
    <Input value={value} onChange={onChange} />
    <Badge text={badgeText} style="success" />
  </div>
);
