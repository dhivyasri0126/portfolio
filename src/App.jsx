import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("portfolio-theme");
    return saved || "dark";
  });
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    const onMouseMove = (event) => {
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("mousemove", onMouseMove);
    onScroll();

    const timer = setTimeout(() => setIsLoading(false), 950);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="page-shell">
      <div className="cursor-glow" aria-hidden="true" />
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="loading-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <motion.div
              className="loading-ring"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.3, repeat: Infinity, ease: "linear" }}
            />
            <p>Loading portfolio experience...</p>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar theme={theme} toggleTheme={() => setTheme((current) => (current === "dark" ? "light" : "dark"))} />

      <main>
        <Hero theme={theme} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;