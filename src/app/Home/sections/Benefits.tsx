"use client";

import React from "react";
import Image from "next/image";

interface SectionProps {
  title: string;
  text: string;
  buttonText: string;
  imageUrl: string;
  reverse?: boolean;
}

const Section: React.FC<SectionProps> = ({ title, text, buttonText, imageUrl, reverse }) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} bg-gray-100 p-6 rounded-lg shadow-md mb-6`}
    >
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <Image
          src={imageUrl}
          alt={title}
          width={500}
          height={300}
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 md:pl-6 flex flex-col justify-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          {title}
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-5">
          {text}
        </p>
        <button
          className="bg-orange-600 text-white px-5 py-3 rounded hover:bg-orange-500 transition-colors text-sm sm:text-base w-fit"
          aria-label={buttonText}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const Benefits: React.FC = () => {
  const sections: Array<SectionProps> = [
    {
      title: "Full Control of Your Hiring Experience",
      text: "Set your own job terms and rates, and choose the right talent for your needs. Posting jobs is free, with no commitments.",
      buttonText: "START HIRING TALENT NOW",
      imageUrl: "/images/control.jpg",
      reverse: true,
    },
    {
      title: "Post Short-Term or Long-Term Opportunities",
      text: "Advertise job opportunities to Kenya's skilled and semi-skilled workforce. Post jobs for any duration and connect with motivated job seekers.",
      buttonText: "POST A JOB NOW FOR FREE",
      imageUrl: "/images/workplace2.jpg",
    },
    {
      title: "We’re Here to Help",
      text: "Our dedicated support team assists you through every step of the hiring process. Connect with qualified and reliable workers who meet your expectations.",
      buttonText: "TELL US ABOUT YOUR HIRING NEEDS",
      imageUrl: "/images/workplace4.jpg",
      reverse: true,
    },
  ];

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 py-10 w-full max-w-7xl mx-auto">
      {sections.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          text={section.text}
          buttonText={section.buttonText}
          imageUrl={section.imageUrl}
          reverse={section.reverse}
        />
      ))}
    </div>
  );
};

export default Benefits;
