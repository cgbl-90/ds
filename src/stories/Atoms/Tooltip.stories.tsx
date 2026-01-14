import type { Meta, StoryObj } from "@storybook/react";
import Tooltip from "./Tooltip";

/**
 * Tooltips display informative text when users hover over an element.
 */
const meta = {
  title: "ATOMS/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    chromatic: {
      // Small threshold to ignore sub-pixel anti-aliasing in text rendering
      diffThreshold: 0.1,
    },
  },
  argTypes: {
    text: { control: "text" },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "This is a tooltip!",
    children: <button>Hover over me</button>,
  },
};

export const LongText: Story = {
  args: {
    text: "This tooltip has a significantly longer text to demonstrate how the multi-line behavior and width constraints work.",
    children: <button>Long Text Tooltip</button>,
  },
};

/** Demonstrates tooltip on a colored element */
export const CustomStyledChild: Story = {
  args: {
    text: "Success message!",
    children: (
      <button
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "8px 16px",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Green Button
      </button>
    ),
  },
};

/** * SHOWCASE: Visual regression test for multiple tooltips.
 * We add 'args' even if empty to satisfy the StoryObj type.
 */
export const MultipleTooltips: Story = {
  args: { // Satisfies required prop if 'text' and 'children' are mandatory
    text: "Default tooltip text",
    children: <span>Default child</span>,
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "50px", padding: "40px" }}>
      <Tooltip {...args} text="Left Tooltip">
        <span>Hover Left</span>
      </Tooltip>
      <Tooltip {...args} text="Right Tooltip">
        <span>Hover Right</span>
      </Tooltip>
    </div>
  ),
};

/**
 * COMPONENT TEST: Edge cases for Chromatic.
 * Ensures the absolute positioning doesn't break in narrow containers.
 */
export const BoundaryTest: Story = {
  args: {
    text: "Testing boundaries",
    children: <span>Default child</span>, // Added to satisfy the required prop
  },
  render: (args) => (
    <div style={{ width: "200px", border: "1px solid #ccc", padding: "20px" }}>
      <Tooltip {...args}>
        <div style={{ background: "#eee", textAlign: "center" }}>
          Narrow Container
        </div>
      </Tooltip>
    </div>
  ),
};