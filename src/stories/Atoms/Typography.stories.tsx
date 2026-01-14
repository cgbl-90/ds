import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";

const meta = {
  title: "ATOMS/Typography",
  component: Typography,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    chromatic: { diffThreshold: 0 },
  },
  argTypes: {
    type: {
      control: "select",
      options: ["title", "subtitle", "text", "code"],
    },
    styleType: {
      control: "select",
      options: [null, "italic", "bold", "underline"],
    },
  },
  // FIX: Include all REQUIRED props here so individual stories don't error
  args: {
    type: "text",
    label: "Sample text",
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Standard Stories */
export const Title: Story = {
  args: {
    type: "title",
    label: "This is a Title (h1)",
  },
};

export const Subtitle: Story = {
  args: {
    type: "subtitle",
    label: "This is a Subtitle (h2)",
  },
};

export const Text: Story = {
  args: {
    type: "text",
    label: "Standard paragraph text (p)",
  },
};

/** * SHOWCASE: Chromatic Visual Regression Test
 * Using 'render' to show all variants in one snapshot.
 * We cast to 'any' or use a custom story type if the component
 * prop validation is too strict for a wrapped div.
 */
export const TextVariantsShowcase: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Typography type="title" label="Title Style" styleType={undefined} />
      <Typography type="subtitle" label="Subtitle Style" styleType={undefined} />
      <Typography type="text" label="Standard Text" styleType={undefined} />
      <Typography type="text" styleType="bold" label="Bold Text" />
      <Typography type="text" styleType="italic" label="Italic Text" />
      <Typography type="text" styleType="underline" label="Underline Text" />
      <Typography type="code" label="npm install @storybook/blocks" styleType={undefined} />
    </div>
  ),
};
