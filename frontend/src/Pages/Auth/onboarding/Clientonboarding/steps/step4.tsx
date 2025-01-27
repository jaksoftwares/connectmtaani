import React from 'react';

const Step4JobPreferences: React.FC = () => (
  <div>
    {/* Title */}
    <h2 className="text-3xl font-semibold mb-4">Job Preferences</h2>

    {/* Input Fields */}
    <input
      type="text"
      placeholder="Preferred Job Location"
      className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      type="number"
      placeholder="Preferred Job Duration (in days)"
      className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

export default Step4JobPreferences;
