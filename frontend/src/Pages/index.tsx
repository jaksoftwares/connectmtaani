import React from 'react';
import Navbar from '../Components/Navbar/navbar';
import Starter from '../Components/Starter/Starter';
import About from '../Components/About/About';
import Features from '../Components/Features/Features';
import Footer from '../Components/Footer/Footer';
import Hero from '../Components/Hero/Hero';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Starter />
      <Navbar/>
      <Hero />
      <About />
      <Features />
      <Footer/>

      {/* Add other sections here */}
    </div>
  );
};

export default LandingPage;
