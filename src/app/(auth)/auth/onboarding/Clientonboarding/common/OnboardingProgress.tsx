import React from 'react';

const FooterNavigation: React.FC<{
  currentStep: number;
  stepsLength: number;
  handleBack: () => void;
  handleNext: () => void;
  handleFinish: () => void;
}> = ({ currentStep, stepsLength, handleBack, handleNext, handleFinish }) => (
  <div className="fixed bottom-4 left-0 w-full bg-gray-200 h-16 flex items-center px-6 shadow-lg rounded-t-2xl">
    {currentStep > 1 && (
      <button
        onClick={handleBack}
        className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-400 transition"
      >
        Back
      </button>
    )}
    <div className="w-full h-2 bg-gray-300 mb-4 mx-4">
      <div
        className="bg-blue-500 h-2"
        style={{ width: `${(currentStep / stepsLength) * 100}%` }}
      ></div>
    </div>
    {currentStep < stepsLength ? (
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
);

export default FooterNavigation;
