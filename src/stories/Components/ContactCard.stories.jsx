import { ContactCard } from "./ContactCard";
import Man1 from "../man-1.png";
import Man2 from "../man-2.png";
import Women from "../woman.png";

export default {
  title: "COMPONENTS/ContactCard",
  component: ContactCard,
};

export const BusinessContact = {
  args: {
    iconSrc: Man1, // Use default icon
    name: "Zhang Wei",
    email: "zhang@example.com",
  },
};

export const DeveloperContact = {
  args: {
    iconSrc: Women, // Use default icon
    name: "Fatima Musa",
    email: "fatima.dev@openstack.io",
  },
};

export const AdminContact = {
  args: {
    iconSrc: Man2,
    name: "Admin Desk",
    email: "support@company.com",
  },
};
