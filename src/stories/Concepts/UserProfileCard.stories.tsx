import type { Meta, StoryObj } from "@storybook/react";
import { UserProfileCard } from "./UserProfileCard";

const meta: Meta<typeof UserProfileCard> = {
  title: "Components/UserProfileCard",
  component: UserProfileCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    imageUrl: { control: "text" },
    name: { control: "text" },
    title: { control: "text" },
    bio: { control: "text" },
    className: { table: { disable: true } },
  },
};
export default meta;

type Story = StoryObj<typeof UserProfileCard>;

const placeholderImage =
  "https://via.placeholder.com/150/2563EB/FFFFFF?Text=User";

/** The default story displays the card with the minimum required information. */
export const Default: Story = {
  name: "Default Card",
  args: {
    imageUrl: placeholderImage,
    name: "Jane Doe",
    title: "Software Engineer",
  },
};

/** This story shows the card with the optional 'bio' prop included. */
export const WithBio: Story = {
  name: "Card with Biography",
  args: {
    ...Default.args,
    name: "Alex Johnson",
    title: "Lead Designer",
    bio: "Creative lead with over 8 years of experience in user-centered design and brand identity.",
    imageUrl: "https://via.placeholder.com/150/05e7e7/011949?Text=User",
  },
};
