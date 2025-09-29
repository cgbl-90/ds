import { Label } from "./Label";

export default {
  title: "ATOMS/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "The content displayed inside the label.",
    },
    htmlFor: {
      control: "text",
      description: "The ID of the form element the label is associated with.",
    },
    as: {
      control: {
        type: "select",
        options: ["label", "span"],
      },
      description: "Render the component as a different HTML element.",
    },
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

export const Default = {
  args: {
    children: "Default Label",
  },
};

export const ForInput = {
  name: "Label for an Input (with htmlFor)",
  args: {
    children: "Email Address",
    htmlFor: "email-input",
    color: "primary",
  },
};

export const AsSpan = {
  name: "Label for a Group (as a span)",
  args: {
    children: "Select your preferences",
    as: "span",
    size: "large",
  },
};

export const SmallSecondary = {
  args: {
    children: "Small Secondary Label",
    size: "small",
    color: "secondary",
  },
};
