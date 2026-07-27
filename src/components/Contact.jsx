import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa6";
import { profile } from "../data/profile";

const socialLinks = [
  { icon: <FaGithub />, label: "GitHub", href: profile.socials.github },
  { icon: <FaLinkedin />, label: "LinkedIn", href: profile.socials.linkedin },
  { icon: <FaCode />, label: "LeetCode", href: profile.socials.leetcode },
];

function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="section-heading">
        <span className="section-tag">Contact</span>
        <h2>Let&apos;s Connect</h2>
      </div>

      <div className="contact-layout connect-layout">
        <div className="glass-card contact-form-card connect-card">
          <div className="connect-actions">
            {socialLinks.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="btn btn-secondary social-connect-btn">
                {item.icon} {item.label}
              </a>
            ))}
            <a href={profile.resume} download="Dhivyasri_M_Resume.pdf" className="btn btn-primary">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;