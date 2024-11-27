import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { clsx } from "clsx";

export const Button = ({ children }) => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <button
      onClick={toggle}
      className={clsx("btn", theme === "light" ? "btn__moon" : "btn__sun")}
    >
      {children}
    </button>
  );
};
