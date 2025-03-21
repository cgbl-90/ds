import { ProfileSummary } from "./ProfileSummary";
import Man1 from "../man-1.png";
import Man2 from "../man-2.png";
import Women from "../woman.png";

export default {
  title: "COMPONENTS/ProfileSummary",
  component: ProfileSummary,
};

export const ActiveUser = {
  args: {
    user: {
      avatar: Women,
      name: "Amina El-Sayed",
      status: "active",
      statusStyle: "success",
    },
    onView: () => alert("Viewing profile..."),
  },
};

export const InactiveUser = {
  args: {
    user: {
      avatar: Man1,
      name: "John Doe",
      status: "inactive",
      statusStyle: "warning",
    },
    onView: () => alert("Viewing profile..."),
  },
};

export const BannedUser = {
  args: {
    user: {
      avatar: Man2,
      name: "Carlos Ruiz",
      status: "banned",
      statusStyle: "danger",
    },
    onView: () => alert("Viewing profile..."),
  },
};
