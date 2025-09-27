import React, { useState } from "react";
import { Button } from "../Atoms/Button";
import { Typography } from "../Atoms/Typography";
import "./clipboard-card.css";

export const ClipboardCard = ({ textToCopy }) => {
  const [status, setStatus] = useState("Idle");

  const handleCopy = async () => {
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
            status === "Error" ? "bold" : status === "Copied!" ? "italic" : null
          }
          label={`Status: ${status}`}
        />
      </div>
    </div>
  );
};
