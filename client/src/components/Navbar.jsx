import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const NAV_LINKS = ['Skills', 'Projects', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>SM&nbsp;//&nbsp;portfolio</div>
      <div className={styles.links}>
        {NAV_LINKS.map((l) => (
          <button key={l} className={styles.link} onClick={() => scrollTo(l)}>
            {l}
          </button>
        ))}
      </div>
    </nav>
  );
}