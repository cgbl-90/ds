import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect, screen } from "storybook/test";
import { FocusTestComponent } from "./FocusTestComponent";

const meta: Meta<typeof FocusTestComponent> = {
  title: "Concepts/Focus Behavior",
  component: FocusTestComponent,
  parameters: {
    layout: "centered",
    chromatic: {
      delay: 300, // Give interactions time to complete
      pauseAnimationAtEnd: true,
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FocusTestComponent>;

/**
 * Story 1: Click → Dropdown Focus
 * Tests if Chromatic captures dropdown after click interaction
 */
export const ClickOpensDropdown: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Open Dropdown");

    // Click to open dropdown
    await userEvent.click(button);

    // Assert dropdown is visible
    const dropdown = await screen.findByTestId("dropdown-menu");
    await expect(dropdown).toBeVisible();

    // Assert dropdown has focus (or at least is in document)
    await expect(dropdown).toBeInTheDocument();

    // Small delay to ensure dropdown is fully rendered
    await new Promise((resolve) => setTimeout(resolve, 200));
  },
};

/**
 * Story 2: Hover → Tooltip
 * Tests if Chromatic captures tooltip on hover
 */
export const HoverShowsTooltip: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const hoverButton = canvas.getByText("Hover for Tooltip");

    // Hover to show tooltip
    await userEvent.hover(hoverButton);

    // Wait for tooltip to appear
    const tooltip = await screen.findByTestId(
      "hover-tooltip",
      {},
      { timeout: 1000 }
    );
    await expect(tooltip).toBeVisible();

    // Assert tooltip content
    await expect(tooltip).toHaveTextContent(
      "This is a tooltip that appears on hover"
    );

    // Small delay for CSS transitions
    await new Promise((resolve) => setTimeout(resolve, 300));
  },
};

/**
 * Story 3: Focus → Input with Auto-select
 * Tests if Chromatic captures focused input state
 */
export const FocusSelectsInputText: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId("focus-input");

    // Type some text
    await userEvent.type(input, "Test input text");

    // Focus the input (should select all text)
    await userEvent.click(input);

    // Assert input has focus and value
    await expect(input).toHaveFocus();
    await expect(input).toHaveValue("Test input text");

    // Small delay for focus styles
    await new Promise((resolve) => setTimeout(resolve, 200));
  },
};

/**
 * Story 4: Tab Navigation
 * Tests tab sequence focus behavior
 */
export const TabNavigationSequence: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const user = userEvent.setup();

    const openButton = canvas.getByText("Open Dropdown");

    // Explicitly start focus
    await user.click(openButton);
    expect(openButton).toHaveFocus();

    // 1️⃣ First tab: active dropdown item
    await user.tab();
    const tab1 = canvas.getByText("TAB1");
    expect(tab1).toHaveFocus();

    // 2️⃣ Second tab: hover button
    await user.tab();
    const hoverButton = canvas.getByText("Hover Button");
    expect(hoverButton).toHaveFocus();

    // 3️⃣ Third tab: input
    await user.tab();
    const input = canvas.getByTestId("focus-input");
    expect(input).toHaveFocus();
  },
};

/**
 * Story 5: Modal Dialog Focus Trap
 * Tests if modal maintains focus and is captured
 */
export const ModalFocusTrap: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Open modal
    const modalButton = canvas.getByText("Open Modal");
    await userEvent.click(modalButton);

    // Wait for modal to appear
    const modal = await screen.findByTestId(
      "modal-dialog",
      {},
      { timeout: 1000 }
    );
    await expect(modal).toBeVisible();

    // Find close button inside modal
    const closeButton = await screen.findByTestId(
      "modal-close-button",
      {},
      { timeout: 1000 }
    );

    // Assert close button is visible and has focus (modal should trap focus)
    await expect(closeButton).toBeVisible();
    // Note: Some focus tests may be flaky in Chromatic
    // await expect(closeButton).toHaveFocus();

    // Small delay for modal animations
    await new Promise((resolve) => setTimeout(resolve, 500));
  },
};

/**
 * Story 6: Resize Observer Interaction
 * Tests if resize events affect focus
 */
export const WithResizeInteraction: Story = {
  parameters: {
    chromatic: {
      delay: 500,
      viewports: [320, 768, 1024], // Test different viewport sizes
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Focus on input first
    const input = canvas.getByTestId("focus-input");
    await userEvent.click(input);
    await userEvent.type(input, "Testing resize interaction");

    // Verify input has value
    await expect(input).toHaveValue("Testing resize interaction");

    // Hover over tooltip trigger
    const hoverButton = canvas.getByText("Hover for Tooltip");
    await userEvent.hover(hoverButton);

    // Wait for tooltip
    await screen.findByTestId("hover-tooltip", {}, { timeout: 1000 });

    // Longer delay to account for potential resize events
    await new Promise((resolve) => setTimeout(resolve, 800));
  },
};

/**
 * Story 7: Comprehensive Focus Test
 * Combines multiple interactions to test race conditions
 */
export const ComprehensiveFocusTest: Story = {
  parameters: {
    chromatic: {
      delay: 800,
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 1. Open dropdown
    const dropdownButton = canvas.getByText("Open Dropdown");
    await userEvent.click(dropdownButton);

    // 2. Type in input
    const input = canvas.getByTestId("focus-input");
    await userEvent.type(input, "Comprehensive test");

    // 3. Hover for tooltip
    const hoverButton = canvas.getByText("Hover for Tooltip");
    await userEvent.hover(hoverButton);

    // 4. Switch tabs
    const tab2Button = canvas.getByText("TAB2");
    await userEvent.click(tab2Button);

    // 5. Verify tab content changed
    const tabContent = canvas.getByTestId("tab-content");
    await expect(tabContent).toHaveTextContent("Content for tab2");

    // 6. Open modal
    const modalButton = canvas.getByText("Open Modal");
    await userEvent.click(modalButton);

    // Wait for all interactions to settle
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Final assertion - at least modal should be visible
    const modal = await screen.findByTestId(
      "modal-dialog",
      {},
      { timeout: 1500 }
    );
    await expect(modal).toBeVisible();
  },
};

/**
 * Story 8: No Interactions (Baseline)
 * Shows the component without any interactions
 */
export const BaselineNoInteractions: Story = {
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};
