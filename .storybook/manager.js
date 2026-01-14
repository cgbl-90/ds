import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming/create";
import logo from "../src/stories/logo.png"; // ESM import is safer in SB10

const theme = create({
  base: "light", // Keeps the main docs readable

  // Typography
  fontBase: '"Instrument Sans", "Inter", sans-serif',
  fontCode: '"JetBrains Mono", "Fira Code", monospace',

  brandTitle: "CGBL Design System",
  brandUrl: "https://cgbl-90.github.io/clopez/",
  brandImage: logo,
  brandTarget: "_self",

  // Colors - Using your favorite Blue
  colorPrimary: "#007bff",
  colorSecondary: "#2e09d0", // Your primary blue from the component

  // UI - Clean and high-contrast
  appBg: "#ffffffff",
  appContentBg: "#ffffffff",
  appPreviewBg: "#ffffff",
  appBorderColor: "#e1e4e8",
  appBorderRadius: 8, // Slightly rounder for a modern feel

  // Text colors
  textColor: "#212529",
  textInverseColor: "#ffffff",

  // Toolbar (The top bar)
  barTextColor: "#6c757d",
  barSelectedColor: "#3207f3ff",
  barBg: "#ffffff",

  // Forms
  inputBg: "#ffffff",
  inputBorder: "#ffffffff",
  inputTextColor: "#212529",
  inputBorderRadius: 4,
});

addons.setConfig({
  theme,
  // This hides the 'Addons' panel by default for a cleaner 'Gallery' view
  showPanel: true,
  panelPosition: "bottom",
});
