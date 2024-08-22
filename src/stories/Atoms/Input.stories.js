import { Input } from "./Input.jsx";

export default {
  title: "ATOMS/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    state: {
      control: {
        type: "select",
        options: ["hover", "focused", null],
      },
    },
  },
};

export const Default = {
  args: {
    placeholder: "Type here...",
  },
};

export const Small = {
  args: {
    size: "small",
    placeholder: "Small Input",
  },
};

export const Large = {
  args: {
    size: "large",
    placeholder: "Large Input",
  },
};

export const Hover = {
  args: {
    placeholder: "Hover Input",
    state: "hover",
  },
};

export const Focused = {
  args: {
    placeholder: "Focused Input",
    state: "focused",
  },
};

export const Disabled = {
  args: {
    placeholder: "Disabled Input",
    disabled: true,
  },
};
