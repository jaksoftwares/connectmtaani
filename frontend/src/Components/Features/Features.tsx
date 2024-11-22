import React from 'react';
import styles from './Features.module.css';

const FeaturesSection: React.FC = () => {
  const features = [
    { title: "Effortless Job Posting", description: "Employers can easily post jobs and find the right candidates quickly.", icon: "/assets/icons/job-posting.png" },
    { title: "Advanced Search", description: "Job seekers can filter opportunities based on skills, location, and preferences.", icon: "/assets/icons/search.png" },
    { title: "Real-Time Chat", description: "Enable seamless communication between employers and job seekers.", icon: "/assets/icons/chat.png" },
    { title: "Verified Profiles", description: "Trustworthy platform with verified users and ratings.", icon: "/assets/icons/verified.png" },
  ];

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <h2>Key Features</h2>
        <div className={styles.featureList}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureItem}>
              <img src={feature.icon} alt={feature.title} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
