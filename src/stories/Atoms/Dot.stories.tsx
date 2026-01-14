import type { Meta, StoryObj } from "@storybook/react";
import { Dot } from "./Dot";

const meta = {
  title: "ATOMS/Dot",
  component: Dot,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: { control: "color" },
    size: { control: { type: "range", min: 6, max: 100, step: 2 } },
  },
} satisfies Meta<typeof Dot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { color: "#2650C7", size: 12 },
};

export const LargePulse: Story = {
  args: { color: "#e74c3c", size: 48 },
};

/** Use this variant for active notifications */
export const NotificationBlue: Story = {
  args: { color: "#3498db", size: 24 },
};

/** Demonstrates how multiple dots look as a loading sequence */
export const LoadingSequence: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Dot color="#ccc" size={12} />
      <Dot color="#999" size={12} />
      <Dot color="#666" size={12} />
    </div>
  ),
};