"use client"; // Mark this component as a Client Component

import React from "react";
import Image from "next/image"; // Import the Next.js Image component

interface SectionProps {
  title: string;
  text: string;
  buttonText: string;
  imageUrl: string; // Only string is needed since we're using public directory
  reverse?: boolean;
}

const Section: React.FC<SectionProps> = ({ title, text, buttonText, imageUrl, reverse }) => {
  return (
    <div
      className={`flex ${reverse ? "flex-row-reverse" : ""} bg-gray-100 p-6 rounded-lg shadow-md mb-6`}
    >
      <div className="w-1/2">
        <Image
          src={imageUrl}
          alt={title}
          width={500}
          height={300}
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="w-1/2 p-4 flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{text}</p>
        <button
          className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-500 transition-colors"
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
      imageUrl: "/images/control.jpg", // Direct path to the image in the public directory
      reverse: true,
    },
    {
      title: "Post Short-Term or Long-Term Opportunities",
      text: "Advertise job opportunities to Kenya's skilled and semi-skilled workforce. Post jobs for any duration and connect with motivated job seekers.",
      buttonText: "POST A JOB NOW FOR FREE",
      imageUrl: "/images/workplace2.jpg", // Direct path to the image in the public directory
    },
    {
      title: "We’re Here to Help",
      text: "Our dedicated support team assists you through every step of the hiring process. Connect with qualified and reliable workers who meet your expectations.",
      buttonText: "TELL US ABOUT YOUR HIRING NEEDS",
      imageUrl: "/images/workplace4.jpg", // Direct path to the image in the public directory
      reverse: true,
    },
  ];

  return (
    <div className="p-5 w-full max-w-7xl mx-auto">
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