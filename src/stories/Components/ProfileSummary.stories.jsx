import React from "react";
import { Avatar } from "../Atoms/Avatar";
import { Typography } from "../Atoms/Typography";
import Badge from "../Atoms/Badge";
import { Button } from "../Atoms/Button";

export const ProfileSummary = ({ user, onView }) => (
  <div className="storybook-card">
    <Avatar src={user.avatar} size="large" alt={`${user.name}'s avatar`} />
    <Typography type="title" label={user.name} />
    <Badge text={user.status} style={user.statusStyle} />
    <Button label="View Profile" onClick={onView} />
  </div>
);
