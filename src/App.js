import React, { useContext } from "react";
import Counter from "./components/Counter";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import "./styles.css";

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

const AppContent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <ThemeToggle />
      <Counter />
    </div>
  );
};

export default App;
