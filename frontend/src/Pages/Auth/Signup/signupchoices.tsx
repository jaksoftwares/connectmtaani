import React, { useState } from 'react';
import AuthFooter from '../authfooter';
import AuthNavbar from '../authnavbar';

const SignUpChoices: React.FC = () => {
  const [accountType, setAccountType] = useState<'client' | 'jobSeeker' | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleAccountTypeSelection = (type: 'client' | 'jobSeeker') => {
    setAccountType(type);
    setShowForm(false);
  };

  const handleJoinClick = () => setShowForm(true);

  const renderSharedFields = () => (
    <>
      <input
        type="text"
        placeholder="First Name"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <input
        type="text"
        placeholder="Last Name"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <input
        type="email"
        placeholder="Email Address"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <input
        type="password"
        placeholder="Password (8 or more characters)"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <select className="w-full p-2 mb-4 border border-gray-300 rounded">
        <option value="kenya">Kenya</option>
        {/* Add other countries */}
      </select>
      <label className="flex items-center mb-4">
        <input type="checkbox" className="mr-2" />
        {accountType === 'client'
          ? 'Send me emails with tips for finding talent.'
          : 'Send me emails about rewarding work and job leads.'}
      </label>
    </>
  );

  return (
    <>
    <AuthNavbar accountType="client"/>
    <div className="flex items-center justify-center min-h-[80vh] bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">Create an Account</h2>

        {!showForm ? (
          <div>
            <div className="mt-6 flex justify-around">
              <button
                onClick={() => handleAccountTypeSelection('client')}
                className={`w-1/2 py-2 text-lg font-semibold ${
                  accountType === 'client' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                } rounded-l-lg hover:bg-blue-400`}
              >
                I'm a Client
              </button>
              <button
                onClick={() => handleAccountTypeSelection('jobSeeker')}
                className={`w-1/2 py-2 text-lg font-semibold ${
                  accountType === 'jobSeeker' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                } rounded-r-lg hover:bg-blue-400`}
              >
                I'm a Job Seeker
              </button>
            </div>
            {accountType && (
              <div className="mt-6 text-center">
                <button
                  onClick={handleJoinClick}
                  className="px-4 py-2 text-lg font-semibold text-white bg-green-500 rounded hover:bg-green-400"
                >
                  {accountType === 'client' ? 'Join as Client' : 'Join as Freelancer'}
                </button>
              </div>
            )}
          </div>
        ) : (
          <form className="mt-6">
            <p className="text-center text-gray-600 mb-4">
              {accountType === 'client' ? 'Sign up to hire talent' : 'Sign up to find work you love'}
            </p>
            {renderSharedFields()}
            <label className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              I agree to the Terms of Service, including the User Agreement and Privacy Policy.
            </label>
            <button
              type="submit"
              className="w-full py-2 text-lg font-semibold text-white bg-green-500 rounded hover:bg-green-400"
            >
              Create Account
            </button>
            <p className="mt-4 text-center text-gray-600">
              Already have an account?{' '}
              <a href="/login" className="text-blue-500 hover:underline">
                Log In
              </a>
            </p>
          </form>
        )}
      </div>
    </div>
    <AuthFooter/>
    </>
  );
};

export default SignUpChoices;
