import { within, userEvent } from "storybook/test";
import { ClipboardCard } from "./ClipboardCard";

export default {
  title: "API/Clipboard",
  component: ClipboardCard,
  parameters: {
    layout: "centered",
  },
  args: {
    textToCopy: "https://storybook.js.org/",
  },
};

// Default state with a functional clipboard
export const Default = {};

// Mocks a successful copy action
export const CopySuccess = {
  play: async ({ canvasElement }) => {
    Object.defineProperty(navigator, "clipboard", {
      value: {
        writeText: () => {
          return Promise.resolve();
        },
      },
      configurable: true,
    });

    const canvas = within(canvasElement);
    const copyButton = canvas.getByRole("button", { name: /Copy Text/i });
    await userEvent.click(copyButton);
  },
};

// Mocks a failed copy action
export const CopyError = {
  play: async ({ canvasElement }) => {
    Object.defineProperty(navigator, "clipboard", {
      value: {
        writeText: () => {
          return Promise.reject(new Error("Copy failed!"));
        },
      },
      configurable: true,
    });

    const canvas = within(canvasElement);
    const copyButton = canvas.getByRole("button", { name: /Copy Text/i });
    await userEvent.click(copyButton);
  },
};

// Mocks a browser where the Clipboard API is not supported
export const ApiNotSupported = {
  play: async ({ canvasElement }) => {
    Object.defineProperty(navigator, "clipboard", {
      value: undefined,
      configurable: true,
    });

    const canvas = within(canvasElement);
    const copyButton = canvas.getByRole("button", { name: /Copy Text/i });
    await userEvent.click(copyButton);
  },
};
