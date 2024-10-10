// Label.stories.jsx
import { Label } from "./Label";

export default {
  title: "ATOMS/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    color: {
      control: {
        type: "select",
        options: ["default", "primary", "secondary"],
      },
    },
  },
};

export const DefaultLabel = {
  args: {
    text: "Default Label",
    size: "medium",
    color: "default",
  },
};

export const SmallPrimaryLabel = {
  args: {
    text: "Small Primary Label",
    size: "small",
    color: "primary",
  },
};

export const LargeSecondaryLabel = {
  args: {
    text: "Large Secondary Label",
    size: "large",
    color: "secondary",
  },
};

export const MediumPrimaryLabel = {
  args: {
    text: "Medium Primary Label",
    size: "medium",
    color: "primary",
  },
};

export const SmallDefaultLabel = {
  args: {
    text: "Small Default Label",
    size: "small",
    color: "default",
  },
};
