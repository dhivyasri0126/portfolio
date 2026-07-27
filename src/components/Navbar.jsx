import { useEffect, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import ThemeToggle from "./ThemeToggle";
import "../styles/navbar.css";

const links = ["Home", "About", "Skills", "Projects", "Experience", "Achievements", "Education", "Contact"];

function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <a href="#home" className="logo">
        Dhivyasri<span>. M</span>
      </a>

      <div className="nav-actions">
        <button className="nav-toggle" onClick={() => setIsOpen((prev) => !prev)} aria-label="Toggle navigation">
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      <div className={`nav-panel ${isOpen ? "open" : ""}`}>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-theme-toggle">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;