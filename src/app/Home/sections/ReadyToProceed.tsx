"use client"

import React from 'react';

const ReadyToProceed: React.FC = () => {
  return (
    <div className="bg-gray-100 p-10 text-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">READY TO PROCEED? How would you like to get started?</h2>
      <div className="flex justify-around">
        <div className="bg-white p-6 rounded-lg shadow-md w-1/2 m-2 text-left">
          <h3 className="text-xl text-orange-600">GET WORKERS</h3>
          <p className="text-gray-600 my-4">ConnectMtaani Get Workers provides a fast, simple, and reliable way to hire Workers on the fly at low costs with little to no lead times.</p>
          <button className="bg-orange-600 text-white py-2 px-4 rounded-full flex items-center">
            Hire Workers <span className="ml-2">&rarr;</span>
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md w-1/2 m-2 text-left">
          <h3 className="text-xl text-orange-600">GET WORK</h3>
          <p className="text-gray-600 my-4">Work on your terms. ConnectMtaani gives you the freedom and control to find the right work opportunities best suited to you.</p>
          <button className="border border-orange-600 text-orange-600 py-2 px-4 rounded-full flex items-center">
            Find Work <span className="ml-2">&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadyToProceed;
