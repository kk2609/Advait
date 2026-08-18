// import React from "react";
// import { FiHome, FiChevronRight } from "react-icons/fi";

// const ContactHeroSection = () => {
//   return (
//     <section className="relative bg-secondary-color overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 py-16 sm:py-20 lg:py-24">
//         {/* Left: Text Content */}
//         <div className="text-center lg:text-left">
//           <span className="inline-block text-orange-500 font-semibold tracking-widest text-xs sm:text-sm uppercase mb-4">
//             Get In Touch
//           </span>

//           <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0B1F3A] leading-tight mb-5">
//             Let&apos;s Talk About Your
//             <br className="hidden sm:block" /> Financial Goals
//           </h1>

//           <p className="text-slate-500 text-base sm:text-lg max-w-lg mx-auto lg:mx-0 mb-6">
//             Whether you have a question, need financial guidance, or want to
//             explore your options, our team is here to help.
//           </p>

//           {/* Breadcrumb */}
//           {/* <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-slate-500">
//             <FiHome className="text-orange-500" size={15} />
//             <a href="/" className="hover:text-orange-500 transition-colors">
//               Home
//             </a>
//             <FiChevronRight className="text-slate-400" size={14} />
//             <span className="text-[#0B1F3A] font-medium">Contact Us</span>
//           </div> */}
//         </div>

//         {/* Right: Image */}
//         <div className="relative">
//           <div className="rounded-3xl overflow-hidden shadow-lg">
//             <img
//               src="https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=900&q=80"
//               alt="Advait Financial Services office"
//               className="w-full h-64 sm:h-80 lg:h-[26rem] object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactHeroSection;











// import React from "react";

// const ContactHeroSection = () => {
//   return (
//     <section className="relative bg-secondary-color overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-6 py-10  sm:py-12 lg:py-26">
//         {/* Left: Text Content */}
//         <div className="relative z-10 text-center lg:text-left">
//           <span className="inline-block font-body-font text-primary-color font-semibold tracking-widest text-xs sm:text-sm uppercase mb-3">
//             Get In Touch
//           </span>

//           <h1 className="font-heading-font text-2xl sm:text-3xl lg:text-4xl xl:text-[2.75rem] text-dark-color leading-snug mb-4">
//             Let&apos;s Talk. Let&apos;s Plan.
//             <br className="hidden sm:block" /> Let&apos;s Grow Together.
//           </h1>

//           <p className="font-body-font text-gray-color text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
//             We&apos;re here to understand your goals and help you achieve
//             them.
//           </p>
//         </div>

//         {/* Right: Image */}
//         <div className="relative flex justify-center lg:justify-end">
//           {/* Decorative arc outline */}
//           <span className="pointer-events-none hidden sm:block absolute  " />

//           {/* Decorative dotted grid */}
//           {/* <div className="pointer-events-none hidden sm:grid absolute -left-2 lg:left-0 bottom-2 grid-cols-6 gap-2 z-0">
//             {Array.from({ length: 24 }).map((_, i) => (
//               <span
//                 key={i}
//                 className="w-1.5 h-1.5 rounded-full bg-primary-color/70"
//               />
//             ))}
//           </div> */}

//           <div className="relative z-10 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-lg w-full max-w-md lg:max-w-none">
//             <img
//               src="https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=900&q=80"
//               alt="Advait Financial Services meeting room"
//               className="w-full h-56 sm:h-64 lg:h-72 xl:h-80 object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactHeroSection;















import React from "react";
import heroImage from "../../../assets/contact.jpg";    

const ContactHeroSection = () => {
  return (
    <section className="relative bg-secondary-color overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-6 py-10 sm:py-12 lg:py-26">
        {/* Left: Text Content */}
        <div className="relative z-10 text-center lg:text-left">
          <span className="inline-block font-body-font text-primary-color font-semibold tracking-widest text-xs sm:text-sm uppercase mb-3">
            Get In Touch
          </span>

          <h1 className="font-heading-font text-2xl sm:text-3xl lg:text-4xl xl:text-[2.75rem] text-dark-color leading-snug mb-4">
            Let&apos;s Talk. Let&apos;s Plan.
            <br className="hidden sm:block" /> Let&apos;s Grow Together.
          </h1>

          <p className="font-body-font text-gray-color text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
            We&apos;re here to understand your goals and help you achieve them.
          </p>
        </div>

        {/* Right: Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative z-10 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-lg w-full max-w-md lg:max-w-none">
            <img
              src={heroImage}   // 👈 use imported image
              alt="Advait Financial Services meeting room"
              className="w-full h-56 sm:h-64 lg:h-72 xl:h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;