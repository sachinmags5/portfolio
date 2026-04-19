import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { contactLinks } from '../data/index.js';
import styles from './Contact.module.css';

const INIT_FORM = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm]     = useState(INIT_FORM);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errMsg, setErrMsg] = useState('');

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrMsg('');

    try {
      await axios.post('/api/contact', form);
      setStatus('success');
      setForm(INIT_FORM);
    } catch (err) {
      setStatus('error');
      setErrMsg(
        err.response?.data?.errors?.[0]?.msg ||
        err.response?.data?.error ||
        'Something went wrong. Please try again.'
      );
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.grid}>

        {/* ── Left column ── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Get in touch</div>
          <h2 className={styles.big}>
            Let's build<br />
            <span>something.</span>
          </h2>
          <p className={styles.sub}>
            Open to full-time roles, freelance projects, and interesting
            collaborations. Based in Mumbai — happy to work remote or hybrid.
          </p>

          <div className={styles.links}>
            {contactLinks.map((cl) => (
              <a
                key={cl.label}
                href={cl.href}
                className={styles.clink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.clinkIcon}>{cl.icon}</div>
                <div className={styles.clinkInfo}>
                  <p className={styles.clinkLabel}>{cl.label}</p>
                  <p className={styles.clinkValue}>{cl.value}</p>
                </div>
                <span className={styles.arrow}>↗</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* ── Right column: form ── */}
        <motion.form
          onSubmit={handleSubmit}
          className={styles.form}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          noValidate
        >
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me about the project or opportunity..."
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
            />
          </div>

          {status === 'error' && (
            <p className={styles.errorMsg}>{errMsg}</p>
          )}
          {status === 'success' && (
            <p className={styles.successMsg}>
              Message sent! I'll get back to you soon.
            </p>
          )}

          <button
            type="submit"
            className="btn-primary"
            style={{ width: '100%' }}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>

      </div>
    </section>
  );
}