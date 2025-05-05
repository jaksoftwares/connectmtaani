"use client"

import React, { useState } from 'react';
import { FaTachometerAlt, FaBriefcase, FaFolder, FaFlag, FaUsers, FaFileAlt, FaCog } from 'react-icons/fa';

interface SidebarProps {
  setActiveSection: (section: string) => void;
  activeSection: string;
  onCollapseChange: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveSection, activeSection, onCollapseChange }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const menuItems = [
    { label: 'Dashboard', icon: <FaTachometerAlt />, value: 'dashboard' },
    { label: 'Platform Activities', icon: <FaFlag />, value: 'platform-activities' },
    { label: 'Flagged Users & Alerts', icon: <FaUsers />, value: 'flagged-users-alerts' },
    { label: 'Jobs', icon: <FaBriefcase />, value: 'jobs' },
    { label: 'Applications', icon: <FaFolder />, value: 'applications' },
    { label: 'Reports', icon: <FaFileAlt />, value: 'reports' },
    { label: 'Settings', icon: <FaCog />, value: 'settings' },
  ];

  const handleCollapseToggle = () => {
    setIsCollapsed((prevState) => {
      const newState = !prevState;
      onCollapseChange(newState); // Notify the parent about the collapse state change
      return newState;
    });
  };

  return (
    <aside
      className={`transition-all duration-300 h-screen shadow-lg bg-gray-800 fixed top-0 left-0 z-50 ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      <div
        className="flex items-center justify-between px-4 py-6 text-white font-bold text-xl cursor-pointer hover:bg-gray-700 transition-colors"
        onClick={handleCollapseToggle}
      >
        <span className={`${isCollapsed ? 'hidden' : 'block'}`}>ConnectMtaani</span>
        <span className="text-2xl">{isCollapsed ? '→' : '←'}</span>
      </div>
      <ul className="mt-4">
        {menuItems.map((item) => (
          <li
            key={item.label}
            className={`flex items-center px-4 py-3 cursor-pointer transition-colors ${
              activeSection === item.value
                ? 'bg-blue-500 text-white'
                : 'hover:bg-gray-700 text-white'
            }`}
            onClick={() => setActiveSection(item.value)}
          >
            <span className="text-xl mr-3">{item.icon}</span>
            <span className={`${isCollapsed ? 'hidden' : 'block'}`}>{item.label}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
