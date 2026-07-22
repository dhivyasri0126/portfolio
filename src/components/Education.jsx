import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa6";

function Education() {
  return (
    <section id="education" className="section-shell">
      <div className="section-heading">
        <span className="section-tag">Education</span>
        <h2>Academic foundation with strong technical depth</h2>
      </div>

      <motion.div className="glass-card education-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
        <div className="education-illustration">
          <FaGraduationCap />
        </div>
        <div>
          <p className="muted">Bachelor of Engineering</p>
          <h3>Computer Science and Engineering</h3>
          <p>Dr. N.G.P Institute of Technology</p>
          <p className="accent-text">CGPA: 9.04</p>
        </div>
      </motion.div>
    </section>
  );
}

export default Education;
