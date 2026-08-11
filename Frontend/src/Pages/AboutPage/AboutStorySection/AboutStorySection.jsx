// import React from "react";
// import storyImage from "../../../assets/journey.jpg"; // adjust path

// const AboutStorySection = () => {
//   return (
//     <section className="bg-white-color px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
//       <div className="mx-auto max-w-[1400px]">
//         <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
//           {/* Left — Text */}
//           <div>
//             <h2 className="font-heading-font text-2xl font-bold text-dark-color sm:text-3xl">
//               Our Story
//             </h2>
//             <div className="mt-2 h-1 w-12 rounded-full bg-primary-color" />

//             <p className="mt-5 font-body-font text-sm leading-relaxed text-justify text-gray-color sm:text-base">
//               Advait Financial Services was founded with a simple mission —
//               to help individuals and families make smarter financial
//               decisions and secure their financial future.
//             </p>
//             <p className="mt-4 font-body-font text-sm leading-relaxed text-justify text-gray-color sm:text-base">
//               We combine expertise, integrity and a client-first approach to
//               deliver personalized financial solutions that create real
//               impact.
//             </p>
//           </div>

//           {/* Right — Image with decorative accent */}
//           <div className="relative mx-auto w-full max-w-md lg:max-w-none">
//             <span className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-2xl bg-primary-color/15 sm:-bottom-6 sm:-left-6" />
//             <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
//               <img
//                 src={storyImage}
//                 alt="Advait Financial Services office building"
//                 className="h-full w-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutStorySection;

import React from "react";
import { FiUser, FiTarget, FiCompass } from "react-icons/fi";
import { FaHandshake } from "react-icons/fa";

const cards = [
  {
    icon: FiUser,
    title: "Understand",
    desc: "We take the time to understand your goals and financial priorities.",
  },
  {
    icon: FiTarget,
    title: "Plan",
    desc: "We build practical strategies around your unique financial needs.",
  },
  {
    icon: FiCompass,
    title: "Guide",
    desc: "We provide clear guidance to help you make confident decisions.",
  },
  {
    icon: FaHandshake,
    title: "Support",
    desc: "We stay alongside you as your goals and financial needs evolve.",
  },
];

 

const AboutStorySection = () => {
  return (
    <section className="bg-white-color px-4 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-8">
          {/* Left column */}
          <div>
            <p className="text-sm font-bold tracking-wider text-[#E8792B] sm:text-base">
              OUR STORY
            </p>

            <h2 className="mt-2 text-3xl font-extrabold leading-tight text-[#0D1B3E] sm:text-4xl lg:text-[2.6rem]">
              Guiding Decisions.
              <br />
              Creating Impact.
            </h2>

            <div className="mt-4 h-[3px] w-14  rounded-full bg-[#E8792B]" />

            <p className="mt-6 max-w-md text-sm leading-relaxed text-justify text-gray-500 sm:text-[15px]">
              Advait Financial Services was founded with a simple belief
              financial guidance should be clear, honest, and centered around the people&apos;s we serve.
               
            </p>
            <p className="mt-4 max-w-md text-sm text-justify leading-relaxed text-gray-500 sm:text-[15px]">
              Our approach is simple: understand your goals, provide practical guidance, and build long-term
             relationships that help you move forward with greater financial confidence.
            </p>
          </div>

          {/* Right column */}
          <div className="lg:border-l lg:border-dashed lg:border-[#E8792B]/40 lg:pl-10">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {cards.map(({ icon: Icon, title, desc, rotate, heart }) => (
                <div
                  key={title}
                  className="rounded-xl bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition-shadow duration-300 hover:shadow-[0_10px_28px_rgba(15,23,42,0.1)] sm:p-6"
                >
                  <div className="relative mb-3 flex h-9 w-9 items-center justify-center text-[#0D1B3E]">
                    {heart ? (
                      <>
                        <IoHeartOutline className="absolute h-9 w-9 text-[#0D1B3E]" />
                        <FaHandshake className="relative h-4 w-4 text-[#E8792B]" />
                      </>
                    ) : (
                      <Icon
                        className={`h-8 w-8 ${
                          rotate ? "rotate-90" : ""
                        } text-[#0D1B3E]`}
                        strokeWidth={rotate ? undefined : 1.6}
                      />
                    )}
                  </div>

                  <h3 className="text-[15px] font-bold text-[#0D1B3E] sm:text-base">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-snug text-gray-500">
                    {desc}
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

export default AboutStorySection;
