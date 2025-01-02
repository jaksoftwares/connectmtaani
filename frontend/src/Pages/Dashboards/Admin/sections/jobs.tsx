import React from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import Table from '../components/Table'; // Assuming Table is a reusable component

const Jobs: React.FC = () => {
  // Example job data, replace with actual data from an API
  const jobsData = [
    { id: 1, title: 'Software Developer', company: 'ABC Ltd.', location: 'Nairobi', status: 'Active' },
    { id: 2, title: 'Graphic Designer', company: 'XYZ Inc.', location: 'Mombasa', status: 'Inactive' },
    { id: 3, title: 'Project Manager', company: 'Tech Solutions', location: 'Nairobi', status: 'Active' },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Job Management</h2>

      {/* Add Job Button */}
      <div className="mb-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Add Job
        </button>
      </div>

      {/* Table to display the jobs */}
      <Table
        headers={['Job Title', 'Company', 'Location', 'Status', 'Actions']}
        rows={jobsData.map((job) => [
          job.title,
          job.company,
          job.location,
          job.status,
          <div className="flex space-x-2">
            <button className="text-blue-500 hover:text-blue-700">
              <FiEdit size={18} />
            </button>
            <button className="text-red-500 hover:text-red-700">
              <FiTrash2 size={18} />
            </button>
          </div>,
        ])}
      />
    </div>
  );
};

export default Jobs;
