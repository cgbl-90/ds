import { Typography } from "./Typography.js";

export default {
  title: "Typography",
  component: Typography,
  parameters: {
    layout: "padded", // 'padded' is often better than 'fullscreen' for components
    chromatic: {
      diffThreshold: 0,
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["title", "subtitle", "text", "code"],
    },
    styleType: {
      control: "select",
      options: [null, "italic", "bold", "underline"],
    },
    label: {
      control: "text",
    },
    as: {
      control: "text",
      description: "Override the default HTML tag (e.g., 'h3', 'span').",
    },
  },
  args: { label: "Sample text" },
};

export const Title = {
  args: {
    type: "title",
    label: "This is a Title (h1)",
  },
};

export const Subtitle = {
  args: {
    type: "subtitle",
    label: "This is a Subtitle (h2)",
  },
};

export const Text = {
  args: {
    type: "text",
    label:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (p)",
  },
};

export const Code = {
  args: {
    type: "code",
    label: "const example = 'Code Example in a <pre><code> block';",
  },
};

export const ItalicText = {
  args: {
    type: "text",
    styleType: "italic",
    label: "This is italic text.",
  },
};

export const BoldText = {
  args: {
    type: "text",
    styleType: "bold",
    label: "This is bold text.",
  },
};

export const UnderlineText = {
  args: {
    type: "text",
    styleType: "underline",
    label: "This is underlined text.",
  },
};

export const BoldTitle = {
  args: {
    type: "title",
    styleType: "bold", // Note: title is already bold, but this shows combination
    label: "This is a Bold Title",
  },
};

export const ItalicSubtitle = {
  args: {
    type: "subtitle",
    styleType: "italic",
    label: "This is an italic subtitle.",
  },
};

export const TitleAsH3 = {
  args: {
    type: "title",
    as: "h3",
    label: "This is a Title styled text, but rendered as an <h3> element.",
  },
  parameters: {
    docs: {
      description: {
        story:
          'This demonstrates using the `as` prop to render a "title" variant with an `h3` tag for semantic flexibility.',
      },
    },
  },
};
