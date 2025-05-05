import React from 'react';

const ResumeManager: React.FC = () => {
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log('Resume uploaded:', file.name);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Resume Manager</h2>
      <p className="text-gray-600 mb-4">Upload and manage your resume.</p>
      <input
        type="file"
        onChange={handleFileUpload}
        className="block w-full mb-4 text-gray-600 border rounded-md focus:ring-blue-600"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        Upload Resume
      </button>
    </div>
  );
};

export default ResumeManager;
