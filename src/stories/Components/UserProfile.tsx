import React from "react";
import { Avatar } from "../Atoms/Avatar";
import Badge from "../Atoms/Badge";
import { Button } from "../Atoms/Button";
import "./user-profile.css";

export interface UserProfileProps {
  user: {
    name: string;
    avatarSrc: string;
  };
  status?: {
    text: string;
    style: "new" | "success" | "warning";
  };
  /** Callback for the message action */
  onSendMessage?: () => void;
}

export const UserProfile: React.FC<UserProfileProps> = ({ 
  user, 
  status = { text: "Active", style: "success" }, 
  onSendMessage = () => {} 
}) => (
  <div className="storybook-user-profile">
    <Avatar src={user.avatarSrc} size="large" alt={user.name} />
    <div className="user-details">
      <span className="user-name">{user.name}</span>
      <Badge style={status.style} text={status.text} />
    </div>
    <Button primary size="small" onClick={onSendMessage} label="Send Message" />
  </div>
);