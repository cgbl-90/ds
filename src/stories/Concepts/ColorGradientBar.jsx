import PropTypes from "prop-types";

export const ColorGradientBar = ({ isSubtlyChanged, width, height }) => {
  // Define base gradient colors
  const color1 = "#011E58"; // Dark Blue
  const color2 = "#2563EB"; // Bright Blue
  const color3 = "#FF00FF"; // Fuchsia (replacing Yellow)

  const subtleChangeColor = "#F000F0";

  const finalColor3 = isSubtlyChanged ? subtleChangeColor : color3;

  const gradientStyle = {
    width: width,
    height: height,
    // Note: The 'background' can be overridden by 'style' prop in stories for MajorChange test
    background: `linear-gradient(90deg, ${color1} 0%, ${color2} 50%, ${finalColor3} 100%)`,
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
  isSubtlyChanged: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
};

ColorGradientBar.defaultProps = {
  isSubtlyChanged: false,
  width: "400px",
  height: "50px",
};
