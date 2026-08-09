import React from "react";
import {
  FaUserFriends,
  FaEye,
  FaUserTie,
  FaSlidersH,
  FaChartLine,
} from "react-icons/fa";

const FEATURES = [
  {
    icon: <FaUserFriends />,
    title: "Client First",
    description: "Your goals, our top priority, always.",
  },
  {
    icon: <FaEye />,
    title: "Transparent",
    description: "Honest advice with complete transparency.",
  },
  {
    icon: <FaUserTie />,
    title: "Expert Guidance",
    description: "Experienced professionals guide every step.",
  },
  {
    icon: <FaSlidersH />,
    title: "Customized Solutions",
    description: "Tailored strategies designed for your needs.",
  },
  {
    icon: <FaChartLine />,
    title: "Long-term Approach",
    description: "We focus on building wealth that lasts.",
  },
];

const HomeAboutSection = () => {
  return (
    <section className="bg-white-color px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <h2 className="text-center font-heading-font text-2xl font-bold text-dark-color sm:text-3xl">
          Why Advait Financial Services?
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center px-2 text-center"
            >
              <span className="text-3xl text-primary-color">
                {feature.icon}
              </span>
              <h3 className="mt-4 font-body-font text-sm font-bold text-dark-color sm:text-base">
                {feature.title}
              </h3>
              <p className="mt-2 font-body-font text-xs leading-relaxed text-gray-color sm:text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeAboutSection;