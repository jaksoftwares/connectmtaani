// src/components/Navbar.tsx

import React, { useState } from 'react';
import styles from './navbar.module.css';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu visibility for mobile
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="/">ConnectMtaani</a>
      </div>
      <ul className={styles.navlinks }>
        <li><a href="/businesses">For Businesses</a></li>
        <li><a href="/workers">For Workers</a></li>
        <li><a href="/resources">Resources</a></li>
      </ul>
      <div className={styles.cta}>
        <button className={styles.loginbtn}><a href="/login">Login</a></button>
        <button className={styles.signupbtn}><a href="/signup">Sign Up for Free</a></button>
      </div>
      <div className={styles.menuicon} onClick={toggleMenu}>
        <span>☰</span> {/* Simple hamburger icon for mobile */}
      </div>
    </nav>
  );
};

export default Navbar;
