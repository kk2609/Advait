// // // src/Pages/ServiceDetailPage/ServiceDetailHeroSection/ServiceDetailHeroSection.jsx
// // import React from "react";
// // import { Link } from "react-router-dom";
// // import { FiChevronRight } from "react-icons/fi";

// // const ServiceDetailHeroSection = ({ service }) => {
// //   const { hero, title } = service;

// //   return (
// //     <section className="bg-[#FBF5EC] pt-10 pb-14 md:pt-14 md:pb-20">
// //       <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
// //         {/* Breadcrumb */}
// //         {/* <nav aria-label="Breadcrumb" className="mb-5">
// //           <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-[#6B7280]">
// //             <li>
// //               <Link to="/" className="hover:text-[#E8823C] transition-colors">
// //                 Home
// //               </Link>
// //             </li>
// //             <li>
// //               <FiChevronRight className="w-3.5 h-3.5" />
// //             </li>
// //             <li>
// //               <Link to="/services" className="hover:text-[#E8823C] transition-colors">
// //                 Services
// //               </Link>
// //             </li>
// //             <li>
// //               <FiChevronRight className="w-3.5 h-3.5" />
// //             </li>
// //             <li className="text-[#1E2A3B] font-medium">{title}</li>
// //           </ol>
// //         </nav> */}

// //         <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#E8823C] mb-4">
// //           OUR SERVICES
// //         </span>

// //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
// //           {/* Left: text */}
// //           <div className="lg:col-span-6 order-2 lg:order-1">
// //             <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E2A3B] leading-[1.15] mb-5 break-words">
// //               {hero.title}
// //             </h1>
// //             <p className="text-[#5C6370] text-base sm:text-lg leading-relaxed max-w-xl">
// //               {hero.description}
// //             </p>
// //           </div>

// //           {/* Right: image */}
// //           <div className="lg:col-span-6 order-1 lg:order-2">
// //             <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-[#F3E4CB] shadow-sm">
// //               {hero.image && (
// //                 <img
// //                   src={hero.image}
// //                   alt={hero.title}
// //                   className="w-full h-full object-cover"
// //                   loading="eager"
// //                   onError={(e) => {
// //                     e.currentTarget.style.display = "none";
// //                   }}
// //                 />
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ServiceDetailHeroSection;








// // src/Pages/ServiceDetailPage/ServiceDetailHeroSection/ServiceDetailHeroSection.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   FiChevronRight,
//   FiHome,
//   FiTarget,
//   FiTrendingUp,
//   FiShield,
//   FiCheckCircle,
//   FiBarChart2,
// } from "react-icons/fi";
// import { FaRupeeSign } from "react-icons/fa";

// // Rotating pool used to auto-generate the 4 feature icons from `benefits`
// // when a service doesn't explicitly define `hero.features`
// const ICON_POOL = [FiTarget, FiTrendingUp, FiShield, FaRupeeSign, FiCheckCircle, FiBarChart2];

// const ServiceDetailHeroSection = ({ service }) => {
//   const { hero, title, benefits } = service;

//   // Prefer explicit hero.features if provided, otherwise build 4 cards
//   // from the first 4 `benefits` entries
//   const features =
//     hero.features?.length > 0
//       ? hero.features
//       : (benefits || []).slice(0, 4).map((text, index) => ({
//           icon: ICON_POOL[index % ICON_POOL.length],
//           text,
//         }));

//   return (
//     <section className="bg-[#FBF5EC] py-10 sm:py-12 lg:py-10">
//       <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
//           {/* Left: image */}
//           <div className="lg:col-span-3 ro order-1">
//             <div className="relative w-full flex items-center justify-center py-2 sm:py-4">
//               {/* soft circular backdrop */}
//               <div className="absolute w-40 h-40 sm:w-48 sm:h-48 lg:w-52 lg:h-52 rounded-full bg-[#F3D9B1]/60 -z-0" />

//               <img
//                 src={hero.image}
//                 alt={hero.title}
//                 className="relative z-10 w-auto h-48 sm:h-56 lg:h-64 max-w-[85%] object-contain drop-shadow-sm"
//                 loading="eager"
//               />
//             </div>
//           </div>

//           {/* Middle: text content */}
//           <div className="lg:col-span-5 order-2">
//             <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#E8823C] mb-3">
//               OUR SERVICES
//             </span>

//             <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#1E2A3B] leading-[1.15] mb-4 break-words">
//               {hero.title}
//             </h1>

//             <p className="text-[#5C6370] text-sm sm:text-base leading-relaxed max-w-md mb-5">
//               {hero.description}
//             </p>

//             {/* Breadcrumb */}
//             {/* <nav aria-label="Breadcrumb">
//               <ol className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#6B7280]">
//                 <li>
//                   <Link
//                     to="/"
//                     className="flex items-center gap-1.5 hover:text-[#E8823C] transition-colors"
//                   >
//                     <FiHome className="w-3.5 h-3.5" />
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <FiChevronRight className="w-3.5 h-3.5" />
//                 </li>
//                 <li>
//                   <Link
//                     to="/services"
//                     className="hover:text-[#E8823C] transition-colors"
//                   >
//                     Services
//                   </Link>
//                 </li>
//                 <li>
//                   <FiChevronRight className="w-3.5 h-3.5" />
//                 </li>
//                 <li className="text-[#E8823C] font-medium">{title}</li>
//               </ol>
//             </nav> */}
//           </div>

//           {/* Right: feature/benefit icons card */}
//           {features.length > 0 && (
//             <div className="lg:col-span-4 order-3">
//               <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 sm:p-6 shadow-sm border border-white">
//                 <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-5 sm:gap-y-6">
//                   {features.map((feature, index) => {
//                     const Icon = feature.icon;
//                     return (
//                       <div key={index} className="flex items-start gap-2.5 sm:gap-3">
//                         <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FBE6D0] text-[#E8823C]">
//                           <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
//                         </span>
//                         <p className="text-xs sm:text-sm font-semibold text-[#1E2A3B] leading-snug break-words">
//                           {feature.title ? (
//                             <>
//                               {feature.title}
//                               <br />
//                               {feature.highlight}
//                             </>
//                           ) : (
//                             feature.text
//                           )}
//                         </p>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceDetailHeroSection;








// // src/Pages/ServiceDetailPage/ServiceDetailHeroSection/ServiceDetailHeroSection.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import { FiChevronRight } from "react-icons/fi";

// const ServiceDetailHeroSection = ({ service }) => {
//   const { hero, title } = service;

//   return (
//     <section className="bg-[#FBF5EC] pt-10 pb-14 md:pt-14 md:pb-20">
//       <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
//         {/* Breadcrumb */}
//         {/* <nav aria-label="Breadcrumb" className="mb-5">
//           <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-[#6B7280]">
//             <li>
//               <Link to="/" className="hover:text-[#E8823C] transition-colors">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <FiChevronRight className="w-3.5 h-3.5" />
//             </li>
//             <li>
//               <Link to="/services" className="hover:text-[#E8823C] transition-colors">
//                 Services
//               </Link>
//             </li>
//             <li>
//               <FiChevronRight className="w-3.5 h-3.5" />
//             </li>
//             <li className="text-[#1E2A3B] font-medium">{title}</li>
//           </ol>
//         </nav> */}

//         <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#E8823C] mb-4">
//           OUR SERVICES
//         </span>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
//           {/* Left: text */}
//           <div className="lg:col-span-6 order-2 lg:order-1">
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E2A3B] leading-[1.15] mb-5 break-words">
//               {hero.title}
//             </h1>
//             <p className="text-[#5C6370] text-base sm:text-lg leading-relaxed max-w-xl">
//               {hero.description}
//             </p>
//           </div>

//           {/* Right: image */}
//           <div className="lg:col-span-6 order-1 lg:order-2">
//             <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-[#F3E4CB] shadow-sm">
//               {hero.image && (
//                 <img
//                   src={hero.image}
//                   alt={hero.title}
//                   className="w-full h-full object-cover"
//                   loading="eager"
//                   onError={(e) => {
//                     e.currentTarget.style.display = "none";
//                   }}
//                 />
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceDetailHeroSection;







import React from "react";
import { Link } from "react-router-dom";
import {
  FiChevronRight,
  FiHome,
  FiTarget,
  FiTrendingUp,
  FiShield,
  FiCheckCircle,
  FiBarChart2,
} from "react-icons/fi";
import { FaRupeeSign } from "react-icons/fa";

const ICON_POOL = [FiTarget, FiTrendingUp, FiShield, FaRupeeSign, FiCheckCircle, FiBarChart2];

const ServiceDetailHeroSection = ({ service }) => {
  const { hero, title, benefits } = service;

  const features =
    hero.features?.length > 0
      ? hero.features
      : (benefits || []).slice(0, 4).map((text, index) => {
          const parts = text.split(/[,，\n]/).map(s => s.trim());
          return {
            icon: ICON_POOL[index % ICON_POOL.length],
            title: parts[0] || text,
            highlight: parts.slice(1).join(", ") || "",
          };
        });

  return (
    <section className="bg-secondary-color py-10 sm:py-12 lg:py-14">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left: image with rounded corners */}
          <div className="lg:col-span-3 order-1">
            <div className="relative w-full flex items-center justify-center py-2 sm:py-4">
              <div className="absolute w-44 h-44 sm:w-52 sm:h-52 lg:w-56 lg:h-56 rounded-full bg-[#F3D9B1]/60 -z-0" />
              <img
                src={hero.image}
                alt={hero.title}
                className="relative z-10 w-auto h-44 sm:h-52 lg:h-60 max-w-[85%] object-contain drop-shadow-sm rounded-full"
                loading="eager"
              />
            </div>
          </div>

          {/* Middle: text + breadcrumb */}
          <div className="lg:col-span-4 order-2">
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#E8823C] mb-3">
              OUR SERVICES
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#1E2A3B] leading-[1.15] mb-4 break-words">
              {hero.title}
            </h1>
            <p className="text-[#5C6370] text-sm sm:text-base leading-relaxed max-w-md mb-5">
              {hero.description}
            </p>
            {/* <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#6B7280]">
                <li>
                  <Link to="/" className="flex items-center gap-1.5 hover:text-[#E8823C] transition-colors">
                    <FiHome className="w-3.5 h-3.5" />
                    Home
                  </Link>
                </li>
                <li><FiChevronRight className="w-3.5 h-3.5" /></li>
                <li>
                  <Link to="/services" className="hover:text-[#E8823C] transition-colors">
                    Services
                  </Link>
                </li>
                <li><FiChevronRight className="w-3.5 h-3.5" /></li>
                <li className="text-[#E8823C] font-medium">{title}</li>
              </ol>
            </nav> */}
          </div>

          {/* Right: 2×2 feature cards (wider column) */}
          {features.length > 0 && (
            <div className="lg:col-span-5 order-3">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 sm:p-6 shadow-sm border border-white/60 hover:shadow-md transition-shadow duration-200">
                <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-5 sm:gap-y-6">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-start gap-2.5 sm:gap-3 min-h-[4rem] sm:min-h-[4.5rem]"
                      >
                        <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FBE6D0] text-[#E8823C]">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </span>
                        <div className="flex-1">
                          <p className="text-xs sm:text-sm font-semibold text-[#1E2A3B] leading-snug break-words hyphens-auto">
                            {feature.title}
                          </p>
                          {feature.highlight && (
                            <p className="text-[10px] sm:text-xs text-[#5C6370] leading-tight mt-0.5 break-words">
                              {feature.highlight}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailHeroSection;