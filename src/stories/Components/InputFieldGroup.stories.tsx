import type { Meta, StoryObj } from "@storybook/react";
import { InputFieldGroup } from "./InputFieldGroup";
import { fn } from "storybook/test";

const meta = {
  title: "COMPONENTS/InputFieldGroup",
  component: InputFieldGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof InputFieldGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Displays a positive status, such as a unique username availability */
export const WithHint: Story = {
  args: {
    label: "Username",
    value: "user_01",
    badgeText: "Available",
    badgeVariant: "success", // Matches "style" in BadgeProps
    onChange: fn(),
  },
};

/** Used to indicate a field that requires attention or is empty */
export const WithWarning: Story = {
  args: {
    label: "Phone Number",
    value: "",
    badgeText: "Required",
    badgeVariant: "warning", // Matches "style" in BadgeProps
    onChange: fn(),
  },
};

/** Shows a confirmed or verified state for sensitive data */
export const WithInfo: Story = {
  args: {
    label: "Email Address",
    value: "jane@example.com",
    badgeText: "New",
    badgeVariant: "new", // Matches "style" in BadgeProps
    onChange: fn(),
  },
};
