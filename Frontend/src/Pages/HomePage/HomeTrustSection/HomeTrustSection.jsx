import React from "react";
import { FaCalendarAlt, FaUsers, FaCoins, FaSmile, FaAward } from "react-icons/fa";

const STATS = [
  { icon: <FaCalendarAlt />, value: "10+", label: "Years of Experience" },
  { icon: <FaUsers />, value: "1000+", label: "Happy Families" },
  { icon: <FaCoins />, value: "₹100Cr+", label: "Assets Managed" },
  { icon: <FaSmile />, value: "98%", label: "Client Satisfaction" },
  { icon: <FaAward />, value: "AMFI", label: "Registered" },
];

const HomeTrustSection = () => {
  return (
    <section className="relative z-20 -mt-10 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 divide-y divide-dark-color/10 rounded-2xl bg-white-color shadow-lg sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:grid-cols-5">
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
    </section>
  );
};

export default HomeTrustSection;