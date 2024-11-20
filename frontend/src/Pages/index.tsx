import React from 'react';
import Navbar from '../Components/Navbar/navbar';
import Hero from '../Components/Hero/Hero';
import About from '../Components/About/About';
import Features from '../Components/Features/Features';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <About />
      <Features />
      {/* Add other sections here */}
    </div>
  );
};

export default LandingPage;
