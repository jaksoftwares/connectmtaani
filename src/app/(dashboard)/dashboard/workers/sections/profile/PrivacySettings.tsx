import React, { useState } from 'react';

const PrivacySettings: React.FC = () => {
  const [isPublic, setIsPublic] = useState(true);

  const togglePrivacy = () => {
    setIsPublic(!isPublic);
    console.log('Privacy setting updated:', isPublic ? 'Private' : 'Public');
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Privacy Settings</h2>
      <p className="text-gray-600 mb-4">
        Current Privacy: <strong>{isPublic ? 'Public' : 'Private'}</strong>
      </p>
      <button
        onClick={togglePrivacy}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Toggle Privacy
      </button>
    </div>
  );
};

export default PrivacySettings;
