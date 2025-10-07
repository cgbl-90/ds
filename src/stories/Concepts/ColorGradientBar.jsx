import PropTypes from "prop-types";

export const ColorGradientBar = ({ width, height }) => {
  const color1 = "#011949ff"; //Darker color
  const color2 = "#2563EB";
  const color3 = "#039696ff";

  const gradientStyle = {
    width: width,
    height: height,
    background: `linear-gradient(90deg, ${color1} 0%, ${color2} 50%, ${color3} 100%)`,
    borderRadius: "4px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div style={gradientStyle} role="img" aria-label="Color gradient bar">
      {/* Intentionally empty for visual demonstration */}
    </div>
  );
};

ColorGradientBar.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

ColorGradientBar.defaultProps = {
  width: "400px",
  height: "50px",
};
