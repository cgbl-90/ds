import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Comment } from "./Comment";
import Man1 from "../man-1.png";
import Women from "../woman.png";

const meta = {
  title: "COMPONENTS/Comment",
  component: Comment,
  tags: ["autodocs"],
} satisfies Meta<typeof Comment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: { user: { avatar: Man1 }, text: "Nice work on this release!" },
};

/** Chromatic test for text wrapping */
export const ThreadShowcase: Story = {
  args: {
    user: { avatar: Man1 },
    text: "This is a sample comment to demonstrate how the Comment component handles longer text content within its layout. It should wrap appropriately and maintain readability across different screen sizes.",
  },
  render: () => (
    <div
      style={{ maxWidth: "400px", padding: "20px", border: "1px solid #eee" }}
    >
      <Comment user={{ avatar: Man1 }} text="This looks great!" />
      <Comment
        user={{ avatar: Women }}
        text="Can we adjust the padding on the button?"
      />
    </div>
  ),
};
