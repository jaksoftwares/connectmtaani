import React from 'react';

const ProfileOverview: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Profile Overview</h2>
      <div className="flex items-center gap-6 mb-4">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="w-24 h-24 rounded-full border"
        />
        <div>
          <h3 className="text-xl font-semibold">John Doe</h3>
          <p className="text-gray-600">Software Developer</p>
          <p className="text-gray-600">Nairobi, Kenya</p>
        </div>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        Edit Profile
      </button>
    </div>
  );
};

export default ProfileOverview;
