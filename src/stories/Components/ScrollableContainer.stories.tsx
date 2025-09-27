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

/**
 * This story captures the default, unscrolled state of the component.
 * It serves as the baseline for visual regression tests in Chromatic.
 */
export const Default: Story = {};

/**
 * This story demonstrates how to programmatically scroll the container
 * and capture a stable snapshot in Chromatic.
 * 1. It renders the component.
 * 2. The `play` function executes after render.
 * 3. It finds the target element (Item 45).
 * 4. It calls `scrollIntoView` to initiate a smooth scroll.
 * 5. It uses `waitFor` to pause execution until the target element is visible.
 * 6. Chromatic takes the snapshot only after `waitFor` resolves.
 */
export const ScrolledToBottom: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Query for the target element we want to scroll to.
    const targetElement = await canvas.findByTestId("item-45");

    // Step 1: Initiate the asynchronous scroll animation.
    // The `play` function would normally resolve here, causing a race condition.
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    // Step 2: Use `waitFor` to declaratively wait for the desired state.
    // This pauses the `play` function, preventing it from resolving prematurely.
    // The test will only proceed once the target element is visible in the viewport.
    await waitFor(() => {
      expect(targetElement).toBeVisible();
    });
  },
};
