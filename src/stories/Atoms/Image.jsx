import PropTypes from "prop-types";
import "./image.css";

/**
 * A simple and versatile Image component.
 */
export const Image = ({
  alt,
  src,
  variant,
  width,
  height,
  objectFit,
  ...props
}) => {
  const variantClass = variant ? `storybook-image--${variant}` : "";

  const style = {
    width,
    height,
    objectFit,
  };

  return (
    <img
      className={["storybook-image", variantClass].join(" ")}
      src={src}
      alt={alt}
      style={style}
      {...props}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  objectFit: PropTypes.oneOf([
    "cover",
    "contain",
    "fill",
    "none",
    "scale-down",
  ]),
  variant: PropTypes.oneOf(["rounded", "circle"]),
  width: PropTypes.string,
  height: PropTypes.string,
};

Image.defaultProps = {
  alt: "An example image",
  objectFit: "cover",
};
