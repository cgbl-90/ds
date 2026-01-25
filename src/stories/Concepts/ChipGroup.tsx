import React from "react";
import { Chip } from "./Chip";
import "./chip.css";

export interface ChipGroupProps {
  /** The heading title for the group */
  label: string;
  /** An array of string labels to render as chips */
  items: string[];
}

export const ChipGroup: React.FC<ChipGroupProps> = ({ label, items }) => {
  return (
    <div className="chip-group-container">
      <h3 className="chip-group-label">{label}</h3>
      <div className="chip-group">
        {items.map((item) => (
          <Chip key={item} label={item} />
        ))}
      </div>
    </div>
  );
};