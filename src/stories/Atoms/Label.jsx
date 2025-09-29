import PropTypes from "prop-types";
import "./label.css";

export const Label = ({
  htmlFor,
  text,
  children,
  size,
  color,
  as: Component = "label",
  ...props
}) => {
  const sizeClass = `storybook-label--${size}`;
  const colorClass = color !== "default" ? `storybook-label--${color}` : "";

  return (
    <Component
      className={["storybook-label", sizeClass, colorClass].join(" ")}
      htmlFor={Component === "label" ? htmlFor : undefined}
      {...props}
    >
      {/* Prioritize children, but fall back to the text prop if children are not provided. */}
      {children || text}
    </Component>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
  htmlFor: PropTypes.string,
  as: PropTypes.elementType,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf(["default", "primary", "secondary"]),
};

Label.defaultProps = {
  htmlFor: undefined,
  as: "label",
  size: "medium",
  color: "default",
  text: "",
  children: null,
};
