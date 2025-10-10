import { userEvent, within, fireEvent } from "storybook/test";
import { InteractiveForm } from "./InteractiveForm";

export default {
  title: "Concepts/InteractiveForm",
  component: InteractiveForm,
};

const fillFormSteps = async (canvas) => {
  await userEvent.type(canvas.getByLabelText("1. Name:"), "Jane");
  await userEvent.type(canvas.getByLabelText("2. Surname:"), "Doe");
  await userEvent.type(
    canvas.getByLabelText("3. Email:"),
    "jane.doe@example.com"
  );
  await userEvent.type(canvas.getByLabelText("4. Age:"), "28");
  await userEvent.type(canvas.getByLabelText("6. Country:"), "USA");
  await userEvent.click(canvas.getByLabelText("Married"));
  await userEvent.click(canvas.getByLabelText("JavaScript"));
  await userEvent.click(canvas.getByLabelText("Python"));
  await userEvent.type(
    canvas.getByLabelText("10. Any feedback for us?"),
    "This is a great form!"
  );
  await userEvent.type(
    canvas.getByLabelText("11. How did you hear about us?"),
    "LinkedIn"
  );
  await userEvent.click(
    canvas.getByLabelText("Yes, I'd like to receive updates.")
  );
  await userEvent.click(
    canvas.getByLabelText("I agree to the Terms and Conditions.")
  );
};

export const SubmittedWithUserEventClick = {
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

export const SubmittedWithFireEventClick = {
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

export const SubmittedWithKeyboard = {
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
