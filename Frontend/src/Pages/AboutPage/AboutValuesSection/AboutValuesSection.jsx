import React from "react";
import {
  FaBullseye,
  FaShieldAlt,
  FaHandshake,
  FaAward,
} from "react-icons/fa";

const VALUES = [
  {
    icon: <FaBullseye />,
    title: "Integrity",
    description: "We do what's right, always.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Trust",
    description: "We earn trust through actions.",
  },
  {
    icon: <FaHandshake />,
    title: "Commitment",
    description: "We are committed to your success.",
  },
  {
    icon: <FaAward />,
    title: "Excellence",
    description: "We strive for the highest standards.",
  },
];

const AboutValuesSection = () => {
  return (
    <section className="bg-white-color px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <h2 className="font-heading-font text-2xl font-bold text-dark-color sm:text-3xl">
          Our Values
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="flex flex-col items-center rounded-2xl bg-white-color px-4 py-8 text-center shadow-sm"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-color/10 text-xl text-primary-color">
                {value.icon}
              </span>
              <h3 className="mt-4 font-body-font text-sm font-bold text-dark-color sm:text-base">
                {value.title}
              </h3>
              <p className="mt-2 font-body-font text-xs leading-relaxed text-gray-color sm:text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValuesSection;