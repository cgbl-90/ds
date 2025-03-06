import React from "react";

import { Avatar } from "../Atoms/Avatar";
import { Typography } from "../Atoms/Typography";
import Badge from "../Atoms/Badge";
import { Button } from "../Atoms/Button";
import { Input } from "../Atoms/Input";
import { Checkbox } from "../Atoms/Checkbox";
import { Radio } from "../Atoms/Radio";
import ProgressBar from "../Atoms/ProgressBar";
import NotificationDot from "../Atoms/NotificationDot";
import { Tab } from "../Atoms/Tab";
import Tooltip from "../Atoms/Tooltip";
import Divider from "../Atoms/DividerLine";
import Links from "../Atoms/Links";
import { List } from "../Atoms/List";
import Loader from "../Atoms/Loader";
import avatarImage from "../avatar.png";

const SecondPage = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      {/* Header Section */}
      <Typography type="title" label="Welcome to My Crazy Page" />
      <Typography type="subtitle" label="A showcase of some elements" />
      <Divider styleType="primary" />

      {/* Avatar and Badge Section */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Avatar src={avatarImage} size="medium" alt="User Avatar" />
        <Badge text="New" styleType="new" />
      </div>

      {/* Loader Example */}
      <div style={{ marginTop: "20px" }}>
        <Typography type="text" label="Loading Animation:" />
        <Loader />
      </div>

      {/* Interactive Elements Section */}
      <div style={{ marginTop: "20px" }}>
        <Typography type="text" label="Try interacting with these elements:" />
        <Input placeholder="Type something..." />
        <Checkbox label="Accept Terms" />
        <Radio label="Select this option" />
        <Button primary={true} size="medium" label="Click Me" />
      </div>

      {/* Progress & Notifications */}
      <div style={{ marginTop: "20px" }}>
        <Typography type="text" label="Loading Progress:" />
        <ProgressBar progress={50} />
        <NotificationDot color="red" size={10} position="top-right" />
      </div>

      <Divider styleType="secondary" dashed />

      {/* Navigation Links */}
      <div style={{ marginTop: "20px" }}>
        <Typography type="text" label="Useful Links:" />
        <Links text="Primary Link" href="#" styleType="primary" />
        <Links text="Secondary Link" href="#" styleType="secondary" />
      </div>

      {/* List Example */}
      <div style={{ marginTop: "20px" }}>
        <Typography type="text" label="Example List:" />
        <List items={["Item 1", "Item 2", "Item 3"]} styleType="decimal" />
      </div>

      {/* Tab Navigation */}
      <div style={{ marginTop: "20px" }}>
        <Typography type="text" label="Navigation Tabs:" />
        <Tab
          tabs={[
            { label: "Tab 1", content: "Content 1" },
            { label: "Tab 2", content: "Content 2" },
            { label: "Tab 3", content: "Content 3" },
          ]}
        />
      </div>

      {/* Tooltip Example */}
      <div style={{ marginTop: "20px" }}>
        <Tooltip text="This is a helpful tooltip!">
          <button>Hover over me</button>
        </Tooltip>
      </div>
    </div>
  );
};

export default SecondPage;
