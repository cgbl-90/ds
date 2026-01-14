import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Loader from "./Loader";
import LoaderShadowDom from "./LoaderShadowDom";

const meta = {
  title: "Atoms/Loader",
  component: Loader,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    chromatic: { pauseAnimationAtEnd: true },
  },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** * Renders the loader inside a Shadow Root to test CSS encapsulation.
 */
export const ShadowDom: Story = {
  render: () => <LoaderShadowDom />,
};
