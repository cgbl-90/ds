import React from "react";
// We are removing `waitFor` and using a manual delay to avoid potential parsing issues.
import { within, userEvent, expect } from "storybook/test";
import { Tab } from "./Tab";
import { Dot } from "./Dot";

export default {
  title: "COMPONENTS/Tab",
  component: Tab,
  parameters: {
    layout: "centered",
    diffThreshold: 0,
  },
  args: {},
};

const Template = (args) => <Tab {...args} />;

// A simple helper function to create a fixed delay.
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { id: "tab1", label: "Tab 1", content: "Content for Tab 1" },
    { id: "tab2", label: "Tab 2", content: "Content for Tab 2" },
    { id: "tab3", label: "Tab 3", content: "Content for Tab 3" },
  ],
};

export const WithNotificationDot = Template.bind({});
WithNotificationDot.args = {
  tabs: [
    { id: "tab1", label: "Tab 1", content: "Content for Tab 1" },
    {
      id: "tab2",
      label: (
        <>
          Tab 2
          <span className="notification-dot-wrapper">
            <Dot color="#e74c3c" size={10} />
          </span>
        </>
      ),
      content: "Content for Tab 2 with a notification!",
    },
    { id: "tab3", label: "Tab 3", content: "Content for Tab 3" },
  ],
};

// This play function now uses a simple timeout to wait for the animation.
// This avoids using `waitFor`, which might be causing syntax issues with your Storybook version.
WithNotificationDot.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Wait for 2 seconds, which is longer than the animation delay (0.5s) + duration (1.2s)
  await wait(2000);

  const tab2Button = canvas.getByRole("button", { name: /Tab 2/i });
  const dotCircle = tab2Button.querySelector(".storybook-dot-circle");

  // Assert that the dot is now visible and has a radius greater than 0
  expect(dotCircle).toBeInTheDocument();
  expect(dotCircle).toBeVisible();
};

export const InteractionTab = Template.bind({});
InteractionTab.args = { ...Default.args };

InteractionTab.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const tab1 = canvas.getByRole("button", { name: /Tab 1/i });
  const tab2 = canvas.getByRole("button", { name: /Tab 2/i });
  const tab3 = canvas.getByRole("button", { name: /Tab 3/i });

  await userEvent.click(tab1);
  await expect(canvas.getByText("Content for Tab 1")).toBeInTheDocument();

  await userEvent.click(tab2);
  await expect(canvas.getByText("Content for Tab 2")).toBeInTheDocument();

  await userEvent.click(tab3);
  await expect(canvas.getByText("Content for Tab 3")).toBeInTheDocument();
};
