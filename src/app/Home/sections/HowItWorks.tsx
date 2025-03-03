"use client"

import React from "react";

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-[#e65100] text-white py-12 px-5 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-10">
        How Does ConnectMtaani Work?
      </h2>
      <div className="flex flex-wrap justify-center gap-12">
        {/* Step 1 */}
        <div className="max-w-sm text-center">
          <div className="text-4xl mb-5">
            <i className="fas fa-clipboard-list"></i>
          </div>
          <h3 className="text-xl font-bold mb-3">Post Jobs for Free</h3>
          <p className="text-base leading-relaxed text-white">
            Share your openings across various industries and roles at no cost.
          </p>
        </div>
        {/* Step 2 */}
        <div className="max-w-sm text-center">
          <div className="text-4xl mb-5">
            <i className="fas fa-users"></i>
          </div>
          <h3 className="text-xl font-bold mb-3">
            Find Skilled Workers Near You Quickly
          </h3>
          <p className="text-base leading-relaxed text-white">
            Access a nationwide pool of qualified professionals ready to step
            in when you need them.
          </p>
        </div>
        {/* Step 3 */}
        <div className="max-w-sm text-center">
          <div className="text-4xl mb-5">
            <i className="fas fa-briefcase"></i>
          </div>
          <h3 className="text-xl font-bold mb-3">We Handle the Details</h3>
          <p className="text-base leading-relaxed text-white">
            From background checks to insurance and payments, we’ve got
            everything covered for a hassle-free experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
