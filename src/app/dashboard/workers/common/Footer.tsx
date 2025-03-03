import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow-md py-4 flex items-center justify-between px-6">
      <p className="text-gray-600">&copy; 2024 ConnectMtaani. All rights reserved.</p>
      <div className="flex gap-4">
        <a href="#" className="text-blue-600 hover:underline">
          Terms of Service
        </a>
        <a href="#" className="text-blue-600 hover:underline">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
