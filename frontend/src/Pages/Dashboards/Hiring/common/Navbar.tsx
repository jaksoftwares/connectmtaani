import React, { useState } from 'react';
import ProfileSettings from '../sections/ProfileSettings';

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [newNotifications, setNewNotifications] = useState(true);
  const [showProfileSettings, setShowProfileSettings] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <div className="text-lg font-bold text-blue-600">ConnectMtaani</div>
        <div className="flex-1 mx-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="flex items-center space-x-6 relative">
          {/* Notification Bell with Animation */}
          <button
            className={`relative ${newNotifications ? 'animate-bounce' : ''}`}
            onClick={() => setNewNotifications(false)} // Stops animation on click
          >
            <span className="material-icons text-gray-600">notifications</span>
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">3</span>
          </button>

          {/* Profile Picture with Dropdown */}
          <div className="relative">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
                <ul>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setShowProfileSettings(true); // Show Profile Settings
                      setIsDropdownOpen(false); // Close the dropdown
                    }}
                  >
                    Profile Settings
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Conditionally Render Profile Settings */}
      {showProfileSettings && (
        <div className="p-6">
          <button
            className="mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={() => setShowProfileSettings(false)} // Hide Profile Settings
          >
            Back to Dashboard
          </button>
          <ProfileSettings />
        </div>
      )}
    </div>
  );
};

export default Navbar;