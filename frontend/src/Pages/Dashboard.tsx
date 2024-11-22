import React from 'react';
import WelcomeSection from '../Components/Dashboard/WelcomeSection/WelcomeSection';
import ProfileCompletion from '../Components/Dashboard/ProfileCompletion/ProfileCompletion';
import JobRecommendations from '../Components/Dashboard/JobRecommendations/JobRecommendations';

const DashboardPage: React.FC = () => {
  return (
    <div>
      <WelcomeSection />
      <ProfileCompletion />
      <JobRecommendations />
    </div>
  );
};

export default DashboardPage;
