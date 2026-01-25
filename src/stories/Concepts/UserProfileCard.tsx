import React from "react";
import "./user-profile-card.css";

export interface UserProfileCardProps extends React.HTMLAttributes<HTMLElement> {
  /** URL for the user's profile picture. */
  imageUrl: string;
  /** User's full name. */
  name: string;
  /** User's job title or role. */
  title: string;
  /** A short biography for the user. */
  bio?: string | null;
  /** Optional additional class names. */
  className?: string;
}

/**
 * A simple card component to display user profile information.
 */
export const UserProfileCard: React.FC<UserProfileCardProps> = ({
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