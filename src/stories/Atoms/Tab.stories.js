import { within, userEvent, expect } from "storybook/test";
import { Tab } from "./Tab";

const Dot = ({ color, size }) => (
  <div
    style={{
      backgroundColor: color,
      width: size,
      height: size,
      borderRadius: "50%",
      display: "inline-block",
      verticalAlign: "middle",
      marginLeft: "5px",
    }}
  ></div>
);

export default {
  title: "COMPONENTS/Tab",
  component: Tab,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onTabChange: { action: "tabChanged" },
  },
};

const defaultTabs = [
  { id: "profile", label: "Profile", content: "This is the profile content." },
  {
    id: "settings",
    label: "Settings",
    content: "This is the settings content.",
  },
  {
    id: "dashboard",
    label: "Dashboard",
    content: "This is the dashboard content.",
  },
];

// --- Basic Stories ---

export const Default = {
  args: {
    tabs: defaultTabs,
  },
};

export const TwoTabs = {
  name: "State: Two Tabs",
  args: {
    tabs: [
      { id: "home", label: "Home", content: "Welcome home!" },
      {
        id: "about",
        label: "About Us",
        content: "Learn more about our company.",
      },
    ],
  },
};

export const ManyTabs = {
  name: "State: Many Tabs",
  args: {
    tabs: [
      { id: "1", label: "One", content: "Content One" },
      { id: "2", label: "Two", content: "Content Two" },
      { id: "3", label: "Three", content: "Content Three" },
      { id: "4", label: "Four", content: "Content Four" },
      { id: "5", label: "Five", content: "Content Five" },
      { id: "6", label: "Six", content: "Content Six" },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "A test to see how the component handles a larger number of tabs.",
      },
    },
  },
};

export const LongLabels = {
  name: "State: Long Labels",
  args: {
    tabs: [
      {
        id: "shipping",
        label: "Shipping Information",
        content: "Details about shipping.",
      },
      {
        id: "billing",
        label: "Billing and Payment Details",
        content: "Details about billing.",
      },
      {
        id: "history",
        label: "Complete Order History",
        content: "A log of all past orders.",
      },
    ],
  },
};

export const WithNotificationDot = {
  name: "Style: With Notification",
  args: {
    tabs: [
      { id: "inbox", label: "Inbox", content: "Your messages." },
      {
        id: "updates",
        label: (
          <>
            Updates <Dot color="#e74c3c" size={10} />
          </>
        ),
        content: "You have new updates!",
      },
    ],
  },
};

export const WithComplexContent = {
  name: "Content: With JSX",
  args: {
    tabs: [
      {
        id: "form",
        label: "Registration Form",
        content: (
          <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" style={{ marginLeft: "10px" }} />
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
        ),
      },
      {
        id: "info",
        label: "Information",
        content: <h3>This is an H3 tag inside a tab.</h3>,
      },
    ],
  },
};

/**
export const BasicInteraction = {
  name: "Click Tabs",
  args: {
    ...Default.args,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const settingsTab = await canvas.getByRole("button", {
      name: "Settings",
    });

    // Check initial state
    await expect(
      canvas.getByText("This is the profile content.")
    ).toBeVisible();
    await expect(
      canvas.queryByText("This is the settings content.")
    ).toBeNull();

    // Click the 'Settings' tab
    await userEvent.click(settingsTab);

    // Check new state
    await expect(
      canvas.getByText("This is the settings content.")
    ).toBeVisible();
    await expect(canvas.queryByText("This is the profile content.")).toBeNull();

    // Verify the onTabChange callback was fired with the correct ID
    await expect(args.onTabChange).toHaveBeenCalledWith("settings");
  },
  parameters: {
    disabled: true,
  },
};

export const SecondTabActive = {
  name: "Second Tab Active",
  args: {
    tabs: defaultTabs,
    initialTabId: "settings",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Assert that the settings content is visible on load
    await expect(
      canvas.getByText("This is the settings content.")
    ).toBeVisible();
    // Assert the correct tab button has the active class/style
    await expect(canvas.getByRole("button", { name: "Settings" })).toHaveClass(
      "tab-active"
    );
  },
  parameters: {
    disabled: true,
  },
};

export const KeyboardNavigation = {
  name: "Keyboard Navigation",
  args: {
    ...Default.args,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const profileTab = canvas.getByRole("button", { name: "Profile" });
    const settingsTab = canvas.getByRole("button", { name: "Settings" });
    const dashboardTab = canvas.getByRole("button", { name: "Dashboard" });
    // Focus the first tab
    await profileTab.focus();
    await expect(profileTab).toHaveFocus();
    // Press Tab to move to the next tab button
    await userEvent.tab();
    await expect(settingsTab).toHaveFocus();
    // Press Enter to select the focused tab
    await userEvent.keyboard("{enter}");
    await expect(
      canvas.getByText("This is the settings content.")
    ).toBeVisible();
    // Press Tab again
    await userEvent.tab();
    await expect(dashboardTab).toHaveFocus();
  },
  parameters: {
    disabled: true,
  },
};
*/

export const NoTabs = {
  name: "No Tabs",
  args: {
    tabs: [],
  },
  parameters: {
    docs: {
      description: {
        story:
          "This story tests how the component renders when given an empty array of tabs. It should not crash.",
      },
    },
  },
};
