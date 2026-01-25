import type { StorybookConfig } from "@storybook/react-webpack5"; // Import the specific type for autocompletion
import { DefinePlugin } from "webpack";

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
    {
      name: "@chromatic-com/storybook",
      options: {
        configFile:
          (process.env.NODE_ENV || "development") === "development"
            ? "chromatic.config.json"
            : "production.config.json",
      },
    },
    "@storybook/addon-webpack5-compiler-babel",
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
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

  /**
   * Extends the Webpack configuration.
   * Typed as an async function that returns the config object.
   */
  webpackFinal: async (config) => {
    config.plugins?.push(
      new DefinePlugin({
        "process.env": JSON.stringify(process.env),
      })
    );
    return config;
  },
};

export default config;