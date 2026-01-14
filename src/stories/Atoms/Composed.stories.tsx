import type { Meta, StoryObj } from "@storybook/react";
import { composeStory } from "@storybook/react";

// Import Atoms and their Metas for composition
import AvatarMeta, { Large as LargeAvatarStory } from "./Avatar.stories";
import BadgeMeta, { Success as SuccessBadgeStory } from "./Badge.stories";
import ButtonMeta, { Primary as PrimaryButtonStory } from "./Button.stories";
import CheckboxMeta, {
  Checked as CheckedCheckboxStory,
} from "./Checkbox.stories";

/**
 * WHAT IS A COMPOSED STORY?
 * * A Composed Story is a pattern where we reuse existing stories from our "Atoms"
 * to build more complex "Compositions" or "Modules".
 * * Using 'composeStory' is powerful because:
 * 1. It brings in all the default Args and Decorators from the original story.
 * 2. It ensures that if you update an Atom's style, the change reflects here automatically.
 * 3. It allows you to test how multiple components interact in a real-world UI.
 * * For more details on Portable Stories and Composition, check the docs:
 * https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#composestory
 */

const ComposedAvatar = composeStory(LargeAvatarStory, AvatarMeta);
const ComposedBadge = composeStory(SuccessBadgeStory, BadgeMeta);
const ComposedButton = composeStory(PrimaryButtonStory, ButtonMeta);
const ComposedCheckbox = composeStory(CheckedCheckboxStory, CheckboxMeta);

/**
 * Composed stories demonstrate how Atoms work together in a real UI context.
 */
const meta = {
  title: "COMPOSITIONS/ComposedStory",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * A 'User Card' composition.
 * Combines Avatar, Badge, Checkbox, and Button into a single functional unit.
 */
export const Default: Story = {
  name: "User Card Example",
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "24px",
        border: "1px solid #e1e4e8",
        borderRadius: "12px",
        maxWidth: "350px",
        fontFamily: '"Work Sans", sans-serif',
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <ComposedAvatar />
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <h3 style={{ margin: 0 }}>Camy Chroma</h3>
            <ComposedBadge />
          </div>
          <ComposedCheckbox label="Online Now" />
        </div>
      </div>

      <p style={{ margin: 0, fontSize: "14px", color: "#586069" }}>
        Senior UI Developer specialized in React and Storybook design systems.
      </p>

      <ComposedButton {...PrimaryButtonStory.args} label="View Profile" />
    </div>
  ),
};
