"use client"

import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      className="flex items-center px-5 py-10 bg-cover bg-center text-white"
      style={{ backgroundImage: 'url(/home/hero.png)', height: '80vh' }}
    >
      <div className="max-w-screen-xl ml-[100px]">
        {/* Text Content */}
        <div className="text-left ml-[50px] my-5">
          <div className="text-lg mb-2 ">
            <p className="text-white text-2xl font-bold">Welcome to ConnectMtaani</p>
          </div>
          <h1 className="text-8xl font-bold mb-5">
            Bridging Work, Talent,<br /> and Opportunity in Kenya
          </h1>
          <p className="text-2xl leading-relaxed mb-8 text-white">
            ConnectMtaani is the premier platform for linking job seekers and employers <br />
            in Kenya’s informal sector. Simplify hiring, discover talent, and build opportunities.
          </p>
          <div className="flex gap-5">
            <a
              href="/signup"
              className="text-white font-bold bg-blue-500 px-8 py-3 rounded-md transition-all duration-300 border-2 border-transparent hover:bg-white hover:text-blue-500 hover:border-blue-500"
            >
              Get Started
            </a>
            <a
              href="/features"
              className="text-white font-bold bg-transparent px-8 py-3 rounded-md transition-all duration-300 border-2 border-white hover:bg-white hover:text-blue-900"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
