import React from 'react';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
}

const mockSavedJobs: Job[] = [
  {
    id: 1,
    title: 'Marketing Specialist',
    company: 'BrandCo',
    location: 'Nairobi',
    salary: '70k-90k',
    description: 'Develop and execute marketing campaigns to boost brand awareness.',
  },
  {
    id: 2,
    title: 'Product Manager',
    company: 'Innovate Ltd',
    location: 'Remote',
    salary: '150k-200k',
    description: 'Oversee product lifecycle from concept to launch.',
  },
];

const SavedJobs: React.FC = () => {
  const savedJobs = mockSavedJobs;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Saved Jobs</h2>
      {savedJobs.length === 0 ? (
        <p className="text-gray-500">You have not saved any jobs yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedJobs.map((job) => (
            <div
              key={job.id}
              className="p-4 border rounded-lg shadow-md bg-white"
            >
              <h3 className="text-lg font-bold">{job.title}</h3>
              <p className="text-sm text-gray-600">{job.company}</p>
              <p className="text-sm text-gray-500">{job.location}</p>
              <p className="text-sm font-medium text-green-600">
                Salary: {job.salary}
              </p>
              <p className="mt-2 text-sm text-gray-700">{job.description}</p>
              <button
                className="mt-4 px-4 py-2 text-sm bg-red-500 text-white rounded-md hover:bg-red-600"
                onClick={() => alert(`Removed from saved: ${job.title}`)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedJobs;
