import React from 'react';
import styles from './HowToHire.module.css';

const HowToHire: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Title Section */}
        <div className={styles.titleContainer}>
          <p className={styles.subtitle}>Advertise Jobs Seamlessly and Attract Top Talent</p>
          <h1 className={styles.title}>
            Maximize your reach and connect with the right candidates
          </h1>
        </div>

        {/* Step List */}
        <ul className={styles.stepList}>
          <li className={styles.stepItem}>
            <strong>Create an Account</strong>
            <p>Sign up for a free ConnectMtaani employer account.</p>
            <p>Access your employer dashboard to start managing your job postings.</p>
          </li>

          <li className={styles.stepItem}>
            <strong>Post Your Job</strong>
            <p>
              Fill out the job details, including: Job title and description, required skills and
              experience, and more.
            </p>
          </li>

          <li className={styles.stepItem}>
            <strong>Boost Your Job Post Visibility (Optional)</strong>
            <p>
              Upgrade your job post to highlight it in search results, and to attract more
              applicants.
            </p>
          </li>

          <li className={styles.stepItem}>
            <strong>Browse and Select Candidates</strong>
            <p>
              Review profiles of job seekers who apply. Use filters to find candidates based on
              skills, ratings, or experience.
            </p>
          </li>

          <li className={styles.stepItem}>
            <strong>Get the Job Done</strong>
            <p>
              Seamlessly communicate with workers through the platform, manage applications and hire
              the best.
            </p>
          </li>

          <li className={styles.stepItem}>
            <strong></strong>
            <p>
             
            </p>
          </li>
        </ul>

        {/* Button */}
        <div className={styles.buttonSection}>
          <a href="#" className={styles.button}>
            POST A JOB FOR FREE TODAY
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowToHire;
