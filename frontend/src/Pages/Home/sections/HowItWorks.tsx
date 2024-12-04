import React from "react";
import styles from "./HowItWorks.module.css";

const HowItWorks: React.FC = () => {
  return (
    <section className={styles.howItWorksSection}>
      <h2 className={styles.heading}>How Does ConnectMtaani Work?</h2>
      <div className={styles.stepsContainer}>
        <div className={styles.step}>
          <div className={styles.icon}>
            <i className="fas fa-clipboard-list"></i>
          </div>
          <h3>Post Jobs for Free</h3>
          <p>
            Share your openings across various industries and roles at no cost.
          </p>
        </div>
        <div className={styles.step}>
          <div className={styles.icon}>
            <i className="fas fa-users"></i>
          </div>
          <h3>Find Skilled Workers Near you Quickly</h3>
          <p>
            Access a nationwide pool of qualified professionals ready to step
            in when you need them.
          </p>
        </div>
        <div className={styles.step}>
          <div className={styles.icon}>
            <i className="fas fa-briefcase"></i>
          </div>
          <h3>We Handle the Details</h3>
          <p>
            From background checks to insurance and payments, we’ve got
            everything covered for a hassle-free experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
