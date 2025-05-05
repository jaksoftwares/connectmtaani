"use client"

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Dashboard from './sections/dashboard';
import Users from './sections/users';
import Jobs from './sections/jobs';
import Applications from './sections/applications';
import Reports from './sections/reports';
import Settings from './sections/settings';
import PlatformActivities from './sections/plafformactivities'; // Platform Activities page
import FlaggedUsersAlerts from './sections/flaggedUsersAlerts'; // Flagged Users & Alerts page

const AdminLayout: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('dashboard');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'users':
        return <Users />;
      case 'jobs':
        return <Jobs />;
      case 'applications':
        return <Applications />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <Settings />;
      case 'platform-activities':
        return <PlatformActivities />;
      case 'flagged-users-alerts':
        return <FlaggedUsersAlerts />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar
        setActiveSection={setActiveSection}
        activeSection={activeSection}
        onCollapseChange={setIsSidebarCollapsed}
      />

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isSidebarCollapsed ? 'ml-16' : 'ml-64'
        }`}
      >
        {/* Navbar */}
        <Navbar />

        {/* Content Area */}
        <main className="flex-1 p-6 bg-gray-100">
          {renderSection()}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;
