import React, { useState, useRef, useEffect } from "react";
import "./focus-test.css";

interface FocusTestComponentProps {
  testId?: string;
  className?: string;
}

export const FocusTestComponent: React.FC<FocusTestComponentProps> = ({
  testId = "focus-test",
  className = "",
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [activeTab, setActiveTab] = useState("tab1");

  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setDropdownOpen(!dropdownOpen);
    // Focus management after click
    setTimeout(() => {
      if (dropdownOpen && dropdownRef.current) {
        dropdownRef.current.focus();
      }
    }, 50);
  };

  const handleHoverEnter = () => {
    setTooltipVisible(true);
  };

  const handleHoverLeave = () => {
    setTooltipVisible(false);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
    // Focus trap in modal
    setTimeout(() => {
      if (buttonRef.current) {
        buttonRef.current.focus();
      }
    }, 100);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Log focus events for debugging
  useEffect(() => {
    const handleFocus = (e: FocusEvent) => {
      console.log("Focus event on:", e.target);
    };

    const handleBlur = (e: FocusEvent) => {
      console.log("Blur event on:", e.target);
    };

    document.addEventListener("focusin", handleFocus);
    document.addEventListener("focusout", handleBlur);

    return () => {
      document.removeEventListener("focusin", handleFocus);
      document.removeEventListener("focusout", handleBlur);
    };
  }, []);

  return (
    <div className={`focus-test-container ${className}`} data-testid={testId}>
      <h2>Focus Test Component</h2>
      <p>Testing various focus behaviors for Chromatic validation</p>

      <div className="test-section">
        <h3>1. Click → Dropdown</h3>
        <button
          type="button"
          className="test-button"
          onClick={handleButtonClick}
          aria-expanded={dropdownOpen}
          aria-controls="dropdown-content"
        >
          {dropdownOpen ? "Close Dropdown" : "Open Dropdown"}
        </button>

        {dropdownOpen && (
          <div
            id="dropdown-content"
            ref={dropdownRef}
            className="dropdown"
            tabIndex={-1}
            role="menu"
            data-testid="dropdown-menu"
          >
            <div className="dropdown-item" role="menuitem">
              Option 1
            </div>
            <div className="dropdown-item" role="menuitem">
              Option 2
            </div>
            <div className="dropdown-item" role="menuitem">
              Option 3
            </div>
          </div>
        )}
      </div>

      <div className="test-section">
        <h3>2. Hover → Tooltip</h3>
        <button
          type="button"
          className="test-button hover-trigger"
          onMouseEnter={handleHoverEnter}
          onMouseLeave={handleHoverLeave}
          onFocus={handleHoverEnter}
          onBlur={handleHoverLeave}
        >
          Hover for Tooltip
        </button>

        {tooltipVisible && (
          <div
            ref={tooltipRef}
            className="tooltip"
            role="tooltip"
            data-testid="hover-tooltip"
          >
            This is a tooltip that appears on hover
          </div>
        )}
      </div>

      <div className="test-section">
        <h3>3. Focus → Input with Auto-select</h3>
        <input
          ref={inputRef}
          type="text"
          className="test-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Focus to select all text"
          onFocus={(e) => e.target.select()}
          data-testid="focus-input"
        />
      </div>

      <div className="test-section">
        <h3>4. Tab Navigation</h3>
        <div className="tab-container">
          {["tab1", "tab2", "tab3"].map((tab) => (
            <button
              key={tab}
              type="button"
              className={`tab-button ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
              onFocus={() => console.log(`Tab ${tab} focused`)}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="tab-content" data-testid="tab-content">
          Content for {activeTab}
        </div>
      </div>

      <div className="test-section">
        <h3>5. Modal (Top-layer Dialog)</h3>
        <button
          type="button"
          className="test-button modal-trigger"
          onClick={handleOpenModal}
        >
          Open Modal
        </button>

        {modalOpen && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <div
              className="modal"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              data-testid="modal-dialog"
            >
              <h3>Modal Dialog</h3>
              <p>This is a modal that should maintain focus</p>
              <button
                ref={buttonRef}
                type="button"
                className="test-button"
                onClick={handleCloseModal}
                data-testid="modal-close-button"
              >
                Close Modal
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="test-section">
        <h3>6. Resize Observer Test</h3>
        <div
          className="resize-box"
          data-testid="resize-box"
          style={{
            width: "200px",
            height: "100px",
            resize: "both",
            overflow: "auto",
            border: "1px solid #ccc",
            padding: "10px",
          }}
        >
          Resize me to trigger ResizeObserver
          <p>Current size: 200x100</p>
        </div>
      </div>

      <div className="debug-info">
        <h4>Debug Info:</h4>
        <ul>
          <li>Dropdown: {dropdownOpen ? "OPEN" : "CLOSED"}</li>
          <li>Tooltip: {tooltipVisible ? "VISIBLE" : "HIDDEN"}</li>
          <li>Modal: {modalOpen ? "OPEN" : "CLOSED"}</li>
          <li>Active Tab: {activeTab}</li>
          <li>Input Value: {inputValue || "(empty)"}</li>
        </ul>
      </div>
    </div>
  );
};
