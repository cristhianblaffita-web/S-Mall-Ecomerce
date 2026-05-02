import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem("theme");
    return stored ? JSON.parse(stored) : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.style.setProperty("color-scheme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (  
  <ThemeContext.Provider value={{ theme, toggleTheme }}>
    {children}
  </ThemeContext.Provider>);
};