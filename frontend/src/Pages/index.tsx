import React from 'react';
import Navbar from '../Components/Navbar/navbar';
// import Starter from '../Components/Starter/Starter';
import Footer from '../Components/Footer/Footer';
import Hero from '../Components/Hero/Hero';
import AboutSection from '../Components/About/About';
import FeaturesSection from '../Components/Features/Features';
import TestimonialsSection from '../Components/Testimonials/Testimonials';
import CallToActionSection from '../Components/Cta/Cta';

const LandingPage: React.FC = () => {
  return (
    <div>
      {/*<Starter />*/}
      <Navbar/>
      <Hero />
      <AboutSection />
      <FeaturesSection />
      <TestimonialsSection/>
      <CallToActionSection/>
      <Footer/>

      {/* Add other sections here */}
    </div>
  );
};

export default LandingPage;
