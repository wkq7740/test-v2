import React from "react";

export type ThemeValue = "light" | "dark";

export const ThemeContext = React.createContext<{
  theme: ThemeValue;
  toggleTheme: () => void;
}>({
  theme: "light",
  toggleTheme: () => {},
});
