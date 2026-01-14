import React from "react";
import "./image.css";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Descriptive text for screen readers */
  alt: string;
  /** URL of the image */
  src: string;
  /** Shape of the image borders */
  variant?: "rounded" | "circle";
  /** CSS object-fit property */
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  width?: string;
  height?: string;
}

/**
 * A simple and versatile Image component with built-in shape variants.
 */
export const Image: React.FC<ImageProps> = ({
  alt = "An example image",
  src,
  variant,
  width,
  height,
  objectFit = "cover",
  style,
  ...props
}) => {
  const variantClass = variant ? `storybook-image--${variant}` : "";

  const combinedStyle: React.CSSProperties = {
    width,
    height,
    objectFit,
    ...style,
  };

  return (
    <img
      className={["storybook-image", variantClass].join(" ")}
      src={src}
      alt={alt}
      style={combinedStyle}
      {...props}
    />
  );
};
