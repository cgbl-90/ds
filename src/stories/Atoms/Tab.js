import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./tab.css";

// The 'onTabChange' prop is a function that gets called when a tab is changed.
// The 'initialTabId' prop allows setting a default active tab.
export const Tab = ({ tabs, initialTabId, onTabChange }) => {
  const getInitialTab = () => {
    if (initialTabId && tabs.some((tab) => tab.id === initialTabId)) {
      return initialTabId;
    }
    return tabs && tabs.length > 0 ? tabs[0].id : null;
  };

  const [activeTab, setActiveTab] = useState(getInitialTab);

  useEffect(() => {
    setActiveTab(getInitialTab());
  }, [tabs, initialTabId]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (onTabChange) {
      onTabChange(tabId);
    }
  };
  if (!tabs || tabs.length === 0) {
    return <div className="tab-empty">No tabs to display.</div>;
  }

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className="tab">
      <div className="tab-header">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={activeTab === tab.id ? "tab-active" : ""}
            onClick={() => handleTabClick(tab.id)}
            // For accessibility
            role="tab"
            aria-selected={activeTab === tab.id}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content" role="tabpanel">
        {activeContent}
      </div>
    </div>
  );
};

Tab.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.node.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
  initialTabId: PropTypes.string,
  onTabChange: PropTypes.func,
};
