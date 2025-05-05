// import React from 'react';

// const JobManagement: React.FC = () => {
//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-xl font-semibold text-gray-800 mb-4">Job Management</h2>
//       <div className="flex justify-between items-center mb-4">
//         <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md">Create New Job</button>
//         <input
//           type="text"
//           placeholder="Search Jobs..."
//           className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//         />
//       </div>
//       <table className="w-full border-collapse">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border p-2">Job Title</th>
//             <th className="border p-2">Status</th>
//             <th className="border p-2">Applications</th>
//             <th className="border p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className="border p-2">Software Engineer</td>
//             <td className="border p-2 text-green-600">Active</td>
//             <td className="border p-2">15</td>
//             <td className="border p-2">
//               <button className="text-blue-600 hover:underline">Edit</button>
//               <button className="text-red-600 hover:underline ml-2">Delete</button>
//             </td>
//           </tr>
//           <tr>
//             <td className="border p-2">Graphic Designer</td>
//             <td className="border p-2 text-red-600">Closed</td>
//             <td className="border p-2">10</td>
//             <td className="border p-2">
//               <button className="text-blue-600 hover:underline">Edit</button>
//               <button className="text-red-600 hover:underline ml-2">Delete</button>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default JobManagement;




import { useState } from 'react';
import { FaEdit, FaTrashAlt, FaPlus } from 'react-icons/fa';
import AddJobModal from './Addjobmodal';
import EditJobModal from './Editjobmodal';

// Define the Job type
interface Job {
  id: number;
  title: string;
  date: string;
  status: 'Active' | 'Closed';
  applicants: number;
}

const JobManagement = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const jobPostings: Job[] = [
    {
      id: 1,
      title: 'Software Developer',
      date: '2024-12-01',
      status: 'Active',
      applicants: 12,
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      date: '2024-11-25',
      status: 'Closed',
      applicants: 8,
    },
    {
      id: 3,
      title: 'Marketing Manager',
      date: '2024-11-15',
      status: 'Active',
      applicants: 20,
    },
  ];

  const handleEdit = (job: Job) => {
    setSelectedJob(job);
    setShowEditModal(true);
  };

  const handleDelete = (jobId: number) => {
    if (window.confirm('Are you sure you want to delete this job posting?')) {
      console.log(`Job with ID ${jobId} deleted.`);
    }
  };

  return (
    <div className="p-6 bg-gray-100 h-full">
      <h1 className="text-2xl font-bold mb-4">Job Postings Management</h1>

      {/* Add Job Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold">Your Job Postings</h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center"
        >
          <FaPlus className="mr-2" /> Post New Job
        </button>
      </div>

      {/* Job Postings Table */}
      <div className="bg-white shadow rounded-lg p-6">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3">Title</th>
              <th className="p-3">Posting Date</th>
              <th className="p-3">Status</th>
              <th className="p-3">Applicants</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobPostings.map((job) => (
              <tr key={job.id} className="border-t">
                <td className="p-3">{job.title}</td>
                <td className="p-3">{job.date}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded ${
                      job.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {job.status}
                  </span>
                </td>
                <td className="p-3">{job.applicants}</td>
                <td className="p-3 flex space-x-3">
                  <button
                    onClick={() => handleEdit(job)}
                    className="text-blue-500 hover:underline flex items-center"
                  >
                    <FaEdit className="mr-1" /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(job.id)}
                    className="text-red-500 hover:underline flex items-center"
                  >
                    <FaTrashAlt className="mr-1" /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      {showAddModal && <AddJobModal onClose={() => setShowAddModal(false)} />}
      {showEditModal && selectedJob && (
        <EditJobModal job={selectedJob} onClose={() => setShowEditModal(false)} />
      )}
    </div>
  );
};

export default JobManagement;
