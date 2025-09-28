import { Checkbox } from "./Checkbox.js";
// import { allModes } from "../../../.storybook/modes.js";

export default {
  title: "ATOMS/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    chromatic: {
      // disableSnapshot: true,
      diffThreshold: 0,
    },
  },
  argTypes: {
    state: {
      control: {
        type: "select",
        options: ["hover", "pressed", null],
      },
    },
  },
  args: { onClick: () => {} },
};

export const Unchecked = {
  args: {
    label: "Unchecked Checkbox",
  },
};

export const Checked = {
  args: {
    checked: true,
    label: "Checked Checkbox",
  },
};

export const Hover = {
  args: {
    label: "Hover Checkbox",
    state: "hover",
  },
};

export const Pressed = {
  args: {
    checked: true,
    label: "Pressed Checkbox",
    state: "pressed",
  },
};
