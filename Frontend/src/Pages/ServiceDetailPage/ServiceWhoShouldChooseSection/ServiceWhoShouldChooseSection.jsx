// // src/Pages/ServiceDetailPage/ServiceWhoShouldChooseSection/ServiceWhoShouldChooseSection.jsx
// import React from "react";
// import { FiMinus } from "react-icons/fi";

// const ServiceWhoShouldChooseSection = ({ service }) => {
//   const { whoShouldChoose } = service;

//   return (
//     <section className="bg-secondary-color py-12 md:py-16">
//       <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16">
//           <div className="lg:col-span-3">
//             <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2A3B]">
//               Who Should Choose This?
//             </h2>
//           </div>

//           <div className="lg:col-span-9">
//             <ul className="space-y-3">
//               {whoShouldChoose.map((item, index) => {
//                 const label = typeof item === "string" ? item : item.title;
//                 return (
//                   <li key={index} className="flex items-start gap-3">
//                     <FiMinus className="w-4 h-4 mt-1.5 text-[#E8823C] shrink-0" strokeWidth={3} />
//                     <span className="text-[#1E2A3B] text-sm sm:text-base">
//                       {label}
//                     </span>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceWhoShouldChooseSection;



import React from "react";
import {
  FiUser,
  FiUsers,
  FiBriefcase,
  FiHome,
  FiStar,
  FiHeart,
  FiAward,
  FiTrendingUp,
} from "react-icons/fi";

const ICON_POOL = [
  FiUser,
  FiUsers,
  FiBriefcase,
  FiHome,
  FiStar,
  FiHeart,
  FiAward,
  FiTrendingUp,
];

const ServiceWhoShouldChooseSection = ({ service }) => {
  const { whoShouldChoose } = service;

  if (!whoShouldChoose || whoShouldChoose.length === 0) return null;

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="mb-10">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#E8823C] mb-2">
            WHO SHOULD CHOOSE
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2A3B] leading-tight">
            Who Should Choose This?
          </h2>
          <p className="text-[#5C6370] text-base mt-2 max-w-2xl">
            This service is tailored for individuals and families who are ready
            to take control of their financial future.
          </p>
        </div>

        {/* Two‑column grid of items with left accent */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {whoShouldChoose.map((item, index) => {
            const label = typeof item === "string" ? item : item.title;
            const description =
              typeof item === "object" && item.description ? item.description : "";
            const Icon = ICON_POOL[index % ICON_POOL.length];

            return (
              <div
                key={index}
                className="group flex items-start gap-4 p-4 rounded-xl border-l-4 border-[#E8823C] bg-[#FBF5EC] hover:bg-[#F3E4CB] transition-colors duration-200"
              >
                <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#E8823C]/10 text-[#E8823C] group-hover:bg-[#E8823C] group-hover:text-white transition-colors duration-200">
                  <Icon className="w-6 h-6" strokeWidth={1.8} />
                </span>
                <div className="flex-1">
                  <h3 className="text-[#1E2A3B] font-semibold text-base leading-snug">
                    {label}
                  </h3>
                  {description && (
                    <p className="text-[#5C6370] text-sm leading-relaxed mt-1">
                      {description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceWhoShouldChooseSection;