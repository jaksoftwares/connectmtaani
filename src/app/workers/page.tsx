import React from 'react';
import HeroSection from './sections/HeroSection';
import WhyChooseConnect from '../hiring/sections/WhyChoseConnect';
import FAQSection from '../hiring/sections/FAQSection';

import GetStarted from '../hiring/sections/GetStarted';
import ExtraAssistance from '../hiring/sections/ExtraAssistance';




const LandingPage: React.FC = () => {
  return (
    <div>
       <HeroSection />
       <WhyChooseConnect />
       <FAQSection />
  
      <GetStarted />
      <ExtraAssistance /> 
    </div>
  );
};

export default LandingPage;
