import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "storybook/test";
import { Input } from "./Input";

const meta = {
  title: "ATOMS/Input",
  component: Input,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: "Type here..." },
};

/** Validation: Only allows numbers to be typed */
export const NumbersOnly: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <Input
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value.replace(/[^0-9]/g, ""))}
      />
    );
  },
  args: {
    placeholder: "Enter numbers only...",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.getByTestId("numeric-input");
    await userEvent.type(input, "abc123def");
    await expect((input as HTMLInputElement).value).toBe("123");
  },
};

/** Interaction: Forces all input to lowercase */
export const ForceLowercase: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <Input
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value.toLowerCase())}
      />
    );
  },
  args: {
    placeholder: "Lowercase only...",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.getByTestId("lowercase-input");
    await userEvent.type(input, "HELLO");
    await expect((input as HTMLInputElement).value).toBe("hello");
  },
};

/** Use the password type for sensitive data */
export const PasswordInput: Story = {
  args: {
    type: "password",
    placeholder: "Enter password...",
  },
};
