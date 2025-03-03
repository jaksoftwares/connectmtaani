import React, { useState } from 'react';
import Navbar from './common/Navbar';
import Sidebar from './common/Sidebar';
import Footer from './common/Footer';
import DashboardOverview from './sections/Overview';
import JobManagement from './sections/JobManagement';
import MessagesSection from './sections/MessageSection';
import Settings from './sections/Settings';
// import ApplicationManagement from './sections/JobApplications';
import ApplicantsManagement from './sections/JobApplications';

const EmployersDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState('Overview');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case 'Overview':
        return <DashboardOverview />;
      case 'Job Management':
        return <JobManagement />;
      case 'Applications':
        return <ApplicantsManagement/>
      case 'Messages':
        return <MessagesSection/>
      case 'Settings':
        return <Settings/>

      // Add more cases as needed
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        setActiveSection={setActiveSection}
        activeSection={activeSection}
        onCollapseChange={setIsSidebarCollapsed}
      />

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isSidebarCollapsed ? 'pl-16' : 'pl-64'
        }`}
      >
        <Navbar />
        <main className="flex-1 overflow-y-auto bg-gray-100 p-6">{renderSection()}</main>
        <Footer />
      </div>
    </div>
  );
};

export default EmployersDashboard;
