// import React from "react";
// import {
//   FaComments,
//   FaClipboardList,
//   FaWallet,
//   FaSyncAlt,
//   FaFlagCheckered,
// } from "react-icons/fa";
// import heroImage from "../../../assets/journey.jpg";

// const STEPS = [
//   {
//     icon: <FaComments />,
//     title: "Understand",
//     description: "We understand your goals and needs.",
//   },
//   {
//     icon: <FaClipboardList />,
//     title: "Plan",
//     description: "We create a personalized financial plan.",
//   },
//   {
//     icon: <FaWallet />,
//     title: "Invest",
//     description: "We help you invest wisely to grow.",
//   },
//   {
//     icon: <FaSyncAlt />,
//     title: "Review",
//     description: "We regularly optimize your portfolio.",
//   },
//   {
//     icon: <FaFlagCheckered />,
//     title: "Achieve",
//     description: "You achieve financial freedom.",
//   },
// ];

// const HomeJourneySection = () => {
//   return (
//     <section className="bg-secondary-color px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
//       <div className="mx-auto max-w-[1400px]">
//         <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
//           <img
//             src={heroImage}
//             alt="Advisors reviewing a client's financial plan"
//             className="w-full rounded-3xl object-cover shadow-lg"
//           />

//           <div>
//             <span className="font-body-font text-xs font-bold uppercase tracking-widest text-primary-color">
//               Your Journey to Financial Freedom
//             </span>
//             <h2 className="mt-3 font-heading-font text-2xl font-bold text-dark-color sm:text-3xl">
//               Our 5-Step Proven Process
//             </h2>
//             <p className="mt-3 font-body-font text-sm leading-relaxed text-gray-color sm:text-base">
//               A simple, transparent and effective approach to growing your
//               financial future.
//             </p>
//           </div>
//         </div>

//         <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
//           {STEPS.map((step, index) => (
//             <div key={step.title} className="flex flex-col items-center text-center">
//               <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary-color text-xl text-white-color">
//                 {step.icon}
//                 <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-dark-color font-body-font text-[10px] font-bold text-white-color">
//                   {index + 1}
//                 </span>
//               </span>
//               <h3 className="mt-4 font-body-font text-sm font-bold text-dark-color">
//                 {step.title}
//               </h3>
//               <p className="mt-1 font-body-font text-xs text-gray-color">
//                 {step.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeJourneySection;




import React from "react";
import {
  FaUserFriends,
  FaClipboardList,
  FaChartPie,
  FaBullseye,
  FaShieldAlt,
  FaAsterisk,
} from "react-icons/fa";
import heroImage from "../../../assets/journey.jpg";

const STEPS = [
  {
    icon: <FaUserFriends />,
    title: "Understand",
    description: "We understand your needs and current financial situation.",
  },
  {
    icon: <FaClipboardList />,
    title: "Plan",
    description: "We create a customized plan for your dreams.",
  },
  {
    icon: <FaChartPie />,
    title: "Invest",
    description: "We help you invest smartly to grow your wealth.",
  },
  {
    icon: <FaBullseye />,
    title: "Review",
    description: "We review and optimize your plan for better results.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Achieve",
    description: "We stay with you to help you achieve financial freedom.",
  },
];

const HomeJourneySection = () => {
  return (
    <section className="bg-secondary-color px-4 py-10 sm:px-6 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: Image with number badge */}
          <div className="relative">
            {/* <span className="absolute -left-2 -top-2 z-10 flex h-9 w-9 items-center justify-center rounded-lg bg-primary-color font-body-font text-lg font-bold text-white-color shadow-md sm:h-10 sm:w-10">
              1
            </span> */}
            <img
              src={heroImage}
              alt="Advisors reviewing a client's financial plan"
              className="w-full rounded-3xl object-cover shadow-lg"
            />
          </div>

          {/* Right: Heading + Steps */}
          <div>
            <span className="font-body-font text-xs font-bold uppercase tracking-widest text-primary-color">
              Your Journey to Financial Freedom
            </span>
            <h2 className="mt-3 font-heading-font text-2xl font-bold text-dark-color sm:text-3xl lg:text-4xl">
              Our 5-Step Proven Process
            </h2>

            {/* Steps row with connecting dashed line */}
            <div className="relative mt-10 grid grid-cols-3 gap-x-4 gap-y-8 sm:mt-12 sm:grid-cols-5 sm:gap-x-2">
              {/* Dashed connector line - desktop only */}
              <div
                className="pointer-events-none absolute left-0 right-0 top-7 hidden border-t-2 border-dashed border-primary-color/40 sm:block"
                aria-hidden="true"
              />

              {STEPS.map((step, index) => (
                <div
                  key={step.title}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white-color text-xl text-primary-color shadow-md ring-1 ring-black/5">
                    {step.icon}
                    <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary-color text-[8px] text-white-color">
                      <FaAsterisk />
                    </span>
                  </span>
                  <h3 className="mt-3 font-body-font text-sm font-bold text-dark-color">
                    {step.title}
                  </h3>
                  <p className="mt-1 font-body-font text-xs leading-relaxed text-gray-color">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeJourneySection;