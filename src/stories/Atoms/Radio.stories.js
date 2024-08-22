import { Radio } from "./Radio.js";

export default {
  title: "ATOMS/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
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
    label: "Unchecked Radio",
  },
};

export const Checked = {
  args: {
    checked: true,
    label: "Checked Radio",
  },
};

export const Hover = {
  args: {
    label: "Hover Radio",
    state: "hover",
  },
};

export const Pressed = {
  args: {
    checked: true,
    label: "Pressed Radio",
    state: "pressed",
  },
};
