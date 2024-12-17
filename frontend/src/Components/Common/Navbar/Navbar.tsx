import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="flex justify-between items-center bg-white px-8 py-3 shadow-md sticky top-0 z-50">
      {/* Left Nav */}
      <div className="flex items-center space-x-10">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-gray-800">
          ConnectMtaani
        </a>

        {/* Nav Links */}
        <ul
          className={`${
            menuOpen ? "flex flex-col absolute top-[60px] left-0 w-full bg-white shadow-md" : "hidden md:flex"
          } list-none space-x-8 md:space-x-8 md:static md:flex-row items-center`}
        >
          <li>
            <a
              href="/hiring"
              className={`text-lg font-medium transition-all duration-300 ${
                isActive('/hiring')
                  ? 'text-orange-500 border-orange-500'
                  : 'text-gray-800'
              } hover:text-blue-500 hover:bg-blue-50 px-3 py-2 border-l-2`}
            >
              For Hiring
            </a>
          </li>
          <li>
            <a
              href="/workers"
              className={`text-lg font-medium transition-all duration-300 ${
                isActive('/workers')
                  ? 'text-orange-500 border-orange-500'
                  : 'text-gray-800'
              } hover:text-blue-500 hover:bg-blue-50 px-3 py-2 border-l-2`}
            >
              For Workers
            </a>
          </li>
          <li>
            <a
              href="/resources"
              className={`text-lg font-medium transition-all duration-300 ${
                isActive('/resources')
                  ? 'text-orange-500 border-orange-500'
                  : 'text-gray-800'
              } hover:text-blue-500 hover:bg-blue-50 px-3 py-2 border-l-2`}
            >
              Resources
            </a>
          </li>
        </ul>
      </div>

      {/* Right Nav */}
      <div className="flex items-center space-x-4">
        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="/login"
            className="text-blue-600 font-semibold px-5 py-2 border border-transparent hover:bg-blue-50 rounded-md flex items-center space-x-2"
          >
            <span>Login</span>
            <i className="fas fa-sign-in-alt" />
          </a>
          <a
            href="/signup"
            className="bg-orange-500 text-white font-semibold px-5 py-2 rounded-md hover:bg-orange-600"
          >
            Sign Up for Free
          </a>
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

export default Navbar;
