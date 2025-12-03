import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Atoms/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    chromatic: {
      diffThreshold: 0.5,
    },
  },
  argTypes: {
    text: { control: "text" },
    style: {
      control: {
        type: "select",
      },
      options: ["new", "success", "warning"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "New",
    style: "new",
  },
};

export const Success: Story = {
  args: {
    text: "Success",
    style: "success",
  },
};

export const Warning: Story = {
  args: {
    text: "Warning",
    style: "warning",
  },
};
