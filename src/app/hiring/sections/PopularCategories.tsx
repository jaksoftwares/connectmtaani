import React from "react";

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-lg text-center">
      <div className="text-2xl mb-2">{icon}</div>
      <p className="text-gray-700">{title}</p>
    </div>
  );
};

const PopularCategories: React.FC = () => {
  const categories = [
    { icon: <i className="fas fa-hammer"></i>, title: "Construction & Manual Labour" },
    { icon: <i className="fas fa-wrench"></i>, title: "Plumbing" },
    { icon: <i className="fas fa-paint-roller"></i>, title: "Painting" },
    { icon: <i className="fas fa-bolt"></i>, title: "Electrical" },
    { icon: <i className="fas fa-tree"></i>, title: "Landscaping" },
    { icon: <i className="fas fa-tools"></i>, title: "Carpentry" },
    { icon: <i className="fas fa-hard-hat"></i>, title: "Safety" },
    { icon: <i className="fas fa-brush"></i>, title: "Cleaning" },
    { icon: <i className="fas fa-plug"></i>, title: "Installation" },
    { icon: <i className="fas fa-cogs"></i>, title: "Maintenance" },
    { icon: <i className="fas fa-truck"></i>, title: "Transport" },
    { icon: <i className="fas fa-recycle"></i>, title: "Recycling" },
  ];

  return (
    <div className="text-center p-5 bg-[#E1E1E1]">
      {/* Title Section */}
      <div className="text-center mb-5">
          <p className="text-gray-500 text-xl mb-1">Skills for all your job requirements</p>
          <h1 className="text-3xl font-bold text-[#3E6082]">Popular Categories</h1>
        </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {categories.map((category, index) => (
          <CategoryCard key={index} icon={category.icon} title={category.title} />
        ))}
      </div>
      <a href="/popularjobcategories" className="text-orange-600 underline mt-5 inline-block text-xl">
    See all Categories <i className="fas fa-arrow-right ml-4 "></i>
</a>

    </div>
  );
};

export default PopularCategories;

