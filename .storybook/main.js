/** @type { import('@storybook/react-webpack5').StorybookConfig } */
import { DefinePlugin } from "webpack";

const config = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    {
      name: "@chromatic-com/storybook",
      options: {
        // IMPROVEMENT: Added a fallback to ensure it doesn't crash if NODE_ENV is undefined
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

  docs: {
    autodocs: "tag", // Automatically generates docs for components with the @tag
  },

  typescript: {
    // This generates the 'Controls' table from your TypeScript interfaces
    reactDocgen: "react-docgen-typescript",
  },

  // NEW: This helps prevent the "process is not defined" error
  // by telling Webpack to define process.env in the browser bundle.
  webpackFinal: async (config) => {
    config.plugins.push(
      new DefinePlugin({
        "process.env": JSON.stringify(process.env),
      })
    );
    return config;
  },
};

export default config;
