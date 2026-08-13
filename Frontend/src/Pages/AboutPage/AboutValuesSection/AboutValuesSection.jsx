// import React from "react";
// import {
//   FaBullseye,
//   FaShieldAlt,
//   FaHandshake,
//   FaAward,
// } from "react-icons/fa";

// const VALUES = [
//   {
//     icon: <FaBullseye />,
//     title: "Integrity",
//     description: "We do what's right, always.",
//   },
//   {
//     icon: <FaShieldAlt />,
//     title: "Trust",
//     description: "We earn trust through actions.",
//   },
//   {
//     icon: <FaHandshake />,
//     title: "Commitment",
//     description: "We are committed to your success.",
//   },
//   {
//     icon: <FaAward />,
//     title: "Excellence",
//     description: "We strive for the highest standards.",
//   },
// ];

// const AboutValuesSection = () => {
//   return (
//     <section className="bg-white-color px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
//       <div className="mx-auto max-w-[1400px]">
//         <h2 className="font-heading-font text-2xl font-bold text-dark-color sm:text-3xl">
//           Our Values
//         </h2>

//         <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
//           {VALUES.map((value) => (
//             <div
//               key={value.title}
//               className="flex flex-col items-center rounded-2xl bg-white-color px-4 py-8 text-center shadow-sm"
//             >
//               <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-color/10 text-xl text-primary-color">
//                 {value.icon}
//               </span>
//               <h3 className="mt-4 font-body-font text-sm font-bold text-dark-color sm:text-base">
//                 {value.title}
//               </h3>
//               <p className="mt-2 font-body-font text-xs leading-relaxed text-gray-color sm:text-sm">
//                 {value.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutValuesSection;

















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
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left — Values List (moves to left on lg) */}
          <div className="lg:order-1 divide-y divide-dark-color/10">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="flex items-center gap-3 py-5 first:pt-0 last:pb-0 sm:gap-5 sm:py-6"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center text-2xl text-primary-color sm:h-10 sm:w-10 sm:text-3xl">
                  {value.icon}
                </span>

                <span className="hidden h-10 w-px shrink-0 bg-dark-color/15 sm:block" />

                <div className="min-w-0 flex-1">
                  <h3 className="font-body-font text-base font-bold text-dark-color sm:text-lg">
                    {value.title}
                  </h3>

                  <p className="mt-1 font-body-font text-xs leading-relaxed text-gray-color sm:text-sm">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right — Introduction (moves to right on lg) */}
          <div className="lg:order-2 lg:  lg:border-dashed lg:border-primary-color/40 lg:pl-10 text-center lg:text-left">
            <p className="font-body-font text-xs font-bold uppercase tracking-widest text-primary-color sm:text-sm">
              Our Values
            </p>

            <h2 className="mt-3 font-heading-font text-3xl font-bold leading-tight text-dark-color sm:text-4xl lg:text-5xl">
              What We
              <br className="hidden lg:block" /> Stand For
            </h2>

            <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-primary-color lg:mx-0" />

            <p className="mx-auto mt-5 max-w-lg font-body-font text-justify text-sm leading-relaxed text-gray-color sm:text-base lg:mx-0">
              At Advait, our values are more than principles – they shape
              how we advise, communicate, and build lasting relationships
              with our clients.
            </p>

            <div className="mt-6 border-l-2 border-primary-color/30 pl-4 text-left sm:pl-5">
              <p className="font-body-font text-sm font-semibold leading-relaxed text-dark-color sm:text-base">
                Clear advice. Honest relationships. Long-term thinking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutValuesSection;