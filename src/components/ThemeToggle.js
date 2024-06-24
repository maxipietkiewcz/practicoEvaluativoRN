import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "dark" : "light"} theme
      </button>
    </div>
  );
};

export default ThemeToggle;
