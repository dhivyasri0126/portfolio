import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa6";

function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="section-heading">
        <span className="section-tag">Experience</span>
        <h2>Professional exposure with modern stack delivery</h2>
      </div>

      <motion.div className="glass-card timeline-card experience-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
        <div className="timeline-point">
          <div className="timeline-icon"><FaBriefcase /></div>
          <div>
            <h3>BudgetAppStudio</h3>
            <p className="muted">MERN Stack Developer Intern</p>
            <p className="muted">May 2026</p>
            <ul>
              <li>Built and refined reusable frontend interactions with React and JavaScript.</li>
              <li>Collaborated on product workflows and polished user-centric experiences.</li>
              <li>Improved delivery speed through structured component-driven development.</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Experience;
