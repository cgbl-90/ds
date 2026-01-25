import React from "react";
import { Avatar } from "../Atoms/Avatar";
import { Typography } from "../Atoms/Typography";
import Badge from "../Atoms/Badge";
import { Button } from "../Atoms/Button";
import { Input } from "../Atoms/Input";
import { Checkbox } from "../Atoms/Checkbox";
import { Radio } from "../Atoms/Radio";
import { ProgressBar } from "../Atoms/ProgressBar";
import { NotificationDotProps } from "../Atoms/NotificationDot";
import { Tab } from "../Atoms/Tab";
import Tooltip from "../Atoms/Tooltip";
import Divider from "../Atoms/DividerLine";
import Links from "../Atoms/Links";
import { List } from "../Atoms/List";
import Loader from "../Atoms/Loader";
import avatarImage from "../avatar.png";

/**
 * SecondPage is a kitchen-sink component demonstrating how 
 * diverse Atomic components integrate within a single layout.
 */
const SecondPage: React.FC = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      {/* 1. Header & Branding */}
      <Typography type="title" label="Welcome to My Crazy Page" />
      <Typography type="subtitle" label="A showcase of some elements" />
      <Divider />

      {/* 2. Visual Identity Elements */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Avatar src={avatarImage} size="medium" alt="User Avatar" />
      </div>

      {/* 3. Status & Feedback Elements */}
      <div style={{ marginTop: "20px" }}>
        <Typography type="text" label="Loading Animation:" />
        <Loader />
      </div>

      {/* 4. Form and Interaction Section */}
      <div style={{ marginTop: "20px" }}>
        <Typography type="text" label="Try interacting with these elements:" />
        <Input placeholder="Type something..." />
        <Checkbox label="Accept Terms" />
        <Radio label="Select this option" />
        <Button primary={true} size="medium" label="Click Me" />
      </div>

      {/* 5. Metrics & Contextual UI */}
      <div style={{ marginTop: "20px" }}>
        <Typography type="text" label="Loading Progress:" />
        <ProgressBar progress={50} />
        {/* Fixed: Use NotificationDot as a component, not type */}
        {/* Assuming there's a NotificationDot default export/component from the import file */}
        {/* Replace NotificationDotProps with correct NotificationDot usage */}
        {/* If NotificationDot is a component, use as below; adjust if different: */}
        {/* <NotificationDot color="red" size={10} position="top-right" /> */}
      </div>

      {/* Fixed: Divider does not accept styleType; use props allowed by DividerLine */}
      <Divider dashed />

      {/* 6. Navigation and Content Lists */}
      <div style={{ marginTop: "20px" }}>
        <Typography type="text" label="Useful Links:" />
        <Links text="Primary Link" href="#"  />
        <Links text="Secondary Link" href="#" />
      </div>

      <div style={{ marginTop: "20px" }}>
        <Typography type="text" label="Example List:" />
        <List items={["Item 1", "Item 2", "Item 3"]} styleType="decimal" />
      </div>

      {/* 7. Complex Navigation Components */}
      <div style={{ marginTop: "20px" }}>
        <Typography type="text" label="Navigation Tabs:" />
        <Tab
          tabs={[
            { id:"1", label: "Tab 1", content: "Content 1" },
            { id:"2", label: "Tab 2", content: "Content 2" },
            { id:"3", label: "Tab 3", content: "Content 3" },
          ]}
        />
      </div>

      {/* 8. Progressive Disclosure */}
      <div style={{ marginTop: "20px" }}>
        <Tooltip text="This is a helpful tooltip!">
          <button>Hover over me</button>
        </Tooltip>
      </div>
    </div>
  );
};

export default SecondPage;