import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">ConnectMtaani</div>

      {/* Search Bar */}
      <div className="flex-1 mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      {/* Profile Menu */}
      <div className="flex items-center gap-4">
        <button className="text-gray-600 hover:text-blue-600">Notifications</button>
        <div className="relative group">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              View Profile
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Settings
            </a>
            <a href="#" className="block px-4 py-2 text-red-600 hover:bg-gray-100">
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
