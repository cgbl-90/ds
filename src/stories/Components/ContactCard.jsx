import React from "react";
import { Avatar } from "../Atoms/Avatar";
import { Typography } from "../Atoms/Typography";
import Links from "../Atoms/Links";

export const ContactCard = ({ iconSrc, name, email }) => (
  <div className="storybook-card">
    <Avatar src={iconSrc} size="small" />
    <Typography type="title" label={name} />
    <Links href={`mailto:${email}`} text={email} variant="primary" />
  </div>
);
