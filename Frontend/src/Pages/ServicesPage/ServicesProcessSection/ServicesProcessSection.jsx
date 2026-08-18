// import React from "react";
// import {
//   FaSearch,
//   FaClipboardList,
//   FaHandHoldingUsd,
//   FaSyncAlt,
// } from "react-icons/fa";

// const STEPS = [
//   {
//     icon: <FaSearch />,
//     title: "Understand",
//     description: "We understand your needs and financial goals.",
//   },
//   {
//     icon: <FaClipboardList />,
//     title: "Plan",
//     description: "We create a personalized plan just for you.",
//   },
//   {
//     icon: <FaHandHoldingUsd />,
//     title: "Invest",
//     description: "We help you invest in the right products.",
//   },
//   {
//     icon: <FaSyncAlt />,
//     title: "Review",
//     description: "We review regularly and optimize for better results.",
//   },
// ];

// const ServicesProcessSection = () => {
//   return (
//     <section className="bg-secondary-color px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
//       <div className="mx-auto max-w-[1400px]">
//         <h2 className="font-heading-font text-2xl font-bold text-dark-color sm:text-3xl">
//           Our Approach
//         </h2>
//         <p className="mt-3 max-w-xl font-body-font text-sm leading-relaxed text-gray-color sm:text-base">
//           A simple, transparent and effective approach to help you achieve
//           your financial goals.
//         </p>

//         <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-6">
//           {STEPS.map((step) => (
//             <div
//               key={step.title}
//               className="flex flex-col items-center rounded-2xl bg-white-color p-5 text-center shadow-sm sm:p-6"
//             >
//               <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-color/10 text-lg text-primary-color sm:h-14 sm:w-14 sm:text-xl">
//                 {step.icon}
//               </span>
//               <h3 className="mt-4 font-body-font text-sm font-bold text-dark-color sm:text-base">
//                 {step.title}
//               </h3>
//               <p className="mt-2 font-body-font text-xs leading-relaxed text-gray-color sm:text-sm">
//                 {step.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesProcessSection;



import React from "react";
import { FaSearch, FaGift, FaChartBar } from "react-icons/fa";
import { TbShieldCheck } from "react-icons/tb";

const STEPS = [
  {
    icon: <FaSearch />,
    title: "Understand",
    description: "We understand your financial situation, goals, priorities, and future needs before recommending any solution.",
  },
  {
    icon: <FaGift />,
    title: "Plan",
    description:
      "We create a personalized financial plan aligned with your goals, risk profile, and investment horizon.",
  },
  {
    icon: <FaChartBar />,
    title: "Implement",
    description:
      "We help you implement the right financial solutions with a disciplined and goal-focused approach.",
  },
  {
    icon: <TbShieldCheck />,
    title: "Review & Grow",
    description:
      "We regularly review your plan, adapt to changing needs, and help you stay aligned with your long-term goals.",
  },
];

const ServicesProcessSection = () => {
  return (
    <section className="bg-white-color px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <h2 className="font-heading-font text-2xl font-bold text-dark-color sm:text-3xl">
          Our Approach
        </h2>
        <p className="mt-3 max-w-xl font-body-font text-sm leading-relaxed text-gray-color sm:text-base">
          A simple, transparent and client-first approach designed to help you make confident financial
          decisions and achieve your goals.
        </p>

        {/* Single grid drives every row — guarantees icon / dot / number / title
            all share the exact same column positions at every breakpoint */}
        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10  sm:mt-14 sm:grid-cols-4 sm:gap-x-6 sm:gap-y-0">
          {STEPS.map((step, index) => (
            <div key={step.title} className="flex flex-col items-center text-center">
              {/* icon */}
              <span className="flex items-center justify-center text-4xl leading-none text-primary-color sm:text-5xl">
                {step.icon}
              </span>

              {/* connector + dot — sm and up only */}
              <div className="relative mt-5 hidden h-2.5 w-full items-center justify-center sm:flex">
                {index !== 0 && (
                  <span className="absolute left-0 right-1/2 top-1/2 h-px -translate-y-1/2 bg-primary-color/25" />
                )}
                {index !== STEPS.length - 1 && (
                  <span className="absolute left-1/2 right-0 top-1/2 h-px -translate-y-1/2 bg-primary-color/25" />
                )}
                <span className="relative z-10 h-2.5 w-2.5 rounded-full bg-primary-color" />
              </div>

              {/* number, title, description */}
              <span className="mt-4 font-heading-font text-sm font-bold text-primary-color sm:mt-3 sm:text-base">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-body-font text-sm font-bold text-dark-color sm:text-base">
                {step.title}
              </h3>
              <p className="mx-auto mt-2 max-w-5xl font-body-font text-xs leading-relaxed text-gray-color sm:max-w-[190px] sm:text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesProcessSection;