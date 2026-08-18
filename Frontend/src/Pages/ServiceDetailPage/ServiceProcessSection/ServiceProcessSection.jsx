// // src/Pages/ServiceDetailPage/ServiceProcessSection/ServiceProcessSection.jsx
// import React from "react";
// import { FiTarget, FiCalendar, FiRepeat, FiTrendingUp } from "react-icons/fi";

// // Positional icon set — cycles through if a service has more/fewer than 4 steps.
// const ICONS = [FiTarget, FiCalendar, FiRepeat, FiTrendingUp];

// const ServiceProcessSection = ({ service }) => {
//   const { process } = service;

//   return (
//     <section className="bg-white py-12 md:py-16">
//       <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
//         <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2A3B] mb-10 text-center">
//           How It Works
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {process.map((step, index) => {
//             const Icon = ICONS[index % ICONS.length];
//             return (
//               <div key={step.step || index} className="flex flex-col items-center text-center">
//                 <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#E8823C]/10 border border-[#E8823C]/20 mb-4">
//                   <Icon className="w-6 h-6 text-[#E8823C]" strokeWidth={1.8} />
//                 </div>
//                 <h3 className="text-[#1E2A3B] font-semibold text-base mb-1.5">
//                   {step.title}
//                 </h3>
//                 <p className="text-[#6B7280] text-sm leading-relaxed max-w-[200px]">
//                   {step.description}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceProcessSection;
















import React from "react";
import { FiTarget, FiCalendar, FiRepeat, FiTrendingUp } from "react-icons/fi";

// Icon pool – cycles through for each step
const ICONS = [FiTarget, FiCalendar, FiRepeat, FiTrendingUp];

const ServiceProcessSection = ({ service }) => {
  const { process } = service;

  // If no process data, don't render
  if (!process || process.length === 0) return null;

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Label & Heading */}
        <div className="mb-10">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#E8823C] mb-2">
            PROCESS
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2A3B] leading-tight">
            Our Simple Process
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((step, index) => {
            const Icon = ICONS[index % ICONS.length];
            const stepNumber = String(index + 1).padStart(2, "0");

            return (
              <div
                key={step.step || index}
                className="flex flex-col items-start p-4 rounded-xl transition hover:bg-[#FBF5EC] group"
              >
                {/* Step Number */}
                <span className="text-[#E8823C] font-bold text-xl tracking-wider mb-1">
                  {stepNumber}
                </span>

                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#E8823C]/10 text-[#E8823C] mb-3 group-hover:bg-[#E8823C] group-hover:text-white transition-colors duration-200">
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-[#1E2A3B] font-semibold text-base mb-1">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcessSection;