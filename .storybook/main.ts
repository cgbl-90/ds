import type { StorybookConfig } from "@storybook/react-webpack5"; // Import the specific type for autocompletion

const config: StorybookConfig = {
  /**
   * Specifies the entry points for your stories.
   * Updated to prioritize .ts and .tsx files.
   */
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    "storybook/addon-docs",
    "@storybook/addon-webpack5-compiler-babel",
    "@storybook/addon-mcp",
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  features: {
    componentsManifest: true,
  },
  staticDirs: ["../public"],

  /**
   * TypeScript specific settings to ensure your Docs and Controls tables
   * are generated correctly from your component interfaces.
   */
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      /**
       * Filters out inherited HTML props to keep the documentation
       * focused on your custom component API.
       */
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
      shouldExtractLiteralValuesFromEnum: true,
      savePropValueAsString: true,
    },
  },
};

export default config;
