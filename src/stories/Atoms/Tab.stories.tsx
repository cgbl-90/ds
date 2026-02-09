import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within, waitFor } from "storybook/test";
import { Tab } from "./Tab";

const meta: Meta<typeof Tab> = {
  title: "COMPONENTS/Tab",
  component: Tab,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    pauseAnimationsAtEnd: false,
  },
  argTypes: {
    onTabChange: { action: "tabChanged" },
  },
};

export default meta;
type Story = StoryObj<typeof Tab>;

const defaultTabs = [
  { id: "profile", label: "👤 Profile", content: "Profile Settings Content" },
  { id: "settings", label: "⚙️ Settings", content: "System Configuration" },
];

export const InteractiveDemo: Story = {
  args: {
    tabs: defaultTabs,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Change to Settings tab", async () => {
      // 1. Locate the Settings tab button
      const settingsTab = canvas.getByRole("tab", { name: /settings/i });

      // 2. Click the tab
      await userEvent.click(settingsTab);

      /**
       * FIX: Use 'findByText' instead of 'getByText'.
       * Because your CSS has a 0.3s fadeIn animation starting at opacity: 0,
       * 'getByText' would fail immediately. 'findByText' will wait for the
       * animation to complete and the element to become visible.
       * Prev code: const content = await canvas.findByText("System Configuration");
       */

      await waitFor(
        async () => {
          await expect(canvas.getByText("System Configuration")).toBeVisible();
        },
        { timeout: 500 },
      );

      // Step removed as the code above changed to waitFor
      // await expect(content).toBeVisible();
    });
  },
};

export const DeepLinked: Story = {
  args: {
    tabs: defaultTabs,
    initialTabId: "settings",
  },
};

export const LargeDataset: Story = {
  args: {
    tabs: Array.from({ length: 8 }, (_, i) => ({
      id: `${i}`,
      label: `Tab ${i + 1}`,
      content: `Content for Tab ${i + 1}`,
    })),
  },
};

export const TabSixActive: Story = {
  args: {
    // Replicating the LargeDataset logic where id is the index as a string
    tabs: Array.from({ length: 8 }, (_, i) => ({
      id: `${i}`,
      label: `Tab ${i + 1}`,
      content: `Content for Tab ${i + 1}`,
    })),
    // Setting the initial active tab to the 6th item (index 5)
    initialTabId: "5",
  },
};
