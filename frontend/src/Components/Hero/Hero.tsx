import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
      <h1>Welcome to ConnectMtaani</h1>
      <p>Connecting Work, Talent, and Opportunity</p>
      <button>Get Started</button>
    </div>
  );
};

export default Hero;