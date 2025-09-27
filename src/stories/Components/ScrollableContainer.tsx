import React from "react";
import "./scrollablecontainer.css"; // Component-specific styles

export const ScrollableContainer: React.FC = () => {
  return (
    <div className="container custom-scrollbar" data-testid="scroll-container">
      {Array.from({ length: 50 }).map((_, index) => (
        <div key={index} className="item" data-testid={`item-${index + 1}`}>
          Item {index + 1}
        </div>
      ))}
    </div>
  );
};
