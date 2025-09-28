import PropTypes from "prop-types";
import { Image } from "../Atoms/Image";
import "./image-scroll.css";

export const ImageScroll = ({
  images,
  direction = "horizontal",
  className,
  children, // 1. Accept children as a prop
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
      {/* 2. Prioritize rendering children if they are passed. */}
      {/* If not, fall back to the original behavior. */}
      {children ||
        images.map((image, index) => (
          <div key={index} className="image-scroll-item-wrapper">
            <Image {...image} />
          </div>
        ))}
    </div>
  );
};

ImageScroll.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  direction: PropTypes.oneOf(["horizontal", "vertical"]),
  className: PropTypes.string,
  children: PropTypes.node,
};

ImageScroll.defaultProps = {
  images: [],
  direction: "horizontal",
  className: "",
  children: null,
};
