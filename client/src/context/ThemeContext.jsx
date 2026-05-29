import {
  createContext,
  useEffect,
  useState,
} from "react";

export const ThemeContext =
  createContext();

const ThemeProvider = ({
  children,
}) => {
  const [darkMode,
    setDarkMode,
  ] = useState(true);

  useEffect(() => {
    const savedTheme =
      localStorage.getItem(
        "theme"
      );

    if (savedTheme) {
      setDarkMode(
        savedTheme ===
          "dark"
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "theme",
      darkMode
        ? "dark"
        : "light"
    );

    if (darkMode) {
      document.documentElement.classList.add(
        "dark"
      );
    } else {
      document.documentElement.classList.remove(
        "dark"
      );
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;