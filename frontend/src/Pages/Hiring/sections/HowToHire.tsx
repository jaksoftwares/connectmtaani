import React from 'react';

const HowToHire: React.FC = () => {
  return (
    <section className="bg-white py-8 flex justify-center">
      <div className="max-w-4xl w-full text-left">
        {/* Title Section */}
        <div className="mb-8 text-center">
          <p className="text-gray-500 text-sm">Advertise Jobs Seamlessly and Attract Top Talent</p>
          <h1 className="text-2xl font-bold text-black">
            Maximize your reach and connect with the right candidates
          </h1>
        </div>

        {/* Step List */}
        <ul className="relative list-none pl-5 space-y-8">
          <li className="relative pl-5">
            <strong>Create an Account</strong>
            <p>Sign up for a free ConnectMtaani employer account.</p>
            <p>Access your employer dashboard to start managing your job postings.</p>
            <div className="absolute left-0 top-1 w-3 h-3 bg-black rounded-full"></div>
            <div className="absolute left-1.5 top-5 w-0.5 h-full bg-black"></div>
          </li>

          <li className="relative pl-5">
            <strong>Post Your Job</strong>
            <p>
              Fill out the job details, including: Job title and description, required skills and
              experience, and more.
            </p>
            <div className="absolute left-0 top-1 w-3 h-3 bg-black rounded-full"></div>
            <div className="absolute left-1.5 top-5 w-0.5 h-full bg-black"></div>
          </li>

          <li className="relative pl-5">
            <strong>Boost Your Job Post Visibility (Optional)</strong>
            <p>
              Upgrade your job post to highlight it in search results, and to attract more
              applicants.
            </p>
            <div className="absolute left-0 top-1 w-3 h-3 bg-black rounded-full"></div>
            <div className="absolute left-1.5 top-5 w-0.5 h-full bg-black"></div>
          </li>

          <li className="relative pl-5">
            <strong>Browse and Select Candidates</strong>
            <p>
              Review profiles of job seekers who apply. Use filters to find candidates based on
              skills, ratings, or experience.
            </p>
            <div className="absolute left-0 top-1 w-3 h-3 bg-black rounded-full"></div>
            <div className="absolute left-1.5 top-5 w-0.5 h-full bg-black"></div>
          </li>

          <li className="relative pl-5">
            <strong>Get the Job Done</strong>
            <p>
              Seamlessly communicate with workers through the platform, manage applications and hire
              the best.
            </p>
            <div className="absolute left-0 top-1 w-3 h-3 bg-black rounded-full"></div>
          </li>
        </ul>

        {/* Button */}
        <div className="text-center mt-8">
          <a
            href="#"
            className="bg-orange-600 text-white font-bold text-lg px-6 py-3 inline-flex items-center gap-2 rounded transition-colors hover:bg-white hover:text-orange-600 hover:shadow-inner hover:border hover:border-orange-600"
          >
            POST A JOB FOR FREE TODAY
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowToHire;
