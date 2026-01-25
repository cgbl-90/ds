import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, expect } from "storybook/test";
import { Page } from "./Page";

/**
 * Metadata configuration for the Page component.
 * Typed with Meta<typeof Page> to ensure parameters and args match the component's props.
 */
const meta: Meta<typeof Page> = {
  title: "PAGES/Page",
  component: Page,
  tags: ["autodocs"],
  parameters: {
    // Fullscreen layout is preferred for page-level components
    layout: "fullscreen",
  },
};

export default meta;

// Define a reusable type for stories of this component
type Story = StoryObj<typeof Page>;

/**
 * 1. LoggedOut Story
 * Represents the initial state of the page where no user is authenticated.
 */
export const LoggedOut: Story = {
  render: () => <Page />,
};

/**
 * 2. LoggedIn Story
 * Uses an interaction test (play function) to simulate a user logging in.
 */
export const LoggedIn: Story = {
  play: async ({ canvasElement }) => {
    // Set up the testing canvas within the provided element
    const canvas = within(canvasElement);

    // Locate the login button and verify it exists initially
    const loginButton = canvas.getByRole("button", { name: /Log in/i });
    await expect(loginButton).toBeInTheDocument();

    // Simulate a user clicking the login button
    await userEvent.click(loginButton);

    // Assert that the login button is removed and the logout button appears
    await expect(loginButton).not.toBeInTheDocument();
    const logoutButton = canvas.getByRole("button", { name: /Log out/i });
    await expect(logoutButton).toBeInTheDocument();
  },
};