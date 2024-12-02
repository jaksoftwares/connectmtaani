import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      {/* About Us */}
      <div className={styles.section}>
        <h4>About Us</h4>
        <p>
          ConnectMtaani is Kenya's premier platform connecting job seekers and employers in the informal sector. 
          Our goal is to bridge the gap between talent and opportunity with reliability and efficiency.
        </p>
        <a href="/about">Learn More About Us</a>
      </div>

      {/* Quick Links */}
      <div className={styles.section}>
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/features">Features</a></li>
          <li><a href="/pricing">Pricing</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/faq">FAQ</a></li>
        </ul>
      </div>

      {/* Resources */}
      <div className={styles.section}>
        <h4>Resources</h4>
        <ul>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-of-service">Terms of Service</a></li>
          <li><a href="/user-guidelines">User Guidelines</a></li>
          <li><a href="/support">Support Centre</a></li>
        </ul>
      </div>

      {/* Connect With Us */}
      <div className={styles.section}>
        <h4>Connect With Us</h4>
        <div className={styles.socialIcons}>
          <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
          <a href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
        </div>
        <form className={styles.newsletter}>
          <label htmlFor="newsletter">Subscribe to our newsletter for updates and opportunities:</label>
          <div>
            <input type="email" id="newsletter" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </div>
        </form>
      </div>

      {/* Copyright and Branding */}
      <div className={styles.section}>
        <p>© 2024 ConnectMtaani. All Rights Reserved.</p>
        <p className={styles.tagline}>Empowering Kenya’s Workforce, One Connection at a Time.</p>
      </div>

      {/* Contact Information */}
      <div className={styles.section}>
        <h4>Contact Information</h4>
        <p>Email: <a href="mailto:support@connectmtaani.com">support@connectmtaani.com</a></p>
        <p>Phone: +254 700 123 456</p>
        <p>Address: 123 Connect Street, Nairobi, Kenya</p>
      </div>
    </footer>
  );
};

export default Footer;
