"use client"; // Mark this component as a Client Component

import React, { useState } from 'react';
import Link from 'next/link'; // Use Next.js Link for client-side navigation
import Image from 'next/image'; // Use Next.js Image for optimized images

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Logging in with ${provider}`);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center bg-gray-800 text-white py-4 px-6 shadow-md fixed top-0 w-full z-10">
        <div className="text-lg font-bold">ConnectMtaani</div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex bg-gradient-to-r from-blue-500 to-indigo-600 min-h-[83vh] pt-20">
        <main className="flex-grow flex justify-center items-center w-full px-4 sm:px-8 lg:px-16">
          {/* Left Section */}
          <div className="hidden lg:flex items-center justify-center w-full h-full md:w-1/2">
            <div className="bg-black bg-opacity-60 p-6 text-center rounded-lg shadow-lg">
              <h2 className="text-4xl font-bold text-white mb-4">Welcome Back!</h2>
              <p className="text-lg text-gray-300 mb-4">
                Join a thriving community of professionals and opportunities. Your dream job is just a click away.
              </p>
              <div className="mt-4 max-w-full rounded-lg shadow-lg">
                <Image
                  src="/auth/happy-community.jpg" // Ensure the image is in the public folder
                  alt="Happy Community"
                  width={500} // Set appropriate width
                  height={300} // Set appropriate height
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center w-full h-full md:w-1/2 px-4 sm:px-8 lg:px-16">
            <form className="bg-white p-8 shadow-lg rounded-lg w-full max-w-lg" onSubmit={handleSubmit}>
              <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
                Login to Your Account
              </h2>
              <p className="text-gray-600 text-center mb-6">
                Access the best opportunities tailored for you.
              </p>

              {/* Email Input */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Password Input */}
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                  className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Remember Me */}
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                  Remember Me
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Log In
              </button>

              <div className="my-4 text-center text-gray-500">or</div>

              {/* Social Login Options */}
              <div className="flex flex-col gap-3 mb-6">
                <button
                  type="button"
                  className="w-full p-3 border border-gray-300 rounded-lg flex items-center justify-center text-white bg-red-600 hover:bg-red-700 transition duration-200"
                  onClick={() => handleSocialLogin('Google')}
                >
                  <i className="fab fa-google mr-2"></i>
                  Continue with Google
                </button>
                <button
                  type="button"
                  className="w-full p-3 border border-gray-300 rounded-lg flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 transition duration-200"
                  onClick={() => handleSocialLogin('Facebook')}
                >
                  <i className="fab fa-facebook-f mr-2"></i>
                  Continue with Facebook
                </button>
                <button
                  type="button"
                  className="w-full p-3 border border-gray-300 rounded-lg flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 transition duration-200"
                  onClick={() => handleSocialLogin('LinkedIn')}
                >
                  <i className="fab fa-linkedin-in mr-2"></i>
                  Continue with LinkedIn
                </button>
              </div>

              {/* Additional Options */}
              <div className="text-center">
                <Link href="/forgot-password" className="text-blue-600 hover:underline">
                  Forgot Password?
                </Link>
                <p className="text-gray-600 mt-2">
                  Don’t have an account?{' '}
                  <Link href="/signup" className="text-blue-600 hover:underline">
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-100 text-center py-6 border-t border-gray-300 mt-10">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-gray-600">
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms of Use
          </Link>
          <Link href="/help" className="hover:underline">
            Help
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact Us
          </Link>
        </div>
        <p className="mt-4 text-gray-500 text-xs">
          © 2024 ConnectMtaani. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LoginPage;
