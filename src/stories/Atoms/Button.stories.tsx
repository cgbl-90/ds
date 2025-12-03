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
    chromatic: {
      diffThreshold: 0.5,
    },
  },
  argTypes: {
    backgroundColor: { control: "color" },
    background: { control: "color" },
    state: {
      control: {
        type: "select",
      },
      options: ["hover", "pressed", "noborder", null],
    },
  },
  args: { onClick: () => {} },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const chromaticArgs = isChromatic() ? "Chromatic Button" : "Storybook Button";

export const Primary: Story = {
  args: {
    primary: true,
    label: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Large Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Small Button",
  },
};

export const PrimaryPressed: Story = {
  args: {
    primary: true,
    label: "Primary Pressed",
    state: "pressed",
  },
};

export const SecondaryHover: Story = {
  args: {
    label: "Secondary Hover",
    state: "hover",
  },
};

export const PrimaryNoBorder: Story = {
  args: {
    primary: true,
    label: "Primary Without Border",
    state: "noborder",
  },
};

export const SecondaryNoBorder: Story = {
  args: {
    label: "Secondary Without Border",
    state: "noborder",
  },
};

export const IsChromaticButton: Story = {
  args: {
    primary: false,
    label: chromaticArgs,
    state: "noborder",
  },
};

export const ShadowButtonStory: Story = {
  args: {
    label: "Shadow DOM Button",
    backgroundColor: "green",
  },
  render: (args) => <ShadowButtonComponent {...args} />,
};