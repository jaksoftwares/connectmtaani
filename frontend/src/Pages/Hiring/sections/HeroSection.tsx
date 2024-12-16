import React from 'react';
import styles from './HeroSection.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Heading and Subheading Section */}
        <div className={styles.textContainer}>
          <div className={styles.headingContainer}>
            <h1 className={styles.heading}>
              Empowering Your Business with Seamless Workforce Solutions.
            </h1>
          </div>
          <div className={styles.subheadingContainer}>
            <p className={styles.subheading}>
              ConnectMtaani empowers your business by linking you to skilled, reliable workers ready to meet your unique needs.
              Simplify your hiring process today.
            </p>
          </div>
          {/* Button Section */}
          <div className={styles.buttons}>
            <a href="/signup" className={`${styles.button} ${styles.primary}`}>
              Get Started <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className={styles.imageContainer}>
          <img src="/home/smiles_hero.png" alt="smiles" className={styles.heroImage} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
