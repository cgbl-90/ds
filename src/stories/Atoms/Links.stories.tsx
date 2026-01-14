import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "storybook/test";
import Links from "./Links";

const meta = {
  title: "ATOMS/Links",
  component: Links,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    // Options
  },
} satisfies Meta<typeof Links>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { text: "Primary Link", href: "#" },
};

export const Secondary: Story = {
  args: { ...Primary.args, text: "Secondary Link" },
};

/** Accessibility Test: Verifies hover and keyboard focus ring */
export const HoverAndFocus: Story = {
  name: "Hover & Focus Interaction",
  args: { ...Primary.args, text: "Interact with me" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole("link");
    await userEvent.hover(link);
    await userEvent.tab();
    await expect(link).toHaveFocus();
  },
};

export const Disabled: Story = {
  args: { ...Primary.args, text: "Disabled Link", disabled: true },
};
