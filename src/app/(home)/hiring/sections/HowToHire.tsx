import React from 'react';

const HowToHire: React.FC = () => {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="max-w-4xl w-full">
        {/* Title Section */}
        <div className="mb-10 text-center">
          <p className="text-gray-500 text-sm sm:text-base">
            Advertise Jobs Seamlessly and Attract Top Talent
          </p>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black leading-tight mt-2">
            Maximize your reach and connect with the right candidates
          </h1>
        </div>

        {/* Step List */}
        <ul className="relative pl-6 space-y-10 border-l border-black">
          {[
            {
              title: 'Create an Account',
              lines: [
                'Sign up for a free ConnectMtaani employer account.',
                'Access your employer dashboard to start managing your job postings.',
              ],
            },
            {
              title: 'Post Your Job',
              lines: [
                'Fill out the job details, including: Job title and description, required skills and experience, and more.',
              ],
            },
            {
              title: 'Boost Your Job Post Visibility (Optional)',
              lines: [
                'Upgrade your job post to highlight it in search results, and to attract more applicants.',
              ],
            },
            {
              title: 'Browse and Select Candidates',
              lines: [
                'Review profiles of job seekers who apply. Use filters to find candidates based on skills, ratings, or experience.',
              ],
            },
            {
              title: 'Get the Job Done',
              lines: [
                'Seamlessly communicate with workers through the platform, manage applications and hire the best.',
              ],
            },
          ].map((step, index, arr) => (
            <li key={index} className="relative pl-6">
              <div className="absolute left-0 top-1 w-3 h-3 bg-black rounded-full"></div>
              {index !== arr.length - 1 && (
                <div className="absolute left-1.5 top-4 w-0.5 h-full bg-black"></div>
              )}
              <strong className="text-base sm:text-lg text-black">{step.title}</strong>
              {step.lines.map((line, i) => (
                <p key={i} className="text-sm sm:text-base text-gray-700 mt-1">
                  {line}
                </p>
              ))}
            </li>
          ))}
        </ul>

        {/* Button */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="bg-orange-600 text-white font-bold text-base sm:text-lg px-5 sm:px-6 py-3 inline-flex items-center gap-2 rounded transition-colors hover:bg-white hover:text-orange-600 hover:shadow-inner hover:border hover:border-orange-600"
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
