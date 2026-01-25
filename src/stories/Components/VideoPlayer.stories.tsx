import type { Meta, StoryObj } from "@storybook/react";
import { VideoPlayer } from "./VideoPlayer";
import { within, userEvent } from "storybook/test";

const meta = {
  title: "COMPONENTS/VideoPlayer",
  component: VideoPlayer,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: { videoId: "zhrboql8UuU" },
} satisfies Meta<typeof VideoPlayer>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Tests the play command with a 5-second delay to observe UI state */
export const PlayFor5Seconds: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: /play/i }));
    await new Promise((res) => setTimeout(res, 5000));
  },
};

/** Chromatic test: Ignore the iframe content to prevent false positives from video motion */
export const IgnoreSelectorsTest: Story = {
  parameters: {
    chromatic: { ignoreSelectors: [".video-player-iframe"] },
  },
};
