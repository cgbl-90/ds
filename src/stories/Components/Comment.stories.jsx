import { Comment } from "./Comment";
import Man1 from "../man-1.png";
import Man2 from "../man-2.png";
import Women from "../woman.png";

export default {
  title: "COMPONENTS/Comment",
  component: Comment,
};

export const BasicComment = {
  args: {
    user: { avatar: Man1 },
    text: "Nice work on this release!",
  },
};

export const LongComment = {
  args: {
    user: { avatar: Man2 },
    text: "This is a longer comment meant to show how the component handles wrapping and overflow in smaller containers.",
  },
};

export const ShortComment = {
  args: {
    user: { avatar: Women },
    text: "Thanks!",
  },
};
