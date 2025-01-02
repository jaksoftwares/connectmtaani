import React from 'react';
import Card from '../components/Card'; // Ensure you have a Card component for showing stats
import Table from '../components/Table'; // Table for displaying data like recent users
import { FiUsers, FiBriefcase, FiActivity } from 'react-icons/fi'; // Icons for cards
import { Line } from 'react-chartjs-2'; // Assuming you're using chart.js for graphs
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement} from 'chart.js';
import { Bar } from 'react-chartjs-2'; 
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Registering chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const applicationsBarData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Applications Approved',
        data: [120, 150, 180, 220, 250, 270],
        backgroundColor: 'rgba(75,192,192,0.4)',
      },
      {
        label: 'Applications Under Review',
        data: [30, 40, 50, 60, 70, 80],
        backgroundColor: 'rgba(153,102,255,0.4)',
      },
    ],
  };
  

const Dashboard: React.FC = () => {
  // Example data for key metrics graphs (these can be dynamic)
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Total Users',
        data: [500, 700, 800, 900, 1000, 1200],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      },
    ],
  };

  const activeJobsChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Active Jobs',
        data: [30, 40, 45, 50, 60, 85],
        borderColor: 'rgba(153,102,255,1)',
        backgroundColor: 'rgba(153,102,255,0.2)',
        fill: true,
      },
    ],
  };

  const totalApplicationsChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Applications',
        data: [50, 80, 100, 120, 150, 350],
        borderColor: 'rgba(255,159,64,1)',
        backgroundColor: 'rgba(255,159,64,0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className="p-6">
      {/* Navigation links to scroll to specific sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        <a href="#total-users" className="block">
          <Card title="Total Users" value={1200} icon={<FiUsers size={24} />} bgColor="bg-blue-50">
            <div className="mt-4">
              <Line data={lineChartData} options={{ responsive: true }} height={100} />
            </div>
          </Card>
        </a>
        <a href="#active-jobs" className="block">
          <Card title="Active Jobs" value={85} icon={<FiBriefcase size={24} />} bgColor="bg-green-50">
            <div className="mt-4">
              <Line data={activeJobsChartData} options={{ responsive: true }} height={100} />
            </div>
          </Card>
        </a>
        <a href="#total-applications" className="block">
          <Card title="Total Applications" value={350} icon={<FiActivity size={24} />} bgColor="bg-yellow-50">
            <div className="mt-4">
              <Line data={totalApplicationsChartData} options={{ responsive: true }} height={100} />
            </div>
          </Card>
        </a>
      </div>

      {/* Total Users Section */}
<div id="total-users" className="bg-white shadow-md rounded-lg p-4 mb-6">
  <h2 className="text-lg font-bold text-gray-800 mb-4">Total Users Section</h2>
  
  {/* Users Overview */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <div className="bg-blue-50 p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800">Total Users</h3>
      <p className="text-3xl text-gray-700">1,200</p>
    </div>
    <div className="bg-green-50 p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800">Active Users</h3>
      <p className="text-3xl text-gray-700">850</p>
    </div>
    <div className="bg-yellow-50 p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800">Inactive Users</h3>
      <p className="text-3xl text-gray-700">350</p>
    </div>
  </div>

  {/* Recent User Table */}
  <div className="mt-6 bg-white shadow-md rounded-lg p-4">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Users</h3>
    <Table
      headers={["Name", "Email", "Role", "Status"]}
      rows={[
        ["Jane Doe", "jane.doe@example.com", "Admin", "Active"],
        ["John Smith", "john.smith@example.com", "User", "Inactive"],
        ["Alice Johnson", "alice.j@example.com", "User", "Active"],
      ]}
    />
  </div>
</div>

{/* Active Jobs Section */}
<div id="active-jobs" className="bg-white shadow-md rounded-lg p-4 mb-6 ">
  <h2 className="text-lg font-bold text-gray-800 mb-4">Active Jobs Section</h2>
  
  {/* Active Jobs Overview */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <div className="bg-blue-50 p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800">Total Active Jobs</h3>
      <p className="text-3xl text-gray-700">85</p>
    </div>
    <div className="bg-green-50 p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800">Jobs Pending Approval</h3>
      <p className="text-3xl text-gray-700">5</p>
    </div>
    <div className="bg-yellow-50 p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800">Jobs Completed</h3>
      <p className="text-3xl text-gray-700">75</p>
    </div>
  </div>

  {/* Active Jobs Chart */}
  <div className="mt-6 bg-white shadow-md rounded-lg p-4 h-80 w-96">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">Active Jobs Over Time</h3>
    <Line data={lineChartData} />
  </div>
</div>

{/* Total Applications Section */}
<div id="total-applications" className="bg-white shadow-md rounded-lg p-4 mb-6">
  <h2 className="text-lg font-bold text-gray-800 mb-4">Total Applications Section</h2>
  
  {/* Total Applications Overview */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <div className="bg-blue-50 p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800">Total Applications</h3>
      <p className="text-3xl text-gray-700">350</p>
    </div>
    <div className="bg-green-50 p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800">Applications Under Review</h3>
      <p className="text-3xl text-gray-700">30</p>
    </div>
    <div className="bg-yellow-50 p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800">Applications Approved</h3>
      <p className="text-3xl text-gray-700">200</p>
    </div>
  </div>

  {/* Applications Chart */}
  <div className="mt-6 bg-white shadow-md rounded-lg p-4 w-96">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">Applications Growth</h3>
    <Bar data={applicationsBarData} />
  </div>
</div>


      {/* Recent Users Table */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Recent Users</h2>
        <Table
          headers={["Name", "Email", "Role", "Status"]}
          rows={[
            ["Jane Doe", "jane.doe@example.com", "Admin", "Active"],
            ["John Smith", "john.smith@example.com", "User", "Inactive"],
            ["Alice Johnson", "alice.j@example.com", "User", "Active"],
          ]}
        />
      </div>

      {/* Quick Actions / Shortcuts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <a href="#manage-users">
          <button className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600">
            Manage Users
          </button>
        </a>
        <a href="#manage-jobs">
          <button className="bg-green-500 text-white p-4 rounded-lg hover:bg-green-600">
            Manage Jobs
          </button>
        </a>
        <a href="#manage-applications">
          <button className="bg-yellow-500 text-white p-4 rounded-lg hover:bg-yellow-600">
            Manage Applications
          </button>
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
