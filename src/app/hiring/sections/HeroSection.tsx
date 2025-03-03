import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="flex justify-center items-center p-8 bg-[#446688] bg-cover bg-no-repeat text-white w-full box-border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-screen-xl w-full box-border">
        {/* Heading and Subheading Section */}
        <div className="flex flex-col justify-start gap-4 mt-20">
          <div className="text-left">
            <h1 className="text-7xl font-bold mt-0 mb-2 -mr-72">
              Empowering Your Business with Seamless Workforce Solutions.
            </h1>
          </div>
          <div className="text-left">
            <p className="text-2xl leading-relaxed m-0">
              ConnectMtaani empowers your business by linking you to skilled, reliable workers ready to meet your unique needs.
              Simplify your hiring process today.
            </p>
          </div>
          {/* Button Section */}
          <div className="flex gap-4 mt-5">
            <a href="/signup" className="bg-[#E15200] text-white border-2 border-transparent py-2 px-6 text-lg font-bold rounded transition-all ease-in-out duration-300 hover:bg-white hover:text-[#E15200] hover:border-[#E15200]">
              Get Started <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center">
        <img src="/home/smiles_hero.png" alt="smiles" className="max-w-[150%] h-auto rounded-md -mt-0 -mr-72" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
