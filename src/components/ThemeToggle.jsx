import { FaMoon, FaSun } from "react-icons/fa6";

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default ThemeToggle;