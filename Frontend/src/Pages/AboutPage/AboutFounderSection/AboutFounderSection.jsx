// import React from "react";
// import founderImage from "../../../assets/journey.jpg"; // adjust path

// const AboutFounderSection = () => {
//   return (
//     <section className="bg-secondary-color px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
//       <div className="mx-auto max-w-[1400px]">
//         <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
//           {/* Left — Founder photo */}
//           <div className="relative mx-auto w-full max-w-xs lg:max-w-sm">
//             <span className="absolute -right-3 -top-3 -z-10 h-16 w-16 rounded-full bg-primary-color/15" />
//             <span className="absolute -bottom-3 -left-3 -z-10 h-16 w-16 rounded-full bg-primary-color/15" />
//             <div className="aspect-square w-full overflow-hidden rounded-2xl shadow-lg">
//               <img
//                 src={founderImage}
//                 alt="Ankit Shah, Founder & Wealth Advisor at Advait Financial Services"
//                 className="h-full w-full object-cover"
//               />
//             </div>
//           </div>

//           {/* Right — Message */}
//           <div>
//             <h2 className="font-heading-font text-2xl font-bold text-dark-color sm:text-3xl">
//               Founder&apos;s Message
//             </h2>
//             <div className="mt-2 h-1 w-12 rounded-full bg-primary-color" />

//             <p className="mt-5 font-body-font text-sm leading-relaxed text-gray-color sm:text-base">
//               We believe wealth is not just about money, it&apos;s about
//               freedom, peace of mind and a better life for you and your loved
//               ones.
//             </p>
//             <p className="mt-4 font-body-font text-sm leading-relaxed text-gray-color sm:text-base">
//               At Advait, we are committed to walk alongside you with
//               transparency.
//             </p>

//             <p className="mt-6 font-heading-font text-lg italic text-dark-color">
//               Ankit Shah
//             </p>
//             <p className="font-body-font text-xs font-semibold uppercase tracking-widest text-primary-color sm:text-sm">
//               Founder &amp; Wealth Advisor
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutFounderSection;







import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import founderImage from "../../../assets/founder.jpg"; // adjust path

const AboutFounderSection = () => {
  return (
    <section className="bg-[#FDF6EF] px-4 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left — Founder photo */}
          <div className="relative mx-auto w-full max-w-[320px] sm:max-w-sm lg:mx-0">
 

            {/* dot grid decoration */}
            <div className="absolute -bottom-4 -left-4 z-0 grid grid-cols-4 gap-2 sm:-bottom-6 sm:-left-6">
              {Array.from({ length: 16 }).map((_, i) => {
                const row = Math.floor(i / 4);
                const col = i % 4;
                const visible = col <= row;
                return (
                  <span
                    key={i}
                    className={`h-1.5 w-1.5 rounded-full bg-[#E8792B] ${
                      visible ? "" : "invisible"
                    }`}
                  />
                );
              })}
            </div>

            {/* orange backer bar */}
            <div className="absolute -bottom-3 left-6 right-[-10px] z-0 h-14 rounded-2xl bg-[#E8792B] sm:-bottom-4" />

            {/* photo */}
            <div className="relative z-10 aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-lg">
              <img
                src={founderImage}
                alt="Ankit Shah, Founder & Wealth Advisor at Advait Financial Services"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right — Message */}
          <div>
            <RiDoubleQuotesL className="h-10 w-10 text-[#E8792B] sm:h-12 sm:w-12" />

            <h2 className="mt-2 text-3xl font-extrabold leading-tight text-[#0D1B3E] sm:text-4xl lg:text-[2.6rem]">
              Founder&apos;s Message
            </h2>
            <div className="mt-4 h-[3px] w-14 rounded-full bg-[#E8792B]" />
            <p className="mt-6 max-w-lg text-sm text-justify leading-relaxed text-gray-500 sm:text-[15px]"> 
                We believe wealth is not just about money. It is about creating the freedom to live life on your terms,
                the peace of mind that comes from being prepared, and a secure future for you and your loved ones.
            </p>

            <p className="mt-6 max-w-lg text-sm text-justify leading-relaxed text-gray-500 sm:text-[15px]">
              At Advait Financial Services, our approach is built on understanding your goals, providing clear and
              honest guidance, and creating financial strategies that are aligned with what truly matters to you.
            </p>
            <p className="mt-4 max-w-lg text-sm text-justify leading-relaxed text-gray-500 sm:text-[15px]">
              We are committed to walking alongside you through every stage of your financial journey  helping
              you make informed decisions today while building greater confidence for tomorrow.
            </p>

            <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-lg font-bold text-[#0D1B3E] sm:text-xl">
                  Bharat Koshti
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-widest text-[#E8792B] sm:text-sm">
                  Founder &amp; Wealth Advisor
                </p>
              </div>

              {/* signature */}
              <svg
                viewBox="0 0 160 60"
                className="h-12 w-32 text-gray-600 sm:h-14 sm:w-36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 42c4-10 10-22 16-22 5 0 6 14 10 14s8-18 14-18 4 20 10 20 10-16 16-16 2 18 8 18 12-14 18-10c4 2.7 8 6 14 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounderSection;