import { within, userEvent, expect, waitFor } from "storybook/test";
import { Tab } from "./Tab";
import { Dot } from "../Dot/Dot";

export default {
  title: "COMPONENTS/Tab",
  component: Tab,
  parameters: {
    layout: "centered",
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

// This play function programmatically waits for the animation to finish
// and then tests that the dot is visible, which is more reliable.
WithNotificationDot.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Wait for the dot to become visible. The timeout should be longer than the
  // animation's delay (0.5s) + duration (1.2s).
  await waitFor(
    () => {
      const tab2Button = canvas.getByRole("button", { name: /Tab 2/i });
      const dotCircle = tab2Button.querySelector(".storybook-dot-circle");

      // Check that the circle element exists in the document
      expect(dotCircle).toBeInTheDocument();
      // Check that its radius is no longer at the initial '0' value
      expect(dotCircle.getAttribute("r")).not.toBe("0");
    },
    { timeout: 2000 }
  ); // A 2-second timeout provides a safe margin.

  // As a final check, we can assert the element is visible.
  const tab2Button = canvas.getByRole("button", { name: /Tab 2/i });
  const dotCircle = tab2Button.querySelector(".storybook-dot-circle");
  await expect(dotCircle).toBeVisible();
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