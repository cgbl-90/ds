import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import SecondPage from "./SecondPage";

const meta: Meta<typeof SecondPage> = {
  title: "PAGES/SecondPage",
  component: SecondPage,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof SecondPage>;

/**
 * 1. Default Story
 * Renders the SecondPage which showcases a variety of atomic components.
 */
export const Default: Story = {
  render: () => <SecondPage />,
};