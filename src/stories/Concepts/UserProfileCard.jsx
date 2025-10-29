import React from "react";
import PropTypes from "prop-types";
import "./user-profile-card.css"; // Imports its own styles

/**
 * A simple card component to display user profile information.
 */
export const UserProfileCard = ({
  imageUrl,
  name,
  title,
  bio,
  className = "",
  ...props
}) => {
  return (
    <article className={`user-profile-card ${className}`} {...props}>
      <div className="user-profile-card-image-container">
        <img
          src={imageUrl}
          alt={`${name}'s profile`}
          className="user-profile-card-image"
        />
      </div>
      <div className="user-profile-card-content">
        <h2 className="user-profile-card-name">{name}</h2>
        <p className="user-profile-card-title">{title}</p>
        {bio && <p className="user-profile-card-bio">{bio}</p>}
      </div>
    </article>
  );
};

UserProfileCard.propTypes = {
  /**
   * URL for the user's profile picture.
   */
  imageUrl: PropTypes.string.isRequired,
  /**
   * User's full name.
   */
  name: PropTypes.string.isRequired,
  /**
   * User's job title or role.
   */
  title: PropTypes.string.isRequired,
  /**
   * A short biography for the user.
   */
  bio: PropTypes.string,
  /**
   * Optional additional class names.
   */
  className: PropTypes.string,
};

UserProfileCard.defaultProps = {
  bio: null,
  className: "",
};
