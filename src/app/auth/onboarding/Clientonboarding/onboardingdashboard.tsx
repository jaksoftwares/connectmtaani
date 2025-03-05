'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import OnboardingNavbar from './common/OnboardingHeader';
import OnboardingSidebar from './common/sidebar';
import FooterNavigation from './common/OnboardingProgress';

import Step1Welcome from './steps/welcome';
import Step2PersonalInfo from './steps/step2';
import Step3BusinessInfo from './steps/step3';
import Step4JobPreferences from './steps/step4';
import Step5BusinessVerification from './steps/step5';
import Step6FaceVerification from './steps/step6';
import Step7Completion from './steps/step7';

const ClientOnboardingDashboard: React.FC = () => {
  const router = useRouter(); // ✅ Replaces useNavigate()
  const [currentStep, setCurrentStep] = useState(1);

  // Step data
  const steps = [
    { title: 'Welcome to ConnectMtaani', component: <Step1Welcome /> },
    { title: 'Personal Information', component: <Step2PersonalInfo /> },
    { title: 'Business Information', component: <Step3BusinessInfo /> },
    { title: 'Job Preferences', component: <Step4JobPreferences /> },
    { title: 'Business Verification', component: <Step5BusinessVerification /> },
    { title: 'Face Verification', component: <Step6FaceVerification /> },
    { title: 'Completed', component: <Step7Completion /> },
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
    router.push('/dashboard'); // ✅ Uses Next.js navigation
  };

  return (
    <>
      <OnboardingNavbar accountType="" userName="" />

      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <OnboardingSidebar currentStep={currentStep} steps={steps} />

        {/* Main Content Area */}
        <div className="w-3/4 p-8">
          {/* Onboarding Step Content */}
          <div className="mb-6">{steps[currentStep - 1].component}</div>
        </div>
      </div>

      {/* Footer Navigation */}
      <FooterNavigation
        currentStep={currentStep}
        stepsLength={steps.length}
        handleBack={handleBack}
        handleNext={handleNext}
        handleFinish={handleFinish}
      />
    </>
  );
};

export default ClientOnboardingDashboard;
