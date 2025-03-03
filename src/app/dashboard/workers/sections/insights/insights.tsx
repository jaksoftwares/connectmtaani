import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';

const mockInsightsData = {
  topCategories: [
    { name: 'Construction', jobs: 15 },
    { name: 'Domestic Work', jobs: 10 },
    { name: 'Artisan Services', jobs: 8 },
    { name: 'Delivery Services', jobs: 12 },
    { name: 'Others', jobs: 5 },
  ],
  successRate: 16,
  jobDemand: [
    { category: 'Construction', demand: 45 },
    { category: 'Domestic Work', demand: 30 },
    { category: 'Artisan Services', demand: 20 },
    { category: 'Delivery Services', demand: 35 },
  ],
  earningsTrends: [
    { month: 'Jan', earnings: 15000 },
    { month: 'Feb', earnings: 20000 },
    { month: 'Mar', earnings: 18000 },
    { month: 'Apr', earnings: 22000 },
    { month: 'May', earnings: 25000 },
  ],
};

// Colors for the charts
const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#6366f1'];

const Insights: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Insights</h2>

      {/* Section 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Job Categories Distribution */}
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-bold mb-4">Job Categories Distribution</h3>
          <PieChart width={400} height={400}>
            <Pie
              data={mockInsightsData.topCategories}
              dataKey="jobs"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              innerRadius={60}
              paddingAngle={5}
              label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
              labelLine={false}
            >
              {mockInsightsData.topCategories.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </div>

        {/* Success Rate */}
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-bold mb-4">Success Rate</h3>
          <PieChart width={400} height={400}>
            <Pie
              data={[
                { name: 'Successful', value: mockInsightsData.successRate },
                { name: 'Unsuccessful', value: 100 - mockInsightsData.successRate },
              ]}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={120}
              innerRadius={60}
              paddingAngle={5}
              label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
              labelLine={false}
            >
              <Cell fill="#10b981" />
              <Cell fill="#ef4444" />
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Job Demand by Category */}
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-bold mb-4">Job Demand by Category</h3>
          <BarChart
            width={600}
            height={300}
            data={mockInsightsData.jobDemand}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="demand" fill="#3b82f6" />
          </BarChart>
        </div>

        {/* Earnings Trends */}
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-bold mb-4">Earnings Trends</h3>
          <BarChart
            width={600}
            height={300}
            data={mockInsightsData.earningsTrends}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="earnings" fill="#10b981" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Insights;
