import Image from "next/image";

const ResourcesGrid = () => {
  const resources = [
    {
      id: 1,
      image: "https://source.unsplash.com/600x400/?labor,employment",
      title: "Revolutionizing the labour hiring architecture in Kenya",
      description:
        "Open enrollment is here, offering the perfect opportunity to find health coverage tailored to your needs. Just like GigSmart connects businesses with reliable workers, choosing the right plan ensures you're prepared for life.",
      link: "/Blogs",
    },
    {
      id: 2,
      image: "https://source.unsplash.com/600x400/?labor,employment",
      title: "Revolutionizing the labour hiring architecture in Kenya",
      description:
        "Open enrollment is here, offering the perfect opportunity to find health coverage tailored to your needs. Just like GigSmart connects businesses with reliable workers, choosing the right plan ensures you're prepared for life.",
      link: "#",
    },
    {
      id: 3,
      image: "https://source.unsplash.com/600x400/?labor,employment",
      title: "Building Stronger Worker-Employer Relationships",
      description:
        "Discover how effective communication and streamlined processes can help build lasting relationships between workers and employers.",
      link: "#",
    },
    {
      id: 4,
      image: "https://source.unsplash.com/600x400/?labor,employment",
      title: "The Future of the Gig Economy",
      description:
        "Explore the trends shaping the future of gig work and how you can adapt to a rapidly changing labor market.",
      link: "#",
    },
    {
      id: 5,
      image: "https://source.unsplash.com/600x400/?labor,employment",
      title: "Efficient Workforce Allocation Strategies",
      description:
        "Learn how to allocate resources effectively to maximize productivity and minimize downtime in your workforce.",
      link: "#",
    },
    {
      id: 6,
      image: "https://source.unsplash.com/600x400/?labor,employment",
      title: "Empowering Informal Sector Workers",
      description:
        "Discover tools and strategies to empower workers in the informal sector, enabling them to reach their full potential.",
      link: "#",
    },
    {
      id: 7,
      image: "https://source.unsplash.com/600x400/?labor,employment",
      title: "Overcoming Employment Challenges in Kenya",
      description:
        "Explore solutions to common employment challenges faced by workers and businesses in Kenya's unique labor market.",
      link: "#",
    },
    {
      id: 8,
      image: "https://source.unsplash.com/600x400/?labor,employment",
      title: "How Technology is Transforming Employment",
      description:
        "From job matching platforms to digital contracts, see how technology is changing the way people find and manage work.",
      link: "#",
    },
    {
      id: 9,
      image: "https://source.unsplash.com/600x400/?labor,employment",
      title: "Understanding the Benefits of Flexible Work",
      description:
        "Learn why flexible work arrangements are becoming more popular and how they can benefit both employers and workers.",
      link: "#",
    },
    {
      id: 10,
      image: "https://source.unsplash.com/600x400/?labor,employment",
      title: "Adapting to a New Workforce Dynamic",
      description:
        "Explore how businesses can adapt to the evolving expectations and needs of today’s workforce.",
      link: "#",
    },
  ];

  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-16">
      <h2 className="text-center text-gray-800 text-2xl sm:text-3xl font-bold mb-10">
        Transforming how work gets done
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden transition duration-300 hover:shadow-xl"
          >
            <div className="relative w-full h-48 sm:h-52 md:h-56 lg:h-60">
              <Image
                src={resource.image}
                alt={resource.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {resource.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {resource.description}
              </p>
              <a
                href={resource.link}
                className="text-orange-500 font-medium text-sm sm:text-base mt-3 inline-block hover:underline"
              >
                Read More &gt;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResourcesGrid;
