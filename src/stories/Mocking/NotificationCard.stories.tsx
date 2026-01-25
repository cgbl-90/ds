import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "storybook/test";
import { NotificationCard } from "./NotificationCard";

// Helper to mock global Notification API with proper TS casting
const mockNotificationAPI = (permission: NotificationPermission) => {
  Object.defineProperty(window, "Notification", {
    writable: true,
    configurable: true,
    value: class {
      static permission = permission;
      static requestPermission = () => Promise.resolve(permission);
      constructor(title: string, options?: NotificationOptions) {
        console.log("Mock Notification Created:", { title, ...options });
      }
    },
  });
};

const meta: Meta<typeof NotificationCard> = {
  title: "API/Notification",
  component: NotificationCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof NotificationCard>;

export const Default: Story = {
  render: (args) => {
    mockNotificationAPI("default");
    return <NotificationCard {...args} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /Request Permission/i });
    await userEvent.click(button);
  },
};

export const Granted: Story = {
  render: (args) => {
    mockNotificationAPI("granted");
    return <NotificationCard {...args} />;
  },
};