import React from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import Table from '../components/Table'; // Assuming Table is a reusable component

const Users: React.FC = () => {
  // Example data for users, replace with real data in the future
  const usersData = [
    { id: 1, name: 'Jane Doe', email: 'jane.doe@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'John Smith', email: 'john.smith@example.com', role: 'User', status: 'Inactive' },
    { id: 3, name: 'Alice Johnson', email: 'alice.j@example.com', role: 'User', status: 'Active' },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg font-bold text-gray-800 mb-4">User Management</h2>

      {/* Add User Button */}
      <div className="mb-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          Add User
        </button>
      </div>

      {/* Table to display the users */}
      <Table
        headers={['Name', 'Email', 'Role', 'Status', 'Actions']}
        rows={usersData.map((user) => [
          user.name,
          user.email,
          user.role,
          user.status,
          <div key={user.id} className="flex space-x-2">
            <button className="text-blue-500 hover:text-blue-700">
              <FiEdit size={18} />
            </button>
            <button className="text-red-500 hover:text-red-700">
              <FiTrash2 size={18} />
            </button>
          </div>,
        ])}
      />
    </div>
  );
};

export default Users;
