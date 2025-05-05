"use client";

import React from "react";
import Image from "next/image";

const Brands: React.FC = () => {
  const brands = [
    "/logos/brand1.jpg",
    "/logos/brand2.jpg",
    "/logos/brand3.jpg",
    "/logos/brand4.jpg",
    "/logos/brand5.jpg",
    "/logos/brand6.jpg",
  ];

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          Trusted by Leading Brands in Kenya
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-10">
          5000+ Employers and Businesses Connect with Talent on ConnectMtaani
        </p>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
          {brands.map((brand, index) => (
            <div key={index} className="w-20 h-20 sm:w-24 sm:h-24 relative hover:scale-105 transition-transform duration-200">
              <Image
                src={brand}
                alt={`Brand logo ${index + 1}`}
                fill
                className="object-contain rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
