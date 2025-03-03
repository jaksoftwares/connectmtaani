import React, { useState } from 'react';
import Image from 'next/image';
// import login2 from '../../assets/login2.png';


const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
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

  return (
    <div
    className="min-h-screen bg-cover bg-center flex flex-col"
    style={{ backgroundImage: 'url(/home/hero.png)', height: '80vh' }}
  >
      <div className="flex-grow flex">
        {/* Left Section */}
        <div className="hidden lg:flex flex-col justify-center items-center bg-blue-600 text-white w-1/2 p-10">
          <h2 className="text-3xl font-bold mb-4">Join ConnectMtaani!</h2>
          <p className="text-lg mb-6">
            Unlock opportunities, connect with employers, and showcase your talent in a few easy steps.
          </p>
          <Image
            src="/images/signup-illustration.svg"
            alt="Signup Illustration"
            className="w-3/4"
          />
        </div>

        {/* Signup Form */}
        <div className="flex justify-center items-center w-full lg:w-1/2 p-6 sm:p-12 bg-white">
          <form
            className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 space-y-6"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-bold text-gray-700 text-center">Create an Account</h2>
            <p className="text-sm text-gray-500 text-center">
              Already have an account?{' '}
              <a href="/login" className="text-blue-600 hover:underline">
                Log In
              </a>
            </p>

            {/* Name Input */}
            <div className="space-y-1">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            {/* Email Input */}
            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
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
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            {/* Password Input */}
            <div className="space-y-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                required
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            {/* Confirm Password Input */}
            <div className="space-y-1">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="termsAccepted"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-400"
              />
              <label htmlFor="termsAccepted" className="text-sm text-gray-600">
                I agree to the{' '}
                <a href="/terms" className="text-blue-600 hover:underline">
                  Terms of Service
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <footer className="bg-gray-100 text-center py-6 border-t border-gray-300">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-gray-600">
              <a href="/privacy" className="hover:underline">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:underline">
                Terms of Use
              </a>
              <a href="/help" className="hover:underline">
                Help
              </a>
              <a href="/contact" className="hover:underline">
                Contact Us
              </a>
            </div>
            <p className="mt-4 text-gray-500 text-xs">
              © 2024 ConnectMtaani. All rights reserved.
            </p>
    </footer>
    </div>
  );
};

export default SignupPage;
