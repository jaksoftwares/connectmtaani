import React from 'react';
import Navbar from '../../Components/Common/Navbar/Navbar';
import Footer from '../../Components/Common/Footer/Footer';
import HeroSection from './sections/HeroSection';
import WhyChooseConnect from '../../Pages/Hiring/sections/WhyChoseConnect';
import FAQSection from '../../Pages/Hiring/sections/FAQSection';
import TestimonialCarousel from './sections/Testimonials';
import GetStarted from '../../Pages/Hiring/sections/GetStarted';
import ExtraAssistance from '../../Pages/Hiring/sections/ExtraAssistance';




const LandingPage: React.FC = () => {
  return (
    <div>
      <Navbar />
       <HeroSection />
       <WhyChooseConnect />
       <FAQSection />
       <TestimonialCarousel />
       <GetStarted />
       <ExtraAssistance /> 
       <Footer />
    </div>
  );
};

export default LandingPage;
