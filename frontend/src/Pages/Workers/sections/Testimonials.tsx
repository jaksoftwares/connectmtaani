import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Jane Mwangi",
    position: "Project Manager, BrightBuild Contractors",
    image: "home/smiles_hero.pn", // Replace with real image URL
    rating: 5,
    testimonial:
      "ConnectMtaani has completely transformed how we find skilled workers for our short-term projects. The platform is easy to use, and the support team is always there when we need them.",
  },
  {
    id: 2,
    name: "John Doe",
    position: "CEO, Innovatech Ltd.",
    image: "home/smiles_hero.pn", // Replace with real image URL
    rating: 4,
    testimonial:
      "With ConnectMtaani, we discovered an efficient and reliable way to hire top professionals. It significantly reduced our recruitment time.",
  },
  {
    id: 3,
    name: "Sarah Mutua",
    position: "HR Manager, ProSolutions Inc.",
    image: "home/smiles_hero.pn", // Replace with real image URL
    rating: 5,
    testimonial:
      "The quality of workers on ConnectMtaani is outstanding. We've achieved great results by finding skilled, diligent professionals here!",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Go to a specific testimonial manually (pagination)
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Section: Text */}
          <div className="flex-1">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
              ConnectMtaani Fosters
            </p>
            <h2 className="text-3xl font-semibold text-orange-600 mt-4">
              Reliable Access To Talent for Your Labour Requirements.
            </h2>
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center px-5 py-3 bg-orange-600 text-white font-medium rounded hover:bg-orange-700 transition"
              >
                VIEW OUR CASE STUDIES
                <span className="ml-2 text-lg">&#8594;</span>
              </a>
            </div>
          </div>

          {/* Right Section: Carousel */}
          <div className="flex-1 relative overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute top-0 w-full transition-transform duration-700 ease-in-out ${
                  index === currentIndex ? "translate-x-0" : "translate-x-full"
                } ${
                  (currentIndex > index && "translate-x-[-100%]") || ""
                } opacity-${index === currentIndex ? "100" : "0"}`}
              >
                <div className="bg-gray-100 p-6 shadow-md rounded-lg">
                  {/* User Image */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full border-2 border-orange-400"
                    />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-blue-600 text-xl">
                          &#9733;
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-gray-600 mt-4">{testimonial.testimonial}</p>

                  {/* Name and Position */}
                  <div className="mt-6">
                    <h3 className="text-gray-800 font-bold">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
            {/* Pagination Indicators */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-3 w-3 rounded-full ${
                    index === currentIndex
                      ? "bg-orange-600"
                      : "bg-gray-300"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
