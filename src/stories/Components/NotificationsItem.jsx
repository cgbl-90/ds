import { Typography } from "../Atoms/Typography";
import NotificationDot from "../Atoms/NotificationDot";
import Badge from "../Atoms/Badge";

export const NotificationItem = ({ title, unread }) => (
  <div style={{ position: "relative" }}>
    {unread && <NotificationDot color="red" size={10} />}
    <Typography type="text" label={title} />
    {unread && <Badge text="new" style="warning" />}
  </div>
);
