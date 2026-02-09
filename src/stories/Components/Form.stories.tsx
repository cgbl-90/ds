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

/** * 1. Test basic interactions - filling out the form and submitting.
 */
export const InteractionTest: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByPlaceholderText(/name/i), "Jane Doe");
    await userEvent.type(
      canvas.getByPlaceholderText(/email/i),
      "jane@example.com",
    );
    await userEvent.click(canvas.getByLabelText(/i agree/i));

    // Verify state before snapshot
    await expect(canvas.getByLabelText(/i agree/i)).toBeChecked();
  },
};

/** 2. Test validation/error state by leaving fields empty */
export const EmptySubmit: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const submitBtn = canvas.getByRole("button", { name: /submit/i });
    await userEvent.click(submitBtn);
    // You could add an expectation here for a validation message if you implement one
  },
};

/** 3. Test full form completion */
export const FullFormEntry: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByPlaceholderText(/name/i), "John Smith");
    await userEvent.type(
      canvas.getByPlaceholderText(/email/i),
      "john@smith.com",
    );
    await userEvent.click(canvas.getByLabelText(/i agree/i));

    await expect(canvas.getByPlaceholderText(/name/i)).toHaveValue(
      "John Smith",
    );
    await expect(canvas.getByPlaceholderText(/email/i)).toHaveValue(
      "john@smith.com",
    );
  },
};

/** 4. Test Toggle Behavior */
export const ToggleAgreement: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByLabelText(/i agree/i);

    // Double click/toggle test
    await userEvent.click(checkbox);
    await expect(checkbox).toBeChecked();
    await userEvent.click(checkbox);
    await expect(checkbox).not.toBeChecked();
  },
};
