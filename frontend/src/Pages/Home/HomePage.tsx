import React from 'react';
import Navbar from '../../Components/Common/Navbar/Navbar';
import Starter from './sections/Starter';
import Footer from '../../Components/Common/Footer/Footer';
import Hero from './sections/HeroSection';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Starter />
      <Navbar/>
      <Hero />
      <Footer/>

      {/* Add other sections here */}
    </div>
  );
};

export default LandingPage;