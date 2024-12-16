import React from 'react';
import styles from './HeroSection.module.css'

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Text Content */}
        <div className={styles.content}>
          
          <h1 className={styles.heading}>
          Find Available shift Jobs Around you today
          </h1>
          <p className={styles.subheading}>
          Work on your terms. <br/> ConnectMtaani gives you the freedom and control to find the right work opportunities best suited to your experience.
          </p>
          <div className={styles.button}>
            <a href="/signup" className={`${styles.button} ${styles.primary}`}>
              Get Started
            </a>
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default Hero;