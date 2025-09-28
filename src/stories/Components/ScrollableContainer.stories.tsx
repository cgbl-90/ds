import type { Meta, StoryObj } from "@storybook/react";
import { expect, waitFor, within } from "storybook/test";
import { ScrollableContainer } from "./ScrollableContainer";

const meta: Meta<typeof ScrollableContainer> = {
  title: "COMPONENTS/ScrollableContainer",
  component: ScrollableContainer,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ScrolledToBottom: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const targetElement = await canvas.findByTestId("item-45");
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    await waitFor(() => {
      expect(targetElement).toBeVisible();
    });
  },
};

/**
 * This story uses `scrollIntoView` to scroll to a specific element
 * positioned in the middle of the list (Item 25).
 */
export const ScrollIntoView: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const targetElement = await canvas.findByTestId("item-25");
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    await waitFor(() => {
      expect(targetElement).toBeVisible();
    });
  },
};

/**
 * This story uses the `scrollTo` method on the container itself
 * to scroll down by a specific pixel amount (800px).
 */
export const ScrollTo: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const scrollContainer = await canvas.findByTestId("scroll-container");
    scrollContainer.scrollTo({
      top: 800,
      behavior: "smooth",
    });
    await waitFor(() => {
      expect(scrollContainer.scrollTop).toBe(800);
    });
  },
};

/**
 * This story applies a specific CSS class to force the scrollbar
 * to be visible at all times, even when not actively scrolling.
 */
export const AlwaysVisibleScrollbar: Story = {
  args: {
    scrollbarClassName: "always-visible-scrollbar",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const targetElement = await canvas.findByTestId("item-25");
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    await waitFor(() => {
      expect(targetElement).toBeVisible();
    });
  },
};

/**
 * This story uses `overflow-y: scroll` to ensure the scrollbar
 * is always rendered, even in headless browsers.
 */
export const ForceVisibleScrollbarInHeadless: Story = {
  args: {
    scrollbarClassName: "force-visible-scrollbar",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const targetElement = await canvas.findByTestId("item-25");
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    await waitFor(() => {
      expect(targetElement).toBeVisible();
    });
  },
};
