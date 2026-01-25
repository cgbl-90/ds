import React from "react";
import { Typography } from "../Atoms/Typography";
import NotificationDot from "../Atoms/NotificationDot";
import Badge from "../Atoms/Badge";

export interface NotificationItemProps {
  /** The content of the notification alert */
  title: string;
  /** Whether the notification has been read by the user */
  unread: boolean;
}

export const NotificationItem: React.FC<NotificationItemProps> = ({ title, unread }) => (
  <div style={{ position: "relative" }}>
    {unread && <NotificationDot color="red" size={10} />}
    <Typography type="text" label={title} />
    {/* Re-using the Badge atom with appropriate 'style' mapping */}
    {unread && <Badge text="new" style="warning" />}
  </div>
);