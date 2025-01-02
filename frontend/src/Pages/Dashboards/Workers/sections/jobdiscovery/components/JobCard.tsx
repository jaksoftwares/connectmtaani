import React, { useState } from 'react';

interface JobCardProps {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
  status: 'active' | 'expired' | 'bidding in progress';
  onBid: (jobId: number) => void;
  onClick?: () => void;
}

const JobCard: React.FC<JobCardProps> = ({
  id,
  title,
  company,
  location,
  salary,
  description,
  status,
  onBid,
}) => {
  // State to handle modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Default onSave functionality
  const handleSave = () => {
    console.log(`Job with ID ${id} saved!`);
    closeModal(); // Optionally close the modal after saving
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm text-gray-600">{company}</p>
      <p className="text-sm text-gray-500">{location}</p>
      <p className="text-sm font-medium text-green-600">Salary: {salary}</p>

      {/* Main Description */}
      <p className="mt-2 text-sm text-gray-700">{description}</p>

      <p
        className={`mt-2 text-sm font-semibold ${
          status === 'active'
            ? 'text-green-600'
            : status === 'expired'
            ? 'text-red-600'
            : 'text-yellow-600'
        }`}
      >
        Status: {status}
      </p>

      {/* View this Job button */}
      {status === 'active' && (
        <button
          onClick={openModal}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          View this Job
        </button>
      )}

      {/* Modal for job details */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm text-gray-600">{company}</p>
            <p className="text-sm text-gray-500">{location}</p>
            <p className="text-sm font-medium text-green-600">Salary: {salary}</p>
            <p className="mt-2 text-sm text-gray-700">{description}</p>

            <p
              className={`mt-2 text-sm font-semibold ${
                status === 'active'
                  ? 'text-green-600'
                  : status === 'expired'
                  ? 'text-red-600'
                  : 'text-yellow-600'
              }`}
            >
              Status: {status}
            </p>

            {/* Bid and Save buttons inside the modal */}
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => onBid(id)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Bid for this Job
              </button>
              <button
                onClick={handleSave}
                className="ml-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Save this Job
              </button>
            </div>

            {/* Close Modal Button */}
            <button
              onClick={closeModal}
              className="mt-4 w-full py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobCard;
