// // src/Pages/ServiceDetailPage/ServiceBenefitsSection/ServiceBenefitsSection.jsx
// import React from "react";
// import { FiCheck } from "react-icons/fi";

// const ServiceBenefitsSection = ({ service }) => {
//   const { benefits } = service;

//   return (
//     <section className="bg-[#FBF5EC] py-12 md:py-16">
//       <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16">
//           <div className="lg:col-span-3">
//             <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2A3B]">
//               Benefits
//             </h2>
//           </div>

//           <div className="lg:col-span-9">
//             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
//               {benefits.map((benefit, index) => {
//                 const label =
//                   typeof benefit === "string" ? benefit : benefit.title;
//                 return (
//                   <li key={index} className="flex items-center gap-3">
//                     <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#E8823C]/10 text-[#E8823C] shrink-0">
//                       <FiCheck className="w-4 h-4" strokeWidth={2.5} />
//                     </span>
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

// export default ServiceBenefitsSection;












import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const ServiceBenefitsSection = ({ service }) => {
  const { benefits } = service;

  // If benefits is not defined or empty, don't render
  if (!benefits || benefits.length === 0) return null;

  return (
    <section className="bg-[#FBF5EC] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: label + heading */}
          <div className="lg:col-span-3">
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#E8823C] mb-2">
              BENEFITS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2A3B] leading-tight">
              Why Choose Our Services
            </h2>
          </div>

          {/* Right: benefits grid */}
          <div className="lg:col-span-9">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {benefits.map((benefit, index) => {
                // Support both string and object formats
                const label = typeof benefit === "string" ? benefit : benefit.title;
                return (
                  <li
                    key={index}
                    className="flex items-start gap-4 p-2 rounded-lg transition hover:bg-white/50"
                  >
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#E8823C]/10 text-[#E8823C]">
                      <FiCheckCircle className="w-5 h-5" />
                    </span>
                    <span className="text-[#1E2A3B] text-sm sm:text-base leading-relaxed">
                      {label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefitsSection;