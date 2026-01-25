import React from "react";
import { Tab } from "../Atoms/Tab";
import { Icon } from "../Atoms/Icon";

/**
 * A layout component that combines a brand icon with a tabbed navigation system.
 */
export const NavigationTabs: React.FC = () => (
  <div>
    <Icon size="small" />
    <Tab
      tabs={[
        { id: "1", label: "Home", content: "Home Content" },
        { id: "2", label: "Profile", content: "Profile Info" },
        { id: "3", label: "Settings", content: "Settings Form" },
      ]}
    />
  </div>
);