import React, { useState } from 'react';

interface EditJobModalProps {
  job: {
    id: number;
    title: string;
    date: string;
    status: string;
    applicants: number;
  };
  onClose: () => void;
}

const EditJobModal = ({ job, onClose }: EditJobModalProps) => {
  const [title, setTitle] = useState(job.title);
  const [status, setStatus] = useState(job.status);
  const [date, setDate] = useState(job.date);
  const [applicants, setApplicants] = useState(job.applicants);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the job update logic here (e.g., API call)
    console.log('Job Updated:', { title, status, date, applicants });
    onClose(); // Close the modal after submission
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Edit Job</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Job Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Posting Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            >
              <option value="Active">Active</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Number of Applicants</label>
            <input
              type="number"
              value={applicants}
              onChange={(e) => setApplicants(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="flex justify-between">
            <button type="button" onClick={onClose} className="bg-gray-400 text-white px-4 py-2 rounded">
              Cancel
            </button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditJobModal;
