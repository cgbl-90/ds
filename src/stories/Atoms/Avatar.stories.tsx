import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "storybook/test";
import { Avatar } from "./Avatar";
import avatarImage from "../avatar.png";

const meta = {
  title: "ATOMS/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

/** * Default view: Medium size is our standard.
 */
export const Primary: Story = {
  args: {
    src: avatarImage,
    size: "medium",
    alt: "User Avatar",
  },
};

// --- Size Variants ---

export const Small: Story = {
  args: { ...Primary.args, size: "small" },
};

/** * Restored Medium export to fix the build error.
 */
export const Medium: Story = {
  args: { ...Primary.args, size: "medium" },
};

export const Large: Story = {
  args: { ...Primary.args, size: "large" },
};

// --- Edge Cases & Interactions ---

export const BrokenImage: Story = {
  args: {
    src: "https://invalid-url.com/non-existent-image.png",
    alt: "Fallback text",
  },
};

export const Hover: Story = {
  args: { ...Primary.args },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const avatar = canvas.getByTestId("avatar");

    await step("Simulate user hover", async () => {
      await userEvent.hover(avatar);
      await expect(avatar).toBeVisible();
    });
  },
};
