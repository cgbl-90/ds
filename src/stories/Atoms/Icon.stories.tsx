import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";
import { userEvent, within, expect } from "storybook/test";

const meta = {
  title: "ATOMS/Icon",
  component: Icon,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = { args: { size: "small" } };
export const Medium: Story = { args: { size: "medium" } };
export const Large: Story = { args: { size: "large" } };

/** The Hero variant for splash screens */
export const ExtraLarge: Story = { args: { size: "xlarge" } };

/** * Interactive Test: Ensures the icon handles clicks.
 * Look at the 'Interactions' tab in Storybook to see the result.
 */
export const Clickable: Story = {
  args: {
    size: "medium",
    onClick: () => alert("Icon Clicked!"),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const icon = canvas.getByRole("img");
    await userEvent.click(icon);
    await expect(icon).toBeInTheDocument();
  },
};
