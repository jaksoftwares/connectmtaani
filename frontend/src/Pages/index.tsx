import React from 'react';
import Hero from '../Components/Hero/Hero';
import About from '../Components/About/About';
import Features from '../Components/Features/Features';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Features />
      {/* Add other sections here */}
    </div>
  );
};

export default LandingPage;
