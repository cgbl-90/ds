import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import isChromatic from "chromatic/isChromatic";
import { ShadowButtonComponent } from "./ButtonShadow";

const meta = {
  title: "ATOMS/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    chromatic: { diffThreshold: 0.5 },
  },
  argTypes: {
    backgroundColor: { control: "color" },
    background: { control: "color" },
    state: {
      control: { type: "select" },
      options: ["hover", "pressed", "noborder", null],
    },
  },
  args: { onClick: () => {} },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const chromaticArgs = isChromatic() ? "Chromatic Button" : "Storybook Button";

// --- BASE VARIANTS ---
export const Primary: Story = { args: { primary: true, label: "Primary" } };
export const Secondary: Story = { args: { label: "Secondary" } };

// --- NEW STATES ---
/** Displays a spinner and disables clicking */
export const Loading: Story = {
  args: { primary: true, label: "Loading", loading: true },
};
/** Grayed out and non-interactive */
export const Disabled: Story = {
  args: { primary: true, label: "Disabled", disabled: true },
};

// --- SIZES ---
export const Large: Story = { args: { size: "large", label: "Large Button" } };
export const Small: Story = { args: { size: "small", label: "Small Button" } };

// --- INTERACTION STATES (FORCED) ---
export const PrimaryPressed: Story = {
  args: { primary: true, label: "Primary Pressed", state: "pressed" },
};
export const SecondaryHover: Story = {
  args: { label: "Secondary Hover", state: "hover" },
};

// --- BORDERLESS ---
export const PrimaryNoBorder: Story = {
  args: { primary: true, label: "Primary Without Border", state: "noborder" },
};
export const SecondaryNoBorder: Story = {
  args: { label: "Secondary Without Border", state: "noborder" },
};

/** Changes label if viewed in Chromatic environment */
export const IsChromaticButton: Story = {
  args: { primary: false, label: chromaticArgs, state: "noborder" },
};

/** Tests Shadow DOM encapsulation */
export const ShadowButtonStory: Story = {
  args: { label: "Shadow DOM Button", backgroundColor: "green" },
  render: (args) => <ShadowButtonComponent {...args} />,
};
