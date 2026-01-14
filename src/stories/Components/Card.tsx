import React from "react";
import { Avatar } from "../Atoms/Avatar";
import { Button } from "../Atoms/Button";
import { Typography } from "../Atoms/Typography";
import "./card.css";

export interface CardProps {
  /** Image source for the avatar */
  avatarSrc: string;
  /** Heading text or Typography component */
  title: React.ReactNode;
  /** Body content or Typography component */
  description?: React.ReactNode;
  /** Text to display inside the button */
  buttonLabel?: string;
  /** Callback function when button is pressed */
  onButtonClick?: () => void;
}

/**
 * A composite component that combines Avatar, Typography, and Button.
 * Optimized for layout consistency and flexible content.
 */
export const Card: React.FC<CardProps> = ({
  avatarSrc,
  title,
  description = "",
  buttonLabel = "Learn More",
  onButtonClick = () => {},
}) => {
  return (
    <div className="storybook-card" role="region" aria-label="Content Card">
      <div className="storybook-card__header">
        <Avatar src={avatarSrc} alt="User Avatar" size="large" />
      </div>
      <div className="storybook-card__body">
        {/* If title is a string, wrap it in Typography; otherwise render as-is */}
        {typeof title === "string" ? (
          <Typography type="title" label={title} styleType="bold" />
        ) : (
          title
        )}

        {typeof description === "string" && description ? (
          <Typography type="text" label={description} />
        ) : (
          description
        )}
      </div>
      <div className="storybook-card__footer">
        <Button label={buttonLabel} onClick={onButtonClick} primary />
      </div>
    </div>
  );
};
