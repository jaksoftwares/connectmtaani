import React, { useEffect, useState } from "react";
import styles from "./CaseStudy.module.css";

const CaseStudy: React.FC = () => {
  const carouselItems = [
    {
      text: "50,000+ Job Seekers Connected",
      description: "Empowering individuals with opportunities.",
    },
    {
      text: "10,000+ Jobs Successfully Completed",
      description:
        "Enabling seamless work opportunities across Kenya's informal sector.",
    },
    {
      text: "95% Employer Satisfaction Rate",
      description: "Trusted by businesses for reliable and skilled workers.",
    },
    {
      text: "1,000+ Verified Employers",
      description: "Connecting workers to trusted, vetted organizations.",
    },
    {
      text: "Empowering Kenya’s Workforce",
      description: "Bridging the employment gap through economic growth.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Carousel Interval Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 5000); // 5-second interval

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      {/* Section 1: Carousel */}
      <div className={styles.carouselSection}>
        <div className={styles.backgroundImage}>
          <div className={styles.carouselContent}>
            <h2 className={styles.caseStudyTitle}>Case Study</h2>
            <div className={styles.carouselList}>
              {carouselItems.map((item, index) => (
                <div
                  key={index}
                  className={`${styles.carouselItem} ${
                    index === activeIndex ? styles.active : ""
                  }`}
                >
                  <h3 className={styles.carouselHeadline}>{item.text}</h3>
                  <p className={styles.carouselDescription}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


  

    </section>
  );
};

export default CaseStudy;
