import React from 'react';
import Table from '../components/Table';// Adjust path if needed
import { FiCheckCircle, FiXCircle, FiCalendar } from 'react-icons/fi'; // Icons for accept, reject, schedule interview

const Applications: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Job Applications</h2>
      
      {/* Filter, Search, or Sort Controls */}
      <div className="mb-6 flex justify-between items-center">
        <div className="flex gap-4">
          {/* Add filter options for application status, etc. */}
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Filter by Status</button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-md">Sort by Date</button>
        </div>
        <input
          type="text"
          placeholder="Search Applicants..."
          className="px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Table for Applications */}
      <Table
        headers={["Applicant Name", "Job Title", "Date of Application", "Status", "Contact", "Actions"]}
        rows={[
          [
            "Jane Doe", 
            "Software Engineer", 
            "2025-01-01", 
            <span className="text-yellow-500">Pending</span>,
            "jane.doe@example.com", 
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-green-500 text-white rounded-md flex items-center">
                <FiCheckCircle className="mr-2" /> Accept
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-md flex items-center">
                <FiXCircle className="mr-2" /> Reject
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md flex items-center">
                <FiCalendar className="mr-2" /> Schedule
              </button>
            </div>
          ],
          [
            "John Smith", 
            "Project Manager", 
            "2025-01-02", 
            <span className="text-green-500">Accepted</span>,
            "john.smith@example.com", 
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-green-500 text-white rounded-md flex items-center">
                <FiCheckCircle className="mr-2" /> Accept
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-md flex items-center">
                <FiXCircle className="mr-2" /> Reject
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md flex items-center">
                <FiCalendar className="mr-2" /> Schedule
              </button>
            </div>
          ],
          [
            "Alice Johnson", 
            "UX Designer", 
            "2025-01-03", 
            <span className="text-red-500">Rejected</span>,
            "alice.j@example.com", 
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-green-500 text-white rounded-md flex items-center">
                <FiCheckCircle className="mr-2" /> Accept
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-md flex items-center">
                <FiXCircle className="mr-2" /> Reject
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md flex items-center">
                <FiCalendar className="mr-2" /> Schedule
              </button>
            </div>
          ],
        ]}
      />
    </div>
  );
};

export default Applications;
