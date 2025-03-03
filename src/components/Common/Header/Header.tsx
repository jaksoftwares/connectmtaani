"use client"; 

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Updated imports

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const isActive = (path: string) => pathname === path; // Check if the current path matches

  return (
    <nav className="flex justify-between items-center bg-white shadow-md sticky top-0 z-50">
      {/* Left Nav */}
      <div className="flex space-x-4 bg-white-700 h-20">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-gray-800 px-8 py-5 text-center">
          ConnectMtaani
        </Link>

        {/* Nav Links */}
        <ul
          className={`${
            menuOpen
              ? 'flex flex-col absolute top-[60px] left-0 w-full bg-white shadow-md'
              : 'hidden md:flex'
          } list-none space-x-8 md:space-x-8 md:static md:flex-row items-center`}
        >
          <li>
            <Link
              href="/hiring"
              className={`text-xl font-medium transition-all duration-300 ${
                isActive('/hiring')
                  ? 'text-orange-500 border-orange-500'
                  : 'text-gray-800'
              } hover:text-blue-500 hover:bg-blue-50 px-3 py-2 border-l-2`}
            >
              For Hiring
            </Link>
          </li>
          <li>
            <Link
              href="/workers"
              className={`text-lg font-medium transition-all duration-300 ${
                isActive('/workers')
                  ? 'text-orange-500 border-orange-500'
                  : 'text-gray-800'
              } hover:text-blue-500 hover:bg-blue-50 px-3 py-2 border-l-2`}
            >
              For Workers
            </Link>
          </li>
          <li>
            <Link
              href="/resources"
              className={`text-lg font-medium transition-all duration-300 ${
                isActive('/resources')
                  ? 'text-orange-500 border-orange-500'
                  : 'text-gray-800'
              } hover:text-blue-500 hover:bg-blue-50 px-3 py-2 border-l-2`}
            >
              Resources
            </Link>
          </li>
        </ul>
      </div>

      {/* Right Nav */}
      <div className="flex items-center space-x-4">
        {/* Buttons */}
        <div className="hidden md:flex">
          <Link
            href="/auth/login"
            className="text-blue-600 font-semibold px-5 py-2 border border-transparent hover:bg-blue-50 rounded-md flex items-center space-x-2 text-xl"
          >
            <span>Login</span>
            <i className="fas fa-sign-in-alt" />
          </Link>
          <Link
            href="/auth/signup"
            className="bg-orange-500 text-white font-semibold text-center py-5 text-xl hover:bg-orange-600 h-20 w-60"
          >
            Sign Up for Free
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div
          className="text-2xl cursor-pointer md:hidden"
          onClick={toggleMenu}
        >
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Header;