import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import AuthNavbar from '../authnavbar';
import OnboardingNavbar from './onboardingnav';

const EmailVerification = () => {
  const [isResending, setIsResending] = useState(false);
  const [resendMessage, setResendMessage] = useState('');
  const navigate = useNavigate();

  const handleResendEmail = () => {
    setIsResending(true);
    setResendMessage('');

    // Simulate API call for resending the email
    setTimeout(() => {
      setIsResending(false);
      setResendMessage('A new verification email has been sent!');
    }, 2000);
  };

  const handleVerify = () => {
    navigate('/onboarding'); // Redirect to the onboarding process after verification
  };

  return (

    <div className="min-h-screen bg-gray-100 flex flex-col">
    {/* <AuthNavbar accountType={null} /> */}
     <OnboardingNavbar accountType={''} userName={''}/>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Verification Email Sent
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Please check your email and click the verification link to confirm your account.
        </p>

        {resendMessage && (
          <div className="text-green-600 text-center text-sm mb-4">{resendMessage}</div>
        )}

        <div className="flex flex-col space-y-4">
          <button
            onClick={handleResendEmail}
            disabled={isResending}
            className={`w-full py-2 px-4 text-white font-semibold rounded ${
              isResending ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
            } transition duration-300`}
          >
            {isResending ? 'Resending...' : 'Resend Email'}
          </button>

          <button
            onClick={handleVerify}
            className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded transition duration-300"
          >
            Verify
          </button>
        </div>

        <div className="text-center mt-6 text-gray-500">
          Didn’t receive the email? Check your spam folder or try resending.
        </div>
      </div>
    </div>
  </div>
  );
};

export default EmailVerification;
