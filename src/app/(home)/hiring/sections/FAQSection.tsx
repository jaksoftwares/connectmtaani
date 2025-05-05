"use client"

import React, { useState } from 'react';

const FAQSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<"FIND" | "HIRE" | "PAY">("FIND");

    const content = {
        FIND: {
            title: "How to Find a Job on Demand now",
            subtitle: "Seamlessly get top-notch labour for your work, and achieve your expectations",
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
        <section className="w-full px-4 sm:px-6 md:px-10 py-10 bg-white flex justify-center">
            <div className="w-full max-w-4xl">
                {/* Tab Buttons */}
                <div className="flex flex-wrap gap-4 mb-6">
                    {(["FIND", "HIRE", "PAY"] as const).map(tab => (
                        <button
                            key={tab}
                            className={`flex-1 min-w-[100px] px-4 py-2 text-sm sm:text-base md:text-lg border border-gray-300 transition-all duration-300 rounded ${
                                activeTab === tab
                                    ? 'bg-[#0F1A2E] text-white font-semibold'
                                    : 'bg-white text-[#0F1A2E]'
                            } hover:bg-[#0F1A2E] hover:text-white`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Subtitle and Title */}
                <h3 className="text-sm sm:text-base text-gray-500 mb-1">{subtitle}</h3>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black">{title}</h2>

                {/* List of Points */}
                <ul className="list-none relative pl-5 my-6">
                    {points.map((point, index) => {
                        const [beforeColon, afterColon] = point.split(':');
                        return (
                            <li key={index} className="relative mb-6 leading-relaxed text-sm sm:text-base pr-4">
                                <span>
                                    <strong>{beforeColon}:</strong>
                                    <br />
                                    {afterColon?.trim()}
                                </span>
                                <span className="absolute left-[-16px] top-1 w-3 h-3 bg-black rounded-full"></span>
                                {index < points.length - 1 && (
                                    <span className="absolute left-[-12px] top-4 w-[2px] h-[calc(100%+8px)] bg-black"></span>
                                )}
                            </li>
                        );
                    })}
                </ul>

                {/* CTA Button */}
                <div className="mt-8">
                    <a
                        href={buttonLink}
                        className="inline-block px-5 py-3 text-base sm:text-lg font-bold text-white bg-[#e65100] rounded transition-all hover:bg-white hover:text-[#e65100] hover:shadow-[0_0_0_2px_inset_#e65100]"
                    >
                        {buttonText} <i className="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
