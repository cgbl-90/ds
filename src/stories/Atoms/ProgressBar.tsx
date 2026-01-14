import React from "react";
import "./progressBar.css";

export interface ProgressBarProps {
  /** Percentage completion (0-100) */
  progress: number;
  /** Show marker labels below the bar */
  showMarkers?: boolean;
  /** Optional custom color */
  color?: string;
}

/**
 * A sleek progress indicator with support for markers and custom branding.
 */
export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  showMarkers = true,
  color = "#2563eb",
}) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className="progress-container">
      <div className="progress-bar-wrapper">
        <div
          className="progress-bar-fill"
          style={{ width: `${clampedProgress}%`, backgroundColor: color }}
          role="progressbar"
          aria-valuenow={clampedProgress}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      {showMarkers && (
        <div className="progress-markers">
          {[0, 25, 50, 75, 100].map((m) => (
            <span key={m} className={clampedProgress >= m ? "active" : ""}>
              {m}%
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
