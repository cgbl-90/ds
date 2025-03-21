import React from "react";
import { Typography } from "../Atoms/Typography";
import ProgressBar from "../Atoms/ProgressBar";

export const ProgressSummary = ({ title, progress }) => (
  <div className="storybook-card">
    <Typography type="subtitle" label={title} />
    <ProgressBar progress={progress} />
  </div>
);
