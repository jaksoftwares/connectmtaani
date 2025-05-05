"use client"

import React from 'react';
import HeroSection from './sections/HeroSection';
import WhyChooseConnect from './sections/WhyChoseConnect';
import FAQSection from './sections/FAQSection';
import PopularCategories from './sections/PopularCategories';
import HowToHire from './sections/HowToHire';
import CaseStudy from './sections/CaseStudy';
import GetStarted from './sections/GetStarted';
import ExtraAssistance from './sections/ExtraAssistance';




const LandingPage: React.FC = () => {
  return (
    <div>
       <HeroSection />
       <WhyChooseConnect />
       <FAQSection />
      <PopularCategories />
      <HowToHire />
      <CaseStudy />
      <GetStarted />
      <ExtraAssistance /> 
    </div>
  );
};

export default LandingPage;
