import { Icon } from "./Icon";

export default {
  title: "ATOMS/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
    chromatic: { disableSnapshot: true },
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
