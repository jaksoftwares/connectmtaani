// src/pages/PlatformActivities.tsx
import React from "react";

const PlatformActivities: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Platform Activities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">Active Sessions</h3>
          <p className="text-3xl text-gray-700">120</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">New Signups</h3>
          <p className="text-3xl text-gray-700">40</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">Reported Issues</h3>
          <p className="text-3xl text-gray-700">8</p>
        </div>
      </div>
      <div className="mt-6">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">View All Activities</button>
        <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 ml-4">Manage Suspicious Activities</button>
      </div>
    </div>
  );
};

export default PlatformActivities;
