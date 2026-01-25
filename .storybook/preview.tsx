import type { Preview } from "@storybook/react";
import { allModes } from "./modes";
import "./../src/scrollbar.css";

const preview: Preview = {
  parameters: {
    tags: ["autodocs"],
    docs: {
      toc: true, // Optional: Adds a Table of Contents to your docs
    },
    chromatic: {
      cropToViewport: true,
      disableSnapshot:
        typeof process !== "undefined" &&
        process.env?.STORYBOOK_DISABLE_SNAPSHOTS === "true",
    },
    // ... other parameters (controls, viewport, modes) remain the same
  },
};

export default preview;