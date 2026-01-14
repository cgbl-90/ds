import type { Meta, StoryObj } from "@storybook/react";
import { ContactCard } from "./ContactCard";
import Man1 from "../man-1.png";
import Man2 from "../man-2.png";
import Women from "../woman.png";

const meta = {
  title: "COMPONENTS/ContactCard",
  component: ContactCard,
  tags: ["autodocs"],
  argTypes: {
    iconSrc: { control: "text" },
  },
} satisfies Meta<typeof ContactCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BusinessContact: Story = {
  args: { iconSrc: Man1, name: "Zhang Wei", email: "zhang@example.com" },
};

/** SHOWCASE: Testing multiple layouts for Chromatic */
export const DirectoryShowcase: Story = {
  args: {
    iconSrc: Man1,
    name: "Zhang Wei",
    email: "zhang@example.com",
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <ContactCard iconSrc={Man1} name="Zhang Wei" email="zhang@example.com" />
      <ContactCard
        iconSrc={Women}
        name="Fatima Musa"
        email="fatima.dev@openstack.io"
      />
      <ContactCard
        iconSrc={Man2}
        name="Admin Desk"
        email="support@company.com"
      />
    </div>
  ),
};
