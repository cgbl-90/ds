// Avatar.stories.js
import { Avatar } from "./Avatar";
import avatarImage from "../avatar.png";
// import { allModes } from "../../../.storybook/modes.js";

export default {
  title: "ATOMS/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
    chromatic: {
      //disableSnapshot: true,
      diffThreshold: 0,
    },
  },
};

export const Small = {
  args: {
    src: avatarImage,
    size: "small",
    alt: "Small Avatar",
  },
};

export const Medium = {
  args: {
    src: avatarImage,
    size: "medium",
    alt: "Medium Avatar",
  },
};

export const Large = {
  args: {
    src: avatarImage,
    size: "large",
    alt: "Large Avatar",
  },
};

export const HoverInteraction = {
  args: {
    src: avatarImage,
    size: "medium",
    alt: "Hover Interaction Avatar",
    hoverDecorator: true, // Enable hover decorator
  },
};
