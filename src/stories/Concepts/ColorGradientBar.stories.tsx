import type { Meta, StoryObj } from "@storybook/react";
import { ColorGradientBar } from "./ColorGradientBar";

const meta = {
  title: "Concepts/Threshold",
  component: ColorGradientBar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    chromatic: { diffThreshold: 0.063 },
  },
} satisfies Meta<typeof ColorGradientBar>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Baseline story for visual regression: Dark Blue -> Bright Blue -> Cyan */
export const DefaultThresholdBaseline: Story = {};

/** High threshold test: Chromatic will likely ignore minor color changes */
export const HighThresholdSubtleChange: Story = {
  parameters: { chromatic: { diffThreshold: 0.63 } },
};

/** Low threshold test: Highly sensitive to even imperceptible color shifts */
export const LowThresholdSubtleChange: Story = {
  parameters: { chromatic: { diffThreshold: 0.005 } },
};
