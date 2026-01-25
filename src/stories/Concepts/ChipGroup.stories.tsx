import type { Meta, StoryObj } from "@storybook/react";
import { within, expect } from "storybook/test";
import { ChipGroup } from "./ChipGroup";

const meta = {
  title: "Concepts/ChipGroup",
  component: ChipGroup,
  args: {
    label: "Fruits",
    items: ["apple", "banana", "cherry", "date", "eggplant", "11 more"],
  },
} satisfies Meta<typeof ChipGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Tests visibility of remove buttons in a standard desktop layout */
export const DesktopWithHover: Story = {
  name: "State: Desktop (with Hover)",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const bananaLabel = await canvas.findByText("banana");
    const bananaChip = bananaLabel.closest(".chip") as HTMLElement;
    await expect(bananaChip).toBeInTheDocument();

    const removeButtonInitial = within(bananaChip).getByRole("button");
    await expect(removeButtonInitial).not.toBeVisible();
  },
};

/** Verifies that chips remain legible and structured correctly on small screens */
export const MobileWithHover: Story = {
  name: "State: Mobile (with Hover)",
  parameters: {
    viewport: { defaultViewport: "small" },
  },
  play: DesktopWithHover.play,
};
