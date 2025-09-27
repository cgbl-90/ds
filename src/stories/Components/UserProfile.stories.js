import { UserProfile } from "./UserProfile";
import { within, fn, userEvent } from "storybook/test";
const avatarImage = "https://placehold.co/100x100/EEE/333?text=Avatar";

export default {
  title: "COMPONENTS/UserProfile",
  component: UserProfile,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onSendMessage: { action: "messageSent" }, // Log the onSendMessage event
  },
};

/**
 * The default view of the UserProfile component with an "Active" status.
 */
export const Default = {
  args: {
    user: {
      name: "Jane Doe",
      avatarSrc: avatarImage,
    },
    // The status prop will use the component's defaultProps
  },
};

/**
 * A variation of the UserProfile for a new user, indicated by the "new" style badge.
 */
export const NewUser = {
  args: {
    user: {
      name: "John Smith",
      avatarSrc: avatarImage,
    },
    status: {
      text: "New",
      style: "new",
    },
  },
};

/**
 * A UserProfile with a warning status, useful for indicating an issue or required action.
 */
export const WarningStatus = {
  args: {
    user: {
      name: "Peter Jones",
      avatarSrc: avatarImage,
    },
    status: {
      text: "Needs Attention",
      style: "warning",
    },
  },
};

/**
 * This story includes a `play` function to simulate a user clicking the "Send Message" button.
 */
export const MessageSent = {
  args: {
    user: {
      name: "Jane Doe",
      avatarSrc: avatarImage,
    },
    // Use a mock function for the play function to interact with
    onSendMessage: fn(),
  },
  play: async ({ canvasElement }) => {
    // `within` creates a testing scope for the component's DOM
    const canvas = within(canvasElement);

    // Find the button by its accessible role and name
    const messageButton = canvas.getByRole("button", { name: /send message/i });

    // Simulate a user clicking the button
    await userEvent.click(messageButton);
  },
};
