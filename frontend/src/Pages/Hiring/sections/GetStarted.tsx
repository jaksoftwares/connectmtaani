import React, {} from "react";
import styles from "./GetStarted.module.css";

const GetStarted: React.FC = () => {
  return (
    <>
         {/* Section 2: Get Started Section */}
         <div className={styles.getStartedSection}>
        <h3 className={styles.getStartedTitle}>GET STARTED NOW</h3>
        <p className={styles.getStartedDescription}>
          Whether you need to access temporary Workers on-demand or have open
           < br/ >
          Full/Part-Time Positions, GigSmart is a comprehensive, cost-effective
          solution that addresses all of your needs.
        </p>
        <a href="#" className={styles.getStartedButton}>
          START HIRING →
        </a>
     </div>

          </>
        );
      }

export default GetStarted;