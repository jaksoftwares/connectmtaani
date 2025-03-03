// import { useState } from 'react';

// interface Application {
//   id: number;
//   jobId: number;
//   applicantName: string;
//   applicantEmail: string;
//   status: 'Pending' | 'Accepted' | 'Rejected';
//   portfolioUrl?: string; // Optional field for the portfolio URL
// }

// const ApplicationManagement = () => {
//   const [jobPostings] = useState([
//     {
//       id: 1,
//       title: 'Software Developer',
//       date: '2024-12-01',
//       status: 'Active',
//       applicants: 12,
//     },
//     {
//       id: 2,
//       title: 'UI/UX Designer',
//       date: '2024-11-25',
//       status: 'Closed',
//       applicants: 8,
//     },
//     {
//       id: 3,
//       title: 'Marketing Manager',
//       date: '2024-11-15',
//       status: 'Active',
//       applicants: 20,
//     },
//   ]);

//   const [applications, setApplications] = useState<Application[]>([
//     {
//       id: 1,
//       jobId: 1,
//       applicantName: 'John Doe',
//       applicantEmail: 'john.doe@example.com',
//       status: 'Pending',
//       portfolioUrl: 'https://johndoe.dev', // Example portfolio URL
//     },
//     {
//       id: 2,
//       jobId: 1,
//       applicantName: 'Jane Smith',
//       applicantEmail: 'jane.smith@example.com',
//       status: 'Accepted',
//       portfolioUrl: 'https://janesmith.design', // Example portfolio URL
//     },
//     {
//       id: 3,
//       jobId: 2,
//       applicantName: 'Mark Johnson',
//       applicantEmail: 'mark.johnson@example.com',
//       status: 'Rejected',
//       portfolioUrl: '', // No portfolio
//     },
//   ]);

//   const handleStatusChange = (applicationId: number, status: 'Pending' | 'Accepted' | 'Rejected') => {
//     setApplications((prevApplications) =>
//       prevApplications.map((app) =>
//         app.id === applicationId ? { ...app, status } : app
//       )
//     );
//   };

//   return (
//     <div className="p-6 bg-gray-100">
//       <h1 className="text-2xl font-bold mb-4">Job Applications</h1>
//       <div className="bg-white shadow rounded-lg p-6">
//         <table className="w-full text-left">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="p-3">Job Title</th>
//               <th className="p-3">Applicant Name</th>
//               <th className="p-3">Applicant Email</th>
//               <th className="p-3">Status</th>
//               <th className="p-3">Portfolio</th>
//               <th className="p-3">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {applications.map((application) => (
//               <tr key={application.id} className="border-t">
//                 <td className="p-3">
//                   {jobPostings.find((job) => job.id === application.jobId)?.title}
//                 </td>
//                 <td className="p-3">{application.applicantName}</td>
//                 <td className="p-3">{application.applicantEmail}</td>
//                 <td className="p-3">
//                   <span
//                     className={`px-2 py-1 rounded ${
//                       application.status === 'Accepted'
//                         ? 'bg-green-100 text-green-600'
//                         : application.status === 'Rejected'
//                         ? 'bg-red-100 text-red-600'
//                         : 'bg-yellow-100 text-yellow-600'
//                     }`}
//                   >
//                     {application.status}
//                   </span>
//                 </td>
//                 <td className="p-3">
//                   {application.portfolioUrl ? (
//                     <a
//                       href={application.portfolioUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-500 hover:underline"
//                     >
//                       View Portfolio
//                     </a>
//                   ) : (
//                     <span className="text-gray-500">No Portfolio</span>
//                   )}
//                 </td>
//                 <td className="p-3 flex space-x-3">
//                   <button
//                     onClick={() => handleStatusChange(application.id, 'Accepted')}
//                     className="text-green-500 hover:underline"
//                   >
//                     Accept
//                   </button>
//                   <button
//                     onClick={() => handleStatusChange(application.id, 'Rejected')}
//                     className="text-red-500 hover:underline"
//                   >
//                     Reject
//                   </button>
//                   <button
//                     onClick={() => handleStatusChange(application.id, 'Pending')}
//                     className="text-yellow-500 hover:underline"
//                   >
//                     Pending
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ApplicationManagement;
import { useState } from 'react';
import { FaEye, FaEnvelope, FaCheck, FaTimes } from 'react-icons/fa';
import ApplicantProfileModal from './ApplicantProfileModal';
import MessagingModule from './MessagingModule';

interface Applicant {
  id: number;
  name: string;
  jobTitle: string;
  date: string;
  status: string;
}

const ApplicantsManagement = () => {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showMessagingModal, setShowMessagingModal] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState<Applicant | null>(
    null
  );

  const applications: Applicant[] = [
    {
      id: 1,
      name: 'John Doe',
      jobTitle: 'Software Developer',
      date: '2024-12-20',
      status: 'Pending',
    },
    {
      id: 2,
      name: 'Jane Smith',
      jobTitle: 'UI/UX Designer',
      date: '2024-12-18',
      status: 'Interview Scheduled',
    },
    {
      id: 3,
      name: 'Michael Brown',
      jobTitle: 'Marketing Manager',
      date: '2024-12-15',
      status: 'Hired',
    },
  ];

  const handleViewProfile = (applicant: Applicant) => {
    setSelectedApplicant(applicant);
    setShowProfileModal(true);
  };

  const handleMessageApplicant = (applicant: Applicant) => {
    setSelectedApplicant(applicant);
    setShowMessagingModal(true);
  };

  const updateStatus = (id: number, status: string) => {
    console.log(`Application ID ${id} updated to ${status}`);
  };

  return (
    <div className="p-6 bg-gray-100 h-full">
      <h1 className="text-2xl font-bold mb-4">Applicants Management</h1>

      {/* Applications Table */}
      <div className="bg-white shadow rounded-lg p-6">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3">Applicant Name</th>
              <th className="p-3">Job Title</th>
              <th className="p-3">Application Date</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((applicant) => (
              <tr key={applicant.id} className="border-t">
                <td className="p-3">{applicant.name}</td>
                <td className="p-3">{applicant.jobTitle}</td>
                <td className="p-3">{applicant.date}</td>
                <td className="p-3">
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
                </td>
                <td className="p-3 flex space-x-3">
                  <button
                    onClick={() => handleViewProfile(applicant)}
                    className="text-blue-500 hover:underline flex items-center"
                  >
                    <FaEye className="mr-1" /> View
                  </button>
                  <button
                    onClick={() => handleMessageApplicant(applicant)}
                    className="text-blue-500 hover:underline flex items-center"
                  >
                    <FaEnvelope className="mr-1" /> Message
                  </button>
                  <button
                    onClick={() => updateStatus(applicant.id, 'Hired')}
                    className="text-green-500 hover:underline flex items-center"
                  >
                    <FaCheck className="mr-1" /> Hire
                  </button>
                  <button
                    onClick={() => updateStatus(applicant.id, 'Rejected')}
                    className="text-red-500 hover:underline flex items-center"
                  >
                    <FaTimes className="mr-1" /> Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      {showProfileModal && selectedApplicant && (
        <ApplicantProfileModal
          applicant={selectedApplicant}
          onClose={() => setShowProfileModal(false)}
        />
      )}
      {showMessagingModal && selectedApplicant && (
        <MessagingModule
          employeeName={selectedApplicant.name}
          onClose={() => setShowMessagingModal(false)}
        />
      )}
    </div>
  );
};

export default ApplicantsManagement;


