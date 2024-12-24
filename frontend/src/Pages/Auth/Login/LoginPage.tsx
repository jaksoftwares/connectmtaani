import React, { useState } from 'react';
// import Footer from '../../Components/Common/Footer/Footer';

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
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1 bg-gradient-to-r from-blue-500 to-indigo-600">
        <div className="flex flex-1 bg p-8">
        {/* Left Section */}
        <div className="hidden lg:flex w-1/2 items-center justify-center bg-cover bg-center relative"
          style={{ backgroundImage: 'url(https://source.unsplash.com/800x600/?technology,work)' }}>
          <div className="bg-black bg-opacity-60 p-6 rounded-lg text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Welcome Back!</h2>
            <p className="text-lg text-gray-300">
              Join a thriving community of professionals and opportunities. Your dream job is just a click away.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-1 items-center justify-center p-8">
          <form
            className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
            onSubmit={handleSubmit}
          >
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
                className="mt-1 p-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                className="mt-1 p-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Log In
            </button>

            <div className="my-4 text-center text-gray-500">or</div>

            {/* Social Login Options */}
            <div className="flex flex-col gap-3 mb-6">
              <button
                type="button"
                className="w-full p-2 border border-gray-300 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-100 transition duration-200"
                onClick={() => handleSocialLogin('Google')}
              >
                Continue with Google
              </button>
              <button
                type="button"
                className="w-full p-2 border border-gray-300 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-100 transition duration-200"
                onClick={() => handleSocialLogin('Facebook')}
              >
                Continue with Facebook
              </button>
              <button
                type="button"
                className="w-full p-2 border border-gray-300 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-100 transition duration-200"
                onClick={() => handleSocialLogin('LinkedIn')}
              >
                Continue with LinkedIn
              </button>
            </div>

            {/* Additional Options */}
            <div className="text-center">
              <a href="/forgot-password" className="text-blue-600 hover:underline">
                Forgot Password?
              </a>
              <p className="text-gray-600 mt-2">
                Don’t have an account?{' '}
                <a href="/signup" className="text-blue-600 hover:underline">
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>
        </div>
      </div>

      {/* Footer Section */}
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

export default LoginPage;
