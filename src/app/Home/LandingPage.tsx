import Hero from './sections/HeroSection';
import StatsSection from './sections/StatsSection';
import HowItWorks from './sections/HowItWorks';
import FeaturesMain from './sections/Features';
import LookingForWork from './sections/LookingForWorkCta';
import PopularCategories from './sections/PopularCategories';
import Benefits from './sections/Benefits';
import Testimonials from './sections/Testimonials';
import Brands from './sections/Brands';
import ReadyToProceed from './sections/ReadyToProceed';
import HelpCenter from './sections/HelpCenter';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Hero />
      <StatsSection />
      <HowItWorks />
      <FeaturesMain />
      <LookingForWork />
      <PopularCategories />
      <Benefits />
      <Testimonials />
      <Brands />
      <ReadyToProceed />
      <HelpCenter />
    </div>
  );
};

export default LandingPage;