import type { Meta, StoryObj } from "@storybook/react";
import { ProfileSummary } from "./ProfileSummary";
import { fn } from "storybook/test";
import Man1 from "../man-1.png";
import Man2 from "../man-2.png";
import Women from "../woman.png";

const meta = {
  title: "COMPONENTS/ProfileSummary",
  component: ProfileSummary,
  tags: ["autodocs"],
} satisfies Meta<typeof ProfileSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Standard active user profile with a success status badge */
export const ActiveUser: Story = {
  args: {
    user: {
      avatar: Women,
      name: "Amina El-Sayed",
      status: "active",
      statusStyle: "success",
    },
    onView: fn(),
  },
};

/** Inactive profile state using a warning badge color */
export const InactiveUser: Story = {
  args: {
    user: {
      avatar: Man1,
      name: "John Doe",
      status: "inactive",
      statusStyle: "warning",
    },
    onView: fn(),
  },
};

/** Banned user profile showing a visual alert */
export const BannedUser: Story = {
  args: {
    user: {
      avatar: Man2,
      name: "Carlos Ruiz",
      status: "banned",
      statusStyle: "warning", // Adjusted to match Badge's restricted union types
    },
    onView: fn(),
  },
};