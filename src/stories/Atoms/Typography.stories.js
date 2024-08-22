import { Typography } from "./Typography.js";

export default {
  title: "Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["title", "subtitle", "text", "code"],
      },
    },
    styleType: {
      control: {
        type: "select",
        options: ["italic", "bold", "underline", null],
      },
    },
  },
  args: { label: "Sample text" },
};

export const Title = {
  args: {
    type: "title",
    label: "This is a Title",
  },
};

export const Subtitle = {
  args: {
    type: "subtitle",
    label: "This is a Subtitle",
  },
};

export const Text = {
  args: {
    type: "text",
    label:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
};

export const Code = {
  args: {
    type: "code",
    label: "const example = 'Code Example';",
  },
};

export const ItalicText = {
  args: {
    type: "text",
    styleType: "italic",
    label: "This is italic text",
  },
};

export const BoldText = {
  args: {
    type: "text",
    styleType: "bold",
    label: "This is bold text",
  },
};

export const UnderlineText = {
  args: {
    type: "text",
    styleType: "underline",
    label: "This is underlined text",
  },
};
