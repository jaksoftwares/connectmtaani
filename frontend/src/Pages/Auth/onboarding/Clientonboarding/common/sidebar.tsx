import React from 'react';

interface OnboardingSidebarProps {
  currentStep: number;
  steps: { title: string }[];
}

const OnboardingSidebar: React.FC<OnboardingSidebarProps> = ({ currentStep, steps }) => (
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
);

export default OnboardingSidebar;
