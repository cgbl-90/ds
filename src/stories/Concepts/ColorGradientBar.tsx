import React from "react";

export interface ColorGradientBarProps {
  /** Specific width of the bar (e.g., "400px") */
  width?: string;
  /** Specific height of the bar (e.g., "50px") */
  height?: string;
  /** Additional CSS styles to merge */
  style?: React.CSSProperties;
}

export const ColorGradientBar: React.FC<ColorGradientBarProps> = ({ 
  width = "400px", 
  height = "50px", 
  style, 
  ...props 
}) => {
  const color1 = "#011949ff";
  const color2 = "#2563EB";
  const color3 = "#05e7e7ff";

  const internalGradientStyle: React.CSSProperties = {
    width: width,
    height: height,
    background: `linear-gradient(90deg, ${color1} 0%, ${color2} 50%, ${color3} 100%)`,
    borderRadius: "4px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const finalStyle = { ...internalGradientStyle, ...style };

  return (
    <div
      style={finalStyle}
      role="img"
      aria-label="Color gradient bar"
      {...props}
    />
  );
};