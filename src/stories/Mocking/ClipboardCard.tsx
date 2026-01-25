import React, { useState } from "react";
import { Button } from "../Atoms/Button";
import { Typography } from "../Atoms/Typography";
import "./clipboard-card.css";

interface ClipboardCardProps {
  /** The string content to be copied to the user's clipboard */
  textToCopy: string;
}

// Define the possible states for the copy action
type ClipboardStatus = "Idle" | "Copying..." | "Copied!" | "Error";

export const ClipboardCard: React.FC<ClipboardCardProps> = ({ textToCopy }) => {
  const [status, setStatus] = useState<ClipboardStatus>("Idle");

  const handleCopy = async (): Promise<void> => {
    // Check if the browser supports the Clipboard API
    if (!navigator.clipboard) {
      setStatus("Error");
      return;
    }

    setStatus("Copying...");
    try {
      await navigator.clipboard.writeText(textToCopy);
      setStatus("Copied!");
    } catch (err) {
      setStatus("Error");
    }
  };

  return (
    <div className="storybook-clipboard-card">
      <div className="card-header">
        <Typography type="subtitle" label="Clipboard API" />
      </div>
      <div className="card-body">
        <Typography type="code" label={textToCopy} className="text-to-copy" />
        <Button
          primary
          size="small"
          onClick={handleCopy}
          label={status === "Copied!" ? "Copied!" : "Copy Text"}
          disabled={status === "Copying..." || status === "Copied!"}
        />
      </div>
      <div className="card-footer">
        <Typography
          type="text"
          styleType={
            status === "Error" ? "bold" : status === "Copied!" ? "italic" : undefined
          }
          label={`Status: ${status}`}
        />
      </div>
    </div>
  );
};