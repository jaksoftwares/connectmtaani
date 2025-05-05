import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-center py-4">
      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} ConnectMtaani. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
