import React from 'react';
import Navbar from '../../Components/Common/Navbar/Navbar';
import Footer from '../../Components/Common/Footer/Footer';
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
      <Navbar />
       <HeroSection />
       <WhyChooseConnect />
       <FAQSection />
      <PopularCategories />
      <HowToHire />
      <CaseStudy />
      <GetStarted />
      <ExtraAssistance /> 
      <Footer />
    </div>
  );
};

export default LandingPage;
