import { motion } from "framer-motion";

const categories = [
  {
    title: "Programming",
    skills: ["Java", "Python", "JavaScript", "SQL", "C"],
    progress: 92,
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "React"],
    progress: 89,
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "Node", "Express", "Django"],
    progress: 86,
  },
  {
    title: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
    progress: 84,
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
    progress: 90,
  },
];

function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="section-heading">
        <span className="section-tag">Skills</span>
        <h2>Full-stack toolkit with sharp fundamentals</h2>
      </div>

      <div className="skills-grid">
        {categories.map((category, index) => (
          <motion.article
            key={category.title}
            className="glass-card skill-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="skill-header">
              <h3>{category.title}</h3>
              <span>{category.progress}%</span>
            </div>
            <div className="progress-bar">
              <span style={{ width: `${category.progress}%` }} />
            </div>
            <div className="skill-pills">
              {category.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Skills;