// import React from "react";
// import {
//   FaShieldAlt,
//   FaFileAlt,
//   FaInfoCircle,
//   FaExclamationTriangle,
//   FaBalanceScale,
//   FaChartLine,
// } from "react-icons/fa";

// /**
//  * variant -> default icon map
//  */
// const DEFAULT_ICONS = {
//   classic: <FaShieldAlt />,
//   soft: <FaFileAlt />,
//   accent: <FaInfoCircle />,
//   dashed: <FaExclamationTriangle />,
//   compact: <FaShieldAlt />,
//   topAccent: <FaBalanceScale />,
//   premium: <FaShieldAlt />,
// };

// /**
//  * Disclaimer
//  * 7 visual styles matching the reference sheet:
//  * classic | soft | accent | dashed | compact | topAccent | premium
//  */
// const Disclaimer = ({
//   variant = "classic",
//   title = "Important Disclaimer",
//   text = "Mutual fund investments are subject to market risks. Please read all scheme related documents carefully before investing.",
//   highlight,
//   icon,
//   className = "",
// }) => {
//   const resolvedIcon = icon || DEFAULT_ICONS[variant];

//   /* ---------- 5. Compact Inline Style ---------- */
//   if (variant === "compact") {
//     return (
//       <div
//         className={`flex items-center gap-4 rounded-2xl bg-secondary-color px-5 py-4 sm:px-6 ${className}`}
//       >
//         <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-2xl text-primary-color">
//           {resolvedIcon}
//         </span>
//         <p className="font-body-font text-sm leading-relaxed text-dark-color/80 sm:text-base">
//           {text}{" "}
//           {highlight && (
//             <span className="font-semibold text-primary-color">
//               {highlight}
//             </span>
//           )}
//         </p>
//       </div>
//     );
//   }

//   /* ---------- 6. Card with Top Accent ---------- */
//   if (variant === "topAccent") {
//     return (
//       <div
//         className={`overflow-hidden rounded-2xl border border-black-color/5 bg-white-color shadow-sm ${className}`}
//       >
//         <div className="h-1.5 w-full bg-primary-color" />
//         <div className="flex items-start gap-5 px-6 py-6 sm:px-8">
//           <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-secondary-color text-2xl text-primary-color">
//             {resolvedIcon}
//           </span>
//           <div>
//             <h4 className="font-heading-font text-lg font-semibold text-primary-color sm:text-xl">
//               {title}
//             </h4>
//             <p className="mt-2 font-body-font text-sm leading-relaxed text-dark-color/80 sm:text-base">
//               {text}
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   /* ---------- 7. Premium Dark Style ---------- */
//   if (variant === "premium") {
//     return (
//       <div
//         className={`relative overflow-hidden rounded-2xl border border-primary-color/20 bg-dark-color px-6 py-8 sm:px-10 ${className}`}
//       >
//         <FaChartLine className="pointer-events-none absolute -bottom-6 -right-6 text-[10rem] text-primary-color/10 sm:text-[14rem]" />

//         <div className="relative flex items-start gap-5">
//           <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary-color/10 text-3xl text-primary-color ring-4 ring-primary-color/10">
//             {resolvedIcon}
//           </span>
//           <div>
//             <h4 className="font-heading-font text-lg font-semibold text-primary-color sm:text-xl">
//               {title}
//             </h4>
//             <p className="mt-2 max-w-2xl font-body-font text-sm leading-relaxed text-white-color/80 sm:text-base">
//               {text}
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   /* ---------- 1/2/3/4: classic | soft | accent | dashed ---------- */
//   const VARIANT_STYLES = {
//     classic:
//       "rounded-2xl border border-primary-color/25 bg-black-color px-6 py-6 sm:px-8",
//     soft: "rounded-2xl border border-primary-color/10 bg-secondary-color px-6 py-6 sm:px-8",
//     accent:
//       "rounded-2xl border border-black-color/5 border-l-[6px] border-l-primary-color bg-white-color px-6 py-6 shadow-sm sm:px-8",
//     dashed:
//       "rounded-2xl border-2 border-dashed border-primary-color bg-secondary-color/60 px-6 py-6 sm:px-8",
//   };

//   const ICON_WRAPPER_STYLES = {
//     classic: "bg-primary-color/10",
//     soft: "bg-primary-color/15",
//     accent: "bg-secondary-color",
//     dashed: "bg-white-color",
//   };

//   const TEXT_STYLES = {
//     classic: "text-white-color/80",
//     soft: "text-dark-color/80",
//     accent: "text-dark-color/80",
//     dashed: "text-dark-color/80",
//   };

//   return (
//     <div
//       className={`flex items-start gap-5 ${VARIANT_STYLES[variant] || VARIANT_STYLES.classic} ${className}`}
//     >
//       <span
//         className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-2xl text-primary-color sm:h-16 sm:w-16 sm:text-3xl ${
//           ICON_WRAPPER_STYLES[variant] || ICON_WRAPPER_STYLES.classic
//         }`}
//       >
//         {resolvedIcon}
//       </span>
//       <div>
//         <h4 className="font-heading-font text-lg font-semibold text-primary-color sm:text-xl">
//           {title}
//         </h4>
//         <p
//           className={`mt-2 font-body-font text-sm leading-relaxed sm:text-base ${
//             TEXT_STYLES[variant] || TEXT_STYLES.classic
//           }`}
//         >
//           {text}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Disclaimer;







import React from "react";
import { FaShieldAlt } from "react-icons/fa";

/**
 * Disclaimer
 * Terminal / trading-desk inspired disclosure card:
 * pulsing "live" indicator, monospace eyebrow label, and an
 * animated scan-line accent instead of a static border or shadow.
 */
const Disclaimer = ({
  label = "Required Disclosure",
  title = "Important Disclaimer",
  text = "Mutual fund investments are subject to market risks. Please read all scheme related documents carefully before investing.",
  icon,
  className = "",
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-black-color px-6 py-6 sm:px-8 sm:py-8 ${className}`}
    >
      {/* Eyebrow row: live pulse dot + mono label */}
      <div className="flex items-center gap-2.5">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-color opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-color" />
        </span>
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-primary-color sm:text-[11px]">
          {label}
        </span>
      </div>

      {/* Content */}
      <div className="mt-4 flex items-start gap-4">
        <span className="mt-0.5 hidden shrink-0 text-xl text-primary-color/70 sm:block">
          {icon || <FaShieldAlt />}
        </span>
        <div>
          <h4 className="font-heading-font text-lg font-semibold text-white-color sm:text-xl">
            {title}
          </h4>
          <p className="mt-2 max-w-2xl font-body-font text-sm leading-relaxed text-white-color/60 sm:text-base">
            {text}
          </p>
        </div>
      </div>

      {/* Animated scan-line accent */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] overflow-hidden bg-white-color/5">
        <div className="h-full w-1/3 animate-scan bg-primary-color" />
      </div>
    </div>
  );
};

export default Disclaimer;