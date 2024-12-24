import React from 'react';
import styles from './Starter.module.css';

const Starter: React.FC = () => {
  const scrollToNavbar = () => {
    const navbarElement = document.getElementById('navbar');
    if (navbarElement) {
      navbarElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.hero}>
      <h1 className={styles.h1}>Welcome to ConnectMtaani</h1>
      <p className={styles.p}>Connecting Work, Talent, and Opportunity</p>
      <button onClick={scrollToNavbar}>Get Started</button>
    </div>
  );
};

export default Starter;
