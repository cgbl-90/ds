import { within, expect, userEvent } from "storybook/test";
import { NotificationCard } from "./NotificationCard";

// Helper function to mock the Notification API
const mockNotificationAPI = (permission) => {
  Object.defineProperty(window, "Notification", {
    writable: true,
    configurable: true,
    value: class Notification {
      static permission = permission;
      static requestPermission() {
        return Promise.resolve(permission);
      }
      constructor(title, options) {
        console.log("Mock Notification Created:", { title, ...options });
      }
    },
  });
};

export default {
  title: "API/Notification",
  component: NotificationCard,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
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

export const Granted = {
  render: (args) => {
    mockNotificationAPI("granted");
    return <NotificationCard {...args} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const showButton = canvas.getByRole("button", {
      name: /Show Notification/i,
    });
    await userEvent.click(showButton);
  },
};

export const Denied = {
  render: (args) => {
    mockNotificationAPI("denied");
    return <NotificationCard {...args} />;
  },
};
