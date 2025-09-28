import { composeStory } from "@storybook/react";

import AvatarMeta, { Large as LargeAvatarStory } from "./Avatar.stories";
import BadgeMeta, { Success as SuccessBadgeStory } from "./Badge.stories";
import ButtonMeta, { Primary as PrimaryButtonStory } from "./Button.stories";

// 2. Create composed versions of each story
const ComposedAvatar = composeStory(LargeAvatarStory, AvatarMeta);
const ComposedBadge = composeStory(SuccessBadgeStory, BadgeMeta);
const ComposedButton = composeStory(PrimaryButtonStory, ButtonMeta);

// 3. Define the meta for your new composed story file
export default {
  title: "COMPOSITIONS/ComposedStory",
  component: ComposedAvatar,
  tags: ["autodocs"],
  subcomponents: { ComposedBadge, ComposedButton },
};

// 4. Create the new story that renders the composed stories together
export const composedStory = {
  name: "Default",
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <h2>This is a Composed Story</h2>
      <p>It combines stories from Avatar, Badge, and Button.</p>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <ComposedAvatar />
        <ComposedButton {...PrimaryButtonStory.args} />
        <ComposedBadge />
      </div>
    </div>
  ),
};
