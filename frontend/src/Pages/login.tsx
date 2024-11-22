import React, { useState } from 'react';
import styles from './LoginPage.module.css';
import Navbar from '../Components/Navbar/navbar';
import Footer from '../Components/Footer/Footer';


const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Logging in with ${provider}`);
    // Add third-party login logic here
  };

  return (
    <div>
    <Navbar/>
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Welcome Back!</h2>
        <p className={styles.subtitle}>Log in to your account</p>

       

        {/* Email Input */}
        <div className={styles.formGroup}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password Input */}
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Remember Me Checkbox */}
        <div className={styles.formGroupCheckbox}>
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
          />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>

        {/* Submit Button */}
        <button type="submit" className={styles.submitButton}>
          Log In
        </button>
        <div className={styles.divider}>
          <span>or</span>
        </div>
         {/* Social Login Options */}
         <div className={styles.socialLogin}>
          <button
            type="button"
            className={`${styles.socialButton} ${styles.google}`}
            onClick={() => handleSocialLogin('Google')}
          >
            Continue with Google
          </button>
          <button
            type="button"
            className={`${styles.socialButton} ${styles.facebook}`}
            onClick={() => handleSocialLogin('Facebook')}
          >
            Continue with Facebook
          </button>
          <button
            type="button"
            className={`${styles.socialButton} ${styles.linkedin}`}
            onClick={() => handleSocialLogin('LinkedIn')}
          >
            Continue with LinkedIn
          </button>
        </div>

        

        {/* Additional Options */}
        <div className={styles.options}>
          <a href="/forgot-password" className={styles.link}>
            Forgot Password?
          </a>
          <p className={styles.register}>
            Don’t have an account? <a href="/signup" className={styles.link}>Sign Up</a>
          </p>
        </div>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default LoginPage;
