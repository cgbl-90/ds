// Card.jsx
import React from "react";
import PropTypes from "prop-types";
import { Avatar } from "../Atoms/Avatar";
import { Button } from "../Atoms/Button";
import { Typography } from "../Atoms/Typography";
import "./card.css";

export const Card = ({
  avatarSrc,
  title,
  description,
  buttonLabel,
  onButtonClick,
}) => {
  return (
    <div className="storybook-card">
      <Avatar src={avatarSrc} alt="User Avatar" size="large" />
      <Typography type="title" label={title} styleType="bold" />
      <Typography type="text" label={description} />
      <Button label={buttonLabel} onClick={onButtonClick} primary />
    </div>
  );
};

Card.propTypes = {
  avatarSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  buttonLabel: PropTypes.string,
  onButtonClick: PropTypes.func,
};

Card.defaultProps = {
  description: "",
  buttonLabel: "Learn More",
  onButtonClick: () => {},
};
