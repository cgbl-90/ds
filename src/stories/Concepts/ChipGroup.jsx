import PropTypes from "prop-types";
import { Chip } from "./Chip";
import "./chip.css";

export const ChipGroup = ({ label, items }) => {
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

ChipGroup.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
