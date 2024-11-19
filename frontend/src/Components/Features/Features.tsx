import React from 'react';
import styles from './Features.module.css';

const Features: React.FC = () => {
  const features = [
    "Job Posting & Discovery",
    "Real-Time Notifications",
    "Secure Payments",
    "Trustworthy Reviews",
  ];

  return (
    <div className={styles.features}>
      <h2>Features</h2>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
