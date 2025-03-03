import React from 'react';

const WhyChooseConnect: React.FC = () => {
  return (
    <section className="bg-[#001a3d] py-10 px-5 text-white flex justify-center items-center box-border">
      <div className="max-w-[1200px] w-full">
        {/* Title Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold uppercase text-center">Why Choose ConnectMtaani?</h2>
        </div>

        {/* Two Columns Section */}
        <div className="flex justify-between gap-5 mb-8 flex-wrap">
          {/* Left Column */}
          <div className="flex-1 min-w-[280px]">
            <div className="flex items-center text-lg mb-10">
              <span className="w-7 h-7 bg-white text-[#044d1e] rounded-full flex justify-center items-center text-xl font-bold mr-4 shadow-md">&#10003;</span> 
              Access verified and skilled workers
            </div>
            <div className="flex items-center text-lg mb-10">
              <span className="w-7 h-7 bg-white text-[#044d1e] rounded-full flex justify-center items-center text-xl font-bold mr-4 shadow-md">&#10003;</span>
              Pay only when you hire successfully
            </div>
            <div className="flex items-center text-lg mb-10">
              <span className="w-7 h-7 bg-white text-[#044d1e] rounded-full flex justify-center items-center text-xl font-bold mr-4 shadow-md">&#10003;</span>
              Smart matching technology for tailored results
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 min-w-[280px]">
            <div className="flex items-center text-lg mb-10">
              <span className="w-7 h-7 bg-white text-[#044d1e] rounded-full flex justify-center items-center text-xl font-bold mr-4 shadow-md">&#10003;</span>
              Flexible hiring for short-term or permanent roles
            </div>
            <div className="flex items-center text-lg mb-10">
              <span className="w-7 h-7 bg-white text-[#044d1e] rounded-full flex justify-center items-center text-xl font-bold mr-4 shadow-md">&#10003;</span>
              24/7 support to assist your hiring process
            </div>
            <div className="flex items-center text-lg mb-10">
              <span className="w-7 h-7 bg-white text-[#044d1e] rounded-full flex justify-center items-center text-xl font-bold mr-4 shadow-md">&#10003;</span>
              Access verified and skilled workers
            </div>
          </div>
        </div>

        {/* Button Section */}
        <div className="text-left mt-5">
          <a href="/learn-more" className="text-white font-bold py-3 px-7 rounded-lg transition-all duration-300 inline-block bg-[#e15200] border-2 border-transparent hover:bg-white hover:text-[#e15200] hover:border-[#e15200]">
            Learn More <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseConnect;
