// import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
import { FaBriefcase, FaUsers, FaCheckCircle } from "react-icons/fa";

const DashboardOverview = () => {
  // Mock Data
  const summaryStats = [
    { title: "Total Jobs Posted", count: 15, icon: <FaBriefcase /> },
    { title: "Active Applications", count: 120, icon: <FaUsers /> },
    { title: "Successful Hires", count: 25, icon: <FaCheckCircle /> },
  ];

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Applications",
        data: [50, 70, 80, 90, 110, 130],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const recentNotifications = [
    { id: 1, message: "New application for 'Software Developer'." },
    { id: 2, message: "Job posting 'Designer' is about to expire." },
    { id: 3, message: "Message from Jane Doe: 'Looking forward to the interview'." },
  ];

  return (
    <div className="p-6 bg-gray-100 h-full">
      <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {summaryStats.map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg p-4 flex items-center space-x-4"
          >
            <div className="text-3xl text-blue-500">{stat.icon}</div>
            <div>
              <h2 className="text-lg font-bold">{stat.title}</h2>
              <p className="text-2xl font-semibold">{stat.count}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Graphs in a Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-bold mb-2">Graph 1</h2>
          <Line data={chartData} options={chartOptions} />
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-bold mb-2">Graph 2</h2>
          <Line data={chartData} options={chartOptions} />
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-bold mb-2">Graph 3</h2>
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>

      {/* Recent Notifications */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-bold mb-4">Recent Notifications</h2>
        <ul className="space-y-3">
          {recentNotifications.map((notification) => (
            <li
              key={notification.id}
              className="bg-gray-50 p-4 rounded-lg shadow flex items-center justify-between"
            >
              <span>{notification.message}</span>
              <button className="text-blue-500 hover:underline">View</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardOverview;





// import React from 'react';

// const Overview: React.FC = () => {
//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-xl font-semibold text-gray-800 mb-4">Dashboard Overview</h2>
//       <div className="grid grid-cols-3 gap-4">
//         <div className="p-4 bg-blue-100 rounded-lg text-center">
//           <h3 className="text-lg font-semibold">Total Job Posts</h3>
//           <p className="text-2xl font-bold text-blue-600">12</p>
//         </div>
//         <div className="p-4 bg-green-100 rounded-lg text-center">
//           <h3 className="text-lg font-semibold">Applications Received</h3>
//           <p className="text-2xl font-bold text-green-600">35</p>
//         </div>
//         <div className="p-4 bg-yellow-100 rounded-lg text-center">
//           <h3 className="text-lg font-semibold">Active Jobs</h3>
//           <p className="text-2xl font-bold text-yellow-600">5</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Overview;
