import React from "react";
import { Avatar } from "../Atoms/Avatar";
import { Typography } from "../Atoms/Typography";
import Badge from "../Atoms/Badge";
import { Button } from "../Atoms/Button";

export interface ProfileSummaryProps {
  user: {
    /** URL for the user's profile picture */
    avatar: string;
    /** Display name of the user */
    name: string;
    /** Text to show in the status badge */
    status: string;
    /** Mapping to Badge atom style: "new" | "success" | "warning" */
    statusStyle: "new" | "success" | "warning";
  };
  /** Callback function when the "View Profile" button is clicked */
  onView: () => void;
}

/**
 * A user profile card showing essential identification and status information.
 */
export const ProfileSummary: React.FC<ProfileSummaryProps> = ({ user, onView }) => (
  <div className="storybook-card">
    <Avatar src={user.avatar} size="large" alt={`${user.name}'s avatar`} />
    <Typography type="title" label={user.name} />
    {/* Corrected: Mapping 'statusStyle' to the Badge 'style' prop */}
    <Badge text={user.status} style={user.statusStyle} />
    <Button label="View Profile" onClick={onView} />
  </div>
);