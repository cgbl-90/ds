import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from 'storybook/test';
import { Avatar } from './Avatar';
import avatarImage from "../avatar.png"; 

const meta = {
  title: "ATOMS/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: ["small", "medium", "large"],
      description: "Specifies the size of the avatar.",
      table: {
        defaultValue: { summary: "medium" },
      },
    },
    src: {
      control: "text",
      description: "The image URL for the avatar.",
    },
    alt: {
      control: "text",
      description: "Alternative text for the avatar image.",
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    src: avatarImage,
    size: "medium",
    alt: "User Avatar",
  },
};

export const Small: Story = {
  args: {
    ...Primary.args,
    size: "small",
    alt: "Small Avatar",
  },
};

export const Medium: Story = {
  args: {
    ...Primary.args,
    size: "medium",
    alt: "Medium Avatar",
  },
};

export const Large: Story = {
  args: {
    ...Primary.args,
    size: "large",
    alt: "Large Avatar",
  },
};

export const BrokenImage: Story = {
  args: {
    ...Primary.args,
    src: "https://invalid-url.com/non-existent-image.png",
    alt: "Avatar with broken image link",
  },
  name: "Broken Image",
  parameters: {
    docs: {
      description: {
        story:
          "This story tests the browser's default behavior when an image source is broken. The `alt` text should be displayed.",
      },
    },
  },
};

export const Hover: Story = {
  args: {
    ...Primary.args,
  },
  name: "Hover",
  render: (args) => (
    <>
      {/* This style is scoped to this story to demonstrate the hover effect */}
      <style>{`
        .avatar-hover-container:hover .storybook-avatar {
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
          transform: translateY(-2px);
          transition: all 0.2s ease-in-out;
        }
      `}</style>
      <div
        className="avatar-hover-container"
        data-testid="avatar-container"
        style={{ padding: "4px" }}
      >
        <Avatar {...args} />
      </div>
    </>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const avatarContainer = await canvas.getByTestId("avatar-container");
    await userEvent.hover(avatarContainer);
  },
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates a hover interaction. Hovering over the avatar applies a shadow and subtle lift effect. The `play` function simulates this user action for testing.",
      },
    },
  },
};