import React from 'react';
import Footer from '../Components/Footer/Footer';

const LoginPage: React.FC = () => {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <Footer/>
    </div>
  );
};

export default LoginPage;
