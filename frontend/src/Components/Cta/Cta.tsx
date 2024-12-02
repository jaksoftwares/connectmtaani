import React from 'react';
import styles from './Cta.module.css';

const CallToActionSection: React.FC = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <h2>Ready to Get Started?</h2>
        <p>Sign up today and discover opportunities or hire top talent with ease.</p>
        <div className={styles.buttons}>
          <a href="/signup" className={styles.buttonPrimary}>Join Now</a>
          <a href="/contact" className={styles.buttonSecondary}>Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
