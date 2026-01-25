import type { Meta, StoryObj } from "@storybook/react";
import { SettingsRow } from "./SettingsRow";

const meta = {
  title: "COMPONENTS/SettingsRow",
  component: SettingsRow,
  tags: ["autodocs"],
} satisfies Meta<typeof SettingsRow>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Configuration row for updating a public display name */
export const NameSetting: Story = {
  args: {
    label: "Display Name",
    placeholder: "e.g. Maria Santos",
    tooltip: "Your public profile name.",
  },
};

/** Email configuration row with privacy tooltip */
export const EmailSetting: Story = {
  args: {
    label: "Email",
    placeholder: "e.g. user@email.com",
    tooltip: "We’ll never share your email.",
  },
};

/** Geographic location setting with localization hint */
export const LocationSetting: Story = {
  args: {
    label: "Location",
    placeholder: "e.g. São Paulo",
    tooltip: "Your city or region.",
  },
};