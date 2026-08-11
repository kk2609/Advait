// import React from "react";
// import { Link } from "react-router-dom";
// import aboutHeroImage from "../../../assets/journey.jpg"; // adjust path

// const AboutHeroSection = () => {
//   return (
//     <section className="overflow-hidden bg-secondary-color px-4 pb-16 pt-10 sm:px-6 sm:pb-20 lg:px-10 lg:pt-14">
//       <div className="mx-auto grid max-w-[1600px] items-center gap-8 lg:grid-cols-2 lg:gap-16">
//         {/* Left — Content */}
//         <div className="text-center lg:text-left">
//           <h1 className="font-heading-font text-3xl font-bold leading-tight text-dark-color sm:text-4xl lg:text-5xl">
//             About Advait
//           </h1>

//           <div className="mt-3 flex items-center justify-center gap-2 font-body-font text-sm text-gray-color lg:justify-start">
//           </div>
//         </div>

//         {/* Right — Image */}
//         <div className="relative mx-auto w-full max-w-sm pb-6 sm:max-w-md lg:max-w-none lg:pb-0">
//           <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl sm:rounded-3xl">
//             <img
//               src={aboutHeroImage}
//               alt="Advait Financial Services office workspace"
//               className="h-full w-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutHeroSection;







import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPhoneAlt, FaAward, FaUserFriends, FaLandmark } from "react-icons/fa";
import aboutHeroImage from "../../../assets/hero.jpg"; // adjust path

const STATS = [
  { icon: <FaAward />, value: "8+", label: "Years of Trust" },
  { icon: <FaUserFriends />, value: "100+", label: "Happy Clients" },
  { icon: <FaLandmark />, value: "₹250Cr+", label: "Assets Guided" },
];

const AboutHeroSection = () => {
  return (
    <section className="overflow-hidden bg-secondary-color px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-[1600px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — Content */}
        <div className="text-center lg:text-left">
          <span className="font-body-font text-xs font-bold uppercase tracking-widest text-primary-color sm:text-sm">
            Our Story
          </span>

          <h1 className="mt-3 font-heading-font text-4xl font-bold leading-tight text-dark-color sm:text-5xl md:text-6xl">
            About Advait
          </h1>

          <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-primary-color lg:mx-0" />

          <p className="mx-auto mt-6 max-w-md font-body-font text-justify text-base leading-relaxed text-gray-color sm:text-lg lg:mx-0" >
            Founded on the belief that everyone deserves honest financial
            guidance, Advait Financial Services helps you make informed
            decisions today for a secure tomorrow.
          </p>

          {/* Stats */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-5 sm:gap-8 lg:justify-start">
            {STATS.map((stat, index) => (
              <React.Fragment key={stat.label}>
                {index !== 0 && (
                  <span className="hidden h-10 w-px bg-dark-color/15 sm:block" />
                )}
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary-color text-base text-primary-color sm:h-12 sm:w-12 sm:text-lg">
                    {stat.icon}
                  </span>
                  <div className="text-left">
                    <p className="font-heading-font text-lg font-bold leading-none text-dark-color sm:text-xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 font-body-font text-xs text-gray-color sm:text-sm">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* CTA + Phone */}
          <div className="mt-9 flex flex-col items-center gap-5 sm:flex-row sm:gap-6 lg:items-center lg:justify-start">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary-color px-8 py-3.5 font-body-font font-semibold text-white-color shadow-md transition hover:bg-primary-color/90"
            >
              Get to Know Us
              <FaArrowRight className="text-sm" />
            </Link>

 

            {/* <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary-color text-primary-color">
                <FaPhoneAlt className="text-sm" />
              </span>
              <div className="text-left">
                <p className="font-body-font text-xs text-gray-color sm:text-sm">
                  Talk to Us
                </p>
                <p className="font-body-font text-sm font-bold text-dark-color sm:text-base">
                  +91 98765 43210
                </p>
              </div>
            </div> */}
          </div>
        </div>

        {/* Right — Image */}
        <div className="relative mx-auto w-full max-w-md pb-6 lg:max-w-none lg:pb-0">
          {/* offset frame accent */}
          <span
            aria-hidden="true"
            className="absolute -left-3 -top-3 -z-10 h-full w-full rounded-tl-[60px] rounded-br-[60px] border-2 border-primary-color sm:rounded-tl-[80px] sm:rounded-br-[80px] lg:rounded-tl-[100px] lg:rounded-br-[100px]"
          />

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-tl-[60px] rounded-br-[60px] shadow-xl sm:rounded-tl-[80px] sm:rounded-br-[80px] lg:rounded-tl-[100px] lg:rounded-br-[100px]">
            <img
              src={aboutHeroImage}
              alt="Advait Financial Services team meeting with clients"
              className="h-full w-full object-cover"
            />
          </div>

          {/* bottom-right decorative dash */}
          <span
            aria-hidden="true"
            className="absolute -bottom-4 right-6 hidden h-0.5 w-16 bg-primary-color sm:block"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;