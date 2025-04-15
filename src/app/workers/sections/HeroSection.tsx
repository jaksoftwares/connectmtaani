import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      className="flex items-center bg-cover bg-center bg-no-repeat min-h-[80vh] w-full text-white px-4 sm:px-6"
      style={{ backgroundImage: "url(/home/hero.png)" }}
    >
      <div className="flex flex-col justify-center max-w-[1200px] w-full  text-left">
        {/* Text Content */}
        <div className="w-full md:w-11/12 lg:w-2/3 mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5">
            Find Available Shift Jobs Around You Today
          </h1>
          <p className="text-base sm:text-lg md:text-2xl leading-relaxed mb-8">
            Work on your terms. ConnectMtaani gives you the freedom and control to find the right work opportunities best suited to your experience.
          </p>
          <div>
            <a
              href="/signup"
              className="inline-block px-6 py-3 bg-[#e15200] text-white font-bold rounded-lg transition-all duration-300 ease-in-out hover:bg-white hover:text-[#e15200] hover:border-[#e15200] border-2 border-transparent"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
