import type { Meta, StoryObj } from "@storybook/react";
import { List } from "./List";

const meta = {
  title: "ATOMS/List",
  component: List,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItems = [
  "Premium design system",
  "Storybook 10 compatible",
  "TypeScript ready",
];

export const WithNumbers: Story = {
  args: { items: defaultItems, styleType: "decimal" },
};

export const WithCustomCheckmark: Story = {
  args: {
    items: defaultItems,
    styleType: "custom-icon",
    icon: "✓",
  },
};

/** Perfect for showing lists with a specific brand character */
export const WithPlusSign: Story = {
  args: {
    items: defaultItems,
    styleType: "custom-icon",
    icon: "+",
  },
};
