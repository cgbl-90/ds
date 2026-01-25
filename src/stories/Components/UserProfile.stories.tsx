import type { Meta, StoryObj } from "@storybook/react";
import { UserProfile } from "./UserProfile";
import { within, fn, userEvent } from "storybook/test";

const meta = {
  title: "COMPONENTS/UserProfile",
  component: UserProfile,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof UserProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default state with active status */
export const Default: Story = {
  args: {
    user: { name: "Jane Doe", avatarSrc: "https://placehold.co/100" },
  },
};

/** Simulates a user interaction clicking the CTA */
export const MessageSent: Story = {
  args: {
    ...Default.args,
    onSendMessage: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const messageButton = canvas.getByRole("button", { name: /send message/i });
    await userEvent.click(messageButton);
  },
};
