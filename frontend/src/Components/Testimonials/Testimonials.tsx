import React from 'react';
import styles from './Testimonials.module.css';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "John Mwangi",
      role: "Employer",
      feedback: "ConnectMtaani has streamlined my hiring process. I’ve found great talent in no time!",
      image: "/assets/users/john.png",
    },
    {
      name: "Grace Wanjiru",
      role: "Job Seeker",
      feedback: "This platform has been a lifesaver! I got a job within days of signing up.",
      image: "/assets/users/grace.png",
    },
  ];

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2>What Our Users Say</h2>
        <div className={styles.testimonialList}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialItem}>
              <img src={testimonial.image} alt={testimonial.name} />
              <p>"{testimonial.feedback}"</p>
              <h4>{testimonial.name}</h4>
              <span>{testimonial.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
