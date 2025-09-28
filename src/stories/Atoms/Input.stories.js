import { useState } from "react";
import { expect, userEvent, within } from "storybook/test";
import { Input } from "./Input.js";

export default {
  title: "ATOMS/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    state: {
      control: {
        type: "select",
        options: ["hover", "focused", null],
      },
    },
    type: {
      control: {
        type: "select",
        options: ["text", "number", "password", "email"],
      },
      description: "The type of the input element.",
    },
  },
};

export const Default = {
  args: {
    placeholder: "Type here...",
  },
};

export const Small = {
  args: {
    size: "small",
    placeholder: "Small Input",
  },
};

export const Large = {
  args: {
    size: "large",
    placeholder: "Large Input",
  },
};

export const Disabled = {
  args: {
    placeholder: "Disabled Input",
    disabled: true,
  },
};

// --- Interaction and Validation Stories ---
export const NumbersOnly = {
  name: "Numbers Only",
  render: (args) => {
    const [value, setValue] = useState("");
    const handleChange = (e) => {
      const numericValue = e.target.value.replace(/[^0-9]/g, "");
      setValue(numericValue);
    };
    return <Input {...args} value={value} onChange={handleChange} />;
  },
  args: {
    placeholder: "Enter numbers only...",
    "data-testid": "numbers-only-input",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.getByTestId("numbers-only-input");
    await userEvent.type(input, "abc123def456");
    await expect(input.value).toBe("123456");
  },
};

export const ForceLowercase = {
  name: "Force Lowercase",
  render: (args) => {
    const [value, setValue] = useState("");
    const handleChange = (e) => {
      setValue(e.target.value.toLowerCase());
    };
    return <Input {...args} value={value} onChange={handleChange} />;
  },
  args: {
    placeholder: "Text will be lowercase...",
    "data-testid": "lowercase-input",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.getByTestId("lowercase-input");
    await userEvent.type(input, "ThIs Is A MiXeD CaSe StRiNg");
    await expect(input.value).toBe("this is a mixed case string");
  },
};

export const WithCharacterLimit = {
  name: "Character Limit",
  args: {
    placeholder: "Max 10 characters...",
    maxLength: 10,
    "data-testid": "char-limit-input",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.getByTestId("char-limit-input");
    await userEvent.type(input, "This string is too long");
    await expect(input.value).toBe("This strin");
    await expect(input.value.length).toBe(10);
  },
};

export const PasswordInput = {
  name: "Password",
  args: {
    placeholder: "Enter password...",
    type: "password",
    "data-testid": "password-input",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.getByTestId("password-input");
    await expect(input.value).toBe("");
    await expect(input).toHaveAttribute("type", "password");
  },
};
