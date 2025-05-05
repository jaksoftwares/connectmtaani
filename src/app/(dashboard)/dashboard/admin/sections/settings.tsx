import React, { useState } from 'react';
import { FiSave, FiEdit } from 'react-icons/fi';

const Settings: React.FC = () => {
  // Example state for the settings (e.g., email notifications)
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailNotifications(e.target.checked);
  };

  const handle2FAChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTwoFactorAuth(e.target.checked);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Platform Settings</h2>

      {/* Notification Settings */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Notifications</h3>
        <label className="flex items-center space-x-4">
          <span className="text-gray-700">Enable Email Notifications</span>
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={handleEmailChange}
            className="toggle-checkbox"
          />
        </label>
      </div>

      {/* Two-Factor Authentication */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Two-Factor Authentication</h3>
        <label className="flex items-center space-x-4">
          <span className="text-gray-700">Enable 2FA</span>
          <input
            type="checkbox"
            checked={twoFactorAuth}
            onChange={handle2FAChange}
            className="toggle-checkbox"
          />
        </label>
      </div>

      {/* Save Button */}
      <div className="mt-6 text-right">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          <FiSave size={18} className="mr-2" />
          Save Changes
        </button>
      </div>

      {/* Admin Roles Management */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Manage Admin Roles</h3>
        <div className="bg-gray-50 p-4 rounded-lg shadow-md mb-6">
          <h4 className="text-lg font-semibold text-gray-800">Admin Roles</h4>
          <p className="text-gray-700 mb-2">Here you can add or remove roles for platform administrators.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            <FiEdit size={18} className="mr-2" />
            Edit Roles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
