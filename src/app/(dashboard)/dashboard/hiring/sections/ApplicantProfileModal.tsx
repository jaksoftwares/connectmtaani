import React from 'react';
import { FaTimes } from 'react-icons/fa';

interface ApplicantProfileModalProps {
  applicant: {
    name: string;
    jobTitle: string;
    date: string;
    status: string;
    cvLink?: string;
    coverLetterLink?: string;
  };
  onClose: () => void;
}

const ApplicantProfileModal: React.FC<ApplicantProfileModalProps> = ({
  applicant,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-3/4 md:w-1/2 rounded-lg shadow-lg p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          <FaTimes size={20} />
        </button>

        {/* Applicant Details */}
        <h2 className="text-2xl font-bold mb-4">Applicant Profile</h2>
        <div className="space-y-3">
          <p>
            <strong>Name:</strong> {applicant.name}
          </p>
          <p>
            <strong>Job Applied For:</strong> {applicant.jobTitle}
          </p>
          <p>
            <strong>Application Date:</strong> {applicant.date}
          </p>
          <p>
            <strong>Status:</strong>{' '}
            <span
              className={`px-2 py-1 rounded ${
                applicant.status === 'Pending'
                  ? 'bg-yellow-100 text-yellow-600'
                  : applicant.status === 'Hired'
                  ? 'bg-green-100 text-green-600'
                  : 'bg-blue-100 text-blue-600'
              }`}
            >
              {applicant.status}
            </span>
          </p>
        </div>

        {/* Documents Section */}
        <div className="mt-6">
          <h3 className="text-xl font-bold mb-3">Documents</h3>
          <ul className="space-y-2">
            {applicant.cvLink ? (
              <li>
                <a
                  href={applicant.cvLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View CV
                </a>
              </li>
            ) : (
              <li className="text-gray-500">No CV uploaded</li>
            )}
            {applicant.coverLetterLink ? (
              <li>
                <a
                  href={applicant.coverLetterLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Cover Letter
                </a>
              </li>
            ) : (
              <li className="text-gray-500">No Cover Letter uploaded</li>
            )}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Close
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Shortlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicantProfileModal;
