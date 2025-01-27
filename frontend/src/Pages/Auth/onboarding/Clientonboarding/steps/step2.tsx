import React from 'react';

const Step2PersonalInfo: React.FC = () => (
  <div>
    {/* Title */}
    <h2 className="text-3xl font-semibold mb-4">Personal Information</h2>

    {/* Input Fields */}
    <input
      type="text"
      placeholder="Full Name"
      className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      type="email"
      placeholder="Email Address"
      className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      type="tel"
      placeholder="Phone Number"
      className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

export default Step2PersonalInfo;
