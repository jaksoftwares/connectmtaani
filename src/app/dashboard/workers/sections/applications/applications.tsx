import React from 'react';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
  status: string;
}

const mockApplications: Job[] = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'TechSphere',
    location: 'Nairobi',
    salary: '80k-120k',
    description: 'Develop and maintain user-facing features using React.',
    status: 'bidding in progress',
  },
  {
    id: 2,
    title: 'Backend Developer',
    company: 'CodeBase Inc.',
    location: 'Remote',
    salary: '100k-150k',
    description: 'Design and build server-side logic with Node.js.',
    status: 'bidding in progress',
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    company: 'CreativeWorks',
    location: 'Mombasa',
    salary: '70k-100k',
    description: 'Create user-centered designs and wireframes.',
    status: 'bidding in progress',
  },
];

interface ApplicationsProps {
  applications: Job[];
}

const Applications: React.FC<ApplicationsProps> = () => {
  const applications = mockApplications; // Using mock data

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">My Applications</h2>
      {applications.length === 0 ? (
        <p className="text-gray-500">You have not applied for any jobs yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((job) => (
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
              <p className="mt-2 text-sm font-semibold text-yellow-600">
                Status: {job.status}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Applications;
