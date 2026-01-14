import { ProgressBar } from "./ProgressBar";
import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof ProgressBar>;

export default {
  title: "Atoms/Progress Bar",
  component: ProgressBar,
  tags: ["autodocs"],
  parameters: {
    chromatic: {
      //disableSnapshot: true,
      diffThreshold: 0,
    },
  },
  argTypes: {
    progress: { control: { type: "range", min: 0, max: 100 } },
  },
} satisfies Meta<typeof ProgressBar>;

export const Default: Story = {
  args: {
    progress: 50, // Default progress set to 50%
  },
};

export const Complete: Story = {
  args: {
    progress: 100, // Full progress
  },
};

export const InProgress: Story = {
  args: {
    progress: 75, // 75% progress
  },
};

export const Minimal: Story = {
  args: {
    progress: 5, // 25% progress
  },
};
