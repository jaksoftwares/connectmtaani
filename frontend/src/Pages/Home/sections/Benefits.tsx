import React from "react";
import controlImage from "../../../assets/images/control.jpg";
import opportunitiesImage from "../../../assets/images/workplace2.jpg";
import helpImage from "../../../assets/images/workplace4.jpg";

interface SectionProps {
  title: string;
  text: string;
  buttonText: string;
  imageUrl: string;
  reverse?: boolean;
}

const Section: React.FC<SectionProps> = ({ title, text, buttonText, imageUrl, reverse }) => {
  return (
    <div className={`flex ${reverse ? "flex-row-reverse" : ""} bg-gray-100 p-6 rounded-lg shadow-md`}>
      <div className="w-2/5">
        <img src={imageUrl} alt={title} className="w-full h-auto rounded-lg" />
      </div>
      <div className="w-3/5 p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{text}</p>
        <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-500">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const Benefits: React.FC = () => {
  const sections: Array<SectionProps> = [
    {
      title: "Full Control of Your Hiring Experience",
      text: "Set your own job terms and rates, and choose the right talent for your needs. Posting jobs is free, with no commitments.",
      buttonText: "START HIRING TALENT NOW",
      imageUrl: controlImage,
      reverse: true
    },
    {
      title: "Post Short-Term or Long-Term Opportunities",
      text: "Advertise job opportunities to Kenya's skilled and semi-skilled workforce. Post jobs for any duration and connect with motivated job seekers.",
      buttonText: "POST A JOB NOW FOR FREE",
      imageUrl: opportunitiesImage,
    },
    {
      title: "We’re Here to Help",
      text: "Our dedicated support team assists you through every step of the hiring process. Connect with qualified and reliable workers who meet your expectations.",
      buttonText: "TELL US ABOUT YOUR HIRING NEEDS",
      imageUrl: helpImage,
      reverse: true
    }
  ];

  return (
    <div className="p-5 w-full">
      {sections.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          text={section.text}
          buttonText={section.buttonText}
          imageUrl={section.imageUrl}
          reverse={section.reverse}
        />
      ))}
    </div>
  );
};

export default Benefits;
