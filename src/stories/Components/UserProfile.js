import React from "react";
import PropTypes from "prop-types";
import { Avatar } from "../Atoms/Avatar";
import Badge from "../Atoms/Badge";
import { Button } from "../Atoms/Button";
import "./user-profile.css";

export const UserProfile = ({ user, status, onSendMessage }) => (
  <div className="storybook-user-profile">
    <Avatar src={user.avatarSrc} size="large" alt={user.name} />
    <div className="user-details">
      <span className="user-name">{user.name}</span>
      <Badge style={status.style} text={status.text} />
    </div>
    <Button primary size="small" onClick={onSendMessage} label="Send Message" />
  </div>
);

UserProfile.propTypes = {
  /**
   * User object containing name and avatar source URL
   */
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatarSrc: PropTypes.string.isRequired,
  }).isRequired,
  /**
   * Status object for the badge
   */
  status: PropTypes.shape({
    text: PropTypes.string.isRequired,
    style: PropTypes.oneOf(["new", "success", "warning"]),
  }),
  /**
   * Optional click handler for the button
   */
  onSendMessage: PropTypes.func,
};

UserProfile.defaultProps = {
  status: {
    text: "Active",
    style: "success",
  },
  onSendMessage: () => {},
};