import { motion } from "framer-motion";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { profile } from "../data/profile";

const projects = profile.projects;

function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="section-heading">
        <span className="section-tag">Projects</span>
        <h2>Selected builds with product-minded detail</h2>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="glass-card project-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -10, scale: 1.01 }}
          >
            <div className="project-visual">
              {project.image && <img src={project.image} alt={`${project.title} screenshot`} />}
             
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="stack-pills">
                {project.stack.map((stack) => (
                  <span key={stack}>{stack}</span>
                ))}
              </div>
              <div className="project-actions">
                <a href={project.github || "#"} target={project.github ? "_blank" : undefined} rel={project.github ? "noopener noreferrer" : undefined} className="btn btn-secondary" aria-disabled={!project.github}><FaGithub /> GitHub</a>
                <a
                  href={project.demo || "#"}
                  target={project.demo ? "_blank" : undefined}
                  rel={project.demo ? "noopener noreferrer" : undefined}
                  className={`btn ${project.demo ? "btn-primary" : "btn-secondary"}`}
                  aria-disabled={!project.demo}
                >
                  <FaArrowUpRightFromSquare /> {project.demo ? "Live Demo" : "Coming Soon"}
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;