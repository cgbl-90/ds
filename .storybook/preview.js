import { hoverdecorator } from "./HoverDecorator";
import { allModes } from "./modes";
import "./../src/scrollbar.css";

const preview = {
  decorators: [
    (Story, context) => {
      // Logic to toggle the hover decorator based on story args
      const shouldApplyHover = context.args.hoverDecorator;
      const dataTestId = context.args.dataTestId || "default";
      if (shouldApplyHover) {
        return hoverdecorator(dataTestId)(Story)(context);
      }
      return <Story {...context} />;
    },
  ],
  parameters: {
    chromatic: {
      cropToViewport: true,
      // FIX: Added a check to see if 'process' exists before accessing env.
      // This prevents the "ReferenceError: process is not defined" crash.
      disableSnapshot:
        typeof process !== "undefined" &&
        process.env?.STORYBOOK_DISABLE_SNAPSHOTS === "true",
    },
    a11y: {
      // Accessibility settings can be configured here
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        small: { name: "Small", styles: { width: "640px", height: "100%" } },
        medium: { name: "Medium", styles: { width: "768px", height: "100%" } },
        large: { name: "Large", styles: { width: "1024px", height: "100%" } },
      },
    },
    initialGlobals: {
      viewport: {
        viewport: { value: "small" },
      },
    },
    modes: {
      small: allModes["small"],
      medium: allModes["medium"],
      large: allModes["large"],
    },
    backgrounds: {
      values: [
        { name: "light", value: "#fff" },
        { name: "dark", value: "#000" },
      ],
    },
  },
};

export default preview;
