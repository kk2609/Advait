// import React from "react";
// import {
//   FaChartLine,
//   FaExchangeAlt,
//   FaUmbrellaBeach,
//   FaBullseye,
//   FaFileInvoiceDollar,
//   FaSeedling,
//   FaGraduationCap,
//   FaShieldAlt,
// } from "react-icons/fa";

// const SERVICES = [
//   {
//     icon: <FaChartLine />,
//     title: "SIP Investment",
//     description: "Build wealth systematically with disciplined SIP investments.",
//   },
//   {
//     icon: <FaExchangeAlt />,
//     title: "SWP",
//     description: "Generate regular income from your investments.",
//   },
//   {
//     icon: <FaUmbrellaBeach />,
//     title: "Retirement Planning",
//     description: "Plan a secure retirement and enjoy financial freedom.",
//   },
//   {
//     icon: <FaBullseye />,
//     title: "Goal Planning",
//     description: "Plan for your dreams, whether it's home, education or travel.",
//   },
//   {
//     icon: <FaFileInvoiceDollar />,
//     title: "Tax Planning",
//     description: "Save more with smart tax strategies and planning.",
//   },
//   {
//     icon: <FaSeedling />,
//     title: "Wealth Creation",
//     description: "Grow your wealth and achieve long-term financial success.",
//   },
//   {
//     icon: <FaGraduationCap />,
//     title: "Child Education Planning",
//     description: "Plan today for your child's bright and successful future.",
//   },
//   {
//     icon: <FaShieldAlt />,
//     title: "Wealth Protection",
//     description: "Protect your wealth and secure your family's tomorrow.",
//   },
// ];

// const ServicesGridSection = () => {
//   return (
//     <section className="bg-white-color px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-12 lg:px-10">
//       <div className="mx-auto max-w-[1400px]">
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
//           {SERVICES.map((service) => (
//             <div
//               key={service.title}
//               className="flex flex-col items-start rounded-2xl border border-dark-color/5 bg-white-color p-5 shadow-sm transition hover:shadow-md sm:p-6"
//             >
//               <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-color/10 text-lg text-primary-color sm:h-12 sm:w-12 sm:text-xl">
//                 {service.icon}
//               </span>
//               <h3 className="mt-4 font-body-font text-sm font-bold text-dark-color sm:text-base">
//                 {service.title}
//               </h3>
//               <p className="mt-2 font-body-font text-xs leading-relaxed text-gray-color sm:text-sm">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesGridSection;

import React from "react";
import { Link } from "react-router-dom";
import {
  FaChartLine,
  FaExchangeAlt,
  FaUmbrellaBeach,
  FaBullseye,
  FaFileInvoiceDollar,
  FaSeedling,
  FaGraduationCap,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";

// Helper to generate slug from title
const generateSlug = (title) =>
  title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

const SERVICES = [
  {
    icon: <FaChartLine />,
    title: "SIP Investment",
    description:
      "Build wealth systematically with disciplined SIP investments.",
  },
  {
    icon: <FaExchangeAlt />,
    title: "SWP",
    description: "Generate a regular stream of income from your investments while managing your long-term wealth.",
  },
  {
    icon: <FaUmbrellaBeach />,
    title: "Retirement Planning",
    description: "Plan a secure retirement and enjoy financial freedom.",
  },
  {
    icon: <FaBullseye />,
    title: "Goal Planning",
    description:
      "Plan for your dreams, whether it's home, education or travel.",
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Tax Planning",
    description: "Save more with smart tax strategies and planning.",
  },
  {
    icon: <FaSeedling />,
    title: "Wealth Creation",
    description: "Build and grow your wealth through disciplined strategies aligned with your long-term goals.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Child Education Planning",
    description: "Plan today for your child's bright and successful future.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Wealth Protection",
    description: "Protect your wealth and secure your family's tomorrow.",
  },
];

const ServicesGridSection = () => {
  return (
    <section className="bg-secondary-color px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-12 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {SERVICES.map((service) => {
            const slug = generateSlug(service.title);

            return (
              <Link
                key={service.title}
                to={`/services/${slug}`}
                className="group block h-full no-underline"
              >
                <div
                  className="
                    flex h-full min-h-[210px] flex-col items-start
                    rounded-2xl
                    border border-dark-color/5
                    bg-white-color
                    p-5
                    shadow-sm

                    transition-all
                    duration-300
                    ease-out

                    hover:-translate-y-1
                    hover:border-primary-color/20
                    hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)]

                    sm:p-6
                  "
                >
                  {/* Icon */}
                  <span
                    className="
                      flex h-11 w-11
                      items-center justify-center
                      rounded-xl
                      bg-primary-color/10
                      text-lg
                      text-primary-color

                      transition-all
                      duration-300

                      group-hover:bg-primary-color
                      group-hover:text-white
                      group-hover:scale-105

                      sm:h-12 sm:w-12
                      sm:text-xl
                    "
                  >
                    {service.icon}
                  </span>

                  {/* Title */}
                  <h3
                    className="
                      mt-4
                      font-body-font
                      text-sm
                      font-bold
                      text-dark-color

                      transition-colors
                      duration-300
                      group-hover:text-primary-color

                      sm:text-base
                    "
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-2
                      font-body-font
                      text-xs
                      leading-relaxed
                      text-gray-color

                      sm:text-sm
                    "
                  >
                    {service.description}
                  </p>

                  {/* Explore Service */}
                  <div
                    className="
                      mt-auto
                      flex
                      items-center
                      gap-1.5
                      pt-5
                      font-body-font
                      text-xs
                      font-semibold
                      text-primary-color
                      opacity-0
                      translate-y-1

                      transition-all
                      duration-300

                      group-hover:translate-y-0
                      group-hover:opacity-100

                      sm:text-sm
                    "
                  >
                    <span>Explore Service</span>

                    <FaArrowRight
                      className="
                        text-[10px]
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGridSection;
