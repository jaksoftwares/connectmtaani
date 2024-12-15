import React, { useState } from 'react';
import styles from './FAQSection.module.css';

const FAQSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<"FIND" | "HIRE" | "PAY">("FIND");

    const content = {
        FIND: {
            title: "How to Find a Job on Demand now",
            subtitle: "No commitments necessary...",
            points: [
                "Post Your Job: Create and publish a job post in minutes.",
                "Browse Profiles: Search and filter through job seekers based on skills, ratings, and availability.",
                "Hire with Confidence: Review applications and choose the best fit.",
                "Get the Job Done: Seamlessly communicate with workers and complete the task.",
                " "
            ],
            buttonText: "APPLY FOR A JOB NOW",
        },
        HIRE: {
            title: "How to Hire Temporary Workers on Demand",
            subtitle: "No commitments necessary...",
            points: [
                "Post Your Job: Create and publish a job post in minutes.",
                "Browse Profiles: Search and filter through job seekers based on skills, ratings, and availability.",
                "Hire with Confidence: Review applications and choose the best fit.",
                "Get the Job Done: Seamlessly communicate with workers and complete the task.",
                " "
            ],
            buttonText: "POST A JOB NOW",
        },
        PAY: {
            title: "How to Make Payment Safely",
            subtitle: "No commitments necessary...",
            points: [
                "Post Your Job: Create and publish a job post in minutes.",
                "Browse Profiles: Search and filter through job seekers based on skills, ratings, and availability.",
                "Hire with Confidence: Review applications and choose the best fit.",
                "Get the Job Done: Seamlessly communicate with workers and complete the task.",
                " "
            ],
            buttonText: "MAKE PAYMENT SAFELY",
        },
    };

    const { title, subtitle, points, buttonText } = content[activeTab];

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                {/* Tab Buttons */}
                <div className={styles.tabs}>
                    <button
                        className={`${styles.tabButton} ${activeTab === "FIND" ? styles.activeTab : ""}`}
                        onClick={() => setActiveTab("FIND")}
                    >
                        FIND
                    </button>
                    <button
                        className={`${styles.tabButton} ${activeTab === "HIRE" ? styles.activeTab : ""}`}
                        onClick={() => setActiveTab("HIRE")}
                    >
                        HIRE
                    </button>
                    <button
                        className={`${styles.tabButton} ${activeTab === "PAY" ? styles.activeTab : ""}`}
                        onClick={() => setActiveTab("PAY")}
                    >
                        PAY
                    </button>
                </div>

                {/* Subheading and Title */}
                <h3 className={styles.subtitle}>{subtitle}</h3>
                <h2 className={styles.title}>{title}</h2>

                {/* List of Points */}
                <ul className={styles.stepList}>
                    {points.map((point, index) => {
                        const [beforeColon, afterColon] = point.split(':'); // Split the string at the colon
                        return (
                            <li key={index} className={styles.stepItem}>
                                <span>
                                    <strong>{beforeColon}:</strong>
                                    <br />
                                    {afterColon?.trim()}
                                </span>
                            </li>
                        );
                    })}
                </ul>

                {/* CTA Button */}
                <button className={styles.button}>
                    {buttonText} <i className="fas fa-arrow-right"></i>
                </button>
            </div>
        </section>
    );
};

export default FAQSection;
