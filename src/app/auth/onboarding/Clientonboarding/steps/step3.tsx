import React from 'react';

const Step3BusinessInfo: React.FC = () => (
  <div>
    {/* Title */}
    <h2 className="text-3xl font-semibold mb-4">Business Information</h2>

    {/* Input Fields */}
    <input
      type="text"
      placeholder="Business Name"
      className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <select
      className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">Select Business Type</option>
      <option value="construction">Construction</option>
      <option value="artisan">Artisan</option>
      <option value="domestic">Domestic Services</option>
      <option value="other">Other</option>
    </select>
    <input
      type="text"
      placeholder="Business Location"
      className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

export default Step3BusinessInfo;
