import React, { useState } from 'react';

const Settings: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Account');

  const categories = [
    'Account',
    'Privacy & Security',
    'Notifications',
    'Preferences',
    'Integrations',
  ];

  const renderCategoryContent = () => {
    switch (activeCategory) {
      case 'Account':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded focus:outline-none"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded focus:outline-none"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border rounded focus:outline-none"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-gray-700">Change Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded focus:outline-none"
                  placeholder="Enter new password"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Save Changes
              </button>
            </form>
          </div>
        );

      case 'Privacy & Security':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Privacy & Security Settings</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700">Two-Factor Authentication</label>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Enable two-factor authentication</span>
                </div>
              </div>
              <div>
                <label className="block text-gray-700">Data Sharing</label>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Allow data sharing with third-party services</span>
                </div>
              </div>
              <div>
                <label className="block text-gray-700">Password Reset Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded focus:outline-none"
                  placeholder="Enter recovery email"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Save Changes
              </button>
            </form>
          </div>
        );

      case 'Notifications':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Notification Settings</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700">Email Notifications</label>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Receive notifications via email</span>
                </div>
              </div>
              <div>
                <label className="block text-gray-700">SMS Notifications</label>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Receive notifications via SMS</span>
                </div>
              </div>
              <div>
                <label className="block text-gray-700">Push Notifications</label>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Receive notifications via mobile app</span>
                </div>
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Save Changes
              </button>
            </form>
          </div>
        );

      case 'Preferences':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Preferences</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700">Language</label>
                <select className="w-full px-4 py-2 border rounded focus:outline-none">
                  <option value="en">English</option>
                  <option value="sw">Swahili</option>
                  <option value="fr">French</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Time Zone</label>
                <select className="w-full px-4 py-2 border rounded focus:outline-none">
                  <option value="EAT">East Africa Time (EAT)</option>
                  <option value="GMT">Greenwich Mean Time (GMT)</option>
                  <option value="PST">Pacific Standard Time (PST)</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Theme</label>
                <select className="w-full px-4 py-2 border rounded focus:outline-none">
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Save Changes
              </button>
            </form>
          </div>
        );

      case 'Integrations':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Integrations</h2>
            <p className="mb-6 text-gray-600">
              Manage third-party services integrated with your account.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Google Account</span>
                <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                  Disconnect
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span>Facebook Account</span>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Connect
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-100 p-4 rounded-lg">
          <ul className="space-y-3">
            {categories.map((category) => (
              <li
                key={category}
                className={`cursor-pointer px-4 py-2 rounded ${
                  activeCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'hover:bg-blue-100 text-gray-700'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        {/* Content */}
        <div className="w-3/4 pl-6">{renderCategoryContent()}</div>
      </div>
    </div>
  );
};

export default Settings;
