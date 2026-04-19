import { motion } from 'framer-motion';
import { projects } from '../data/index.js';
import styles from './Projects.module.css';

export default function Projects() {
  const handleClick = (link) => {
    if (link) window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className={styles.section}>
      <div className="section-label">What I've built</div>
      <h2 className="section-title">Projects</h2>

      <div className={styles.grid}>
        {projects.map((project, i) => (
          <motion.div
            key={project.num}
            className={`${styles.card} ${project.highlight ? styles.highlight : ''}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.07 }}
            onClick={() => handleClick(project.link)}
            style={{ cursor: project.link ? 'none' : 'default' }}
          >
            <div className={styles.leftLine} />

            <div className={styles.top}>
              <span className={styles.num}>{project.num}</span>
              <span className={`${styles.badge} ${project.link ? styles.badgeLive : ''}`}>
                {project.badge}
              </span>
            </div>

            <h3 className={styles.name}>{project.name}</h3>
            <p className={styles.desc}>{project.desc}</p>

            <div className={styles.stack}>
              {project.stack.map((tech) => (
                <span key={tech} className={styles.stag}>{tech}</span>
              ))}
            </div>

            {project.link && (
              <div className={styles.linkArrow}>
                <span>view project</span>
                <span>↗</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}