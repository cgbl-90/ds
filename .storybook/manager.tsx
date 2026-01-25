import { addons } from "storybook/manager-api";
import { create } from "storybook/theming/create";
// Ensure you have a declaration.d.ts file to handle image imports in TS
import logo from "../src/stories/logo.png";

/**
 * The theme object defines the visual style of the Storybook UI itself.
 * Using 'create' ensures the object structure matches Storybook's theming engine.
 */
const theme = create({
  // Use 'light' or 'dark' as the foundation for the theme
  base: "light",

  // Typography: Defines fonts for the UI and code snippets
  fontBase: '"Instrument Sans", "Inter", sans-serif',
  fontCode: '"JetBrains Mono", "Fira Code", monospace',

  // Branding: Configures the logo, title, and links in the sidebar
  brandTitle: "CGBL Design System",
  brandUrl: "https://cgbl-90.github.io/clopez/",
  brandImage: logo,
  brandTarget: "_self",

  // Colors: Primary branding colors used for active states and highlights
  colorPrimary: "#007bff",
  colorSecondary: "#2e09d0", // Matches the primary blue of your components

  // UI Surfaces: Clean, high-contrast settings for a modern appearance
  appBg: "#ffffff",
  appContentBg: "#ffffff",
  appPreviewBg: "#ffffff",
  appBorderColor: "#e1e4e8",
  appBorderRadius: 8, // Slightly rounder corners for a modern look

  // Text: Primary and inverse (contrast) text colors
  textColor: "#212529",
  textInverseColor: "#ffffff",

  // Toolbar: Styling for the top navigation bar
  barTextColor: "#6c757d",
  barSelectedColor: "#3207f3ff",
  barBg: "#ffffff",

  // Forms: Styling for inputs in the Controls and Search panels
  inputBg: "#ffffff",
  inputBorder: "#ffffff",
  inputTextColor: "#212529",
  inputBorderRadius: 4,
});

/**
 * Applies the custom theme and configures the behavior of the Storybook UI panels.
 */
addons.setConfig({
  theme,
  // showPanel: true keeps the Addons/Controls panel visible for developers
  showPanel: true,
  // Positions the panel at the bottom; can also be 'right'
  panelPosition: "bottom",
});