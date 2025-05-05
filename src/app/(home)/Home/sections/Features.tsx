"use client"

import React, { useState } from "react";

const FeaturesMain: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Hiring" | "Workers">("Hiring");

  const content = {
    Hiring: {
      title: "Get your Job done by Hiring On Demand, Anytime",
      description:
        "We go beyond simply connecting job seekers and employers. Our platform is tailored to meet the unique demands of Kenya’s informal sector by combining cutting-edge technology with personalized support. ConnectMtaani is the trusted choice for connecting employers and workers in the informal sector across the country.",
      points: [
        "Dedicated Support team and Seamless Hiring",
        "Instant access to a vast database of skilled Workers across Kenya",
        "Top-of-the-line technology and automation for managing all staffing needs",
      ],
      buttonText: "START HIRING NOW",
      imageUrl: "/home/contract-image.png",
    },
    Workers: {
      title: "Find Opportunities and Connect with Employers, Instantly",
      description:
        "Join the ConnectMtaani platform to discover opportunities tailored to your skills and location. We empower workers in Kenya’s informal sector by providing access to job opportunities, resources, and support to help you succeed.",
      points: [
        "Access to a diverse range of job opportunities across Kenya",
        "Tools to showcase your skills and build your professional profile",
        "Support and resources to help you navigate your career journey",
      ],
      buttonText: "START WORKING NOW",
      imageUrl: "/public/home/contract-image.png",
    },
  };

  const { title, description, points, buttonText, imageUrl } = content[activeTab];

  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-10 bg-gray-100">
      {/* Image Section */}
      <div
        className="flex-1 h-96 mb-8 md:mb-0 md:mr-10 rounded-lg bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      {/* Content Section */}
      <div className="flex-1">
        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          <button
            className={`flex-1 py-2 px-4 text-center text-sm md:text-base border rounded ${
              activeTab === "Hiring"
                ? "bg-[#123456] text-white border-[#123456]"
                : "bg-gray-300 text-[#123456] border-gray-300"
            }`}
            onClick={() => setActiveTab("Hiring")}
          >
            Hiring
          </button>
          <button
            className={`flex-1 py-2 px-4 text-center text-sm md:text-base border rounded ${
              activeTab === "Workers"
                ? "bg-[#123456] text-white border-[#123456]"
                : "bg-gray-300 text-[#123456] border-gray-300"
            }`}
            onClick={() => setActiveTab("Workers")}
          >
            Workers
          </button>
        </div>

        {/* Title and Description */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#123456] mb-4">{title}</h2>
        <p className="text-gray-700 text-sm md:text-base mb-6 leading-relaxed">{description}</p>

        {/* Points List */}
        <ul className="list-none space-y-2 mb-6">
          {points.map((point, index) => (
            <li key={index} className="flex items-start text-gray-800 text-sm md:text-base">
              <i className="fas fa-check-circle text-[#123456] mr-2"></i>
              {point}
            </li>
          ))}
        </ul>

        {/* Call to Action Button */}
        <button className="px-5 py-3 text-sm md:text-base text-white bg-[#e65100] rounded shadow hover:bg-[#ff7600] transition">
          {buttonText} <i className="fas fa-arrow-right ml-2"></i>
        </button>
      </div>
    </section>
  );
};

export default FeaturesMain;
