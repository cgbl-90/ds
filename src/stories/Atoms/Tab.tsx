// Tab.tsx
import React, { useState, useEffect, ReactNode } from "react";
import "./tab.css";

export interface TabData {
  /** Unique identifier for the tab */
  id: string;
  /** Label displayed on the tab button */
  label: ReactNode;
  /** Content to display when the tab is active */
  content: ReactNode;
}

export interface TabProps {
  /** Array of tab objects */
  tabs: TabData[];
  /** Optional ID to set the default active tab */
  initialTabId?: string;
  /** Callback function triggered when a tab is clicked */
  onTabChange?: (id: string) => void;
}

/**
 * A highly accessible Tab component for switching between views.
 */
export const Tab: React.FC<TabProps> = ({
  tabs,
  initialTabId,
  onTabChange,
}) => {
  const getInitialTab = () => {
    if (initialTabId && tabs.some((tab) => tab.id === initialTabId)) {
      return initialTabId;
    }
    return tabs && tabs.length > 0 ? tabs[0].id : null;
  };

  const [activeTab, setActiveTab] = useState<string | null>(getInitialTab);

  useEffect(() => {
    setActiveTab(getInitialTab());
  }, [tabs, initialTabId]);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  if (!tabs || tabs.length === 0) {
    return <div className="tab-empty">No tabs to display.</div>;
  }

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className="tab" role="tabs-container">
      <div className="tab-header" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? "tab-active" : ""}`}
            onClick={() => handleTabClick(tab.id)}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            id={`tab-${tab.id}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        className="tab-content"
        role="tabpanel"
        id={`panel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
      >
        {activeContent}
      </div>
    </div>
  );
};
