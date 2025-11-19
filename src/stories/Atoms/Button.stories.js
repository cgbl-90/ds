import { Button } from "./Button.jsx";
import isChromatic from "chromatic/isChromatic";
import { ShadowButtonComponent } from "./ButtonShadow.jsx";

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
    myProp: {
      description: "Description of myProp",
      table: {
        type: { summary: "string" },
      },
    },
    anotherProp: {
      description: "Description of anotherProp",
      table: {
        type: { summary: "number" },
      },
    },
    backgroundColor: { control: "color" },
    background: { control: "color" },
    state: {
      control: {
        type: "select",
        options: ["hover", "pressed", "noborder", null],
      },
    },
  },
  args: { onClick: () => {} },
};

export default meta;

const chromaticArgs = isChromatic() ? "Chromatic Button" : "Storybook Button";

export const Primary = {
  args: {
    primary: true,
    label: "Primary",
  },
};

export const Secondary = {
  args: {
    label: "Secondary",
  },
};

export const Large = {
  args: {
    size: "large",
    label: "Large Button",
  },
};

export const Small = {
  args: {
    size: "small",
    label: "Small Button",
  },
};

export const PrimaryPressed = {
  args: {
    primary: true,
    label: "Primary Pressed",
    state: "pressed",
  },
};

export const SecondaryHover = {
  args: {
    label: "Secondary Hover",
    state: "hover",
  },
};

export const PrimaryNoBorder = {
  args: {
    primary: true,
    label: "Primary Without Border",
    state: "noborder",
  },
};

export const SecondaryNoBorder = {
  args: {
    label: "Secondary Without Border",
    state: "noborder",
  },
};

export const IsChromaticButton = {
  args: {
    primary: false,
    label: chromaticArgs,
    state: "noborder",
  },
};

export const ShadowButtonStory = {
  args: {
    label: "Shadow DOM Button",
    backgroundColor: "green",
  },
  render: (args) => <ShadowButtonComponent {...args} />,
};
