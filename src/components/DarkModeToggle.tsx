import { useDarkMode } from "../context/DarkModeContext";

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full border-2 border-gray-800 dark:border-white"
    >
      {isDarkMode ? "🌙" : "🌞"}
    </button>
  );
};

export default DarkModeToggle;
