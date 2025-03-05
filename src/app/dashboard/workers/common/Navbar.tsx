import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
        
        {/* Profile Dropdown */}
        <div className="relative group">
          <div className="w-10 h-10">
            <Image
              src="https://via.placeholder.com/40"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
          </div>
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block">
            <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">
              View Profile
            </Link>
            <Link href="/settings" className="block px-4 py-2 hover:bg-gray-100">
              Settings
            </Link>
            <button className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
