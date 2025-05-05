"use client";

import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="flex items-center justify-center px-5 py-10 bg-cover bg-center text-white"
      style={{ backgroundImage: "url(/home/hero.png)", height: "80vh" }}
    >
      <div className="max-w-screen-xl w-full">
        <div className="text-left my-5 max-w-4xl  px-4 sm:px-6 lg:px-8">
          {/* Intro Text */}
          <p className="text-lg sm:text-xl md:text-2xl font-bold mb-3">
            Welcome to ConnectMtaani
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold mb-6 leading-tight">
            Bridging Work, Talent,
            <br className="hidden sm:block" />
            and Opportunity in Kenya
          </h1>

          {/* Sub Text */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed">
            ConnectMtaani is the premier platform for linking job seekers and
            employers in Kenya’s informal sector.
            <br className="hidden sm:block" />
            Simplify hiring, discover talent, and build opportunities.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="/signup"
              className="text-white font-bold bg-blue-500 px-6 py-3 rounded-md transition-all duration-300 border-2 border-transparent hover:bg-white hover:text-blue-500 hover:border-blue-500 text-center"
            >
              Get Started
            </a>
            <a
              href="/features"
              className="text-white font-bold bg-transparent px-6 py-3 rounded-md transition-all duration-300 border-2 border-white hover:bg-white hover:text-blue-900 text-center"
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
