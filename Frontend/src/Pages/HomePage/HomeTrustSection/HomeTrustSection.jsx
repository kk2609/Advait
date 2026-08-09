import React from "react";
import { FaCalendarAlt, FaUsers, FaSmile, FaAward } from "react-icons/fa";

const STATS = [
  { icon: <FaCalendarAlt />, value: "8+", label: "Years of Experience" },
  { icon: <FaUsers />, value: "100+", label: "Happy Families" },
  { icon: <FaSmile />, value: "88%", label: "Client Satisfaction" },
  { icon: <FaAward />, value: "AMFI Registered", label: "Mutual Fund Distributor" },
];

const HomeTrustSection = () => {
  return (
    <section className="relative z-20 -mt-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-white-color shadow-lg">
        <div className="grid grid-cols-2 divide-y divide-dark-color/10 sm:grid-cols-2 md:grid-cols-4 md:divide-x md:divide-y-0">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 px-4 py-6 text-center"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-color/10 text-lg text-primary-color">
                {stat.icon}
              </span>
              <span className="font-heading-font text-xl font-bold text-dark-color sm:text-2xl">
                {stat.value}
              </span>
              <span className="font-body-font text-xs text-gray-color sm:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTrustSection;