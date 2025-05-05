"use client"

import React from 'react';

const HelpCenter: React.FC = () => {
  return (
    <div className="bg-white p-10 text-center border border-gray-200 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">CONNECTMTAANI HELP CENTER</h2>
      <p className="text-gray-600 mb-6">Have questions? No worries, the ConnectMtaani Help Center has the answers you need to succeed.</p>
      <button className="bg-orange-600 text-white py-2 px-6 rounded-full flex items-center justify-center text-sm hover:bg-orange-500 mx-auto">
        LEARN MORE <span className="ml-2">&rarr;</span>
      </button>
    </div>
  );
};

export default HelpCenter;
