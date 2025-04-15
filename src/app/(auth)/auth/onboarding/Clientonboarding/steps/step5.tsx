import React from 'react';

const Step5BusinessVerification: React.FC = () => (
  <div>
    {/* Title */}
    <h2 className="text-3xl font-semibold mb-4">Business Verification</h2>

    {/* File Input for Upload */}
    <input
      type="file"
      className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <p className="mt-2 text-sm text-gray-500">Upload your business registration documents.</p>
  </div>
);

export default Step5BusinessVerification;
