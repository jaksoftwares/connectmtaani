// src/Pages/Auth/PasswordResetSentPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const PasswordReset: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Password Reset Link Sent!</h2>
        <p className="text-gray-600 mb-6">
          We've sent a password reset link to your email address. Please check your inbox (and spam folder) for the link to reset your password.
        </p>
        <p className="text-gray-600 mb-6">
          If you don't receive the email, you can <Link to="/forgot-password" className="text-blue-600 hover:underline">try again</Link>.
        </p>
        <Link
          to="/login"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default PasswordReset;
