// Card.stories.jsx
import { Card } from "./Card";
import avatarImage from "../avatar.png";

export default {
  title: "MOLECULES/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onButtonClick: {
      action: "clicked",
    },
  },
};

export const DefaultCard = {
  args: {
    avatarSrc: avatarImage,
    title: "Default Card Title",
    description:
      "This is a default card description. It provides more context.",
    buttonLabel: "Learn More",
  },
};

export const CardWithLongDescription = {
  args: {
    avatarSrc: avatarImage,
    title: "Long Description Card",
    description:
      "This card has a longer description to showcase how it handles more text. This is great for detailed information.",
    buttonLabel: "Learn More",
  },
};

export const CardWithoutDescription = {
  args: {
    avatarSrc: avatarImage,
    title: "Card Without Description",
    description: "",
    buttonLabel: "Learn More",
  },
};

export const CardWithCustomButton = {
  args: {
    avatarSrc: avatarImage,
    title: "Custom Button Card",
    description: "This card showcases a custom button action.",
    buttonLabel: "Custom Action",
  },
};

export const CardWithDifferentAvatarSize = {
  args: {
    avatarSrc: avatarImage, // Use the imported avatar image
    title: "Small Avatar Card",
    description: "This card uses a smaller avatar size.",
    buttonLabel: "Learn More",
  },
};
