// Avatar.stories.js
import { Avatar } from "./Avatar";
import avatarImage from "../avatar.png";
import { allModes } from "../../../.storybook/modes.js";
import { composeStory } from "@storybook/react";
import Meta, * as stories from "./Avatar.stories"; // Self-import to use composeStory

export default {
  title: "ATOMS/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
    chromatic: {
      modes: {
        small: allModes["small"],
        large: allModes["large"],
      },
    },
  },
  args: {
    dataTestId: "avatar",
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
    hoverDecorator: true,
  },
};

/**
 * Side-by-side rendering of the "Medium" story
 * in both light and dark themes.
 */
const MediumStory = composeStory(stories.Medium, Meta);

export const MediumLightAndDark = () => (
  <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
    <div
      className="light-theme"
      style={{ padding: "1rem", background: "#fff" }}
    >
      <MediumStory />
    </div>
    <div className="dark-theme" style={{ padding: "1rem", background: "#000" }}>
      <MediumStory />
    </div>
  </div>
);

// Compose both Small + Medium stories
const SmallStory = composeStory(stories.Small, Meta);
const MediumStorySmall = composeStory(stories.Medium, Meta);

/**
 * Small viewport — Medium avatar, light vs dark
 */
export const MediumSmallViewportLightAndDark = () => (
  <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
    <div
      className="light-theme"
      style={{ padding: "1rem", background: "#fff", width: "200px" }}
    >
      <MediumStorySmall />
    </div>
    <div
      className="dark-theme"
      style={{ padding: "1rem", background: "#000", width: "200px" }}
    >
      <MediumStorySmall />
    </div>
  </div>
);
MediumSmallViewportLightAndDark.parameters = {
  viewport: "small",
};

/**
 * Small viewport — Small avatar, light vs dark
 */
export const SmallSmallViewportLightAndDark = () => (
  <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
    <div
      className="light-theme"
      style={{ padding: "1rem", background: "#fff", width: "200px" }}
    >
      <SmallStory />
    </div>
    <div
      className="dark-theme"
      style={{ padding: "1rem", background: "#000", width: "200px" }}
    >
      <SmallStory />
    </div>
  </div>
);
SmallSmallViewportLightAndDark.parameters = {
  viewport: "small",
};
