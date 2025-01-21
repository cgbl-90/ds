/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@chromatic-com/storybook",
      options: {
        configFile:
          process.env.NODE_ENV === "development"
            ? "chromatic.config.json"
            : "production.config.json",
      },
    },
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  staticDirs: ["../public"],

  // Enable the viewportStoryGlobals feature flag
  featureFlags: {
    viewportStoryGlobals: true,
  },

  // Global parameters configuration
  parameters: {
    viewport: {
      viewports: {
        desktop: {
          name: "Desktop",
          styles: {
            width: "1280px",
            height: "800px",
          },
        },
        mobile: {
          name: "Mobile",
          styles: {
            width: "375px",
            height: "667px",
          },
        },
      },
      defaultViewport: "desktop", // Default viewport to load
    },
  },

  webpackFinal: async (config) => {
    // Remove the alias for @storybook/preset-create-react-app
    delete config.resolve.alias["@storybook/preset-create-react-app"];

    // Handle TS and JSX files properly with ts-loader or babel-loader
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: "ts-loader", // or babel-loader
          options: {
            transpileOnly: true,
          },
        },
      ],
    });

    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
};

export default config;
