"use client";

import React from "react";

const ReadyToProceed: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-10">
        READY TO PROCEED? How would you like to get started?
      </h2>

      <div className="flex flex-col sm:flex-row justify-center items-stretch gap-6 max-w-5xl mx-auto">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full sm:w-1/2 text-left">
          <h3 className="text-lg sm:text-xl text-orange-600 font-semibold">GET WORKERS</h3>
          <p className="text-gray-600 my-4 text-sm sm:text-base">
            ConnectMtaani Get Workers provides a fast, simple, and reliable way to hire Workers on the fly at low costs with little to no lead times.
          </p>
          <button className="bg-orange-600 text-white py-2 px-5 rounded-full flex items-center hover:bg-orange-500 transition-colors text-sm sm:text-base">
            Hire Workers <span className="ml-2">&rarr;</span>
          </button>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full sm:w-1/2 text-left">
          <h3 className="text-lg sm:text-xl text-orange-600 font-semibold">GET WORK</h3>
          <p className="text-gray-600 my-4 text-sm sm:text-base">
            Work on your terms. ConnectMtaani gives you the freedom and control to find the right work opportunities best suited to you.
          </p>
          <button className="border border-orange-600 text-orange-600 py-2 px-5 rounded-full flex items-center hover:bg-orange-50 transition-colors text-sm sm:text-base">
            Find Work <span className="ml-2">&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadyToProceed;
