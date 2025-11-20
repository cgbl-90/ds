import { within, userEvent, expect } from "storybook/test";
import { ChipGroup } from "./ChipGroup";

export default {
  title: "Concepts/ChipGroup",
  component: ChipGroup,
  args: {
    label: "Fruits",
    items: ["apple", "banana", "cherry", "date", "eggplant", "11 more"],
  },
};

export const DesktopWithHover = {
  name: "State: Desktop (with Hover)",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const bananaLabel = await canvas.findByText("banana");

    const bananaChip = bananaLabel.closest(".chip");

    await expect(bananaChip).toBeInTheDocument();

    const removeButtonInitial = within(bananaChip).getByRole("button");
    await expect(removeButtonInitial).not.toBeVisible();

    // await userEvent.hover(bananaChip); // Simulation

    // const removeButtonOnHover = within(bananaChip).getByRole("button");
    // await expect(removeButtonOnHover).toBeVisible();
  },
};

export const MobileWithHover = {
  name: "State: Mobile (with Hover)",
  parameters: {
    viewport: {
      defaultViewport: "small",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const bananaLabel = await canvas.findByText("banana");
    const bananaChip = bananaLabel.closest(".chip");
    await expect(bananaChip).toBeInTheDocument();

    const removeButtonInitial = within(bananaChip).getByRole("button");
    await expect(removeButtonInitial).not.toBeVisible();

    // await userEvent.hover(bananaChip);

    // const removeButtonOnHover = within(bananaChip).getByRole("button");
    // await expect(removeButtonOnHover).toBeVisible();
  },
};
