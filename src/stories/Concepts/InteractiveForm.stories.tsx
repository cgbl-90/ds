import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, fireEvent } from "storybook/test";
import { InteractiveForm } from "./InteractiveForm";

const meta: Meta<typeof InteractiveForm> = {
  title: "Concepts/InteractiveForm",
  component: InteractiveForm,
  // Tags and parameters can be added here as seen in your other stories
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InteractiveForm>;

/**
 * Helper function to fill out the form.
 * Typed with 'ReturnType<typeof within>' to resolve the 'canvas' failure.
 */
const fillFormSteps = async (canvas: ReturnType<typeof within>) => {
  await userEvent.type(canvas.getByLabelText(/1. Name:/i), "Jane");
  await userEvent.type(canvas.getByLabelText(/2. Surname:/i), "Doe");
  await userEvent.type(
    canvas.getByLabelText(/3. Email:/i),
    "jane.doe@example.com",
  );
  await userEvent.type(canvas.getByLabelText(/4. Age:/i), "28");
  await userEvent.type(canvas.getByLabelText(/6. Country:/i), "USA");
  await userEvent.click(canvas.getByLabelText(/Married/i));
  await userEvent.click(canvas.getByLabelText(/JavaScript/i));
  await userEvent.click(canvas.getByLabelText(/Python/i));
  await userEvent.type(
    canvas.getByLabelText(/10. Any feedback for us?/i),
    "This is a great form!",
  );
  await userEvent.type(
    canvas.getByLabelText(/11. How did you hear about us?/i),
    "LinkedIn",
  );
  await userEvent.click(
    canvas.getByLabelText(/Yes, I'd like to receive updates./i),
  );
  await userEvent.click(
    canvas.getByLabelText(/I agree to the Terms and Conditions./i),
  );
};

/** Interactive test: Submitting the form using a mouse click via userEvent */
export const SubmittedWithUserEventClick: Story = {
  name: "userEvent.click()",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await fillFormSteps(canvas);
    const submitButton = canvas.getByRole("button", {
      name: /Submit/i,
    });
    await userEvent.click(submitButton);
  },
};

/** Interactive test: Submitting the form using fireEvent (synchronous trigger) */
export const SubmittedWithFireEventClick: Story = {
  name: "fireEvent.click()",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await fillFormSteps(canvas);
    const submitButton = canvas.getByRole("button", {
      name: /Submit/i,
    });
    fireEvent.click(submitButton);
  },
};

/** Interactive test: Submitting the form by focusing the button and pressing Enter */
export const SubmittedWithKeyboard: Story = {
  name: "userEvent.keyboard()",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await fillFormSteps(canvas);
    const submitButton = canvas.getByRole("button", {
      name: /Submit/i,
    });
    submitButton.focus();
    await userEvent.keyboard("{Enter}");
  },
};
