// src/components/ScrollableContainer.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor, within } from "storybook/test";
import { ScrollableContainer } from "./ScrollableContainer";

const meta: Meta<typeof ScrollableContainer> = {
  title: "Components/ScrollableContainer",
  component: ScrollableContainer,
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
