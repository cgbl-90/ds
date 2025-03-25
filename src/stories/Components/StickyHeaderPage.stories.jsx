import { StickyHeaderPage } from "./StickyHeaderPage";
import { action } from "@storybook/addon-actions";
import { within, waitFor } from "@storybook/test";

export default {
  title: "PAGES/StickyHeaderPage",
  component: StickyHeaderPage,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    onLogin: action("Login clicked"),
    onLogout: action("Logout clicked"),
    onCreateAccount: action("Sign up clicked"),
  },
};

export const LoggedIn = {
  args: {
    user: {
      name: "Sticky Sally",
    },
  },
};

export const LoggedOut = {};

export const InteractionScroll = {
  args: {
    user: {
      name: "Scroll Seeker",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Wait for the section to appear
    await waitFor(() => canvas.getByText("Here’s an interaction section 🧩"));

    const interactionEl = canvas.getByText("Here’s an interaction section 🧩");

    // Scroll into view
    interactionEl.scrollIntoView({ behavior: "smooth", block: "center" });

    // Optional: click the fake button
    const button = canvas.getByText("Click me");
    await waitFor(() => button);
    button.click();
  },
};
