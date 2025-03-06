import { Card } from "./Card";
import avatarImage from "../avatar.png";
import { Typography } from "../Atoms/Typography";

export default {
  title: "COMPONENTS/Card",
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
    title: <Typography type="title" label="Default Card Title" />,
    description: (
      <Typography
        type="text"
        label="This is a default card description. It provides more context."
      />
    ),
    buttonLabel: "Learn More",
  },
};

export const CardWithLongDescription = {
  args: {
    avatarSrc: avatarImage,
    title: <Typography type="title" label="Long Description Card" />,
    description: (
      <Typography
        type="text"
        label="This card has a longer description to showcase how it handles more text. This is great for detailed information."
      />
    ),
    buttonLabel: "Learn More",
  },
};

export const CardWithoutDescription = {
  args: {
    avatarSrc: avatarImage,
    title: <Typography type="title" label="Card Without Description" />,
    description: "",
    buttonLabel: "Learn More",
  },
};

export const CardWithCustomButton = {
  args: {
    avatarSrc: avatarImage,
    title: <Typography type="title" label="Custom Button Card" />,
    description: (
      <Typography
        type="text"
        label="This card showcases a custom button action."
      />
    ),
    buttonLabel: "Custom Action",
  },
};

export const CardWithDifferentAvatarSize = {
  args: {
    avatarSrc: avatarImage,
    title: <Typography type="title" label="Small Avatar Card" />,
    description: (
      <Typography type="text" label="This card uses a smaller avatar size." />
    ),
    buttonLabel: "Learn More",
  },
};
