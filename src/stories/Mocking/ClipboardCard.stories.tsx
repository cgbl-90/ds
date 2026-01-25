import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "storybook/test";
import { ClipboardCard } from "./ClipboardCard";

const meta: Meta<typeof ClipboardCard> = {
  title: "API/Clipboard",
  component: ClipboardCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    textToCopy: "https://storybook.js.org/",
  },
};

export default meta;
type Story = StoryObj<typeof ClipboardCard>;

export const Default: Story = {};

export const CopySuccess: Story = {
  play: async ({ canvasElement }) => {
    // Mocking navigator.clipboard for TS compliance
    Object.defineProperty(navigator, "clipboard", {
      value: {
        writeText: () => Promise.resolve(),
      },
      configurable: true,
    });

    const canvas = within(canvasElement);
    const copyButton = canvas.getByRole("button", { name: /Copy Text/i });
    await userEvent.click(copyButton);
  },
};

export const CopyError: Story = {
  play: async ({ canvasElement }) => {
    Object.defineProperty(navigator, "clipboard", {
      value: {
        writeText: () => Promise.reject(new Error("Copy failed!")),
      },
      configurable: true,
    });

    const canvas = within(canvasElement);
    const copyButton = canvas.getByRole("button", { name: /Copy Text/i });
    await userEvent.click(copyButton);
  },
};

export const ApiNotSupported: Story = {
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