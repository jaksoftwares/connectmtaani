"use client";

import { useState, useMemo, useCallback } from "react";
import Image from "next/image";

const categories = [
  {
    title: "Construction & Manual Labour",
    description: "Skilled workers for masonry, plumbing, and carpentry.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Domestic Services",
    description: "Housekeeping, childcare, and other domestic tasks.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Transport Services",
    description: "Boda boda riders, matatu crew, and delivery services.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Agricultural Work",
    description: "Farmers, horticulturists, and livestock handlers.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Crafts & Artisanry",
    description: "Tailors, shoemakers, and pottery artisans.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Cleaning & Sanitation",
    description: "Street cleaning, garbage collection, and more.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Hair & Beauty Services",
    description: "Hairdressers, barbers, and nail technicians.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Food Vendors & Catering",
    description: "Food kiosks, street vendors, and catering services.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Repair & Maintenance",
    description: "Mechanics, electricians, and appliance technicians.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Sales & Retail",
    description: "Market vendors, hawkers, and shop owners.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Security Services",
    description: "Private guards, watchmen, and bouncers.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Health & Wellness",
    description: "Community health workers, trainers, and therapists.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Education & Tutoring",
    description: "Private tutors and skill development trainers.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Entertainment & Performance",
    description: "DJs, dancers, and street performers.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Technology Services",
    description: "Phone repairers, IT support, and digital marketers.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Event Planning & Support",
    description: "Event decorators, ushers, and equipment rentals.",
    image: "https://via.placeholder.com/150",
  },
];

const PopularJobCategories = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
    },
    []
  );

  const filteredCategories = useMemo(
    () =>
      categories.filter((category) =>
        category.title.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [searchQuery]
  );

  return (
    <section className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Job Categories in Kenya
        </h1>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Search job categories..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg"
              >
                <div className="relative w-full h-40">
                  <Image
                    src={category.image}
                    alt={category.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {category.title}
                  </h2>
                  <p className="text-gray-600 mt-2">{category.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 col-span-full text-center">
              No job categories found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PopularJobCategories;
