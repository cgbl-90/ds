import React from "react";
import { Avatar } from "../Atoms/Avatar";
import { Typography } from "../Atoms/Typography";
import Links from "../Atoms/Links";

export interface ContactCardProps {
  /** Source URL for the contact's avatar */
  iconSrc: string;
  /** Full name of the contact */
  name: string;
  /** Email address for the mailto link */
  email: string;
}

/**
 * A simple contact card atom for directory listings.
 */
export const ContactCard: React.FC<ContactCardProps> = ({
  iconSrc,
  name,
  email,
}) => (
  <div
    className="storybook-card"
    style={{
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "12px",
    }}
  >
    <Avatar src={iconSrc} size="small" />
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Typography type="title" label={name} />
      <Links href={`mailto:${email}`} text={email} />
    </div>
  </div>
);
