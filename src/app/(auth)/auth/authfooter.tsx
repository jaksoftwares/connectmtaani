import React from 'react';

const AuthFooter: React.FC = () => {
  return (
    <footer className="bg-gray-800 p-4 mt-8">
      <div className="container mx-auto text-center text-white">
        <p>&copy; {new Date().getFullYear()} Connect Mtaani. All rights reserved.</p>
        <div className="mt-2">
          <a href="/terms" className="hover:underline">Terms of Service</a> |{' '}
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default AuthFooter;
