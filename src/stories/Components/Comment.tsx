import React from "react";
import { Avatar } from "../Atoms/Avatar";
import { Typography } from "../Atoms/Typography";
import Divider from "../Atoms/DividerLine";

export interface CommentProps {
  user: {
    /** User's profile image URL */
    avatar: string,
  };
  /** The content of the comment */
  text: string;
}

export const Comment: React.FC<CommentProps> = ({ user, text }) => (
  <div className="comment-thread-item" style={{ marginBottom: "16px" }}>
    <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
      <Avatar src={user.avatar} size="small" />
      <Typography type="text" label={text} />
    </div>
    <Divider />
  </div>
);
