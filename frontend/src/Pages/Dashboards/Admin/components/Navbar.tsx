import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo or Title */}
      <h1 className="text-lg font-bold text-gray-800">Admin Dashboard</h1>

      <div className="flex items-center gap-4">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Search"
        />

        {/* Notifications Button */}
        <button
          className="relative"
          aria-label="Notifications"
        >
          <span className="material-icons text-gray-600">notifications</span>
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-2">
          <img
            src="/path/to/avatar.jpg"
            alt="Admin Avatar"
            className="w-8 h-8 rounded-full"
            aria-label="Admin Avatar"
          />
          <span className="text-sm font-medium text-gray-700">Admin</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
