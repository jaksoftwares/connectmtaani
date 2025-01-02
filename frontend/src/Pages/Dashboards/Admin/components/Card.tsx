import React from 'react';

interface CardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  bgColor: string;
  children?: React.ReactNode; // Allow children to be passed
}

const Card: React.FC<CardProps> = ({ title, value, icon, bgColor, children }) => {
  return (
    <div className={`p-4 rounded-lg shadow-md ${bgColor}`}>
      <div className="flex items-center space-x-4">
        <div className="text-3xl">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-xl text-gray-700">{value}</p>
        </div>
      </div>
      {children && <div className="mt-4">{children}</div>} {/* Render children if provided */}
    </div>
  );
};

export default Card;
