import { useState } from "react";
import { ThemeContext } from "../context/themeContext";
import { Header, Footer } from "../components/index";

export const Context = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggle: toggleTheme,
      }}
    >
      <Header />
      {children}
      <Footer />
    </ThemeContext.Provider>
  );
};
