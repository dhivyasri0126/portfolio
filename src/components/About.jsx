import { motion } from "framer-motion";
import { FaBullseye, FaGraduationCap, FaHeart, FaRocket } from "react-icons/fa6";

const highlights = [
  {
    icon: <FaBullseye />,
    title: "Career Objective",
    description: "To build scalable, elegant software products that blend engineering discipline with user-focused design.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Education",
    description: "B.E. Computer Science and Engineering at Dr. N.G.P Institute of Technology, CGPA 9.04.",
  },
  {
    icon: <FaHeart />,
    title: "Passion",
    description: "I am energized by product thinking, clean architecture, and translating real-world ideas into polished digital experiences.",
  },
  {
    icon: <FaRocket />,
    title: "Current Learning",
    description: "Exploring AI-assisted developer workflows, system design, and production-grade React architecture.",
  },
];

const facts = [
  "Solved 200+ LeetCode problems with a focus on clean problem-solving patterns.",
  "Comfortable across frontend, backend, and database layers of a full-stack application.",
  "A strong believer in writing maintainable code and shipping delightful products.",
];

function About() {
  return (
    <section id="about" className="section-shell">
      <div className="section-heading">
        <span className="section-tag">Who I am</span>
        <h2>Building thoughtful digital experiences</h2>
      </div>

      <div className="about-grid">
        <motion.div className="glass-card timeline-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
          <div className="timeline-points">
            {highlights.map((item) => (
              <div className="timeline-point" key={item.title}>
                <div className="timeline-icon">{item.icon}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="glass-card about-facts" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.1 }}>
          <h3>Fun facts</h3>
          <ul>
            {facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default About;