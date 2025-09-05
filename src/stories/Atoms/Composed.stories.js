import { composeStory } from "@storybook/react";

import AvatarMeta, { Large as LargeAvatarStory } from "./Avatar.stories";
import BadgeMeta, { Success as SuccessBadgeStory } from "./Badge.stories";
import ButtonMeta, { Primary as PrimaryButtonStory } from "./Button.stories";

// 2. Create composed versions of each story
const ComposedAvatar = composeStory(LargeAvatarStory, AvatarMeta);
const ComposedBadge = composeStory(SuccessBadgeStory, BadgeMeta);
const ComposedButton = composeStory(PrimaryButtonStory, ButtonMeta);

// 3. Define
export default {
  title: "COMPOSITIONS/ComposedStory",
  component: ComposedAvatar,
  subcomponents: { ComposedBadge, ComposedButton },
  tags: ["!autodocs"],
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
        padding: "2rem",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <ComposedAvatar />
        <ComposedButton {...PrimaryButtonStory.args} />
        <ComposedBadge />
      </div>
    </div>
  ),
};
