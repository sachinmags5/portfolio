import { motion } from 'framer-motion';
import { skills } from '../data/index.js';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className="section-label">What I work with</div>
      <h2 className="section-title">Tech Stack</h2>

      <div className={styles.grid}>
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            className={styles.cell}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            <div className={styles.hoverLine} />
            <div className={styles.icon}>{skill.icon}</div>
            <div className={styles.cat}>{skill.cat}</div>
            <div className={styles.name}>{skill.name}</div>
            <div className={styles.tags}>
              {skill.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}