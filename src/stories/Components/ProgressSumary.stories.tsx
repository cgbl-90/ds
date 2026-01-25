import type { Meta, StoryObj } from "@storybook/react";
import { ProgressSummary } from "./ProgressSummary";

const meta = {
  title: "COMPONENTS/ProgressSummary",
  component: ProgressSummary,
  tags: ["autodocs"],
} satisfies Meta<typeof ProgressSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Demonstrates a partially completed learning module */
export const LearningProgress: Story = {
  args: {
    title: "React Fundamentals",
    progress: 40,
  },
};

/** High-completion state for a setup wizard */
export const SetupProgress: Story = {
  args: {
    title: "Installation Setup",
    progress: 70,
  },
};

/** Finished state (100% progress) */
export const Completed: Story = {
  args: {
    title: "Final Exam",
    progress: 100,
  },
};