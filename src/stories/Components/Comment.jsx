import React from "react";
import { Avatar } from "../Atoms/Avatar";
import { Typography } from "../Atoms/Typography";
import Divider from "../Atoms/DividerLine";

export const Comment = ({ user, text }) => (
  <div>
    <Avatar src={user.avatar} size="small" />
    <Typography type="text" label={text} />
    <Divider style="secondary" />
  </div>
);
