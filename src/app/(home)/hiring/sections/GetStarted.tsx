import React from "react";

const GetStarted: React.FC = () => {
  return (
    <div className="bg-[#0f1a2e] text-white text-center py-16 px-4 sm:px-6 lg:px-12">
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
        GET STARTED NOW
      </h3>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-8 text-[#d9d9d9]">
        Whether you need to access temporary Workers on-demand or have open{" "}
        <span className="hidden sm:inline"><br /></span>
        Full/Part-Time Positions, GigSmart is a comprehensive, cost-effective
        solution that addresses all of your needs.
      </p>
      <a
        href="#"
        className="inline-block px-5 sm:px-6 py-3 bg-[#e65100] text-white font-semibold rounded transition-all duration-300 ease-in-out hover:bg-white hover:text-[#e65100] hover:shadow-lg"
      >
        START HIRING →
      </a>
    </div>
  );
};

export default GetStarted;
