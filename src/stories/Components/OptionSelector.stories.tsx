import type { Meta, StoryObj } from "@storybook/react";
import { OptionSelector } from "./OptionSelector";
import { fn } from "storybook/test";

const meta = {
  title: "COMPONENTS/OptionSelector",
  component: OptionSelector,
  tags: ["autodocs"],
} satisfies Meta<typeof OptionSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Selection for UI aesthetic preferences */
export const ThemeSelector: Story = {
  args: {
    label: "Choose Theme",
    selected: "dark",
    options: [
      { label: "Light", value: "light" },
      { label: "Dark", value: "dark" },
    ],
    onChange: fn(),
  },
};

/** Global language localization selector */
export const LanguageSelector: Story = {
  args: {
    label: "Language",
    selected: "en",
    options: [
      { label: "English", value: "en" },
      { label: "Español", value: "es" },
      { label: "Português", value: "pt" },
    ],
    onChange: fn(),
  },
};

/** Binary choice for system permissions */
export const NotificationToggle: Story = {
  args: {
    label: "Enable Notifications",
    selected: "yes",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
    onChange: fn(),
  },
};
