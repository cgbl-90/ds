import React from "react";
import { Image, ImageProps } from "../Atoms/Image";
import "./image-scroll.css";

export interface ImageScrollProps {
  /** Array of image data to render */
  images: ImageProps[];
  /** Orientation of the scroll */
  direction?: "horizontal" | "vertical";
  /** Custom CSS classes */
  className?: string;
  /** Direct children to override default rendering */
  children?: React.ReactNode;
}

/**
 * A container component for scrolling through sets of images.
 * Supports horizontal and vertical layouts with hover and highlight effects.
 */
export const ImageScroll: React.FC<ImageScrollProps> = ({
  images = [],
  direction = "horizontal",
  className = "",
  children,
  ...props
}) => {
  const directionClass = `image-scroll-container--${direction}`;

  return (
    <div
      className={["image-scroll-container", directionClass, className].join(
        " "
      )}
      {...props}
    >
      {/* Prioritize children for complex interactions (like the Highlight story) */}
      {children ||
        images.map((image, index) => (
          <div key={index} className="image-scroll-item-wrapper">
            <Image {...image} />
          </div>
        ))}
    </div>
  );
};
