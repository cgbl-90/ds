import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "storybook/test";
import { Tab } from "./Tab";

const meta: Meta<typeof Tab> = {
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
      const settingsTab = canvas.getByRole("tab", { name: /settings/i });
      await userEvent.click(settingsTab);
      await expect(canvas.getByText("System Configuration")).toBeVisible();
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
