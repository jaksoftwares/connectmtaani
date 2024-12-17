import React, { useState } from "react";
import profileImage from "../../../assets/images/profile.jpg"; // Placeholder for profile images

interface TestimonialProps {
  name: string;
  position: string;
  company: string;
  message: string;
  imageUrl: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: "Jane Mwangi",
    position: "Project Manager",
    company: "BrightSkills Contractors",
    message: "ConnecttMiami has completely transformed how we find skilled workers for our short-term projects. The platform is easy to use, and the support team is always there when we need them. We’ve connected with reliable, talented individuals who deliver quality work every time!",
    imageUrl: profileImage,
  },
  {
    name: "John Doe",
    position: "Operations Manager",
    company: "BuildSmart Solutions",
    message: "Using ConnecttMiami has made it easier for us to quickly find and hire skilled workers for our various projects. The quality of talent is impressive, and the platform is very user-friendly.",
    imageUrl: profileImage,
  },
  {
    name: "Emily Karanja",
    position: "HR Director",
    company: "TechConstruct Ltd.",
    message: "Our hiring process has never been smoother. ConnecttMiami provides access to a pool of highly skilled professionals, making our recruitment process fast and efficient.",
    imageUrl: profileImage,
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="p-5 max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-5">Reliable Access To Talent for Your Labour Requirements</h2>
      <div className="bg-gray-100 p-8 rounded-lg shadow-md mb-5 relative">
        <p className="text-lg text-gray-600 mb-5">{testimonials[currentIndex].message}</p>
        <div className="flex items-center mt-5">
          <img src={testimonials[currentIndex].imageUrl} alt={testimonials[currentIndex].name} className="rounded-full w-16 h-16 mr-4" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{testimonials[currentIndex].name}</h3>
            <p className="text-gray-600">{testimonials[currentIndex].position}, {testimonials[currentIndex].company}</p>
          </div>
        </div>
        <div className="flex mt-4">
          {Array.from({ length: 5 }, (_, index) => (
            <i key={index} className={`fas fa-star ${index < 4 ? "text-yellow-400" : "text-gray-300"}`}></i>
          ))}
        </div>
      </div>
      <div className="flex justify-center mb-5">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full ${currentIndex === index ? "bg-orange-600" : "bg-gray-400"}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
      <a href="#" className="text-orange-600 underline">View Case Studies</a>
    </div>
  );
};

export default Testimonials;
