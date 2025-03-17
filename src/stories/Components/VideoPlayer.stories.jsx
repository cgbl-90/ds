import { VideoPlayer } from "./VideoPlayer";
import { within, userEvent } from "@storybook/testing-library";
import "./videoplayer.css";

export default {
  title: "COMPONENTS/VideoPlayer",
  component: VideoPlayer,
  parameters: {
    layout: "centered",
  },
  args: {
    videoId: "zhrboql8UuU", // Example video ID
  },
};

export const PlayFor5Seconds = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const playButton = canvas.getByRole("button", { name: /play/i });
    await userEvent.click(playButton);
    await new Promise((resolve) => setTimeout(resolve, 5000));
  },
};

export const PlayThenStop = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const playButton = canvas.getByRole("button", { name: /play/i });
    const stopButton = canvas.getByRole("button", { name: /stop/i });
    await userEvent.click(playButton);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await userEvent.click(stopButton);
  },
};
