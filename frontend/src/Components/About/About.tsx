import React from 'react';
import styles from './about.module.css';

const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <h2>About ConnectMtaani</h2>
      <p>
        ConnectMtaani bridges the gap between job seekers and employers in Kenya's informal sector. 
        We help workers find opportunities and enable employers to hire quickly and efficiently.
      </p>
    </div>
  );
};

export default About;
