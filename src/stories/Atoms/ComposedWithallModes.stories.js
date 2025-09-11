import { Avatar } from "./Avatar";
import {
  Large as LargeAvatarStory,
  Medium as MediumAvatarStory,
  Small as SmallAvatarStory,
} from "./Avatar.stories";

export default {
  title: "COMPOSITIONS/ComposedAvatarStory",
  tags: ["!autodocs"],
};

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
        <Avatar {...LargeAvatarStory.args} />
        <Avatar {...MediumAvatarStory.args} />
        <Avatar {...SmallAvatarStory.args} />
      </div>
    </div>
  ),
};
