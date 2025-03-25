import { StickyHeaderPage } from "./StickyHeaderPage";
import { action } from "@storybook/addon-actions";
import { within, waitFor } from "@storybook/test";

export default {
  title: "PAGES/StickyHeaderPage",
  component: StickyHeaderPage,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "customLarge",
      viewports: {
        customLarge: {
          name: "Custom 1200x900",
          styles: {
            width: "1200px",
            height: "900px",
          },
          type: "desktop",
        },
      },
    },
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
      name: "Jhonny Bravo",
    },
  },
};

export const LoggedOut = {};

export const InteractionScroll = {
  args: {
    user: {
      name: "Jhonny Bravo",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Wait until the interaction section appears
    await waitFor(() => canvas.getByText("Here’s an interaction section 🧩"));

    // Scroll to a Y position (approximate location of interaction section)
    window.scrollTo({ top: 800, behavior: "smooth" });

    // Optional: Wait for scroll to settle (not required but smoother)
    await new Promise((res) => setTimeout(res, 800));
  },
};
