import "./squares.css";

/**
 * Renders a colored square component.
 * @param {object} props - Component props.
 * @param {string} [props.sizeClass='square-50'] - The CSS class defining the size (e.g., 'square-50').
 * @param {string} [props.className=''] - Additional CSS classes.
 */
export const Square = ({ sizeClass = "square-50", className = "" }) => {
  const combinedClassName = `square ${sizeClass} ${className}`.trim();
  return <div className={combinedClassName} title="The 50x50 Square" />;
};
