import React from "react";
import { Avatar } from "../Atoms/Avatar"; // Fix this path based on your actual file structure
import { Typography } from "../Atoms/Typography";
import Divider from "../Atoms/DividerLine";

export const Comment = ({ user, text }) => (
  <div>
    <Avatar src={user.avatar} size="small" />
    <Typography type="text" label={text} />
    <Divider variant="secondary" />{" "}
    {/* or style={{ ... }} if you're doing inline styles */}
  </div>
);
