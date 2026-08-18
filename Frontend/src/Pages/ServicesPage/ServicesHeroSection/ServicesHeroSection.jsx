// import React from "react";
// import { Link } from "react-router-dom";
// import { FaHome, FaArrowRight, FaUser, FaChartLine } from "react-icons/fa";
// import { TbShieldCheck } from "react-icons/tb";
// import servicesHeroImage from "../../../assets/service-hero.jpg"; // adjust path

// const FEATURES = [
//   {
//     icon: <FaUser />,
//     title: "Personalized Guidance",
//     description: "Solutions tailored to your unique goals.",
//   },
//   {
//     icon: <TbShieldCheck />,
//     title: "Transparent Advice",
//     description: "Honest, clear and unbiased financial guidance.",
//   },
//   {
//     icon: <FaChartLine />,
//     title: "Long-Term Planning",
//     description: "Strategies that help you grow and secure your future.",
//   },
// ];

// const ServicesHeroSection = () => {
//   return (
//     <section className="relative overflow-hidden max-w-7xl text-center bg-secondary-color ">
//       {/* decorative wave lines */}
//       <svg
//         aria-hidden="true"
//         viewBox="0 0 400 160"
//         className="pointer-events-none absolute bottom-0 left-0 hidden w-72 opacity-40 sm:block lg:w-96"
//       >
//         <path
//           d="M0 120 Q60 90 120 120 T240 120 T360 120"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           className="text-primary-color/30"
//         />
//         <path
//           d="M0 145 Q60 115 120 145 T240 145 T360 145"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           className="text-primary-color/20"
//         />
//       </svg>

//       {/* decorative dot grid */}
//       <div className="absolute bottom-16 right-4 z-0 hidden grid-cols-5 gap-2 sm:grid lg:right-8">
//         {Array.from({ length: 20 }).map((_, i) => (
//           <span
//             key={i}
//             className="h-1 w-1 rounded-full bg-primary-color/40"
//           />
//         ))}
//       </div>

//       <div className="relative z-10 mx-auto max-w-[1600px]">
//         <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
//           {/* Left — Text */}
//           <div className="text-center lg:text-left">
//             {/* Breadcrumb */}
//             {/* <div className="flex items-center justify-center gap-2 font-body-font text-sm text-dark-color lg:justify-start">
//               <FaHome />
//               <Link to="/" className="hover:text-primary-color">
//                 Home
//               </Link>
//               <span className="text-gray-color">/</span>
//               <span className="font-semibold text-primary-color">
//                 Services
//               </span>
//             </div> */}

//             {/* Eyebrow */}
//             <div className="mt-8 flex items-center justify-center gap-2 lg:justify-start">
//               <span className="h-0.5 w-6 bg-primary-color" />
//               <span className="font-body-font text-xs font-bold uppercase tracking-widest text-primary-color sm:text-sm">
//                 What We Do
//               </span>
//             </div>

//             <h1 className="mt-3 font-heading-font text-4xl font-bold leading-tight text-dark-color sm:text-5xl lg:text-6xl">
//               Our Services
//             </h1>
//             <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-primary-color lg:mx-0" />

//             <p className="mx-auto mt-6 max-w-md font-body-font text-base leading-relaxed text-gray-color sm:text-lg lg:mx-0">
//               Comprehensive financial solutions designed to help you plan,
//               protect, and grow your financial future with confidence.
//             </p>

//             <Link
//               to="/contact"
//               className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-color px-8 py-3.5 font-body-font font-semibold text-white-color shadow-md transition hover:bg-primary-color/90"
//             >
//               Explore Our Services
//               <FaArrowRight className="text-sm" />
//             </Link>
//           </div>

//           {/* Right — Image + floating card */}
//           <div className="relative mx-auto w-full max-w-lg pb-20 sm:pb-16 lg:max-w-none lg:pb-10">
//             <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl sm:rounded-3xl">
//               <img
//                 src={servicesHeroImage}
//                 alt="Financial advisor meeting with a couple to discuss their investment plan"
//                 className="h-full w-full object-cover"
//               />
//             </div>

//             {/* floating card */}
//             <div className="absolute -bottom-2 right-2 flex w-[88%] max-w-xs items-start gap-3 rounded-2xl bg-white-color p-4 shadow-xl sm:-bottom-6 sm:right-6 sm:w-auto sm:max-w-sm sm:gap-4 sm:p-5">
//               <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-color/15 text-lg text-primary-color sm:h-12 sm:w-12 sm:text-xl">
//                 <FaUser />
//               </span>
//               <div>
//                 <h3 className="font-body-font text-sm font-bold text-dark-color sm:text-base">
//                   Personalized Solutions
//                 </h3>
//                 <p className="mt-1 font-body-font text-xs leading-relaxed text-gray-color sm:text-sm">
//                   Strategies tailored to your unique financial goals and
//                   life stage.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Feature bar */}
//         {/* <div className="relative z-10 mt-8 rounded-2xl bg-white-color p-6 shadow-lg sm:mt-10 sm:p-8">
//           <div className="grid grid-cols-1 divide-y divide-dark-color/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
//             {FEATURES.map((feature) => (
//               <div
//                 key={feature.title}
//                 className="flex items-start gap-4 py-4 first:pt-0 last:pb-0 sm:px-6 sm:py-0 sm:first:pl-0 sm:last:pr-0"
//               >
//                 <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-color/15 text-xl text-primary-color">
//                   {feature.icon}
//                 </span>
//                 <div>
//                   <h3 className="font-body-font text-base font-bold text-dark-color">
//                     {feature.title}
//                   </h3>
//                   <p className="mt-1 font-body-font text-sm text-gray-color">
//                     {feature.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default ServicesHeroSection;









import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaArrowRight, FaUser, FaChartLine } from "react-icons/fa";
import { TbShieldCheck } from "react-icons/tb";
import servicesHeroImage from "../../../assets/service-hero.jpg"; // adjust path

const FEATURES = [
  {
    icon: <FaUser />,
    title: "Personalized Guidance",
    description: "Solutions tailored to your unique goals.",
  },
  {
    icon: <TbShieldCheck />,
    title: "Transparent Advice",
    description: "Honest, clear and unbiased financial guidance.",
  },
  {
    icon: <FaChartLine />,
    title: "Long-Term Planning",
    description: "Strategies that help you grow and secure your future.",
  },
];

const ServicesHeroSection = () => {
  return (
    <section className="relative overflow-hidden mx-auto bg-secondary-color px-4 pb-24 pt-10 sm:px-6 sm:pb-28 sm:pt-14 lg:px-10 lg:pb-32 lg:pt-16">
      {/* decorative wave lines */}
      <svg
        aria-hidden="true"
        viewBox="0 0 400 160"
        className="pointer-events-none absolute bottom-0 left-0 hidden w-72 opacity-40 sm:block lg:w-96"
      >
        <path
          d="M0 120 Q60 90 120 120 T240 120 T360 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-primary-color/30"
        />
        <path
          d="M0 145 Q60 115 120 145 T240 145 T360 145"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-primary-color/20"
        />
      </svg>

      {/* decorative dot grid */}
      <div className="absolute bottom-16 right-4 z-0 hidden grid-cols-5 gap-2 sm:grid lg:right-8">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="h-1 w-1 rounded-full bg-primary-color/40"
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left — Text */}
          <div className="text-center lg:text-left">
            {/* Breadcrumb */}
            {/* <div className="flex items-center justify-center gap-2 font-body-font text-sm text-dark-color lg:justify-start">
              <FaHome />
              <Link to="/" className="hover:text-primary-color">
                Home
              </Link>
              <span className="text-gray-color">/</span>
              <span className="font-semibold text-primary-color">
                Services
              </span>
            </div> */}

            {/* Eyebrow */}
            <div className="mt-8 flex items-center justify-center gap-2 lg:justify-start">
              <span className="h-0.5 w-6 bg-primary-color" />
              <span className="font-body-font text-xs font-bold uppercase tracking-widest text-primary-color sm:text-sm">
                What We Do
              </span>
            </div>

            <h1 className="mt-3 font-heading-font text-4xl font-bold leading-tight text-dark-color sm:text-5xl lg:text-6xl">
              Our Services
            </h1>
            <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-primary-color lg:mx-0" />

            <p className="mx-auto mt-6 max-w-md text-justify font-body-font text-base leading-relaxed text-gray-color sm:text-lg lg:mx-0">
              Comprehensive financial solutions designed to help you
              plan, invest, protect, and grow your wealth with confidence.
            </p>

            {/* <Link
              to="/service"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-color px-8 py-3.5 font-body-font font-semibold text-white-color shadow-md transition hover:bg-primary-color/90"
            >
              Explore Our Services 
              <FaArrowRight className="text-sm" />
            </Link> */}
          </div>

          {/* Right — Image + floating card */}
          <div className="relative mx-auto w-full max-w-lg pb-20 sm:pb-16 lg:max-w-none lg:pb-10">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl sm:rounded-3xl">
              <img
                src={servicesHeroImage}
                alt="Financial advisor meeting with a couple to discuss their investment plan"
                className="h-full w-full object-cover"
              />
            </div>

            {/* floating card */}
            <div className="absolute -bottom-2 right-2 flex w-[88%] max-w-xs items-start gap-3 rounded-2xl bg-white-color p-4 text-left shadow-xl sm:-bottom-6 sm:right-6 sm:w-auto sm:max-w-sm sm:gap-4 sm:p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-color/15 text-lg text-primary-color sm:h-12 sm:w-12 sm:text-xl">
                <FaUser />
              </span>
              <div>
                <h3 className="font-body-font text-sm font-bold text-dark-color sm:text-base">
                  Personalized Solutions
                </h3>
                <p className="mt-1 font-body-font text-xs leading-relaxed text-gray-color sm:text-sm">
                  Strategies tailored to your goals, needs, and stage of life.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature bar */}
        {/* <div className="relative z-10 mt-8 rounded-2xl bg-white-color p-6 shadow-lg sm:mt-10 sm:p-8">
          <div className="grid grid-cols-1 divide-y divide-dark-color/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-4 py-4 first:pt-0 last:pb-0 sm:px-6 sm:py-0 sm:first:pl-0 sm:last:pr-0"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-color/15 text-xl text-primary-color">
                  {feature.icon}
                </span>
                <div>
                  <h3 className="font-body-font text-base font-bold text-dark-color">
                    {feature.title}
                  </h3>
                  <p className="mt-1 font-body-font text-sm text-gray-color">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ServicesHeroSection;












 