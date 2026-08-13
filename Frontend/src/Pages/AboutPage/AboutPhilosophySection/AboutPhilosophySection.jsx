// import React from "react";
// import { Link } from "react-router-dom";
// import ctaImage from "../../../assets/journey.jpg"; // adjust path

// const AboutCTASection = () => {
//   return (
//     <section className="bg-white-color px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
//       <div className="mx-auto max-w-[1400px] overflow-hidden rounded-2xl bg-primary-color/10 sm:rounded-3xl">
//         <div className="grid grid-cols-1 items-center gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10">
//           {/* Left — Text */}
//           <div>
//             <h2 className="font-heading-font text-xl font-bold leading-tight text-dark-color sm:text-2xl lg:text-3xl">
//               Let&apos;s Build Your Financial Future
//             </h2>
//             <p className="mt-3 font-body-font text-sm text-gray-color sm:text-base">
//               Connect with us and experience the Advait difference.
//             </p>

//             <Link
//               to="/contact"
//               className="mt-6 inline-flex items-center rounded-full bg-primary-color px-6 py-3 font-body-font text-sm font-semibold text-white-color shadow-md transition hover:bg-primary-color/90 sm:px-8"
//             >
//               Book a Free Consultation
//             </Link>
//           </div>

//           {/* Right — Image */}
//           <div className="relative h-56 w-full overflow-hidden rounded-2xl sm:h-64 lg:h-72">
//             <img
//               src={ctaImage}
//               alt="Advait Financial Services team working with a client"
//               className="h-full w-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutCTASection;








import React from "react";
import {
  FaPlay,
  FaRegClock,
  FaChartLine,
  FaBalanceScale,
  FaArrowRight,
} from "react-icons/fa";
import { TbShieldCheck } from "react-icons/tb";

const STEPS = [
  {
    icon: <FaPlay />,
    number: "01",
    title: "Start",
    description: "Start with purpose and a plan aligned with your goals.",
  },
  {
    icon: <FaRegClock />,
    number: "02",
    title: "Stay",
    description: "Stay invested and focused through market cycles.",
  },
  {
    icon: <FaChartLine />,
    number: "03",
    title: "Grow",
    description: "Grow your wealth with discipline, patience and smart decisions.",
  },
  {
    icon: <FaBalanceScale />,
    number: "04",
    title: "Balance",
    description: "Balance risk and reward to build a secure future.",
  },
];

const AboutPhilosophySection = () => {
  return (
    <section className="bg-secondary-color mx-auto max-w-[1600px] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 xl:px-10">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-8 xl:gap-16">
        {/* Left — Intro */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="font-body-font text-xs font-bold uppercase tracking-widest text-primary-color sm:text-sm">
            Our Investing Philosophy
          </span>
          <div className="mt-3 h-1 w-10 rounded-full bg-primary-color" />

          <h2 className="mt-5 max-w-md font-heading-font text-3xl font-bold leading-[1.15] text-dark-color sm:text-4xl lg:text-3xl xl:text-[2.4rem]">
            The Four Pillars of Successful Investing
          </h2>

          <h3 className="mt-4 font-heading-font text-xl font-bold text-primary-color sm:text-2xl lg:text-xl xl:text-2xl">
            Start. Stay. Grow. Balance.
          </h3>

          <p className="mt-5 max-w-md font-body-font text-sm leading-relaxed text-gray-color sm:text-base lg:text-sm xl:text-base">
            Successful investing isn&apos;t about timing the market.
            It&apos;s about starting with the right approach, staying
            committed to your goals, growing with discipline, and
            maintaining balance along the way.
          </p>

          <div className="mt-7 flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-primary-color text-lg text-primary-color">
              <TbShieldCheck />
            </span>
            <p className="font-body-font text-sm text-gray-color sm:text-base">
              Guided by values. Driven by your goals.
            </p>
          </div>
        </div>

        {/* Right — Timeline + Cards */}
        <div>
          {/* Timeline row */}
          <div className="relative mb-6 hidden grid-cols-4 items-center sm:grid lg:mb-5 xl:mb-8">
            <div
              aria-hidden="true"
              className="absolute left-[12.5%] right-[12.5%] top-1/2 h-px -translate-y-1/2 bg-primary-color/30"
            />
            {[1, 2, 3].map((i) => (
              <span
                key={i}
                aria-hidden="true"
                className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-primary-color"
                style={{ left: `${12.5 + i * 25}%`, transform: "translate(-50%, -50%)" }}
              />
            ))}

            {STEPS.map((step) => (
              <div key={step.title} className="flex justify-center">
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary-color bg-white-color text-xl text-primary-color lg:h-12 lg:w-12 lg:text-lg xl:h-16 xl:w-16 xl:text-2xl">
                  {step.icon}
                </span>
              </div>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-4 sm:gap-4 lg:gap-3 xl:gap-5">
            {STEPS.map((step) => (
              <div
                key={step.title}
                className="flex flex-col items-center rounded-2xl bg-white-color px-5 pb-8 pt-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] lg:px-3 lg:pb-6 lg:pt-6 xl:px-5 xl:pb-8 xl:pt-8"
              >
                {/* icon shown only when timeline row is hidden (mobile) */}
                <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary-color bg-white-color text-xl text-primary-color sm:hidden">
                  {step.icon}
                </span>

                <p className="font-heading-font text-2xl font-bold text-primary-color sm:text-3xl lg:text-2xl xl:text-3xl">
                  {step.number}
                </p>
                <div className="mt-1 h-0.5 w-7 rounded-full bg-primary-color" />

                <h3 className="mt-3 font-body-font text-lg font-extrabold uppercase tracking-wide text-dark-color lg:text-base xl:text-lg">
                  {step.title}
                </h3>

                <p className="mx-auto mt-3 max-w-[190px] font-body-font text-sm leading-relaxed text-gray-color lg:text-xs xl:text-sm">
                  {step.description}
                </p>

                {/* <span className="mt-6 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-color/15 text-primary-color transition-colors duration-200 hover:bg-primary-color hover:text-white-color lg:mt-4 lg:h-9 lg:w-9 xl:mt-6 xl:h-10 xl:w-10">
                  <FaArrowRight className="text-sm" />
                </span> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPhilosophySection;