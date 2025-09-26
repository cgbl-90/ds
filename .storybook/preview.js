import { hoverdecorator } from "./HoverDecorator";
import CustomTheme from "./customTheme";

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
        small: { name: "small", styles: { width: "640px", height: "800px" } },
        large: { name: "large", styles: { width: "1024px", height: "1000px" } },
      },
    },
    docs: {
      theme: CustomTheme, // Apply the theme to docs
    },
    /*
    backgrounds: {
      values: [
        { name: "light", value: "#fff" },
        { name: "dark", value: "#000" },
      ],
    },
    */
  },
};

export default preview;
