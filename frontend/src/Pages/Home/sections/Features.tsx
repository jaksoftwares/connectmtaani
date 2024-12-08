import React, { useState } from "react";
import styles from "./Features.module.css";

const FeaturesMain: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Hiring" | "Workers">("Hiring");

  const content = {
    Hiring: {
      title: "Get your Job done by Hiring On Demand, Anytime",
      description:
        "We go beyond simply connecting job seekers and employers. Our platform is tailored to meet the unique demands of Kenya’s informal sector by combining cutting-edge technology with personalized support. ConnectMtaani is the trusted choice for connecting employers and workers in the informal sector across the country.",
      points: [
        "Dedicated Support team and Seamless Hiring",
        "Instant access to a vast database of skilled Workers across Kenya",
        "Top-of-the-line technology and automation for managing all staffing needs",
      ],
      buttonText: "START HIRING NOW",
      imageUrl: "/public/home/contract-image.png", 
    },
    Workers: {
      title: "Find Opportunities and Connect with Employers, Instantly",
      description:
        "Join the ConnectMtaani platform to discover opportunities tailored to your skills and location. We empower workers in Kenya’s informal sector by providing access to job opportunities, resources, and support to help you succeed.",
      points: [
        "Access to a diverse range of job opportunities across Kenya",
        "Tools to showcase your skills and build your professional profile",
        "Support and resources to help you navigate your career journey",
      ],
      buttonText: "START WORKING NOW",
      imageUrl: "/public/home/contract-image.png",
    },
  };

  const { title, description, points, buttonText, imageUrl } = content[activeTab];

  return (
    <section className={styles.container}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className={styles.content}>
        <div className={styles.tabs}>
          <button
            className={`${styles.tabButton} ${
              activeTab === "Hiring" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("Hiring")}
          >
            Hiring
          </button>
          <button
            className={`${styles.tabButton} ${
              activeTab === "Workers" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("Workers")}
          >
            Workers
          </button>
        </div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <ul className={styles.list}>
          {points.map((point, index) => (
            <li key={index} className={styles.listItem}>
              <i className="fas fa-check-circle"></i> {point}
            </li>
          ))}
        </ul>
        <button className={styles.ctaButton}>
          {buttonText} <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </section>
  );
};

export default FeaturesMain;
