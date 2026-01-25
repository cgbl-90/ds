import React from "react";
import { Typography } from "../Atoms/Typography";
import { ProgressBar } from "../Atoms/ProgressBar";

export interface ProgressSummaryProps {
  /** The title of the task or course */
  title: string;
  /** Percentage completion value (0-100) */
  progress: number;
}

export const ProgressSummary: React.FC<ProgressSummaryProps> = ({
  title,
  progress,
}) => (
  <div className="storybook-card">
    <Typography type="subtitle" label={title} />
    <ProgressBar progress={progress} />
  </div>
);
