import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Atoms/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    chromatic: {
      diffThreshold: 0.5, // Allows for slight anti-aliasing differences
    },
  },
  // argTypes defined here will show up in the Controls table
};

export default meta;
type Story = StoryObj<typeof meta>;

/** Standard 'New' badge with dark background */
export const Default: Story = {
  args: { text: "New", style: "new" },
};

/** Success state using the deep blue brand color */
export const Success: Story = {
  args: { text: "Success", style: "success" },
};

/** Warning state using the alert red color */
export const Warning: Story = {
  args: { text: "Warning", style: "warning" },
};
