 
// import React from "react";
// import { RiDoubleQuotesL } from "react-icons/ri";
// import founderImage from "../../../assets/founder.png";
// import signature from "../../../assets/signature.png"; // imported signature

// const AboutFounderSection = () => {
//   return (
//     <section className="bg-[#FDF6EF] px-4 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
//       <div className="mx-auto max-w-7xl">
//         <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
//           {/* Left — Founder photo */}
//           <div className="relative mx-auto w-full max-w-[320px] sm:max-w-sm lg:mx-0">
//             {/* dot grid decoration */}
//             <div className="absolute -bottom-4 -left-4 z-0 grid grid-cols-4 gap-2 sm:-bottom-6 sm:-left-6">
//               {Array.from({ length: 16 }).map((_, i) => {
//                 const row = Math.floor(i / 4);
//                 const col = i % 4;
//                 const visible = col <= row;
//                 return (
//                   <span
//                     key={i}
//                     className={`h-1.5 w-1.5 rounded-full bg-[#E8792B] ${
//                       visible ? "" : "invisible"
//                     }`}
//                   />
//                 );
//               })}
//             </div>

//             {/* orange backer bar */}
//             <div className="absolute -bottom-3 left-6 right-[-10px] z-0 h-14 rounded-2xl bg-[#E8792B] sm:-bottom-4" />

//             {/* photo */}
//             <div className="relative z-10 aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-lg">
//               <img
//                 src={founderImage}
//                 alt="Ankit Shah, Founder & Wealth Advisor at Advait Financial Services"
//                 className="h-full w-full object-cover"
//               />
//             </div>
//           </div>

//           {/* Right — Message */}
//           <div>
//             <RiDoubleQuotesL className="h-10 w-10 text-[#E8792B] sm:h-12 sm:w-12" />

//             <h2 className="mt-2 text-3xl font-extrabold leading-tight text-[#0D1B3E] sm:text-4xl lg:text-[2.6rem]">
//               Founder&apos;s Message
//             </h2>
//             <div className="mt-4 h-[3px] w-14 rounded-full bg-[#E8792B]" />
//             <p className="mt-6 max-w-lg text-sm text-justify leading-relaxed text-gray-500 sm:text-[15px]">
//               We believe wealth is not just about money. It is about creating
//               the freedom to live life on your terms, the peace of mind that
//               comes from being prepared, and a secure future for you and your
//               loved ones.
//             </p>

//             <p className="mt-6 max-w-lg text-sm text-justify leading-relaxed text-gray-500 sm:text-[15px]">
//               At Advait Financial Services, our approach is built on
//               understanding your goals, providing clear and honest guidance, and
//               creating financial strategies that are aligned with what truly
//               matters to you.
//             </p>
//             <p className="mt-4 max-w-lg text-sm text-justify leading-relaxed text-gray-500 sm:text-[15px]">
//               We are committed to walking alongside you through every stage of
//               your financial journey — helping you make informed decisions today
//               while building greater confidence for tomorrow.
//             </p>

//             <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
//               <div>
//                 <p className="text-lg font-bold text-[#0D1B3E] sm:text-xl">
//                   Bharat Koshti
//                 </p>
//                 <p className="mt-1 text-xs font-bold uppercase tracking-widest text-[#E8792B] sm:text-sm">
//                   Founder &amp; Wealth Advisor
//                 </p>
//               </div>

//               {/* signature image */}
 
//               <img
//                 src={signature}
//                 alt="Bharat Koshti signature"
//                 className="h-16 w-40 object-contain sm:h-20 sm:w-48"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutFounderSection;


import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import founderImage from "../../../assets/founder.png";
import signature from "../../../assets/signature.png"; // imported signature

const AboutFounderSection = () => {
  return (
    <section className="overflow-hidden bg-[#FDF6EF] px-4 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — Founder photo */}
          <div className="relative mx-auto w-full max-w-[260px] xs:max-w-[300px] sm:max-w-sm lg:mx-0">
            {/* dot grid decoration */}
            <div className="absolute -bottom-3 -left-3 z-0 grid grid-cols-4 gap-1.5 sm:-bottom-6 sm:-left-6 sm:gap-2">
              {Array.from({ length: 16 }).map((_, i) => {
                const row = Math.floor(i / 4);
                const col = i % 4;
                const visible = col <= row;
                return (
                  <span
                    key={i}
                    className={`h-1 w-1 rounded-full bg-[#E8792B] sm:h-1.5 sm:w-1.5 ${
                      visible ? "" : "invisible"
                    }`}
                  />
                );
              })}
            </div>

            {/* orange backer bar */}
            <div className="absolute -bottom-2.5 left-5 right-0 z-0 h-10 rounded-2xl bg-[#E8792B] sm:-bottom-4 sm:left-6 sm:h-14" />

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
          <div className="text-center lg:text-left">
            <RiDoubleQuotesL className="mx-auto h-8 w-8 text-[#E8792B] sm:h-10 sm:w-10 lg:mx-0 lg:h-12 lg:w-12" />

            <h2 className="mt-2 text-2xl font-extrabold leading-tight text-[#0D1B3E] sm:text-3xl lg:text-4xl xl:text-[2.6rem]">
              Founder&apos;s Message
            </h2>
            <div className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-[#E8792B] lg:mx-0" />

            <p className="mx-auto mt-6 max-w-lg text-justify text-sm leading-relaxed text-gray-500 [text-align-last:left] hyphens-auto sm:text-[15px] lg:mx-0">
              We believe wealth is not just about money. It is about creating
              the freedom to live life on your terms, the peace of mind that
              comes from being prepared, and a secure future for you and your
              loved ones.
            </p>

            <p className="mx-auto mt-6 max-w-lg text-justify text-sm leading-relaxed text-gray-500 [text-align-last:left] hyphens-auto sm:text-[15px] lg:mx-0">
              At Advait Financial Services, our approach is built on
              understanding your goals, providing clear and honest guidance,
              and creating financial strategies that are aligned with what
              truly matters to you.
            </p>
            <p className="mx-auto mt-4 max-w-lg text-justify text-sm leading-relaxed text-gray-500 [text-align-last:left] hyphens-auto sm:text-[15px] lg:mx-0">
              We are committed to walking alongside you through every stage
              of your financial journey helping you make informed decisions
              today while building greater confidence for tomorrow.
            </p>

            <div className="mt-8 flex flex-col items-center gap-5 sm:flex-row sm:items-end sm:justify-between lg:justify-start lg:gap-10">
              <div>
                <p className="text-lg font-bold text-[#0D1B3E] sm:text-xl">
                  Bharat Koshti
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-widest text-[#E8792B] sm:text-sm">
                  Founder &amp; Wealth Advisor
                </p>
              </div>

              {/* signature image */}
              <img
                src={signature}
                alt="Bharat Koshti signature"
                className="h-14 w-36 object-contain sm:h-16 sm:w-40 lg:h-20 lg:w-48"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounderSection;