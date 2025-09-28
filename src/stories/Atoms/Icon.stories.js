import { Icon } from "./Icon";

export default {
  title: "ATOMS/Icon",
  component: Icon,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    chromatic: {
      // disableSnapshot: true,
      diffThreshold: 0,
    },
  },
};

export const Small = {
  args: {
    size: "small",
  },
};

export const Medium = {
  args: {
    size: "medium",
  },
};

export const Large = {
  args: {
    size: "large",
  },
};
