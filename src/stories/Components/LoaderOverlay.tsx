import React from "react";
import Loader from "../Atoms/Loader";
import { Typography } from "../Atoms/Typography";

export interface LoaderOverlayProps {
  /** The text to display beneath the loading spinner */
  message: string;
}

export const LoaderOverlay: React.FC<LoaderOverlayProps> = ({ message }) => (
  <div style={{ textAlign: "center", padding: "20px" }}>
    <Loader />
    <Typography type="text" label={message} />
  </div>
);
