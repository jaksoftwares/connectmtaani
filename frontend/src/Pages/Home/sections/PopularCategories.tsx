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
    <div className="text-center p-5">
      <h2 className="text-2xl font-bold mb-5">Popular Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {categories.map((category, index) => (
          <CategoryCard key={index} icon={category.icon} title={category.title} />
        ))}
      </div>
      <a href="/popularjobcategories" className="text-orange-600 underline mt-5 inline-block">See all Categories</a>
    </div>
  );
};

export default PopularCategories;
