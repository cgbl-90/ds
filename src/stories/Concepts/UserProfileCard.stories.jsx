import { UserProfileCard } from "./UserProfileCard";

const meta = {
  title: "Components/UserProfileCard",
  component: UserProfileCard,
  parameters: {
    // Centers the component in the canvas
    layout: "centered",
  },
  // Enables automatic documentation
  tags: ["autodocs"],
  argTypes: {
    imageUrl: { control: "text" },
    name: { control: "text" },
    title: { control: "text" },
    bio: { control: "textarea" },
    // Hide className from Storybook controls table
    className: { table: { disable: true } },
  },
};
export default meta;

// Placeholder image for the stories
const placeholderImage =
  "https://via.placeholder.com/150/2563EB/FFFFFF?Text=User"; // Uses a color from your ColorGradientBar

/**
 * The default story displays the card with the minimum required information.
 */
export const Default = {
  name: "Default Card",
  args: {
    imageUrl: placeholderImage,
    name: "Jane Doe",
    title: "Software Engineer",
  },
};

/**
 * This story shows the card with the optional 'bio' prop included.
 */
export const WithBio = {
  name: "Card with Biography",
  args: {
    ...Default.args,
    name: "Alex Johnson",
    title: "Lead Designer",
    bio: "Creative lead with over 8 years of experience in user-centered design and brand identity.",
    imageUrl: "https://via.placeholder.com/150/05e7e7/011949?Text=User", // Different color
  },
};

/**
 * This story demonstrates how the card might look with a longer bio that wraps.
 */
export const LongBiography = {
  name: "Card with Long Biography",
  args: {
    ...WithBio.args,
    name: "Dr. Evelyn Reed",
    title: "Data Scientist",
    bio: "Passionate about machine learning, deep learning, and statistical modeling. Co-author of 'Data-Driven Decisions'. Enjoys hiking and chess.",
    imageUrl: "https://via.placeholder.com/150/011949/FFFFFF?Text=User", // Different color
  },
};
