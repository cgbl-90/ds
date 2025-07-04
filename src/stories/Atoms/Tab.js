import React, { useState } from "react";
import PropTypes from "prop-types";
import "./tab.css";

export const Tab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="tab">
      <div className="tab-header">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={activeTab === tab.id ? "tab-active" : ""}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs.find((tab) => tab.id === activeTab)?.content}
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
};
