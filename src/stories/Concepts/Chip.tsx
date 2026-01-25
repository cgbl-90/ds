import React from "react";
import "./chip.css";

export interface ChipProps {
  /** The text content of the chip */
  label: string;
  /** Optional callback triggered when clicking the remove button */
  onRemove?: () => void;
}

export const Chip: React.FC<ChipProps> = ({ label, onRemove }) => {
  return (
    <div className="chip" tabIndex={0}>
      <span className="chip-label">{label}</span>
      <button
        type="button"
        className="chip-remove-button"
        onClick={onRemove}
        aria-label={`Remove ${label}`}
      >
        ×
      </button>
    </div>
  );
};