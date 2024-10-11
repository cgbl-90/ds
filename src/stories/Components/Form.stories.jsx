// Form.stories.jsx
import { Form } from "./Form";
import { within, userEvent } from "@storybook/testing-library";

export default {
  title: "COMPONENTS/Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const DefaultForm = {
  args: {},
};

export const FilledForm = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(
      canvas.getByPlaceholderText(/enter your name/i),
      "Jane Doe"
    );
    await userEvent.type(
      canvas.getByPlaceholderText(/enter your email/i),
      "jane@example.com"
    );
    await userEvent.type(
      canvas.getByPlaceholderText(/enter your favorite color/i),
      "Blue"
    );
    await userEvent.click(canvas.getByLabelText(/male/i));
    await userEvent.type(
      canvas.getByPlaceholderText(/enter your feedback/i),
      "Great product!"
    );
    await userEvent.selectOptions(canvas.getByRole("combobox"), "email");
    await userEvent.click(
      canvas.getByLabelText(/i agree to the terms and conditions/i)
    );
  },
};

export const SubmittedForm = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(
      canvas.getByPlaceholderText(/enter your name/i),
      "Jane Doe"
    );
    await userEvent.type(
      canvas.getByPlaceholderText(/enter your email/i),
      "jane@example.com"
    );
    await userEvent.type(
      canvas.getByPlaceholderText(/enter your favorite color/i),
      "Green"
    );
    await userEvent.click(canvas.getByLabelText(/female/i));
    await userEvent.type(
      canvas.getByPlaceholderText(/enter your feedback/i),
      "Loved it!"
    );
    await userEvent.selectOptions(canvas.getByRole("combobox"), "phone");
    await userEvent.click(
      canvas.getByLabelText(/i agree to the terms and conditions/i)
    );
    await userEvent.click(canvas.getByRole("button", { name: /submit/i }));
  },
};
