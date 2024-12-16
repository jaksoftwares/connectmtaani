import React from 'react';
import styles from './WhyChoseConnect.module.css';

const WhyChooseConnect: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Title Section */}
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Why Choose ConnectMtaani?</h2>
        </div>

        {/* Two Columns Section */}
        <div className={styles.columnsContainer}>
          {/* Left Column */}
          <div className={styles.column}>
            <div className={styles.listItem}>
              <span className={styles.checkIcon}>&#10003;</span> Access verified and skilled workers
            </div>
            <div className={styles.listItem}>
              <span className={styles.checkIcon}>&#10003;</span> Pay only when you hire successfully
            </div>
            <div className={styles.listItem}>
              <span className={styles.checkIcon}>&#10003;</span> Smart matching technology for tailored results
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.column}>
            <div className={styles.listItem}>
              <span className={styles.checkIcon}>&#10003;</span> Flexible hiring for short-term or permanent roles
            </div>
            <div className={styles.listItem}>
              <span className={styles.checkIcon}>&#10003;</span> 24/7 support to assist your hiring process
            </div>
            <div className={styles.listItem}>
              <span className={styles.checkIcon}>&#10003;</span> Access verified and skilled workers
            </div>
          </div>
        </div>

        {/* Button Section */}
        <div className={styles.buttonContainer}>
          <a href="/learn-more" className={`${styles.button} ${styles.primary}`}>
            Learn More <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseConnect;
