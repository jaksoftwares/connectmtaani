import React from 'react';
import Navbar from '../../Components/Common/Navbar/Navbar';
import Starter from './sections/Starter';
import Footer from '../../Components/Common/Footer/Footer';
import Hero from './sections/HeroSection';
import StatsSection from './sections/StatsSection';
import HowItWorks from './sections/HowItWorks';
import FeaturesMain from './sections/Features';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Starter />
      <Navbar/>
      <Hero />
      <StatsSection/>
      <HowItWorks/>
      <FeaturesMain/>
      <Footer/>

      {/* Add other sections here */}
    </div>
  );
};

export default LandingPage;