import { OptionSelector } from "./OptionSelector";

export default {
  title: "COMPONENTS/OptionSelector",
  component: OptionSelector,
  tags: ["autodocs"],
};

export const ThemeSelector = {
  args: {
    label: "Choose Theme",
    selected: "dark",
    options: [
      { label: "Light", value: "light" },
      { label: "Dark", value: "dark" },
    ],
    onChange: (val) => console.log(val),
  },
};

export const LanguageSelector = {
  args: {
    label: "Language",
    selected: "en",
    options: [
      { label: "English", value: "en" },
      { label: "Español", value: "es" },
      { label: "Português", value: "pt" },
    ],
    onChange: (val) => console.log(val),
  },
};

export const NotificationToggle = {
  args: {
    label: "Enable Notifications",
    selected: "yes",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
    onChange: (val) => console.log(val),
  },
};
