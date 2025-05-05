import React from 'react';
import styles from './AvailableJobs.module.css';

const JobRecommendations: React.FC = () => {
  const jobs = [
    { id: 1, title: 'Plumber', location: 'Nairobi', pay: 'KSh 5,000/day' },
    { id: 2, title: 'Electrician', location: 'Mombasa', pay: 'KSh 6,000/day' },
    { id: 3, title: 'Painter', location: 'Kisumu', pay: 'KSh 4,500/day' },
  ];

  return (
    <section className={styles.jobs}>
      <h2>Recommended Jobs</h2>
      <div className={styles.grid}>
        {jobs.map((job) => (
          <div key={job.id} className={styles.card}>
            <h3>{job.title}</h3>
            <p>{job.location}</p>
            <p>{job.pay}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobRecommendations;