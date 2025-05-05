import React from "react";

const alerts = [
  {
    id: 1,
    bgColor: "bg-red-50",
    title: "Suspicious Activity Detected",
    description: "User Jane Doe has been flagged for unusual activity.",
  },
  {
    id: 2,
    bgColor: "bg-yellow-50",
    title: "Content Reported",
    description: "User John Smith's post has been flagged for inappropriate content.",
  },
  {
    id: 3,
    bgColor: "bg-green-50",
    title: "User Verified",
    description: "User Alice Johnson's account has been successfully verified.",
  },
];

const FlaggedUsersAlerts: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Flagged Users & Alerts</h2>
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div key={alert.id} className={`${alert.bgColor} p-4 rounded-lg shadow-md`}>
            <h3 className="text-xl font-semibold text-gray-800">{alert.title}</h3>
            <p className="text-gray-700">{alert.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition">
          View All Alerts
        </button>
        <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition ml-4">
          Resolve Flagged Issues
        </button>
      </div>
    </div>
  );
};

export default FlaggedUsersAlerts;
