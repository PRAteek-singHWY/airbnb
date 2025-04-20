import { createContext, useContext, useState, ReactNode, useEffect } from "react";

// Create a context to manage dark mode
interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};

interface DarkModeProviderProps {
  children: ReactNode;
}

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    // Store dark mode in localStorage to persist it across page reloads
    localStorage.setItem("dark-mode", JSON.stringify(!isDarkMode));
  };

  // Set the dark mode from localStorage on initial load
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("dark-mode");
    if (storedDarkMode) {
      setIsDarkMode(JSON.parse(storedDarkMode));
    }
  }, []);

  // Update the "data-theme" on the document element whenever `isDarkMode` changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute(
        "data-theme",
        isDarkMode ? "dark" : "light"
      );
    }
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
