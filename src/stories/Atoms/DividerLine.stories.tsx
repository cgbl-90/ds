import type { Meta, StoryObj } from "@storybook/react";
import Divider from "./DividerLine";

/**
 * Dividers help organize UI by providing clear visual breaks between components.
 */
const meta = {
  title: "Atoms/Divider",
  component: Divider,
  tags: ["autodocs"],
  parameters: {
    // Advanced: Ensures the divider has enough padding to be seen in the preview
    layout: "padded",
    chromatic: {
      diffThreshold: 0.1,
    },
  },
  argTypes: {
    style: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "danger"],
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

/** The default subtle separator used throughout the application. */
export const Primary: Story = {
  args: {
    style: "primary",
    dashed: false,
    dotted: false,
    bold: false,
  },
};

/** A thick, dark dashed line for strong section breaks. */
export const SecondaryBoldDashed: Story = {
  args: {
    style: "secondary",
    dashed: true,
    bold: true,
  },
};

/** A decorative dotted line using the success color theme. */
export const SuccessDotted: Story = {
  args: {
    style: "success",
    dotted: true,
  },
};

/** High-visibility thick red line for critical section breaks. */
export const DangerBold: Story = {
  args: {
    style: "danger",
    bold: true,
  },
};

/** * Advanced Example: Content Wrapper
 * Shows how the divider looks when actually separating text.
 */
export const ContentSeparation: Story = {
  render: (args) => (
    <div>
      <p>Top section content text.</p>
      <Divider {...args} />
      <p>Bottom section content text.</p>
    </div>
  ),
  args: {
    ...Primary.args,
    style: "warning",
  },
};
