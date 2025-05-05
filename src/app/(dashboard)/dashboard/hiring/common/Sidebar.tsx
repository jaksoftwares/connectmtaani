import React, { useState } from 'react';
import { FaTachometerAlt, FaBriefcase, FaFolder, FaComments, FaCog } from 'react-icons/fa';

interface SidebarProps {
  setActiveSection: (section: string) => void;
  activeSection: string;
  onCollapseChange: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveSection, activeSection, onCollapseChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { label: 'Overview', icon: <FaTachometerAlt /> },
    { label: 'Job Management', icon: <FaBriefcase /> },
    { label: 'Applications', icon: <FaFolder /> },
    { label: 'Messages', icon: <FaComments /> },
    { label: 'Settings', icon: <FaCog /> },
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
      className={`transition-all duration-300 h-screen shadow-lg bg-white fixed top-0 left-0 z-50 ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      <div
        className="flex items-center justify-between px-4 py-6 text-blue-600 font-bold text-xl cursor-pointer hover:bg-blue-50 transition-colors"
        onClick={handleCollapseToggle}
      >
        <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Employer Dashboard</span>
        <span className="text-2xl">{isCollapsed ? '→' : '←'}</span>
      </div>
      <ul className="mt-4">
        {menuItems.map((item) => (
          <li
            key={item.label}
            className={`flex items-center px-4 py-3 cursor-pointer transition-colors ${
              activeSection === item.label
                ? 'bg-blue-500 text-white'
                : 'hover:bg-blue-100 text-gray-700'
            }`}
            onClick={() => setActiveSection(item.label)}
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
