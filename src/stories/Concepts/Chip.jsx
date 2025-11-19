import PropTypes from "prop-types";
import "./chip.css";

export const Chip = ({ label, onRemove }) => {
  return (
    <div className="chip" tabIndex="0">
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

Chip.propTypes = {
  label: PropTypes.string.isRequired,
  onRemove: PropTypes.func,
};
