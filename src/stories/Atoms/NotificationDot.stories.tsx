import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import NotificationDot from "./NotificationDot";

const meta = {
  title: "ATOMS/Notification Dot",
  component: NotificationDot,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    chromatic: { diffThreshold: 0.5 },
  },
  argTypes: {
    color: { control: "select" },
    position: { control: "select" },
    size: { control: { type: "range", min: 5, max: 40, step: 1 } },
  },
  // Decorator to provide a relative-positioned container for the absolute-positioned dot
  decorators: [
    (Story) => (
      <div
        style={{
          width: "60px",
          height: "60px",
          backgroundColor: "#f0f0f0",
          borderRadius: "8px",
          position: "relative",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof NotificationDot>;

export default meta;
type Story = StoryObj<typeof meta>;

/** The standard look: a small red dot in the corner */
export const Default: Story = {
  args: {
    color: "red",
    size: 10,
    position: "top-right",
  },
};

/** High-visibility green dot */
export const LargeGreenDot: Story = {
  args: {
    color: "green",
    size: 20,
    position: "top-right",
  },
};

/** Useful for bottom-aligned indicators */
export const BlueDotBottomLeft: Story = {
  args: {
    color: "blue",
    size: 15,
    position: "bottom-left",
  },
};

/** Shows the dot using the design system's brand color */
export const BrandDot: Story = {
  args: {
    color: "brand",
    size: 12,
    position: "top-right",
    animated: true,
  },
};

/** * ADVANCED: Composed Story
 * Shows how the dot looks on a mock Avatar component.
 */
export const OnAvatar: Story = {
  args: { ...Default.args, animated: true },
  decorators: [
    (Story) => (
      <div
        style={{
          width: "48px",
          height: "48px",
          backgroundImage: "url(https://picsum.photos/48)",
          borderRadius: "50%",
          position: "relative",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

/**
 * SHOWCASE: Position Grid
 * Shows multiple dots at once to test layout consistency.
 */
export const PositionShowcase: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 80px)",
        gap: "40px",
      }}
    >
      <div
        style={{
          position: "relative",
          height: "60px",
          border: "1px dashed #ccc",
        }}
      >
        <NotificationDot position="top-left" color="red" />
      </div>
      <div
        style={{
          position: "relative",
          height: "60px",
          border: "1px dashed #ccc",
        }}
      >
        <NotificationDot position="top-right" color="green" />
      </div>
      <div
        style={{
          position: "relative",
          height: "60px",
          border: "1px dashed #ccc",
        }}
      >
        <NotificationDot position="bottom-left" color="blue" />
      </div>
      <div
        style={{
          position: "relative",
          height: "60px",
          border: "1px dashed #ccc",
        }}
      >
        <NotificationDot position="bottom-right" color="yellow" />
      </div>
    </div>
  ),
};
