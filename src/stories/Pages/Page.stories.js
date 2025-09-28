import { within, userEvent, expect } from "storybook/test";
import { Page } from "./Page";

export default {
  title: "PAGES/Page", // Make sure this matches Storybook's expected title format
  component: Page,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

// Ensure this export exists
export const LoggedOut = () => <Page />;

export const LoggedIn = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole("button", { name: /Log in/i });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();

    const logoutButton = canvas.getByRole("button", { name: /Log out/i });
    await expect(logoutButton).toBeInTheDocument();
  },
};
