import { LabelFragments } from "./LabelFragment";

export default {
  title: "ATOMS/LabelFragments",
  component: LabelFragments,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
  },
  args: {},
};

export const Default = {
  args: {
    text: "Label with Fragment",
  },
};

export const CustomText = {
  args: {
    text: "Second Fragment Label",
  },
};
