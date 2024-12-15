import React from 'react';
import styles from './PopularCategories.module.css';

const PopularCategories: React.FC = () => {
  const categories = [
    { title: "Construction", image: "/home/handbrush.png" },
    { title: "Tech Support", image: "/home/handbrush.png" },
    { title: "Creative Design", image: "/home/handbrush.png" },
    { title: "Education", image: "/home/handbrush.png" },
    { title: "Healthcare", image: "/home/handbrush.png" },
    { title: "Finance", image: "/home/handbrush.png" },
    { title: "Marketing", image: "/home/handbrush.png" },
    { title: "Retail", image: "/home/handbrush.png" },
    { title: "Transport", image: "/home/handbrush.png" },
    { title: "Event Planning", image: "/home/handbrush.png" },
    { title: "Hospitality", image: "/home/handbrush.png" },
    { title: "Manufacturing", image: "/home/handbrush.png" },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Title Section */}
        <div className={styles.titleContainer}>
          <p className={styles.subtitle}>Skills for all your job requirements</p>
          <h1 className={styles.title}>Popular Categories</h1>
        </div>

        {/* Categories Section */}
        <div className={styles.cardContainer}>
          {categories.map((category, index) => (
            <div key={index} className={styles.card}>
              <div
                className={styles.image}
                style={{ backgroundImage: `url(${category.image})` }}
              ></div>
              <p className={styles.cardTitle}>{category.title}</p>
            </div>
          ))}
        </div>

        {/* Link Section */}
        <div className={styles.linkContainer}>
          <a href="/categories" className={styles.link}>
            Browse All Categories <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
