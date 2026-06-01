import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    tags: ["autodocs"],

    docs: {
      toc: true, // Optional: Adds a Table of Contents to your docs
    },

    // ... other parameters (controls, viewport, modes) remain the same
    chromatic: {
      cropToViewport: true,
      disableSnapshot:
        typeof process !== "undefined" &&
        process.env?.STORYBOOK_DISABLE_SNAPSHOTS === "true",
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
