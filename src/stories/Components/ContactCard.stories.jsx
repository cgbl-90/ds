import React from "react";
import { Icon } from "../Atoms/Icon";
import { Typography } from "../Atoms/Typography";
import Links from "../Atoms/Links";

export const ContactCard = ({ iconSrc, name, email }) => (
  <div className="storybook-card">
    <Icon size="medium" />
    <Typography type="title" label={name} />
    <Links href={`mailto:${email}`} text={email} style="primary" />
  </div>
);
