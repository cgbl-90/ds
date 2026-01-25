import type { Meta, StoryObj } from "@storybook/react";
import { NotificationItem } from "./NotificationsItem";

const meta = {
  title: "COMPONENTS/Notifications",
  component: NotificationItem,
  tags: ["autodocs"],
} satisfies Meta<typeof NotificationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

/** High-priority alert showing both the red dot and the warning badge */
export const NewMessage: Story = {
  args: { title: "You have a new message.", unread: true },
};

/** A standard read notification with no visual markers */
export const SystemAlert: Story = {
  args: { title: "Scheduled maintenance at 2 AM.", unread: false },
};

/** Follow-up reminder for pending user tasks */
export const TaskReminder: Story = {
  args: { title: "Reminder: Finish Q1 report.", unread: true },
};