import { motion } from 'framer-motion';
import { stats } from '../data/index.js';
import styles from './Hero.module.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
});

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>

      <motion.div className={styles.tag} {...fadeUp(0.1)}>
        <span className={styles.tagDot} />
        Available for opportunities · Mumbai, India
      </motion.div>

      {/* Name + Photo row */}
      <motion.div className={styles.nameRow} {...fadeUp(0.2)}>
        <h1 className={styles.name}>
          Sachin
          <span>Magdum.</span>
        </h1>

        <div className={styles.photoWrap}>
          <div className={styles.photoCorner} />
          <img
            src="/sachin.jpg"
            alt="Sachin Magdum"
            className={styles.photo}
            draggable={false}
          />
          <div className={styles.photoGlow} />
        </div>
      </motion.div>

      <motion.p className={styles.role} {...fadeUp(0.3)}>
        Full Stack Developer &nbsp;/&nbsp; MERN &nbsp;/&nbsp; Node.js &nbsp;/&nbsp; React.js
      </motion.p>

      <motion.p className={styles.desc} {...fadeUp(0.4)}>
        I architect scalable enterprise systems that handle real load —{' '}
        1,00,000+ users, 10,000+ API transactions daily. Banking, insurance,
        fintech. Backend-first, product-minded, performance-obsessed.
      </motion.p>

      <motion.div className={styles.ctas} {...fadeUp(0.5)}>
        <button className="btn-primary" onClick={() => scrollTo('projects')}>
          View Projects
        </button>
        <button className="btn-outline" onClick={() => scrollTo('contact')}>
          Let's Talk
        </button>
      </motion.div>

      <motion.div className={styles.stats} {...fadeUp(0.6)}>
        {stats.map(({ num, label }) => (
          <div key={label} className={styles.stat}>
            <div className={styles.statNum}>{num}</div>
            <div className={styles.statLabel}>{label}</div>
          </div>
        ))}
      </motion.div>

      <div className={styles.scroll}>
        <span>scroll</span>
        <div className={styles.scrollBar} />
      </div>

    </section>
  );
}