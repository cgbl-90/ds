import React from "react";
import { within, userEvent, expect } from "storybook/test";
import { Tab } from "./Tab";
import { Dot } from "./Dot";

export default {
  title: "COMPONENTS/Tab",
  component: Tab,
  parameters: {
    layout: "centered",
    chromatic: {
      disableSnapshot: true,
    },
  },
  args: {},
};

const Template = (args) => <Tab {...args} />;

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
