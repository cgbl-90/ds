import React from "react";
import { hoverdecorator } from "./HoverDecorator";
import { allModes } from "./modes";

const preview = {
  decorators: [
    (Story, context) => {
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
    },
    a11y: {
      // Optional flag to prevent the automatic check
      // manual: true,
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
