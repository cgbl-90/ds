import { useState, useEffect } from "react";
import { Button } from "../Atoms/Button";
import { Typography } from "../Atoms/Typography";
import "./notification-card.css";

export const NotificationCard = () => {
  const [permission, setPermission] = useState("default");

  useEffect(() => {
    if ("Notification" in window) {
      setPermission(Notification.permission);
    }
  }, []);

  const requestPermission = () => {
    if (!("Notification" in window)) {
      // In a real app, you might show a custom modal instead of an alert.
      console.error("This browser does not support desktop notification");
      return;
    }

    Notification.requestPermission().then((result) => {
      setPermission(result);
    });
  };

  const showNotification = () => {
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
