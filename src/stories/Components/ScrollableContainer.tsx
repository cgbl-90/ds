// src/components/ScrollableContainer.tsx
import React from "react";
import "./scrollablecontainer.css"; // Component-specific styles

interface ScrollableContainerProps {
  scrollbarClassName?: string;
}

export const ScrollableContainer: React.FC<ScrollableContainerProps> = ({
  scrollbarClassName = "custom-scrollbar",
}) => {
  return (
    <div
      className={`container ${scrollbarClassName}`}
      data-testid="scroll-container"
    >
      {Array.from({ length: 50 }).map((_, index) => (
        <div key={index} className="item" data-testid={`item-${index + 1}`}>
          Item {index + 1}
        </div>
      ))}
    </div>
  );
};
