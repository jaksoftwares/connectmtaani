     import React, {} from "react";
     import styles from "./ExtraAssistance.module.css";
     
     const ExtraAssistance: React.FC = () => {
       return (
         <>
           {/* Section 2: Assistance Section */}
           <div className={styles.assistanceSection}>
        <div className={styles.assistanceContainer}>
          <h2 className={styles.assistanceTitle}>Need Some Extra Assistance?</h2>
          <p className={styles.assistanceSubtitle}>
            ConnectMtaani Has What You Need
          </p>
          <p className={styles.assistanceDescription}>
            Our team is here to help you find Workers for all your needs.
            Contact us or check out the ConnectMtaani Help Center to get started
            today.
          </p>
          <div className={styles.buttonGroup}>
            <a href="#" className={`${styles.button} ${styles.buttonSecondary}`}>
              HELP CENTER
            </a>
            <a href="#" className={styles.button}>
              SCHEDULE A CALL →
            </a>
          </div>
        </div>
                 </div>
               </>
             );
           }

export default ExtraAssistance;