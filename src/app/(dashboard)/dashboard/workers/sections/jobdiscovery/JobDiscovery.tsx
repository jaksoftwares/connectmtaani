import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import FilterPanel from './components/FilterPanel';
import JobCard from './components/JobCard';

interface Filters {
  jobType?: string;
  location?: string;
  salaryRange?: string;
}

const JobDiscovery: React.FC = () => {
  const [jobs] = useState([
    {
      id: 1,
      title: 'Software Engineer',
      company: 'TechCorp',
      location: 'Nairobi',
      salary: '100k-150k',
      description: 'Build and maintain software applications.',
      
    },
    {
      id: 2,
      title: 'Data Analyst',
      company: 'DataWorks',
      location: 'Remote',
      salary: '80k-120k',
      description: 'Analyze and interpret data for business insights.',
    },
    {
        id: 1,
        title: 'Software Engineer',
        company: 'TechCorp',
        location: 'Nairobi',
        salary: '100k-150k',
        description: 'Build and maintain software applications.',
      },
      {
        id: 2,
        title: 'Data Analyst',
        company: 'DataWorks',
        location: 'Remote',
        salary: '80k-120k',
        description: 'Analyze and interpret data for business insights.',
      },
      {
        id: 1,
        title: 'Software Engineer',
        company: 'TechCorp',
        location: 'Nairobi',
        salary: '100k-150k',
        description: 'Build and maintain software applications.',
      },
      {
        id: 2,
        title: 'Data Analyst',
        company: 'DataWorks',
        location: 'Remote',
        salary: '80k-120k',
        description: 'Analyze and interpret data for business insights.',
      },
      {
        id: 1,
        title: 'Software Engineer',
        company: 'TechCorp',
        location: 'Nairobi',
        salary: '100k-150k',
        description: 'Build and maintain software applications.',
      },
      {
        id: 2,
        title: 'Data Analyst',
        company: 'DataWorks',
        location: 'Remote',
        salary: '80k-120k',
        description: 'Analyze and interpret data for business insights.',
      },
      {
        id: 1,
        title: 'Software Engineer',
        company: 'TechCorp',
        location: 'Nairobi',
        salary: '100k-150k',
        description: 'Build and maintain software applications.',
      },

  ]);

  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<Filters>({});

  const filteredJobs = jobs.filter((job) => {
    const matchesQuery =
      query === '' || job.title.toLowerCase().includes(query.toLowerCase());
    const matchesFilters =
      (!filters.jobType || job.title.toLowerCase().includes(filters.jobType)) &&
      (!filters.location || job.location.toLowerCase() === filters.location.toLowerCase());
    return matchesQuery && matchesFilters;
  });

  return (
    <div>
      <SearchBar onSearch={setQuery} />
      <FilterPanel onFilterChange={setFilters} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (
          <JobCard
                key={job.id}
                title={job.title}
                company={job.company}
                location={job.location}
                salary={job.salary}
                description={job.description}
                onClick={() => alert(`Viewing job: ${job.title}`)} id={0} status={'active'} onBid={function (): void {
                    throw new Error('Function not implemented.');
                } }          />
        ))}
      </div>
    </div>
  );
};

export default JobDiscovery;
