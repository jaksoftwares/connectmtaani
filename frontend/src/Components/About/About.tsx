import React from 'react';
import styles from './About.module.css';

const AboutSection: React.FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h2>About ConnectMtaani</h2>
          <p>
            ConnectMtaani is your gateway to Kenya’s informal job market. 
            We aim to bridge the gap between job seekers and employers by 
            providing a seamless platform for connecting talent with opportunities.
          </p>
          <a href="/about" className={styles.button}>
            Learn More
          </a>
        </div>
        <div className={styles.image}>
          <img src="/assets/about-illustration.png" alt="About ConnectMtaani" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
