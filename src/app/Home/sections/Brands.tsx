"use client"; // Mark this component as a Client Component

import React from "react";
import Image from "next/image"; // Import the Next.js Image component

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
    <div className="bg-gray-100 p-10 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Trusted by Leading Brands in Kenya
      </h2>
      <p className="text-xl text-gray-600 mb-8">
        5000+ Employers and Businesses Connect with Talent on ConnectMtaani
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {brands.map((brand, index) => (
          <div key={index} className="w-24 h-24 relative">
            <Image
              src={brand}
              alt={`Brand logo ${index + 1}`}
              width={96} // Set width
              height={96} // Set height
              className="rounded-lg object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;