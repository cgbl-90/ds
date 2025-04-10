import { VideoPlayer } from "./VideoPlayer";
import { within, userEvent } from "storybook/test";
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

export const IgnoreSelectorsTest = {
  args: {},
  parameters: {
    chromatic: { ignoreSelectors: ["video-player-iframe"] },
  },
};

export const IgnoreSelectorsAfterDelay = {
  args: {},
  parameters: {
    chromatic: {
      ignoreSelectors: ["video-player-iframe"],
      delay: 3000,
    },
  },
};

// Trying other attributes

export const IgnoreTitle = {
  args: {},
  parameters: {
    chromatic: { ignoreSelectors: ["iframe[title='YouTube video player']"] },
  },
};

export const IgnoreFrameBorder = {
  args: {},
  parameters: {
    chromatic: { ignoreSelectors: ["iframe[frameborder='0']"] },
  },
};

export const IgnoreAllowFullscreen = {
  args: {},
  parameters: {
    chromatic: { ignoreSelectors: ["iframe[allowfullscreen]"] },
  },
};

export const IgnoreReferrerPolicy = {
  args: {},
  parameters: {
    chromatic: {
      ignoreSelectors: [
        "iframe[referrerpolicy='strict-origin-when-cross-origin']",
      ],
    },
  },
};
