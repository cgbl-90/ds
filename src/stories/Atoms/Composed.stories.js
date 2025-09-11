import { Avatar } from "./Avatar";
import { Button } from "./Button";
import { Badge } from "./Badge";

import { Large as LargeAvatarStory } from "./Avatar.stories";
import { Primary as PrimaryButtonStory } from "./Button.stories";
import { Success as SuccessBadgeStory } from "./Badge.stories";

// Default export is required by Storybook
export default {
  title: "COMPOSITIONS/ComposedStory",
  tags: ["!autodocs"],
};

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
        <Avatar {...LargeAvatarStory.args} />
        <Button {...PrimaryButtonStory.args} />
        <Badge {...SuccessBadgeStory.args} />
      </div>
    </div>
  ),
};
