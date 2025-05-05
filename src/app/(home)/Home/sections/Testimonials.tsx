"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Testimonial {
  message: string;
  name: string;
  position: string;
  company: string;
  imageUrl: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    message: "ConnectMtaani helped us find skilled workers on short notice. The process was quick and the quality was excellent.",
    name: "Jane Muthoni",
    position: "HR Manager",
    company: "BuildRight Ltd",
    imageUrl: "/images/testimonial1.jpg",
    rating: 4,
  },
  {
    message: "This platform is a game-changer for labor sourcing. Very reliable and efficient service.",
    name: "David Otieno",
    position: "Operations Lead",
    company: "Kenya Movers",
    imageUrl: "/images/testimonial2.jpg",
    rating: 5,
  },
  {
    message: "The support team was extremely helpful throughout our hiring process. Highly recommended!",
    name: "Mary Wambui",
    position: "Project Manager",
    company: "Nairobi Interiors",
    imageUrl: "/images/testimonial3.jpg",
    rating: 4,
  },
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? "fill-yellow-400" : "fill-gray-300"}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.4 8.168L12 18.896l-7.334 3.864 1.4-8.168L.132 9.21l8.2-1.192z" />
      </svg>
    ));
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const current = testimonials[currentIndex];

  return (
    <div className="text-center px-4 sm:px-6 lg:px-8 py-12 w-full">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
        Reliable Access To Talent for Your Labour Requirements
      </h2>

      <div className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-md mb-6 max-w-3xl mx-auto">
        <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
          {current.message}
        </p>

        <div className="flex flex-col sm:flex-row items-center text-left">
          <div className="rounded-full w-20 h-20 overflow-hidden flex-shrink-0">
            <Image
              src={current.imageUrl}
              alt={current.name}
              width={80}
              height={80}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{current.name}</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              {current.position}, {current.company}
            </p>
          </div>
        </div>

        <div className="flex mt-4 justify-center">
          {renderStars(current.rating)}
        </div>
      </div>

      <div className="flex justify-center mb-5 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-colors ${
              currentIndex === index ? "bg-orange-600" : "bg-gray-400"
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <a href="#" className="text-orange-600 underline text-sm sm:text-base">
        View Case Studies
      </a>
    </div>
  );
};

export default TestimonialsSection;
