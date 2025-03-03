import React from "react";

const StatsSection: React.FC = () => {
  return (
    <section className="bg-[#123456] text-white py-12 px-5">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-6 text-white">
            The Better Way to Find the <br />
            Appropriate Labor for your Business
          </h2>
          <p className="text-base text-white md:text-lg leading-relaxed">
            Discover skilled professionals at your convenience. With access to a
            diverse network of thousands of workers across multiple industries,
            our platform ensures fast, affordable, and reliable connections to
            help your business thrive.
          </p>
        </div>
        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-12">
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-2">100+</h3>
            <p className="text-base text-white">Cities Served Nationwide</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-2">5000+</h3>
            <p className="text-base text-white">Happy Clients and Growing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
