import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingNavbar from './onboardingnav';

const OnboardingDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  // Step data (you can modify or extend this based on your needs)
  const steps = [
    { title: 'Welcome to ConnectMtaani', content: 'Let\'s start by getting to know you.' },
    { title: 'Personal Information', content: 'Fill in your personal details to continue.' },
    { title: 'Business Information', content: 'Provide information about your business.' },
    { title: 'Job Preferences', content: 'Select your preferred job criteria.' },
    { title: 'Business Verification', content: 'Upload your business documents.' },
    { title: 'Face Verification', content: 'Verify your identity with face recognition.' },
    { title: 'Completed', content: 'Congratulations! Your onboarding is complete.' },
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinish = () => {
    // Redirect to the dashboard after finishing
    navigate('/dashboard');
  };

  return (
    <>
      <OnboardingNavbar accountType={''} userName={''} />

      <div className="flex min-h-screen bg-gray-50">
        {/* Left Sidebar */}
        <div className="w-1/4 bg-white p-6 border-r">
          <h3 className="text-xl font-semibold mb-4">Onboarding Steps</h3>
          <ul>
            {steps.map((step, index) => (
              <li
                key={index}
                className={`mb-4 ${currentStep === index + 1 ? 'text-blue-600 font-semibold' : ''}`}
              >
                {`Step ${index + 1}: ${step.title}`}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="w-3/4 p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold mb-4">{steps[currentStep - 1].title}</h2>
            <p className="text-gray-700">{steps[currentStep - 1].content}</p>
          </div>

          {/* Onboarding Content */}
          <div className="mb-6">
            {/* Step 2: Personal Information */}
            {currentStep === 2 && (
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            {/* Step 3: Business Information */}
            {currentStep === 3 && (
              <div>
                <input
                  type="text"
                  placeholder="Business Name"
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Business Type</option>
                  <option value="construction">Construction</option>
                  <option value="artisan">Artisan</option>
                  <option value="domestic">Domestic Services</option>
                  <option value="other">Other</option>
                </select>
                <input
                  type="text"
                  placeholder="Business Location"
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            {/* Step 4: Job Preferences */}
            {currentStep === 4 && (
              <div>
                <input
                  type="text"
                  placeholder="Preferred Job Location"
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="number"
                  placeholder="Preferred Job Duration (in days)"
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            {/* Step 5: Business Verification */}
            {currentStep === 5 && (
              <div>
                <input
                  type="file"
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="mt-2 text-sm text-gray-500">Upload your business registration documents.</p>
              </div>
            )}

            {/* Step 6: Face Verification */}
            {currentStep === 6 && (
              <div>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
                  Start Face Verification
                </button>
              </div>
            )}

            {/* Step 7: Completion */}
            {currentStep === 7 && <p className="text-xl font-semibold text-green-500">Congratulations, you've completed the onboarding process!</p>}
          </div>
        </div>
      </div>

      {/* Fixed Progress Bar and Navigation Footer */}
      <div className="fixed bottom-4 left-0 w-full bg-gray-200 h-16 flex items-center px-6 shadow-lg rounded-t-2xl">
        {/* Back Button placed at the start of the progress bar */}
        {currentStep > 1 && (
          <button
            onClick={handleBack}
            className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-400 transition"
          >
            Back
          </button>
        )}

        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-300 mb-4 mx-4">
          <div
            className="bg-blue-500 h-2"
            style={{ width: `${(currentStep / steps.length) * 100}%` }}
          ></div>
        </div>

        {/* Next/Finish Button */}
        <div className="flex space-x-4">
          {currentStep < steps.length ? (
            <button
              onClick={handleNext}
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleFinish}
              className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
            >
              Finish
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default OnboardingDashboard;
