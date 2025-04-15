import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="flex justify-center items-center px-4 py-12 sm:px-6 md:px-8 bg-[#446688] bg-cover bg-no-repeat text-white w-full box-border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-screen-xl w-full">
        
        {/* Text Content */}
        <div className="flex flex-col justify-center gap-6">
          <div className="text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Empowering Your Business with Seamless Workforce Solutions.
            </h1>
          </div>
          <div className="text-left">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              ConnectMtaani empowers your business by linking you to skilled, reliable workers ready to meet your unique needs.
              Simplify your hiring process today.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-wrap gap-4 mt-4">
            <a 
              href="/signup" 
              className="bg-[#E15200] text-white border-2 border-transparent py-2 px-6 text-base sm:text-lg font-semibold rounded transition-all duration-300 hover:bg-white hover:text-[#E15200] hover:border-[#E15200]"
            >
              Get Started <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center w-full h-full">
          <Image 
            src="/home/smiles_hero.png" 
            alt="Smiling people representing workforce solutions" 
            width={600} 
            height={400} 
            className="w-full h-auto rounded-md max-w-[500px]"
            priority 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
