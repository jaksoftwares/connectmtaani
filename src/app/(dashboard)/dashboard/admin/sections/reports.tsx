import React from 'react';
import { Line } from 'react-chartjs-2'; // Chart.js for visualizations
import { FiBarChart, FiUser, FiDollarSign } from 'react-icons/fi';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registering chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Reports: React.FC = () => {
  // Example data for job and user growth chart
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Active Jobs',
        data: [12, 19, 3, 5, 2, 3],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      },
      {
        label: 'New Users',
        data: [2, 3, 10, 8, 12, 15],
        borderColor: 'rgba(153,102,255,1)',
        backgroundColor: 'rgba(153,102,255,0.2)',
        fill: true,
      },
    ],
  };

  // Example data for revenue chart
  const revenueChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [50000, 75000, 60000, 80000, 65000, 90000], // Replace with actual revenue data
        borderColor: 'rgba(255,159,64,1)',
        backgroundColor: 'rgba(255,159,64,0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg font-bold text-gray-800 mb-6">Reports and Analytics</h2>

      {/* Section for report metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        {/* Total Users Metric */}
        <div className="bg-blue-50 p-4 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <FiUser size={24} className="text-blue-500" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Total Users</h3>
              <p className="text-xl text-gray-700">1,200</p>
            </div>
          </div>
        </div>

        {/* Active Jobs Metric */}
        <div className="bg-green-50 p-4 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <FiBarChart size={24} className="text-green-500" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Active Jobs</h3>
              <p className="text-xl text-gray-700">85</p>
            </div>
          </div>
        </div>

        {/* Revenue Report */}
        <div className="bg-yellow-50 p-4 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <FiDollarSign size={24} className="text-yellow-500" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Revenue</h3>
              <p className="text-xl text-gray-700">KSh 1,500,000</p>
            </div>
          </div>
        </div>
      </div>

      {/* Line charts for job/user growth and revenue */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Job and User Growth Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Job and User Growth</h3>
          <div className="w-full h-72">
            <Line data={lineChartData} options={{ responsive: true }} />
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Revenue Growth</h3>
          <div className="w-full h-72">
            <Line data={revenueChartData} options={{ responsive: true }} />
          </div>
        </div>
      </div>

      {/* Additional financial reports or other sections can be added here */}
    </div>
  );
};

export default Reports;
