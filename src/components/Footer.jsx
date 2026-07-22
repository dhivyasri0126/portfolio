import { FaArrowUp, FaGithub, FaLinkedin, FaCode } from "react-icons/fa6";
import { profile } from "../data/profile";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-socials">
        <a href={profile.socials.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href={profile.socials.leetcode} target="_blank" rel="noopener noreferrer"><FaCode /></a>
      </div>
      <p>© 2026 {profile.name}. Crafted with React, Framer Motion, and a premium product mindset.</p>
      <a href="#home" className="back-to-top"><FaArrowUp /></a>
    </footer>
  );
}

export default Footer;