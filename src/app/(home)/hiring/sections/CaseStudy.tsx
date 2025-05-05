"use client"

import React, { useEffect, useState } from "react";

const CaseStudy: React.FC = () => {
  const carouselItems = [
    {
      text: "50,000+ Job Seekers Connected",
      description: "Empowering individuals with opportunities.",
      backgroundImage: "/home/contract-image.png",
    },
    {
      text: "10,000+ Jobs Successfully Completed",
      description:
        "Enabling seamless work opportunities across Kenya's informal sector.",
      backgroundImage: "/home/contract-image.png",
    },
    {
      text: "95% Employer Satisfaction Rate",
      description: "Trusted by businesses for reliable and skilled workers.",
      backgroundImage: "/home/contract-image.png",
    },
    {
      text: "1,000+ Verified Employers",
      description: "Connecting workers to trusted, vetted organizations.",
      backgroundImage: "/home/contract-image.png",
    },
    {
      text: "Empowering Kenya’s Workforce",
      description: "Bridging the employment gap through economic growth.",
      backgroundImage: "/home/contract-image.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Carousel Interval Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 5000); // 5-second interval

    return () => clearInterval(interval);
  }, [carouselItems.length]);

  return (
    <section className="relative h-[500px] lg:h-[700px] text-white text-center font-sans overflow-hidden">
      {/* Background with Opacity */}
      <div
        className="absolute inset-0 transition-all duration-1000 ease-in-out bg-cover bg-center"
        style={{
          backgroundImage: `url(${carouselItems[activeIndex].backgroundImage})`,
          filter: "brightness(0.5)",
        }}
      ></div>

      {/* Carousel Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-5">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase mb-10">
          Case Study
        </h2>
        <div className="flex flex-col items-center space-y-10">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className={`${
                index === activeIndex ? "block animate-fade-in" : "hidden"
              }`}
            >
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                {item.text}
              </h3>
              <p className="text-2xl md:text-3xl lg:text-4xl mt-5">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
