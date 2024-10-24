import { Button } from "./Button.jsx";

export default {
  title: "ATOMS/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    state: {
      control: {
        type: "select",
        options: ["hover", "pressed", "noborder", null],
      },
    },
  },
  args: { onClick: () => {} },
};

// Modify behavior based on Chromatic
const chromaticArgs = isChromatic()
  ? { backgroundColor: "grey", label: "Chromatic Button" } // In Chromatic testing
  : { backgroundColor: "blue", label: "Storybook Button" }; // Normal Storybook mode

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
    ...chromaticArgs,
  },
};
