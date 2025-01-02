// src/pages/FlaggedUsersAlerts.tsx
import React from "react";

const FlaggedUsersAlerts: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Flagged Users & Alerts</h2>
      <div className="space-y-4">
        <div className="bg-red-50 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">Suspicious Activity Detected</h3>
          <p className="text-gray-700">User Jane Doe has been flagged for unusual activity.</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">Content Reported</h3>
          <p className="text-gray-700">User John Smith's post has been flagged for inappropriate content.</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">User Verified</h3>
          <p className="text-gray-700">User Alice Johnson's account has been successfully verified.</p>
        </div>
      </div>
      <div className="mt-6">
        <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600">View All Alerts</button>
        <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 ml-4">Resolve Flagged Issues</button>
      </div>
    </div>
  );
};

export default FlaggedUsersAlerts;
