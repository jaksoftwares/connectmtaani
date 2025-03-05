import React, { useState } from 'react';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password reset request sent for:", email);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="flex flex-1 items-center justify-center p-8">
        <form
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
            Forgot Your Password?
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Don’t worry, we’ll send you a link to reset your password.
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
              value={email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="mt-1 p-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">
            <a href="/password-reset">Send Reset Link</a>
          </button>

          <div className="my-4 text-center text-gray-500">or</div>

          {/* Back to Login Link */}
          <div className="text-center">
            <p className="text-gray-600">
              Remember your password?{' '}
              <a href="/login" className="text-blue-600 hover:underline">
                Go back to Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
