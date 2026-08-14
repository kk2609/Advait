// import React from "react";
// import { Link } from "react-router-dom";
// import privacyImage from "../../assets/privacy-policy.png"; // adjust path

// const SECTIONS = [
//   {
//     title: "1. Information We Collect",
//     content:
//       "We collect personal information such as name, email address, phone number and other details that you provide when you contact us or fill out a form on our website.",
//   },
//   {
//     title: "2. How We Use Your Information",
//     content:
//       "The information we collect is used to provide financial advisory services, offer relevant guidance, and keep you updated about our products and services.",
//   },
//   {
//     title: "3. Information Sharing",
//     content:
//       "We do not sell or rent your personal information to third parties. Information may be shared with trusted partners only as required to deliver our services.",
//   },
//   {
//     title: "4. Data Security",
//     content:
//       "We use appropriate technical and organizational measures to protect your personal data from unauthorized access, loss, misuse or alteration.",
//   },
//   {
//     title: "5. Your Rights",
//     content:
//       "You have the right to access, update, correct or request deletion of your personal information at any time by contacting us directly.",
//   },
// ];

// const PrivacyPolicyPage = () => {
//   return (
//     <>
//       {/* Hero */}
//       <section className="relative overflow-hidden border-b border-dark-color/10 bg-secondary-color">
//         {/* Image — full-bleed, angled edge on desktop */}
//         <div className="relative h-40 w-full sm:h-56 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-[58%]">
//           <div className="h-full w-full overflow-hidden lg:[clip-path:polygon(12%_0%,100%_0%,100%_100%,0%_100%)]">
//             <img
//               src={privacyImage}
//               alt="Padlock on a keyboard representing data privacy and security"
//               className="h-full w-full object-cover"
//             />
//           </div>
//         </div>

//         {/* Text */}
//         <div className="relative z-10 mx-auto max-w-[1600px] px-4 py-8 text-center sm:px-6 sm:py-10 lg:px-10 lg:py-20 lg:text-left">
//           <div className="lg:max-w-[46%]">
//             <h1 className="font-heading-font text-3xl font-bold leading-tight text-dark-color sm:text-4xl lg:text-5xl">
//               Privacy Policy
//             </h1>

//             {/* <div className="mt-3 flex items-center justify-center gap-2 font-body-font text-sm text-gray-color lg:justify-start">
//               <Link to="/" className="hover:text-primary-color">
//                 Home
//               </Link>
//               <span className="text-primary-color">/</span>
//               <span className="text-primary-color">Privacy Policy</span>
//             </div> */}
//           </div>
//         </div>
//       </section>

//       {/* Content */}
//       <section className="bg-white-color px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
//         <div className="mx-auto max-w-6xl">
//           <p className="font-body-font text-sm leading-relaxed text-gray-color sm:text-base">
//             Your privacy is important to us. This Privacy Policy explains how
//             we collect, use and protect your information.
//           </p>

//           <div className="mt-10 space-y-8 sm:mt-12 text-justify sm:space-y-10">
//             {SECTIONS.map((section) => (
//               <div key={section.title}>
//                 <h2 className="font-heading-font text-lg font-bold text-dark-color sm:text-xl">
//                   {section.title}
//                 </h2>
//                 <p className="mt-2 font-body-font text-sm leading-relaxed text-gray-color sm:text-base">
//                   {section.content}
//                 </p>
//               </div>
//             ))}
//           </div>

//           <p className="mx-auto mt-14 max-w-2xl text-center font-body-font text-xs italic leading-relaxed text-gray-color sm:mt-16 sm:text-sm">
//             Mutual Fund investments are subject to market risks, read all
//             scheme related documents carefully before investing.
//           </p>
//         </div>
//       </section>
//     </>
//   );
// };

// export default PrivacyPolicyPage;

// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   FaHome,
//   FaChevronRight,
//   FaUser,
//   FaRegFileAlt,
//   FaLock,
//   FaRegEnvelope,
// } from "react-icons/fa";
// import { TbShieldCheck } from "react-icons/tb";
// import privacyImage from "../../assets/privacy-policy.png"; // adjust path if needed

// const SECTIONS = [
//   {
//     title: "1. Information We Collect",
//     content:
//       "We may collect personal information that you voluntarily provide to us when you contact us, request a consultation, submit an enquiry, or use any of the services available through our website. This may include your name, email address, phone number, company or organization details, and any other information you choose to provide. We may also collect basic technical information such as your IP address, browser type, device information, and website usage data to help us maintain and improve our website.",
//   },
//   {
//     title: "2. How We Use Your Information",
//     content:
//       "We use the information we collect to respond to your enquiries, provide financial advisory and related services, understand your requirements, schedule consultations, communicate with you about our services, and improve your overall experience with Advait Financial Services. Where applicable, information may also be used to comply with legal, regulatory, accounting, or security requirements.",
//   },
//   {
//     title: "3. Information Sharing",
//     content:
//       "We respect your privacy and do not sell or rent your personal information. We may share information with trusted service providers, professional advisers, technology partners, or other authorized parties where reasonably necessary to provide our services, operate our website, protect our business, or comply with applicable legal and regulatory requirements. Such sharing will be limited to the information reasonably necessary for the relevant purpose.",
//   },
//   {
//     title: "4. Data Security",
//     content:
//       "We take reasonable administrative, technical, and organizational measures to protect the personal information we hold against unauthorized access, misuse, loss, alteration, disclosure, or destruction. However, no method of transmission or electronic storage can be guaranteed to be completely secure. We therefore encourage you to take appropriate precautions when sharing information online.",
//   },
//   {
//     title: "5. Cookies and Website Technologies",
//     content:
//       "Our website may use cookies and similar technologies to improve functionality, understand website usage, remember preferences, and enhance your browsing experience. Cookies may also help us analyze website performance and identify areas for improvement. You can manage or disable cookies through your browser settings, although certain website features may not function as intended if cookies are disabled.",
//   },
//   {
//     title: "6. Third-Party Links",
//     content:
//       "Our website may contain links to third-party websites, services, or resources. These websites operate independently and have their own privacy policies and terms of use. Advait Financial Services is not responsible for the privacy practices, content, security, or policies of third-party websites. We recommend reviewing their privacy policies before providing any personal information.",
//   },
//   {
//     title: "7. Data Retention",
//     content:
//       "We retain personal information only for as long as reasonably necessary to fulfill the purposes for which it was collected, provide our services, maintain appropriate business records, resolve disputes, enforce agreements, and meet applicable legal or regulatory obligations. The period of retention may vary depending on the nature and purpose of the information.",
//   },
//   {
//     title: "8. Your Rights and Choices",
//     content:
//       "Depending on applicable law, you may have rights regarding your personal information, including the right to request access, correction, updating, or deletion of certain information. You may also have choices regarding communications you receive from us. To make a privacy-related request, please contact us using the contact details provided on this website.",
//   },
//   {
//     title: "9. Children's Privacy",
//     content:
//       "Our website and services are intended for individuals who are legally able to use them. We do not knowingly collect personal information from children without appropriate authorization. If you believe that a child has provided personal information to us without appropriate consent, please contact us so that we can review and take appropriate action.",
//   },
//   {
//     title: "10. Changes to This Privacy Policy",
//     content:
//       "We may update this Privacy Policy from time to time to reflect changes in our services, website practices, technology, or applicable legal and regulatory requirements. Any updated version will be published on this page with the revised effective date, where applicable. We encourage you to review this page periodically to stay informed about how we handle personal information.",
//   },
//   {
//     title: "11. Contact Us",
//     content:
//       "If you have any questions, concerns, or requests regarding this Privacy Policy or the way we handle your personal information, please contact Advait Financial Services through the contact information provided on our website. We will make reasonable efforts to respond to privacy-related enquiries in a timely manner.",
//   },
// ];

// const PrivacyPolicyPage = () => {
//   return (
//     <>
//       {/* Hero Section */}
//       <section className="relative mx-auto max-w-[1800px] overflow-hidden rounded-[28px] bg-secondary-color sm:rounded-[36px] lg:rounded-[40px]">
//         {/* Decorative dot grid */}
//         <div className="absolute right-[8%] top-10 z-10 hidden grid-cols-6 gap-2 lg:right-[38%] lg:grid">
//           {Array.from({ length: 24 }).map((_, i) => (
//             <span
//               key={i}
//               className="h-1 w-1 rounded-full bg-primary-color/40"
//             />
//           ))}
//         </div>

//         {/* Decorative wave lines — bottom left */}
//         <svg
//           aria-hidden="true"
//           viewBox="0 0 400 160"
//           className="pointer-events-none absolute bottom-0 left-0 hidden w-72 opacity-40 sm:block lg:w-96"
//         >
//           <path
//             d="M0 120 Q60 90 120 120 T240 120 T360 120"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             className="text-primary-color/30"
//           />
//           <path
//             d="M0 145 Q60 115 120 145 T240 145 T360 145"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             className="text-primary-color/20"
//           />
//         </svg>

//         <div className="grid grid-cols-1 lg:grid-cols-2">
//           {/* Left — Text */}
//           <div className="relative z-10 px-5 py-10 text-center sm:px-8 sm:py-14 lg:px-14 lg:py-24 lg:text-left xl:px-20">
//             {/* Breadcrumb */}
//             <div className="flex items-center justify-center gap-2 font-body-font text-sm text-dark-color lg:justify-start">
//               {/* <FaHome className="text-primary-color" />
//                             <Link to="/" className="hover:text-primary-color transition-colors">
//                                 Home
//                             </Link>
//                             <FaChevronRight className="text-xs text-gray-color" />
//                             <span className="font-semibold text-primary-color">
//                                 Privacy Policy
//                             </span> */}
//             </div>

//             <h1 className="mt-6 font-heading-font text-4xl font-bold leading-tight text-dark-color sm:text-5xl lg:text-6xl">
//               Privacy Policy
//             </h1>
//             <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary-color lg:mx-0" />

//             <p className="font-body-font text-sm leading-relaxed text-justify text-gray-color sm:text-base">
//               At Advait Financial Services, we respect your privacy and are
//               committed to handling your personal information responsibly. This
//               Privacy Policy explains what information we may collect, how we
//               use it, when it may be shared, and the steps we take to protect it
//               when you interact with our website or services.
//             </p>
//           </div>

//           {/* Right — Image with curved edge & floating badges */}
//           <div className="relative h-64 w-full sm:h-96 lg:h-auto">
//             <div className="absolute inset-0 overflow-hidden rounded-2xl lg:rounded-l-[180px] xl:rounded-l-[240px]">
//               <img
//                 src={privacyImage}
//                 alt="Padlock on a laptop keyboard representing data privacy and security"
//                 className="h-full w-full object-cover p-5"
//               />
//             </div>

//             {/* Orbit arc */}
//             <svg
//               aria-hidden="true"
//               viewBox="0 0 100 100"
//               preserveAspectRatio="none"
//               className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
//             >
//               <circle
//                 cx="8"
//                 cy="50"
//                 r="46"
//                 fill="none"
//                 stroke="white"
//                 strokeOpacity="0.6"
//                 strokeWidth="0.3"
//               />
//             </svg>

//             {/* Floating badges — responsive sizing */}
//             <span className="absolute left-[6%] top-[16%] flex h-9 w-9 items-center justify-center rounded-full bg-primary-color text-white-color shadow-lg sm:h-12 sm:w-12 sm:text-lg lg:h-16 lg:w-16 lg:text-2xl">
//               <FaUser />
//             </span>
//             <span className="absolute right-[16%] top-[6%] flex h-9 w-9 items-center justify-center rounded-full bg-white-color text-primary-color shadow-lg sm:h-12 sm:w-12 sm:text-lg lg:h-16 lg:w-16 lg:text-2xl">
//               <FaRegFileAlt />
//             </span>
//             <span className="absolute right-[2%] top-[40%] flex h-9 w-9 items-center justify-center rounded-full bg-white-color text-primary-color shadow-lg sm:h-12 sm:w-12 sm:text-lg lg:h-14 lg:w-14 lg:text-xl">
//               <FaLock />
//             </span>
//             <span className="absolute bottom-[14%] left-[2%] flex h-9 w-9 items-center justify-center rounded-full bg-white-color text-primary-color shadow-lg sm:h-12 sm:w-12 sm:text-lg lg:h-14 lg:w-14 lg:text-xl">
//               <FaRegEnvelope />
//             </span>
//             <span className="absolute bottom-[8%] right-[10%] flex h-9 w-9 items-center justify-center rounded-full bg-white-color text-primary-color shadow-lg sm:h-12 sm:w-12 sm:text-lg lg:h-14 lg:w-14 lg:text-xl">
//               <TbShieldCheck />
//             </span>
//           </div>
//         </div>
//       </section>

//       {/* Content Section */}
//       <section className="bg-white-color px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
//         <div className="mx-auto max-w-6xl">
//           <p className="font-body-font text-sm leading-relaxed text-gray-color sm:text-base">
//             Your privacy matters to us. Learn how we collect, use,
//             protect, and manage your personal information when you
//             interact with Advait Financial Services.
//           </p>

//           <div className="mt-10 space-y-8 sm:mt-12 sm:space-y-10">
//             {SECTIONS.map((section) => (
//               <div key={section.title}>
//                 <h2 className="font-heading-font text-lg font-bold text-dark-color sm:text-xl">
//                   {section.title}
//                 </h2>
//                 <p className="mt-2 font-body-font text-sm text-justify leading-relaxed text-gray-color sm:text-base">
//                   {section.content}
//                 </p>
//               </div>
//             ))}
//           </div>

//           <p className="mx-auto mt-14 max-w-2xl text-center font-body-font text-xs italic leading-relaxed font-bold text-black-color sm:mt-16 sm:text-sm">
//             "Mutual Fund investments are subject to market risks, read all
//             scheme related documents carefully before investing."
//           </p>
//         </div>
//       </section>
//     </>
//   );
// };

// export default PrivacyPolicyPage;













// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   FaHome,
//   FaChevronRight,
//   FaUser,
//   FaRegFileAlt,
//   FaLock,
//   FaRegEnvelope,
// } from "react-icons/fa";
// import { TbShieldCheck } from "react-icons/tb";
// import privacyImage from "../../assets/privacy-policy.png"; // adjust path if needed

// const SECTIONS = [
//   {
//     title: "1. Information We Collect",
//     content:
//       "We may collect personal information that you voluntarily provide to us when you contact us, request a consultation, submit an enquiry, or use any of the services available through our website. This may include your name, email address, phone number, company or organization details, and any other information you choose to provide. We may also collect basic technical information such as your IP address, browser type, device information, and website usage data to help us maintain and improve our website.",
//   },
//   {
//     title: "2. How We Use Your Information",
//     content:
//       "We use the information we collect to respond to your enquiries, provide financial advisory and related services, understand your requirements, schedule consultations, communicate with you about our services, and improve your overall experience with Advait Financial Services. Where applicable, information may also be used to comply with legal, regulatory, accounting, or security requirements.",
//   },
//   {
//     title: "3. Information Sharing",
//     content:
//       "We respect your privacy and do not sell or rent your personal information. We may share information with trusted service providers, professional advisers, technology partners, or other authorized parties where reasonably necessary to provide our services, operate our website, protect our business, or comply with applicable legal and regulatory requirements. Such sharing will be limited to the information reasonably necessary for the relevant purpose.",
//   },
//   {
//     title: "4. Data Security",
//     content:
//       "We take reasonable administrative, technical, and organizational measures to protect the personal information we hold against unauthorized access, misuse, loss, alteration, disclosure, or destruction. However, no method of transmission or electronic storage can be guaranteed to be completely secure. We therefore encourage you to take appropriate precautions when sharing information online.",
//   },
//   {
//     title: "5. Cookies and Website Technologies",
//     content:
//       "Our website may use cookies and similar technologies to improve functionality, understand website usage, remember preferences, and enhance your browsing experience. Cookies may also help us analyze website performance and identify areas for improvement. You can manage or disable cookies through your browser settings, although certain website features may not function as intended if cookies are disabled.",
//   },
//   {
//     title: "6. Third-Party Links",
//     content:
//       "Our website may contain links to third-party websites, services, or resources. These websites operate independently and have their own privacy policies and terms of use. Advait Financial Services is not responsible for the privacy practices, content, security, or policies of third-party websites. We recommend reviewing their privacy policies before providing any personal information.",
//   },
//   {
//     title: "7. Data Retention",
//     content:
//       "We retain personal information only for as long as reasonably necessary to fulfill the purposes for which it was collected, provide our services, maintain appropriate business records, resolve disputes, enforce agreements, and meet applicable legal or regulatory obligations. The period of retention may vary depending on the nature and purpose of the information.",
//   },
//   {
//     title: "8. Your Rights and Choices",
//     content:
//       "Depending on applicable law, you may have rights regarding your personal information, including the right to request access, correction, updating, or deletion of certain information. You may also have choices regarding communications you receive from us. To make a privacy-related request, please contact us using the contact details provided on this website.",
//   },
//   {
//     title: "9. Children's Privacy",
//     content:
//       "Our website and services are intended for individuals who are legally able to use them. We do not knowingly collect personal information from children without appropriate authorization. If you believe that a child has provided personal information to us without appropriate consent, please contact us so that we can review and take appropriate action.",
//   },
//   {
//     title: "10. Changes to This Privacy Policy",
//     content:
//       "We may update this Privacy Policy from time to time to reflect changes in our services, website practices, technology, or applicable legal and regulatory requirements. Any updated version will be published on this page with the revised effective date, where applicable. We encourage you to review this page periodically to stay informed about how we handle personal information.",
//   },
//   {
//     title: "11. Contact Us",
//     content:
//       "If you have any questions, concerns, or requests regarding this Privacy Policy or the way we handle your personal information, please contact Advait Financial Services through the contact information provided on our website. We will make reasonable efforts to respond to privacy-related enquiries in a timely manner.",
//   },
// ];

// const PrivacyPolicyPage = () => {
//   return (
//     <>
//       {/* Hero Section — full-bleed, no rounded container */}
//       <section className="relative w-full overflow-hidden bg-secondary-color">
//         {/* Decorative dot grid */}
//         <div className="absolute right-[8%] top-10 z-10 hidden grid-cols-6 gap-2 lg:right-[38%] lg:grid">
//           {Array.from({ length: 24 }).map((_, i) => (
//             <span
//               key={i}
//               className="h-1 w-1 rounded-full bg-primary-color/40"
//             />
//           ))}
//         </div>

//         {/* Decorative wave lines — bottom left */}
//         <svg
//           aria-hidden="true"
//           viewBox="0 0 400 160"
//           className="pointer-events-none absolute bottom-0 left-0 hidden w-72 opacity-40 sm:block lg:w-96"
//         >
//           <path
//             d="M0 120 Q60 90 120 120 T240 120 T360 120"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             className="text-primary-color/30"
//           />
//           <path
//             d="M0 145 Q60 115 120 145 T240 145 T360 145"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             className="text-primary-color/20"
//           />
//         </svg>

//         <div className="grid grid-cols-1 lg:grid-cols-2">
//           {/* Left — Text */}
//           <div className="relative z-10 px-5 py-10 text-center sm:px-8 sm:py-14 lg:px-14 lg:py-24 lg:text-left xl:px-20">
//             {/* Breadcrumb */}
//             <div className="flex items-center justify-center gap-2 font-body-font text-sm text-dark-color lg:justify-start">
//               {/* <FaHome className="text-primary-color" />
//               <Link to="/" className="transition-colors hover:text-primary-color">
//                 Home
//               </Link>
//               <FaChevronRight className="text-xs text-gray-color" />
//               <span className="font-semibold text-primary-color">
//                 Privacy Policy
//               </span> */}
//             </div>

//             <h1 className="mt-6 font-heading-font text-4xl font-bold leading-tight text-dark-color sm:text-5xl lg:text-6xl">
//               Privacy Policy
//             </h1>
//             <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary-color lg:mx-0" />

//             <p className="mx-auto mt-6 max-w-md text-justify font-body-font text-sm text-justify leading-relaxed text-gray-color [text-align-last:center] hyphens-auto sm:text-base lg:mx-0 lg:[text-align-last:left]">
//               At Advait Financial Services, we respect your privacy and are
//               committed to handling your personal information responsibly.
//               This Privacy Policy explains what information we may collect,
//               how we use it, when it may be shared, and the steps we take to
//               protect it when you interact with our website or services.
//             </p>
//           </div>

//           {/* Right — Image with curved edge & floating badges */}
//           <div className="relative h-64 w-full sm:h-96 lg:h-auto">
//             <div className="absolute inset-0 overflow-hidden rounded-2xl lg:rounded-l-[180px] xl:rounded-l-[240px]">
//               <img
//                 src={privacyImage}
//                 alt="Padlock on a laptop keyboard representing data privacy and security"
//                 className="h-full w-full object-cover"
//               />
//             </div>

//             {/* Orbit arc */}
//             <svg
//               aria-hidden="true"
//               viewBox="0 0 100 100"
//               preserveAspectRatio="none"
//               className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
//             >
//               <circle
//                 cx="8"
//                 cy="50"
//                 r="46"
//                 fill="none"
//                 stroke="white"
//                 strokeOpacity="0.6"
//                 strokeWidth="0.3"
//               />
//             </svg>

//             {/* Floating badges — responsive sizing */}
//             <span className="absolute left-[6%] top-[16%] flex h-8 w-8 items-center justify-center rounded-full bg-primary-color text-sm text-white-color shadow-lg sm:h-12 sm:w-12 sm:text-lg lg:h-16 lg:w-16 lg:text-2xl">
//               <FaUser />
//             </span>
//             <span className="absolute right-[16%] top-[6%] flex h-8 w-8 items-center justify-center rounded-full bg-white-color text-sm text-primary-color shadow-lg sm:h-12 sm:w-12 sm:text-lg lg:h-16 lg:w-16 lg:text-2xl">
//               <FaRegFileAlt />
//             </span>
//             <span className="absolute right-[2%] top-[40%] flex h-8 w-8 items-center justify-center rounded-full bg-white-color text-sm text-primary-color shadow-lg sm:h-12 sm:w-12 sm:text-lg lg:h-14 lg:w-14 lg:text-xl">
//               <FaLock />
//             </span>
//             <span className="absolute bottom-[14%] left-[2%] flex h-8 w-8 items-center justify-center rounded-full bg-white-color text-sm text-primary-color shadow-lg sm:h-12 sm:w-12 sm:text-lg lg:h-14 lg:w-14 lg:text-xl">
//               <FaRegEnvelope />
//             </span>
//             <span className="absolute bottom-[8%] right-[10%] flex h-8 w-8 items-center justify-center rounded-full bg-white-color text-sm text-primary-color shadow-lg sm:h-12 sm:w-12 sm:text-lg lg:h-14 lg:w-14 lg:text-xl">
//               <TbShieldCheck />
//             </span>
//           </div>
//         </div>
//       </section>

//       {/* Content Section */}
//       <section className="bg-white-color px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
//         <div className="mx-auto max-w-6xl">
//           <p className="font-body-font text-sm leading-relaxed text-gray-color sm:text-base">
//             Your privacy matters to us. Learn how we collect, use, protect,
//             and manage your personal information when you interact with
//             Advait Financial Services.
//           </p>

//           <div className="mt-10 space-y-8 sm:mt-12 sm:space-y-10">
//             {SECTIONS.map((section) => (
//               <div key={section.title}>
//                 <h2 className="font-heading-font text-lg font-bold text-dark-color sm:text-xl">
//                   {section.title}
//                 </h2>
//                 <p className="mt-2 text-justify font-body-font text-sm text-justify leading-relaxed text-gray-color [text-align-last:left] hyphens-auto sm:text-base">
//                   {section.content}
//                 </p>
//               </div>
//             ))}
//           </div>

//           <p className="mx-auto mt-14 max-w-2xl text-center font-body-font text-xs font-bold italic leading-relaxed text-dark-color sm:mt-16 sm:text-sm">
//             &quot;Mutual Fund investments are subject to market risks, read
//             all scheme related documents carefully before investing.&quot;
//           </p>
//         </div>
//       </section>
//     </>
//   );
// };

// export default PrivacyPolicyPage;












import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaChevronRight,
  FaUser,
  FaRegFileAlt,
  FaLock,
  FaRegEnvelope,
} from "react-icons/fa";
import { TbShieldCheck } from "react-icons/tb";
import privacyImage from "../../assets/privacy-policy.png"; // adjust path if needed

const SECTIONS = [
  {
    title: "1. Information We Collect",
    content:
      "We may collect personal information that you voluntarily provide to us when you contact us, request a consultation, submit an enquiry, or use any of the services available through our website. This may include your name, email address, phone number, company or organization details, and any other information you choose to provide. We may also collect basic technical information such as your IP address, browser type, device information, and website usage data to help us maintain and improve our website.",
  },
  {
    title: "2. How We Use Your Information",
    content:
      "We use the information we collect to respond to your enquiries, provide financial advisory and related services, understand your requirements, schedule consultations, communicate with you about our services, and improve your overall experience with Advait Financial Services. Where applicable, information may also be used to comply with legal, regulatory, accounting, or security requirements.",
  },
  {
    title: "3. Information Sharing",
    content:
      "We respect your privacy and do not sell or rent your personal information. We may share information with trusted service providers, professional advisers, technology partners, or other authorized parties where reasonably necessary to provide our services, operate our website, protect our business, or comply with applicable legal and regulatory requirements. Such sharing will be limited to the information reasonably necessary for the relevant purpose.",
  },
  {
    title: "4. Data Security",
    content:
      "We take reasonable administrative, technical, and organizational measures to protect the personal information we hold against unauthorized access, misuse, loss, alteration, disclosure, or destruction. However, no method of transmission or electronic storage can be guaranteed to be completely secure. We therefore encourage you to take appropriate precautions when sharing information online.",
  },
  {
    title: "5. Cookies and Website Technologies",
    content:
      "Our website may use cookies and similar technologies to improve functionality, understand website usage, remember preferences, and enhance your browsing experience. Cookies may also help us analyze website performance and identify areas for improvement. You can manage or disable cookies through your browser settings, although certain website features may not function as intended if cookies are disabled.",
  },
  {
    title: "6. Third-Party Links",
    content:
      "Our website may contain links to third-party websites, services, or resources. These websites operate independently and have their own privacy policies and terms of use. Advait Financial Services is not responsible for the privacy practices, content, security, or policies of third-party websites. We recommend reviewing their privacy policies before providing any personal information.",
  },
  {
    title: "7. Data Retention",
    content:
      "We retain personal information only for as long as reasonably necessary to fulfill the purposes for which it was collected, provide our services, maintain appropriate business records, resolve disputes, enforce agreements, and meet applicable legal or regulatory obligations. The period of retention may vary depending on the nature and purpose of the information.",
  },
  {
    title: "8. Your Rights and Choices",
    content:
      "Depending on applicable law, you may have rights regarding your personal information, including the right to request access, correction, updating, or deletion of certain information. You may also have choices regarding communications you receive from us. To make a privacy-related request, please contact us using the contact details provided on this website.",
  },
  {
    title: "9. Children's Privacy",
    content:
      "Our website and services are intended for individuals who are legally able to use them. We do not knowingly collect personal information from children without appropriate authorization. If you believe that a child has provided personal information to us without appropriate consent, please contact us so that we can review and take appropriate action.",
  },
  {
    title: "10. Changes to This Privacy Policy",
    content:
      "We may update this Privacy Policy from time to time to reflect changes in our services, website practices, technology, or applicable legal and regulatory requirements. Any updated version will be published on this page with the revised effective date, where applicable. We encourage you to review this page periodically to stay informed about how we handle personal information.",
  },
  {
    title: "11. Contact Us",
    content:
      "If you have any questions, concerns, or requests regarding this Privacy Policy or the way we handle your personal information, please contact Advait Financial Services through the contact information provided on our website. We will make reasonable efforts to respond to privacy-related enquiries in a timely manner.",
  },
];

const PrivacyPolicyPage = () => {
  return (
    <>
      {/* Hero Section — full-bleed, no rounded container */}
      <section className="relative w-full overflow-hidden bg-secondary-color">
        {/* Decorative dot grid */}
        <div className="absolute right-[8%] top-10 z-10 hidden grid-cols-6 gap-2 lg:right-[38%] lg:grid">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className="h-1 w-1 rounded-full bg-primary-color/40"
            />
          ))}
        </div>

        {/* Decorative wave lines — bottom left */}
        <svg
          aria-hidden="true"
          viewBox="0 0 400 160"
          className="pointer-events-none absolute bottom-0 left-0 hidden w-72 opacity-40 sm:block lg:w-96"
        >
          <path
            d="M0 120 Q60 90 120 120 T240 120 T360 120"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary-color/30"
          />
          <path
            d="M0 145 Q60 115 120 145 T240 145 T360 145"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary-color/20"
          />
        </svg>

        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
            {/* Left — Text */}
            <div className="relative z-10 px-5 py-10 text-align-left sm:px-8 sm:py-14 lg:px-14 lg:py-24 lg:text-left xl:px-20">
              {/* Breadcrumb */}
              <div className="flex items-center justify-center gap-2 font-body-font text-sm text-dark-color lg:justify-start">
                {/* <FaHome className="text-primary-color" />
                <Link to="/" className="transition-colors hover:text-primary-color">
                  Home
                </Link>
                <FaChevronRight className="text-xs text-gray-color" />
                <span className="font-semibold text-primary-color">
                  Privacy Policy
                </span> */}
              </div>

              <h1 className="mt-6 font-heading-font text-4xl font-bold leading-tight text-dark-color sm:text-5xl lg:text-6xl">
                Privacy Policy
              </h1>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary-color lg:mx-0" />

              <p className="mx-auto mt-6 max-w-md text-justify font-body-font text-sm leading-relaxed text-gray-color [text-align-last:center] hyphens-auto sm:text-base lg:mx-0 lg:[text-align-last:left]">
                At Advait Financial Services, we respect your privacy and are
                committed to handling your personal information responsibly.
                This Privacy Policy explains what information we may collect,
                how we use it, when it may be shared, and the steps we take to
                protect it when you interact with our website or services.
              </p>
            </div>

            {/* Right — Image with curved edge & floating badges */}
            <div className="relative h-64 w-full sm:h-96 lg:h-auto lg:aspect-[4/3] lg:max-h-[560px]">
              <div className="absolute inset-0 overflow-hidden rounded-2xl lg:rounded-l-[180px] xl:rounded-l-[240px]">
                <img
                  src={privacyImage}
                  alt="Padlock on a laptop keyboard representing data privacy and security"
                  className="h-full w-full object-cover ro"
                />
              </div>

              {/* Orbit arc */}
              {/* <svg
                aria-hidden="true"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
              >
                <circle
                  cx="8"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke="white"
                  strokeOpacity="0.6"
                  strokeWidth="0.3"
                />
              </svg> */}

              {/* Floating badges — responsive sizing */}
              {/* <span className="absolute left-[6%] top-[16%] flex h-8 w-8 items-center justify-center rounded-full bg-primary-color text-sm text-white-color shadow-lg sm:h-12 sm:w-12 sm:text-lg lg:h-16 lg:w-16 lg:text-2xl">
                <FaUser />
              </span>
              <span className="absolute right-[16%] top-[6%] flex h-8 w-8 items-center justify-center rounded-full bg-white-color text-sm text-primary-color shadow-lg sm:h-12 sm:w-12 sm:text-lg lg:h-16 lg:w-16 lg:text-2xl">
                <FaRegFileAlt />
              </span>
              <span className="absolute right-[2%] top-[40%] flex h-8 w-8 items-center justify-center rounded-full bg-white-color text-sm text-primary-color shadow-lg sm:h-12 sm:w-12 sm:text-lg lg:h-14 lg:w-14 lg:text-xl">
                <FaLock />
              </span>
              <span className="absolute bottom-[14%] left-[2%] flex h-8 w-8 items-center justify-center rounded-full bg-white-color text-sm text-primary-color shadow-lg sm:h-12 sm:w-12 sm:text-lg lg:h-14 lg:w-14 lg:text-xl">
                <FaRegEnvelope />
              </span>
              <span className="absolute bottom-[8%] right-[10%] flex h-8 w-8 items-center justify-center rounded-full bg-white-color text-sm text-primary-color shadow-lg sm:h-12 sm:w-12 sm:text-lg lg:h-14 lg:w-14 lg:text-xl">
                <TbShieldCheck />
              </span> */}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white-color px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="font-body-font text-sm leading-relaxed text-gray-color sm:text-base">
            Your privacy matters to us. Learn how we collect, use, protect,
            and manage your personal information when you interact with
            Advait Financial Services.
          </p>

          <div className="mt-10 space-y-8 sm:mt-12 sm:space-y-10">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="font-heading-font text-lg font-bold text-dark-color sm:text-xl">
                  {section.title}
                </h2>
                <p className="mt-2 text-justify font-body-font text-sm leading-relaxed text-justify text-gray-color [text-align-last:left] hyphens-auto sm:text-base">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-14 max-w-2xl text-center font-body-font text-xs font-bold italic leading-relaxed text-dark-color sm:mt-16 sm:text-sm">
            &quot;Mutual Fund investments are subject to market risks, read
            all scheme related documents carefully before investing.&quot;
          </p>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;