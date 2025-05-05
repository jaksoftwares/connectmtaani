import React from 'react';

interface Filters {
  jobType?: string;
  location?: string;
  salaryRange?: string;
}

interface FilterPanelProps {
  onFilterChange: (filters: Filters) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ onFilterChange }) => {
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    onFilterChange({ [name]: value });
  };

  return (
    <div className="mb-4 grid grid-cols-3 gap-4">
      <select
        name="jobType"
        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={handleFilterChange}
      >
        <option value="">Job Type</option>
        <option value="full-time">Full-Time</option>
        <option value="part-time">Part-Time</option>
        <option value="freelance">Freelance</option>
      </select>
      <select
        name="location"
        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={handleFilterChange}
      >
        <option value="">Location</option>
        <option value="remote">Remote</option>
        <option value="nairobi">Nairobi</option>
        <option value="mombasa">Mombasa</option>
      </select>
      <select
        name="salaryRange"
        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={handleFilterChange}
      >
        <option value="">Salary Range</option>
        <option value="0-50k">0-50k</option>
        <option value="50k-100k">50k-100k</option>
        <option value="100k+">100k+</option>
      </select>
    </div>
  );
};

export default FilterPanel;
