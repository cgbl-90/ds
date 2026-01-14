import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";

const meta = {
  title: "ATOMS/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Default Label" },
};

/** Association with an input ID for accessibility */
export const ForInput: Story = {
  name: "Label for an Input",
  args: {
    children: "Email Address",
    htmlFor: "email-input",
    color: "primary",
  },
};

/** Rendering as a span for non-form group descriptions */
export const AsSpan: Story = {
  args: {
    children: "Select your preferences",
    as: "span",
    size: "large",
  },
};

/** Required field example with visual indicator */
export const Required: Story = {
  render: (args) => (
    <Label {...args}>
      {args.children} <span style={{ color: "#ec554d" }}>*</span>
    </Label>
  ),
  args: { children: "Required Field" },
};
