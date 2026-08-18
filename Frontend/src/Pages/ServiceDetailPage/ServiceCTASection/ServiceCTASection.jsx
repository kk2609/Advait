import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import {
  PiShieldCheck,
  PiChartPieSlice,
  PiTarget,
  PiUsersThree,
} from "react-icons/pi";

// Default trust points (matching reference)
const defaultTrustPoints = [
  {
    icon: PiShieldCheck,
    title: "Trusted Guidance",
    description: "Expert advice you can rely on.",
  },
  {
    icon: PiChartPieSlice,
    title: "Personalized Strategies",
    description: "Solutions tailored to your financial goals.",
  },
  {
    icon: PiTarget,
    title: "Transparent Approach",
    description: "Clear, honest, and straightforward advice.",
  },
  {
    icon: PiUsersThree,
    title: "Client First",
    description: "Your success is our top priority.",
  },
];

const ServiceCTASection = ({ service }) => {
  const { cta } = service;

  // Use provided trust points or fallback to defaults
  const trustPoints = cta?.trustPoints?.length > 0 ? cta.trustPoints : defaultTrustPoints;

  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="relative max-w-7xl mx-auto bg-white overflow-hidden">
        {/* Decorative concentric circles - right */}
        <div className="pointer-events-none hidden sm:block absolute -right-16 lg:-right-10 bottom-0">
          {[64, 96, 128, 160, 192].map((size) => (
            <div
              key={size}
              style={{ width: size * 2, height: size * 2 }}
              className="absolute rounded-full border border-orange-200/50"
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative px-6 sm:px-10 lg:px-16 pt-14 sm:pt-16 lg:pt-20 pb-10 sm:pb-12">
          <div className="text-center max-w-3xl mx-auto">
            {/* Label with decorative lines */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-8 bg-orange-300" />
              <span className="text-orange-500 font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase">
                {cta?.label || "Let's Plan Your Future"}
              </span>
              <span className="h-px w-8 bg-orange-300" />
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] leading-tight text-[#0B1F3A] mb-6">
              {cta?.title || "Ready to Take the "}
              <span className="text-orange-500">
                {cta?.highlight || ""}
              </span>
            </h2>

            {/* Description */}
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-10">
              {cta?.description ||
                `Let's build a financial strategy designed around your goals, priorities, and future. Whether you're planning your investments, building wealth, or preparing for the future, our team is here to guide you with clarity and confidence.`}
            </p>

            {/* CTA Button */}
            <Link
              to={cta?.buttonLink || "/contact"}
              className="inline-flex items-center gap-2.5 bg-orange-500 hover:bg-orange-600 transition-colors text-white font-semibold text-sm sm:text-base px-8 sm:px-9 py-4 rounded-full shadow-sm"
            >
              {cta?.buttonText || "Book a Free Consultation"}
              <FiArrowRight size={18} />
            </Link>
          </div>

          {/* Trust Points Grid */}
          <div className="relative mt-14 sm:mt-16 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6">
            {trustPoints.map(({ icon: Icon, title, description }, idx) => (
              <div
                key={title}
                className={`flex items-start gap-4 ${idx !== 0 ? "lg:pl-6" : ""}`}
              >
                <span className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-50 border border-orange-200/70 text-orange-500 flex items-center justify-center">
                  <Icon size={22} />
                </span>
                <div>
                  <p className="font-serif font-semibold text-[#0B1F3A] text-base mb-1">
                    {title}
                  </p>
                  <p className="text-sm text-left text-slate-500 leading-snug">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTASection;