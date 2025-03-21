import { Comment } from "./Comment";

export default {
  title: "COMPONENTS/Comment",
  component: Comment,
};

export const BasicComment = {
  args: {
    //user: { avatar: "https://via.placeholder.com/50" },
    text: "Nice work on this release!",
  },
};

export const LongComment = {
  args: {
    //user: { avatar: "https://via.placeholder.com/50" },
    text: "This is a longer comment meant to show how the component handles wrapping and overflow in smaller containers.",
  },
};

export const ShortComment = {
  args: {
    //user: { avatar: "https://via.placeholder.com/50" },
    text: "Thanks!",
  },
};
