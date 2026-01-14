import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Typography } from "../Atoms/Typography";
import avatarImage from "../avatar.png";

const meta = {
  title: "COMPONENTS/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    chromatic: { diffThreshold: 0.2 },
  },
  argTypes: {
    onButtonClick: { action: "clicked" },
    avatarSrc: { control: "text" },
  },
  args: {
    avatarSrc: avatarImage,
    buttonLabel: "Learn More",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Default Card Title",
    description:
      "This is a default card description using a simple string prop.",
  },
};

export const RichContent: Story = {
  args: {
    title: <Typography type="title" label="Rich Component Title" />,
    description: (
      <Typography
        type="text"
        styleType="italic"
        label="Description using Typography Atom"
      />
    ),
  },
};

export const LongDescription: Story = {
  args: {
    title: "Long Description Card",
    description:
      "This card explores how the layout handles significant amounts of text content to ensure the footer button stays aligned and the card expands gracefully.",
  },
};

export const NoDescription: Story = {
  args: {
    title: "Minimal Card",
    description: "",
  },
};

/** * SHOWCASE: Chromatic Regression Grid
 * Tests multiple card states in one view to save snapshot quota.
 */
export const CardGridShowcase: Story = {
  args: {
    title: "Grid Card",
    description: "Showcase",
  },
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 300px)",
        gap: "20px",
        padding: "20px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Card
        avatarSrc={avatarImage}
        title="Grid Card 1"
        description="Standard view"
      />
      <Card
        avatarSrc={avatarImage}
        title="Grid Card 2"
        buttonLabel="Active State"
      />
      <Card
        avatarSrc={avatarImage}
        title={<b>Custom Bold Title</b>}
        description="Testing ReactNode injection"
      />
    </div>
  ),
};
