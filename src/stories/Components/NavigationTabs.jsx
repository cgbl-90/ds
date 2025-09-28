import { Tab } from "../Atoms/Tab";
import { Icon } from "../Atoms/Icon";

export const NavigationTabs = () => (
  <div>
    <Icon size="small" />
    <Tab
      tabs={[
        { label: "Home", content: "Home Content" },
        { label: "Profile", content: "Profile Info" },
        { label: "Settings", content: "Settings Form" },
      ]}
    />
  </div>
);
