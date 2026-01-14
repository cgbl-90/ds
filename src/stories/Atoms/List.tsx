import React from "react";
import "./list.css";

export interface ListProps {
  /** Array of strings to render as list items */
  items: string[];
  /** The CSS list-style-type variant */
  styleType?: "none" | "decimal" | "circle" | "devanagari" | "custom-icon";
  /** A string or character to use as a prefix when using custom-icon style */
  icon?: string;
}

/**
 * Versatile list component supporting standard bullet points and custom icon prefixes.
 */
export const List: React.FC<ListProps> = ({
  items,
  styleType = "none",
  icon = "",
}) => {
  return (
    <ul className={`storybook-list storybook-list--${styleType}`}>
      {items.map((item, index) => (
        <li key={index} className="storybook-list-item">
          {styleType === "custom-icon" && icon && (
            <span className="storybook-list-icon">{icon}</span>
          )}
          <span className="storybook-list-text">{item}</span>
        </li>
      ))}
    </ul>
  );
};
