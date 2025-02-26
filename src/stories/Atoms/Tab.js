import React, { useState } from "react";
import PropTypes from "prop-types";
import "./tab.css";

export const Tab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div className="tab">
      <div className="tab-header">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={activeTab === tab.label ? "tab-active" : ""}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs.find((tab) => tab.label === activeTab)?.content}
      </div>
    </div>
  );
};

Tab.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};
