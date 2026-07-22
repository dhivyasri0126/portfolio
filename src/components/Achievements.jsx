import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaCertificate } from "react-icons/fa6";

const achievements = [
  { icon: <FaTrophy />, title: "200+ LeetCode Problems", detail: "Strong algorithmic thinking and problem-solving discipline." },
  { icon: <FaMedal />, title: "National Finalist", detail: "National Entrepreneurship Challenge, IIT Bombay." },
  { icon: <FaCertificate />, title: "NPTEL Elite + Silver", detail: "Recognized for excellence in advanced learning milestones." },
  { icon: <FaCertificate />, title: "Full Stack Development Certification", detail: "Hands-on development training across modern web stacks." },
];

function Achievements() {
  return (
    <section id="achievements" className="section-shell">
      <div className="section-heading">
        <span className="section-tag">Achievements</span>
        <h2>Recognition that reflects depth and drive</h2>
      </div>

      <div className="achievement-grid">
        {achievements.map((item, index) => (
          <motion.article
            key={item.title}
            className="glass-card achievement-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -8, rotate: 1 }}
          >
            <div className="achievement-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
