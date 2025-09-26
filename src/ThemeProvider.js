// src/ThemeProvider.js

import React, { createContext, useContext } from "react";
import { componentTheme } from "./theme"; // Import the theme we just created

// 1. Create a Theme Context
const ThemeContext = createContext();

// 2. Create a Provider Component
export const CustomThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={componentTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Create a custom hook to use the theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a CustomThemeProvider");
  }
  return context;
};
