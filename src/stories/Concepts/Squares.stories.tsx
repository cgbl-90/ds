import type { Meta, StoryObj } from "@storybook/react";
import { Square } from "./Squares";

const meta = {
  title: "Concepts/Square",
  component: Square,
  parameters: { layout: "centered" },
  args: { sizeClass: "square-50", className: "" },
} satisfies Meta<typeof Square>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Standard small square used for UI spacers or indicators */
export const Centered50x50: Story = {};

/** Medium sized square variant */
export const Centered100x100: Story = {
  args: { sizeClass: "square-100" },
};

/** Large square used for placeholder content or block previews */
export const Centered200x200: Story = {
  args: { sizeClass: "square-200" }, // Fixed from original sample's typo
};
