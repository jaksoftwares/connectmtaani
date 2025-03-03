import React from 'react';
import styles from './WelcomeSection.module.css';

const WelcomeSection: React.FC = () => {
  return (
    <section className={styles.welcome}>
      <h1>Welcome back, [User Name]!</h1>
      <div className={styles.stats}>
        <div className={styles.statCard}>
          <h3>Applications</h3>
          <p>25</p>
        </div>
        <div className={styles.statCard}>
          <h3>Jobs Viewed</h3>
          <p>102</p>
        </div>
        <div className={styles.statCard}>
          <h3>Interviews Scheduled</h3>
          <p>3</p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;