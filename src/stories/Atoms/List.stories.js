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
    items: ["Example 1", "Example 2", "Example 3"],
    styleType: "custom-icon",
  },
};

export const WithDevanagariNumbers = {
  args: {
    items: ["Item 1", "Item 2", "Item 3"],
    styleType: "devanagari",
    icon: "*",
  },
};

export const WithCustomIcon = {
  args: {
    items: ["Item 1", "Item 2", "Item 3"],
    styleType: "custom-icon",
    icon: "✓",
  },
};

export const WithPlus = {
  args: {
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    styleType: "custom-icon",
    icon: "+",
  },
};

export const WithLove = {
  args: {
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    styleType: "custom-icon",
    icon: "♡",
  },
};
