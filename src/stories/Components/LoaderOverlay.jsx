import React from "react";
import Loader from "../Atoms/Loader";
import { Typography } from "../Atoms/Typography";

export const LoaderOverlay = ({ message }) => (
  <div style={{ textAlign: "center", padding: "20px" }}>
    <Loader />
    <Typography type="text" label={message} />
  </div>
);
