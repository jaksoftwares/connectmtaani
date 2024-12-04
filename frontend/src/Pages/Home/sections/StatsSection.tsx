import React from "react";
import styles from "./StatsSection.module.css";

const StatsSection: React.FC = () => {
  return (
    <section className={styles.statsSection}>
      <div className={styles.statsContainer}>
        <div className={styles.statsHeader}>
          <h2>
            The Better Way to Find the <br />
            Appropriate Labor for your Business
          </h2>
          <p>
            Discover skilled professionals at your convenience. With access to
            a diverse network of thousands of workers across multiple
            industries, our platform ensures fast, affordable, and reliable
            connections to help your business thrive.
          </p>
        </div>
        <div className={styles.statsData}>
          <div className={styles.statItem}>
            <h3>100+</h3>
            <p>Cities Served Nationwide</p>
          </div>
          <div className={styles.statItem}>
            <h3>5000+</h3>
            <p>Happy Clients and Growing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
