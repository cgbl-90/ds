import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

/**
 * Standard Checkbox atom.
 * Uses custom CSS to provide a consistent brand look across browsers.
 */
const meta = {
  title: "ATOMS/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    chromatic: {
      diffThreshold: 0.5, // Ignores tiny sub-pixel rendering changes
    },
  },
  argTypes: {
    state: {
      control: "select",
      options: ["hover", "pressed", null],
      description: "Force a visual state for design review",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

/** The default state before user interaction */
export const Unchecked: Story = {
  args: {
    label: "Unchecked Checkbox",
  },
};

/** Shows the brand blue color and checkmark icon */
export const Checked: Story = {
  args: {
    checked: true,
    label: "Checked Checkbox",
  },
};

/** Useful for documenting the hover effect without manual interaction */
export const Hover: Story = {
  args: {
    label: "Hover Checkbox",
    state: "hover",
  },
};

/** Visualizes the 'pressed' active state */
export const Pressed: Story = {
  args: {
    checked: true,
    label: "Pressed Checkbox",
    state: "pressed",
  },
};
