import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "./Form";
import { within, userEvent, expect } from "storybook/test";

const meta = {
  title: "COMPONENTS/Form",
  component: Form,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** * Interactive test: Storybook 9 Play function
 * Chromatic will capture the state AFTER these actions run.
 */
export const InteractionTest: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByPlaceholderText(/name/i), "Jane Doe");
    await userEvent.type(
      canvas.getByPlaceholderText(/email/i),
      "jane@example.com"
    );
    await userEvent.click(canvas.getByLabelText(/i agree/i));

    // Verify state before snapshot
    await expect(canvas.getByLabelText(/i agree/i)).toBeChecked();
  },
};
