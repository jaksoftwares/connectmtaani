"use client"

import React from "react";

const LookingForWork: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[40vh] bg-gradient-to-r from-[#1e3c72] to-[#2a5298] text-white text-center">
      <h1 className="text-4xl font-bold mb-4">Looking For Work?</h1>
      <p className="text-lg mb-6 text-white">Find available work slots near you today</p>
      <button className="bg-white text-[#1e3c72] px-8 py-3 text-lg font-bold rounded hover:bg-[#2a5298] hover:text-white transition-all">
        Find Work
      </button>
    </div>
  );
};

export default LookingForWork;
