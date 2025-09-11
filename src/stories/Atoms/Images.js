import PropTypes from "prop-types";
import "./images.css";

export const Image = ({
  src,
  alt,
  size,
  loading,
  srcSet,
  sizes,
  sources,
  objectFit,
  aspectRatio,
}) => {
  const sizeClass = `storybook-image--${size}`;
  const objectFitClass = objectFit ? `storybook-image--fit-${objectFit}` : "";

  // Apply aspect-ratio directly via style prop for dynamic values
  const style = aspectRatio ? { aspectRatio } : {};

  // If `sources` are provided, render a <picture> element for art direction or format switching.
  if (sources && sources.length > 0) {
    return (
      <picture>
        {sources.map((source, index) => (
          <source
            key={index}
            srcSet={source.srcset}
            type={source.type}
            media={source.media}
          />
        ))}
        <img
          src={src}
          alt={alt}
          className={["storybook-image", sizeClass, objectFitClass].join(" ")}
          loading={loading}
          style={style}
        />
      </picture>
    );
  }

  // Otherwise, render a standard <img> element with srcset for responsiveness.
  return (
    <img
      src={src}
      alt={alt}
      className={["storybook-image", sizeClass, objectFitClass].join(" ")}
      loading={loading}
      srcSet={srcSet}
      sizes={sizes}
      style={style}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large", "responsive"]),
  loading: PropTypes.oneOf(["eager", "lazy"]),
  srcSet: PropTypes.string,
  sizes: PropTypes.string,
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      srcset: PropTypes.string.isRequired,
      type: PropTypes.string,
      media: PropTypes.string,
    })
  ),
  objectFit: PropTypes.oneOf([
    "contain",
    "cover",
    "fill",
    "none",
    "scale-down",
  ]),
  aspectRatio: PropTypes.string,
};

Image.defaultProps = {
  alt: "image",
  size: "medium",
  loading: "eager",
  srcSet: null,
  sizes: null,
  sources: [],
  objectFit: null,
  aspectRatio: null,
};
