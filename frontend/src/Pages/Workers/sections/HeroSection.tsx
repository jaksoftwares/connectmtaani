import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="flex bg-cover bg-center bg-no-repeat h-[80vh] w-full text-white" style={{ backgroundImage: "url(/home/hero.png)" }}>
      <div className="flex items-center max-w-[1200px] flex-wrap w-full mx-auto">
        {/* Text Content */}
        <div className="flex-1 text-left mx-20 my-5 md:mx-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-5 font-extrabold">
            Find Available Shift Jobs Around You Today
          </h1>
          <p className="text-2xl md:text-3xl leading-relaxed mb-8">
            Work on your terms. ConnectMtaani gives you the freedom and control to find the right work opportunities best suited to your experience.
          </p>
          <div>
            <a href="/signup" className="inline-block px-6 py-3 bg-[#e15200] text-white font-bold rounded-lg transition-all duration-300 ease-in-out hover:bg-white hover:text-[#e15200] hover:border-[#e15200] border-2 border-transparent">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
