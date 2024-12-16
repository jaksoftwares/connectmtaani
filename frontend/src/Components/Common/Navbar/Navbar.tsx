import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // For accessing the current URL
import styles from './navbar.module.css';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get the current URL

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav id="navbar" className={styles.navbar}>
      <div className={styles.leftnav}>
        <div className={styles.logo}>
          <a href="/">ConnectMtaani</a>
        </div>
        <ul className={`${styles.navlinks} ${menuOpen ? styles.show : ''}`}>
          <li><a href="/hiring" className={isActive('/hiring') ? styles.active : ''}>For Hiring</a></li>
          <li><a href="/workers" className={isActive('/workers') ? styles.active : ''}>For Workers</a></li>
          <li><a href="/resources" className={isActive('/resources') ? styles.active : ''}>Resources</a></li>
        </ul>
      </div>
      <div className={styles.rightnav}>
        <div className={styles.cta}>
        <button className={styles.loginbtn}><a href="/login">Login<i className="fas fa-sign-in-alt ml-2"></i> </a></button>
          <button className={styles.signupbtn}><a href="/signup">Sign Up for Free</a></button>
        </div>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <span>☰</span> {/* Hamburger menu */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
