"use client"

import React, { useState } from 'react';
import Navbar from './common/Navbar';
import Sidebar from './common/Sidebar';
import Footer from './common/Footer';
import Profile from './sections/profile';
import JobDiscovery from './sections/jobdiscovery/JobDiscovery';
import Applications from './sections/applications/applications';
import SavedJobs from './sections/savedjobs/savedJobs';
import Notifications from './sections/notifications/notifications';
import Insights from './sections/insights/insights';

const JobSeekersDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState('JobDiscovery');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case 'Profile':
        return <Profile />;
      case 'JobDiscovery':
        return <JobDiscovery />;
      case 'Applications':
        return <Applications applications={[]} />;
      case 'SavedJobs':
        return <SavedJobs />;
      case 'Notifications':
        return <Notifications />;
      case 'Insights':
        return <Insights />;
      default:
        return <JobDiscovery />;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar
        setActiveSection={setActiveSection}
        activeSection={activeSection}
        onCollapseChange={(collapsed) => setIsSidebarCollapsed(collapsed)}
      />
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isSidebarCollapsed ? 'ml-16' : 'ml-64'
        }`}
      >
        <Navbar />
        <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
          {renderSection()}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default JobSeekersDashboard;
