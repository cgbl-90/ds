import { composeStory } from "@storybook/react";

import AvatarMeta, {
  Large as LargeAvatarStory,
  Medium as MediumAvatarStory,
  Small as SmallAvatarStory,
} from "./Avatar.stories";

// 1. Compose each story with the meta configuration.
// This creates new, standalone components that include all decorators and args.
const ComposedLargeAvatar = composeStory(LargeAvatarStory, AvatarMeta);
const ComposedMediumAvatar = composeStory(MediumAvatarStory, AvatarMeta);
const ComposedSmallAvatar = composeStory(SmallAvatarStory, AvatarMeta);

// 2. Define metadata for the new story file.
export default {
  title: "COMPOSITIONS/ComposedAvatarStory",
  tags: ["!autodocs"],
};

// 3. Create a new story that renders the composed components.
export const AllModesInOneStory = {
  name: "Default",
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        {/* 4. Render the composed story components */}
        <ComposedLargeAvatar />
        <ComposedMediumAvatar />
        <ComposedSmallAvatar />
      </div>
    </div>
  ),
};
