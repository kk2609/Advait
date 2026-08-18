import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { PiShieldCheck, PiChartPieSlice, PiTarget, PiUsersThree } from "react-icons/pi";

const trustPoints = [
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

const ContactCTASection = () => {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="relative max-w-7xl mx-auto   bg-white overflow-hidden">
        {/* Decorative soft blob - left */}
        <div className="pointer-events-none absolute " />

        {/* Decorative dotted grid - left */}
        {/* <div className="pointer-events-none hidden sm:grid absolute left-8 lg:left-16 bottom-24 lg:bottom-28 grid-cols-8 gap-2.5">
          {Array.from({ length: 40 }).map((_, i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-orange-300/60"
            />
          ))}
        </div> */}

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
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-8 bg-orange-300" />
              <span className="text-orange-500 font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase">
                YOUR NEXT FINANCIAL STEP
              </span>
              <span className="h-px w-8 bg-orange-300" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] leading-tight text-[#0B1F3A] mb-6">
              LET&apos;S PLAN {" "}
              <span className="text-primary-color">YOUR FUTURE.</span>
            </h2>

            <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-10">
              Let&apos;s Build Your Financial {" "}
              <span className="font-semibold text-slate-600">
                Future Together.
              </span>{" "}<br/>
              Let&apos;s build a financial strategy around your goals, priorities, and future. Our team is here to help you
              make informed decisions with clarity and confidence.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-orange-500 hover:bg-orange-600 transition-colors text-white font-semibold text-sm sm:text-base px-8 sm:px-9 py-4 rounded-full shadow-sm"
            >
              Book a Free Consultation
              <FiArrowRight size={18} />
            </a>
          </div>

          {/* Trust points */}
          <div className="relative mt-14 sm:mt-16 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6">
            {trustPoints.map(({ icon: Icon, title, description }, idx) => (
              <div
                key={title}
                className={`flex items-start gap-4 ${
                  idx !== 0 ? "lg:pl-6" : ""
                }`}
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

export default ContactCTASection; 