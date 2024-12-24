import React from 'react';
import styles from './ProfileCompletion.module.css';

const ProfileCompletion: React.FC = () => {
  return (
    <section className={styles.profile}>
      <h2>Complete Your Profile</h2>
      <div className={styles.progressBar}>
        <div className={styles.progress} style={{ width: '70%' }}></div>
      </div>
      <p>70% Complete - Add more details to get better job matches.</p>
      <button className={styles.btn}>Update Profile</button>
    </section>
  );
};

export default ProfileCompletion;