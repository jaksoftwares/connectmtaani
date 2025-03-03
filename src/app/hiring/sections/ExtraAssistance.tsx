import React from "react";

const ExtraAssistance: React.FC = () => {
  return (
    <>
      {/* Section 2: Assistance Section */}
      <div className="bg-[#b5ceed] text-center py-12 px-5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl text-[#3e6082] mb-2">Need Some Extra Assistance?</h2>
          <p className="text-xl mb-5">ConnectMtaani Has What You Need</p>
          <p className="text-base leading-relaxed text-[#333] mb-6">
            Our team is here to help you find Workers for all your needs. Contact us or check out
            the ConnectMtaani Help Center to get started today.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="px-6 py-3 bg-[#17395B] text-white text-lg font-semibold transition-all duration-300 ease-in-out hover:bg-white hover:text-[#17395B] border-none"
            >
              HELP CENTER
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-[#17395B] text-white text-lg font-semibold transition-all duration-300 ease-in-out hover:bg-white hover:text-[#17395B] border-none"
            >
              SCHEDULE A CALL →
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExtraAssistance;
