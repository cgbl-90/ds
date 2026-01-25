import React, { useState, useEffect } from "react";
import { Button } from "../Atoms/Button";
import { Typography } from "../Atoms/Typography";
import "./notification-card.css";

export const NotificationCard: React.FC = () => {
  const [permission, setPermission] = useState<NotificationPermission>("default");

  useEffect(() => {
    if ("Notification" in window) {
      setPermission(Notification.permission);
    }
  }, []);

  const requestPermission = (): void => {
    if (!("Notification" in window)) {
      console.error("This browser does not support desktop notification");
      return;
    }

    Notification.requestPermission().then((result: NotificationPermission) => {
      setPermission(result);
    });
  };

  const showNotification = (): void => {
    if (permission === "granted") {
      new Notification("Hello from Storybook!", {
        body: "This is a mocked notification.",
      });
    }
  };

  return (
    <div className="storybook-notification-card">
      <div className="card-header">
        <Typography type="subtitle" label="Browser Notifications" />
      </div>
      <div className="card-body">
        <Typography type="text" label={`Permission status: `} />
        <Typography
          type="code"
          label={permission}
          className={`status--${permission}`}
        />
      </div>
      <div className="card-footer">
        {permission !== "granted" && (
          <Button
            primary
            onClick={requestPermission}
            label="Request Permission"
            disabled={permission !== "default"}
          />
        )}
        <Button
          onClick={showNotification}
          label="Show Notification"
          disabled={permission !== "granted"}
        />
      </div>
    </div>
  );
};