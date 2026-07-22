import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa6";
import profileImage from "../assets/Dhivya Photo.jpg";
import { heroRoles, profile } from "../data/profile";
import "../styles/hero.css";

function Hero() {
  const [activeRole, setActiveRole] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveRole((current) => (current + 1) % heroRoles.length);
    }, 2400);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero section-shell">
      <div className="background-blobs" aria-hidden="true">
        <span className="blob blob-one" />
        <span className="blob blob-two" />
        <span className="blob blob-three" />
      </div>

      <motion.div className="hero-left" initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <p className="eyebrow">Hello, I&apos;m</p>
        <h1>{profile.name}</h1>
        <div className="typing-stack">
          <h2>{profile.role}</h2>
          <div className="typing-line" key={activeRole}>
            {heroRoles[activeRole]}
          </div>
        </div>

        <p className="description">
          Computer Science undergraduate with strong foundations in Data Structures, Algorithms, OOP, DBMS,
          Computer Networks and Software Engineering. I build high-quality full-stack experiences with Java,
          React, Node.js, Django, SQL, and REST APIs while solving problems with precision.
        </p>

        <div className="button-group">
          <a href={profile.resume} download className="btn btn-primary">Download Resume</a>
          <a href="#projects" className="btn btn-secondary">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>

        <div className="social-row">
          <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="social-pill"><FaGithub /> GitHub</a>
          <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-pill"><FaLinkedin /> LinkedIn</a>
          <a href={profile.socials.leetcode} target="_blank" rel="noopener noreferrer" className="social-pill"><FaCode /> LeetCode</a>
        </div>
      </motion.div>

      <motion.div className="hero-right" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.15 }}>
        <div className="profile-ring">
          <div className="profile-frame">
            <img src={profileImage} alt="Dhivyasri M profile" />
            <span className="profile-initial">DM</span>
          </div>
        </div>

        <div className="particle-layer" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;