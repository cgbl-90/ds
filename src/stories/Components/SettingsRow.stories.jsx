import { SettingsRow } from "./SettingsRow";

export default {
  title: "COMPONENTS/SettingsRow",
  component: SettingsRow,
};

export const NameSetting = {
  args: {
    label: "Display Name",
    placeholder: "e.g. Maria Santos",
    tooltip: "Your public profile name.",
  },
};

export const EmailSetting = {
  args: {
    label: "Email",
    placeholder: "e.g. user@email.com",
    tooltip: "We’ll never share your email.",
  },
};

export const LocationSetting = {
  args: {
    label: "Location",
    placeholder: "e.g. São Paulo",
    tooltip: "Your city or region.",
  },
};
