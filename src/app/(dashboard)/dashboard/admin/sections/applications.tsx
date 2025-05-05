import Table from "../components/Table";
import { FiCheckCircle, FiXCircle, FiCalendar } from "react-icons/fi";

const Applications: React.FC = () => {
  const applications = [
    {
      id: 1,
      name: "Jane Doe",
      job: "Software Engineer",
      date: "2025-01-01",
      status: <span className="text-yellow-500">Pending</span>,
      contact: "jane.doe@example.com",
    },
    {
      id: 2,
      name: "John Smith",
      job: "Project Manager",
      date: "2025-01-02",
      status: <span className="text-green-500">Accepted</span>,
      contact: "john.smith@example.com",
    },
    {
      id: 3,
      name: "Alice Johnson",
      job: "UX Designer",
      date: "2025-01-03",
      status: <span className="text-red-500">Rejected</span>,
      contact: "alice.j@example.com",
    },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Job Applications</h2>

      {/* Filter, Search, or Sort Controls */}
      <div className="mb-6 flex justify-between items-center">
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
            Filter by Status
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
            Sort by Date
          </button>
        </div>
        <input
          type="text"
          placeholder="Search Applicants..."
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Table for Applications */}
      <Table
        headers={[
          "Applicant Name",
          "Job Title",
          "Date of Application",
          "Status",
          "Contact",
          "Actions",
        ]}
        rows={applications.map((app) => [
          <span key={`name-${app.id}`}>{app.name}</span>,
          <span key={`job-${app.id}`}>{app.job}</span>,
          <span key={`date-${app.id}`}>{app.date}</span>,
          <span key={`status-${app.id}`}>{app.status}</span>,
          <span key={`contact-${app.id}`}>{app.contact}</span>,
          <ActionButtons key={`actions-${app.id}`} />,
        ])}
      />
    </div>
  );
};

// Reusable Action Buttons Component
const ActionButtons: React.FC = () => {
  return (
    <div className="flex gap-2">
      <button className="px-4 py-2 bg-green-500 text-white rounded-md flex items-center hover:bg-green-600 transition">
        <FiCheckCircle className="mr-2" /> Accept
      </button>
      <button className="px-4 py-2 bg-red-500 text-white rounded-md flex items-center hover:bg-red-600 transition">
        <FiXCircle className="mr-2" /> Reject
      </button>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md flex items-center hover:bg-blue-600 transition">
        <FiCalendar className="mr-2" /> Schedule
      </button>
    </div>
  );
};

export default Applications;
