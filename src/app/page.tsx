"use client";
import { DepositCard } from "@/components/DepositCard";
import { ThemeContext, ThemeValue } from "@/utils/theme";
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState<ThemeValue>("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => {
            toggleTheme();
          }}
          style={{
            marginTop: "20px",
            marginBlock: "20px",
            padding: "8px 5px",
            border: "1px solid #6C86AD80",
            borderRadius: "4px",
          }}
        >
          Toggle Theme
        </button>

        <DepositCard />
      </main>
    </ThemeContext.Provider>
  );
}
