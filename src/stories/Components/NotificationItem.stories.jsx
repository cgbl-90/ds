import { NotificationItem } from "./NotificationItem";

export default {
  title: "COMPONENTS/NotificationItem",
  component: NotificationItem,
};

export const NewMessage = {
  args: {
    title: "You have a new message.",
    unread: true,
  },
};

export const SystemAlert = {
  args: {
    title: "Scheduled maintenance at 2 AM.",
    unread: false,
  },
};

export const TaskReminder = {
  args: {
    title: "Reminder: Finish Q1 report.",
    unread: true,
  },
};
