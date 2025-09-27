import PropTypes from "prop-types";
import "./avatar.css";

export const Avatar = ({ src, size, alt }) => {
  return (
    <div div className="storybook-avatar">
      <img
        src={src}
        alt={alt}
        data-testid="avatar"
        className={`storybook-avatar-img storybook-avatar--${size}`}
      />
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  alt: PropTypes.string,
};

Avatar.defaultProps = {
  size: "medium",
  alt: "Avatar",
};
