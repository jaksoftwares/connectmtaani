import React from 'react';
import WelcomeSection from './sections/WelcomeSection';
import ProfileCompletion from './sections/ProfileCompletion';
import JobRecommendations from './sections/AvailableJobs';
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