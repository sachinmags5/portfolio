import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>© {year} Sachin Magdum</p>
      <p className={styles.center}>
        Built with <span>React.js</span> · <span>Node.js</span> · <span>MongoDB</span>
      </p>
      <p>Mumbai, India · Available for hire</p>
    </footer>
  );
}