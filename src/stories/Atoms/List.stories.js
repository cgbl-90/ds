import { List } from "./List";

export default {
  title: "ATOMS/List",
  component: List,
  parameters: {
    layout: "centered",
  },
};

export const WithoutStyle = {
  args: {
    items: ["Item 1", "Item 2", "Item 3"],
    styleType: "none",
  },
};

export const WithNumbers = {
  args: {
    items: ["Item 1", "Item 2", "Item 3"],
    styleType: "decimal",
  },
};

export const WithSymbols = {
  args: {
    items: ["Item 1", "Item 2", "Item 3"],
    styleType: "circle",
  },
};

export const WithDevanagariNumbers = {
  args: {
    items: ["Item 1", "Item 2", "Item 3"],
    styleType: "devanagari",
  },
};

export const WithCustomIcon = {
  args: {
    items: ["Item 1", "Item 2", "Item 3"],
    styleType: "custom-icon",
    icon: "✓",
  },
};
