// .storybook/preview.js

// ✨ 1. Import your new CustomThemeProvider
import { CustomThemeProvider } from "../src/ThemeProvider";

import { hoverdecorator } from "./HoverDecorator";
import CustomTheme from "./customTheme"; // This is for the Storybook UI, which is fine

const preview = {
  decorators: [
    // ✨ 2. Add your provider as the outermost decorator
    (Story) => (
      <CustomThemeProvider>
        <Story />
      </CustomThemeProvider>
    ),
    // Your existing decorator for hover logic
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
    // ... all your other parameters remain the same
    chromatic: { cropToViewport: true },
    a11y: {},
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    viewport: {
      viewports: {
        small: { name: "small", styles: { width: "640px", height: "800px" } },
        large: { name: "large", styles: { width: "1024px", height: "1000px" } },
      },
    },
    docs: {
      theme: CustomTheme,
    },
  },
};

export default preview;
