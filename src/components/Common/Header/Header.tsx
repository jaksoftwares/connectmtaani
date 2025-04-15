"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl sm:text-3xl font-bold text-gray-800"
        >
          ConnectMtaani
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <Link
              href="/hiring"
              className={`text-lg font-medium transition ${
                isActive("/hiring") ? "text-orange-500" : "text-gray-800"
              } hover:text-blue-600`}
            >
              For Hiring
            </Link>
          </li>
          <li>
            <Link
              href="/workers"
              className={`text-lg font-medium transition ${
                isActive("/workers") ? "text-orange-500" : "text-gray-800"
              } hover:text-blue-600`}
            >
              For Workers
            </Link>
          </li>
          <li>
            <Link
              href="/resources"
              className={`text-lg font-medium transition ${
                isActive("/resources") ? "text-orange-500" : "text-gray-800"
              } hover:text-blue-600`}
            >
              Resources
            </Link>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link
            href="/auth/login"
            className="text-blue-600 font-medium px-4 py-2 hover:bg-blue-50 rounded-md"
          >
            Login
          </Link>
          <Link
            href="/auth/signup"
            className="bg-orange-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-orange-600 transition"
          >
            Sign Up for Free
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div
          className="md:hidden text-3xl text-gray-700 cursor-pointer"
          onClick={toggleMenu}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200">
          <ul className="flex flex-col px-6 py-4 space-y-4">
            <li>
              <Link
                href="/hiring"
                className={`text-base font-medium ${
                  isActive("/hiring") ? "text-orange-500" : "text-gray-800"
                } hover:text-blue-600`}
                onClick={toggleMenu}
              >
                For Hiring
              </Link>
            </li>
            <li>
              <Link
                href="/workers"
                className={`text-base font-medium ${
                  isActive("/workers") ? "text-orange-500" : "text-gray-800"
                } hover:text-blue-600`}
                onClick={toggleMenu}
              >
                For Workers
              </Link>
            </li>
            <li>
              <Link
                href="/resources"
                className={`text-base font-medium ${
                  isActive("/resources") ? "text-orange-500" : "text-gray-800"
                } hover:text-blue-600`}
                onClick={toggleMenu}
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                href="/auth/login"
                className="text-blue-600 font-medium"
                onClick={toggleMenu}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/auth/signup"
                className="bg-orange-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-orange-600 transition"
                onClick={toggleMenu}
              >
                Sign Up for Free
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
