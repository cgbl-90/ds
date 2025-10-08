import PropTypes from "prop-types";

export const ColorGradientBar = ({ width, height, style, ...props }) => {
  const color1 = "#011949ff";
  const color2 = "#2563EB";
  const color3 = "#039696ff";

  const internalGradientStyle = {
    width: width,
    height: height,
    background: `linear-gradient(90deg, ${color1} 0%, ${color2} 50%, ${color3} 100%)`,
    borderRadius: "4px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const finalStyle = {
    ...internalGradientStyle,
    ...style,
  };

  return (
    <div
      style={finalStyle}
      role="img"
      aria-label="Color gradient bar"
      {...props}
    >
      {/* Intentionally empty for visual demonstration */}
    </div>
  );
};

ColorGradientBar.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object,
};

ColorGradientBar.defaultProps = {
  width: "400px",
  height: "50px",
  style: null,
};
