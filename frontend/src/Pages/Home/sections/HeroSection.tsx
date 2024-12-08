import React from 'react';
import styles from './HeroSection.module.css'

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Text Content */}
        <div className={styles.content}>
          <div className={styles.herotext1}><p>Welcome to ConnectMtaani</p></div>
          <h1 className={styles.heading}>
            Bridging Work, Talent,<br /> and Opportunity in Kenya
          </h1>
          <p className={styles.subheading}>
            ConnectMtaani is the premier platform for linking job seekers and employers <br />
            in Kenya’s informal sector. Simplify hiring, discover talent, and build opportunities.
          </p>
          <div className={styles.buttons}>
            <a href="/signup" className={`${styles.button} ${styles.primary}`}>
              Get Started
            </a>
            <a href="/features" className={`${styles.button} ${styles.secondary}`}>
              Learn More
            </a>
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default Hero;