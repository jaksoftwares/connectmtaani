import React from 'react';
import brand1 from '../../../assets/logos/brand1.jpg';
import brand2 from '../../../assets/logos/brand2.jpg';
import brand3 from '../../../assets/logos/brand3.jpg';
import brand4 from '../../../assets/logos/brand4.jpg';
import brand5 from '../../../assets/logos/brand5.jpg';
import brand6 from '../../../assets/logos/brand6.jpg';

const Brands: React.FC = () => {
  const brands = [brand1, brand2, brand3, brand4, brand5, brand6];

  return (
    <div className="bg-gray-100 p-10 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Trusted by Leading Brands in Kenya</h2>
      <p className="text-xl text-gray-600 mb-8">5000+ Employers and Businesses Connect with Talent on ConnectMtaani</p>
      <div className="flex flex-wrap justify-center gap-8">
        {brands.map((brand, index) => (
          <img key={index} src={brand} alt={`Brand logo ${index + 1}`} className="w-24 h-auto rounded-lg object-contain" />
        ))}
      </div>
    </div>
  );
};

export default Brands;
