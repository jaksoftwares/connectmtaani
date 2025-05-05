import React, { useState } from 'react';
import { FaUser, FaSearch, FaFolderOpen, FaHeart, FaBell, FaChartPie } from 'react-icons/fa';

interface SidebarProps {
  setActiveSection: (section: string) => void;
  activeSection: string;
  onCollapseChange: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveSection, activeSection, onCollapseChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { label: 'Profile', icon: <FaUser />, value: 'Profile' },
    { label: 'Discover Jobs', icon: <FaSearch />, value: 'JobDiscovery' },
    { label: 'Applications', icon: <FaFolderOpen />, value: 'Applications' },
    { label: 'Saved Jobs', icon: <FaHeart />, value: 'SavedJobs' },
    { label: 'Notifications', icon: <FaBell />, value: 'Notifications' },
    { label: 'Insights', icon: <FaChartPie />, value: 'Insights' },
  ];

  const handleCollapseToggle = () => {
    setIsCollapsed((prevState) => {
      const newState = !prevState;
      onCollapseChange(newState); // Notify parent about collapse state
      return newState;
    });
  };

  return (
    <aside
      className={`transition-all duration-300 h-screen shadow-lg bg-gray-800 text-white fixed top-0 left-0 z-50 ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      <div
        className="flex items-center justify-between px-4 py-6 text-white font-bold text-xl cursor-pointer hover:bg-gray-700 transition-colors"
        onClick={handleCollapseToggle}
      >
        <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Dashboard</span>
        <span className="text-2xl">{isCollapsed ? '→' : '←'}</span>
      </div>
      <ul className="mt-4">
        {menuItems.map((item) => (
          <li
            key={item.value}
            className={`flex items-center px-4 py-3 cursor-pointer transition-colors ${
              activeSection === item.value
                ? 'bg-blue-500 text-white'
                : 'hover:bg-gray-700 text-gray-300'
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
