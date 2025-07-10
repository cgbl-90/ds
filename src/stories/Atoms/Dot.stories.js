import { Dot } from "./Dot";

export default {
  title: "ATOMS/Dot",
  component: Dot,
  parameters: {
    layout: "centered",
    chromatic: {
      //disableSnapshot: true,
      diffThreshold: 0,
    },
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
    size: { control: { type: "range", min: 6, max: 50, step: 1 } },
  },
};

export const Default = {
  args: {
    color: "#2650C7", // A nice green color
    size: 12,
  },
};

export const Red = {
  args: {
    color: "#e74c3c", // A nice red color
    size: 12,
  },
};

export const Blue = {
  args: {
    color: "#3498db", // A nice blue color
    size: 24,
  },
};
