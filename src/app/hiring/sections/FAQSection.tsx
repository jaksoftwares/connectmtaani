"use client"

import React, { useState } from 'react';

const FAQSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<"FIND" | "HIRE" | "PAY">("FIND");

    const content = {
        FIND: {
            title: "How to Find a Job on Demand now",
            subtitle: "Seemlessly get top-notch labour for your work, and achieve your expectations",
            points: [
                "Post Your Job: Create and publish a job post in minutes.",
                "Browse Profiles: Search and filter through job seekers based on skills, ratings, and availability.",
                "Hire with Confidence: Review applications and choose the best fit.",
                "Get the Job Done: Seamlessly communicate with workers and complete the task.",
            ],
            buttonText: "START HIRING TODAY",
            buttonLink: "/login",
        },
        HIRE: {
            title: "How to Hire Temporary Workers on Demand",
            subtitle: "Hire skilled professionals, without long-term commitments...",
            points: [
                "Create a Job Post: Easily set up a job post with detailed requirements.",
                "Access Talent Pool: Browse through a wide range of qualified candidates based on expertise and location.",
                "Shortlist Candidates: Use filters to find the best match for your job needs.",
                "Hire and Connect: Instantly contact your selected candidate and begin the task.",
            ],
            buttonText: "POST A JOB NOW",
            buttonLink: "/login",
        },
        PAY: {
            title: "How to Make Payment Safely",
            subtitle: "Complete payments with confidence and security...",
            points: [
                "Secure Payment Gateway: Use our trusted payment platform for fast and safe transactions.",
                "Track Your Payment: Get real-time updates on your payment status and transactions.",
                "Instant Confirmation: Receive immediate payment confirmation for peace of mind.",
                "Affordable Fees: Transparent and reasonable service charges with no hidden fees.",
            ],
            buttonText: "GET STARTED TODAY",
            buttonLink: "/login",
        },
    };

    const { title, subtitle, points, buttonText, buttonLink } = content[activeTab];

    return (
        <section className="container mx-auto p-10 bg-white flex justify-center items-start box-border w-full">
            <div className="max-w-3xl w-full">
                {/* Tab Buttons */}
                <div className="flex mb-5">
                <button
                    className={`px-12 py-2 text-lg cursor-pointer border border-gray-300 transition-all duration-300 ${
                        activeTab === "FIND"
                            ? 'bg-[#0F1A2E] text-white font-bold'
                            : 'bg-[#FFFFFF] text-[#0F1A2E]'
                    } hover:bg-[#0F1A2E] hover:text-white`}
                    onClick={() => setActiveTab("FIND")}
                >
                    FIND
                </button>
                <button
                    className={`px-12 py-2 text-lg cursor-pointer border border-gray-300 transition-all duration-300 ${
                        activeTab === "HIRE"
                            ? 'bg-[#0F1A2E] text-white font-bold'
                            : 'bg-[#FFFFFF] text-[#0F1A2E]'
                    } hover:bg-[#0F1A2E] hover:text-white`}
                    onClick={() => setActiveTab("HIRE")}
                >
                    HIRE
                </button>
                <button
                    className={`px-12 py-2 text-lg cursor-pointer border border-gray-300 transition-all duration-300 ${
                        activeTab === "PAY"
                            ? 'bg-[#0F1A2E] text-white font-bold'
                            : 'bg-[#FFFFFF] text-[#0F1A2E]'
                    } hover:bg-[#0F1A2E] hover:text-white`}
                    onClick={() => setActiveTab("PAY")}
                >
                    PAY
                </button>
            </div>


                {/* Subheading and Title */}
                <h3 className="text-lg text-gray-500 mb-0">{subtitle}</h3>
                <h2 className="text-3xl font-bold mb-2 text-black">{title}</h2>

                {/* List of Points */}
                <ul className="list-none relative pl-5 my-5">
                    {points.map((point, index) => {
                        const [beforeColon, afterColon] = point.split(':'); // Split the string at the colon
                        return (
                            <li key={index} className="relative mb-5 leading-relaxed mr-1">
                                <span>
                                    <strong>{beforeColon}:</strong>
                                    <br />
                                    {afterColon?.trim()}
                                </span>
                                <span className="absolute left-[-20px] top-1 w-3 h-3 bg-black rounded-full"></span>
                                {index < points.length - 1 && (
                                    <span className="absolute left-[-15px] top-4 w-[2px] h-[calc(100%+8px)] bg-black"></span>
                                )}
                            </li>
                        );
                    })}
                </ul>

                {/* CTA Button */}
                <div className="mt-10">
                <a
                    href={buttonLink} // Link added dynamically
                    className="mt-10 px-6 py-3 text-xl font-bold text-white bg-[#e65100] border-none rounded cursor-pointer transition-all hover:bg-white hover:text-[#e65100] hover:shadow-[0_0_0_2px_inset_#e65100]"
                >
                    {buttonText} <i className="fas fa-arrow-right"></i>
                </a>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
