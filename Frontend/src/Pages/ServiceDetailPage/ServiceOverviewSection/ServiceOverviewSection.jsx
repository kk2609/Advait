// // src/Pages/ServiceDetailPage/ServiceOverviewSection/ServiceOverviewSection.jsx
// import React from "react";

// const ServiceOverviewSection = ({ service }) => {
//   const { overview } = service;

//   return (
//     <section className="bg-white py-12 md:py-16">
//       <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16">
//           <div className="lg:col-span-3">
//             <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2A3B]">
//               Overview
//             </h2>
//           </div>
//           <div className="lg:col-span-9">
//             <p className="text-[#5C6370] text-base sm:text-lg leading-relaxed">
//               {overview.description}
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceOverviewSection;







import React from "react";

const ServiceOverviewSection = ({ service }) => {
  const { overview } = service;

  const {
    label = "OVERVIEW",
    title = "Understanding Wealth Protection",
    description = "",
    items = [],
    quote = "",
  } = overview;

  // split description by double newline into paragraphs
  const paragraphs = description.split("\n\n").filter(p => p.trim() !== "");

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Label */}
        <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#E8823C] mb-3">
          {label}
        </span>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E2A3B] leading-[1.2] mb-5">
          {title}
        </h2>

        {/* Description paragraphs */}
        <div className="space-y-4 max-w-4xl mb-8">
          {paragraphs.map((para, idx) => (
            <p key={idx} className="text-[#5C6370] text-base sm:text-lg leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        {/* 3 Feature Items */}
        {items.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10">
            {items.map((item) => (
              <div key={item.number} className="flex flex-col">
                <span className="text-[#E8823C] font-bold text-lg tracking-wider mb-1">
                  {String(item.number).padStart(2, "0")}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#1E2A3B] mb-1">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[#5C6370] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Quote */}
        {quote && (
          <blockquote className="border-l-4 border-[#E8823C] pl-5 sm:pl-6 py-1 max-w-2xl">
            <p className="text-[#1E2A3B] text-base sm:text-lg italic leading-relaxed">
              “{quote}”
            </p>
          </blockquote>
        )}
      </div>
    </section>
  );
};

export default ServiceOverviewSection;