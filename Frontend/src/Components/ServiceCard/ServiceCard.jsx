// import React from "react";
// import { FaStar, FaArrowRight } from "react-icons/fa";
// import { Button, IconButton } from "../Button/Button";

// /**
//  * variant -> badge pill color classes (used by the "badge" variant)
//  */
// const BADGE_COLORS = {
//   green: "bg-emerald-500 text-white-color",
//   orange: "bg-primary-color text-white-color",
//   blue: "bg-blue-500 text-white-color",
// };

// /**
//  * ServiceCard
//  * variant: "default" | "outlined" | "horizontal" | "featured" | "badge"
//  *
//  * Static UI only for now — icon / title / description / links are all
//  * passed as props so real service data can be wired in later.
//  */
// const ServiceCard = ({
//   variant = "default",
//   icon,
//   title = "Service Title",
//   description = "Short description of the service goes here.",
//   linkText = "Learn More",
//   to,
//   href,
//   image,
//   popularLabel = "POPULAR",
//   badge, // { label: "NEW", color: "green" | "orange" | "blue" }
//   className = "",
// }) => {
//   /* ---------------------------------------------------------- */
//   /* Variant 3 — Horizontal Card                                 */
//   /* ---------------------------------------------------------- */
//   if (variant === "horizontal") {
//     return (
//       <div
//         className={`flex items-center gap-4 rounded-2xl bg-white-color p-5 shadow-sm transition-shadow duration-300 hover:shadow-md ${className}`}
//       >
//         <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-color/10 text-2xl text-primary-color">
//           {icon}
//         </span>

//         <div className="flex-1">
//           <h4 className="font-heading-font text-base font-bold text-dark-color sm:text-lg">
//             {title}
//           </h4>
//           <p className="mt-1 font-body-font text-sm leading-relaxed text-gray-color">
//             {description}
//           </p>
//         </div>

//         <IconButton
//           icon={<FaArrowRight />}
//           size="sm"
//           to={to}
//           href={href}
//           label={undefined}
//           className="shrink-0"
//         />
//       </div>
//     );
//   }

//   /* ---------------------------------------------------------- */
//   /* Variant 4 — Featured Card                                   */
//   /* ---------------------------------------------------------- */
//   if (variant === "featured") {
//     return (
//       <div
//         className={`relative grid overflow-hidden rounded-2xl bg-dark-color sm:grid-cols-2 ${className}`}
//       >
//         {/* Popular ribbon */}
//         <span className="absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-primary-color px-3 py-1 font-body-font text-xs font-bold uppercase tracking-wide text-white-color">
//           <FaStar className="text-[10px]" />
//           {popularLabel}
//         </span>

//         {/* Content */}
//         <div className="flex flex-col justify-center gap-4 px-6 py-10 sm:px-8">
//           <div>
//             <h3 className="font-heading-font text-2xl font-bold text-white-color sm:text-3xl">
//               {title}
//             </h3>
//             <span className="mt-3 block h-1 w-14 rounded-full bg-primary-color" />
//           </div>

//           <p className="max-w-sm font-body-font text-sm leading-relaxed text-white-color/70 sm:text-base">
//             {description}
//           </p>

//           <Button variant="primary" appearance="solid" to={to} href={href}>
//             {linkText}
//           </Button>
//         </div>

//         {/* Image */}
//         <div className="relative min-h-[220px] sm:min-h-full">
//           {image ? (
//             <img
//               src={image}
//               alt={title}
//               className="h-full w-full object-cover"
//             />
//           ) : (
//             <div className="h-full w-full bg-gradient-to-br from-primary-color/30 via-dark-color to-black-color" />
//           )}
//           <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-dark-color via-dark-color/10 to-transparent sm:bg-gradient-to-r sm:from-dark-color/40 sm:via-transparent" />
//         </div>
//       </div>
//     );
//   }

//   /* ---------------------------------------------------------- */
//   /* Variant 5 — Badge Card                                      */
//   /* ---------------------------------------------------------- */
//   if (variant === "badge") {
//     return (
//       <div
//         className={`relative rounded-2xl bg-secondary-color px-6 py-8 text-center shadow-sm ${className}`}
//       >
//         {badge && (
//           <span
//             className={`absolute right-4 top-4 rounded-md px-2.5 py-1 font-body-font text-[10px] font-bold uppercase tracking-wide ${
//               BADGE_COLORS[badge.color] || BADGE_COLORS.orange
//             }`}
//           >
//             {badge.label}
//           </span>
//         )}

//         <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white-color text-3xl text-primary-color shadow-sm">
//           {icon}
//         </span>

//         <h4 className="mt-5 font-heading-font text-lg font-bold text-dark-color">
//           {title}
//         </h4>
//         <span className="mx-auto mt-2 block h-0.5 w-10 rounded-full bg-primary-color" />

//         <p className="mt-3 font-body-font text-sm leading-relaxed text-gray-color">
//           {description}
//         </p>

//         <div className="mt-5">
//           <Button variant="tertiary" to={to} href={href}>
//             {linkText}
//           </Button>
//         </div>
//       </div>
//     );
//   }

//   /* ---------------------------------------------------------- */
//   /* Variant 1 / 2 — Default & Outlined Card                     */
//   /* ---------------------------------------------------------- */
//   const isOutlined = variant === "outlined";

//   return (
//     <div
//       className={`rounded-2xl bg-white-color px-6 py-8 text-center transition-all duration-300 ${
//         isOutlined
//           ? "border-2 border-primary-color/30 hover:border-primary-color"
//           : "shadow-sm hover:shadow-md"
//       } ${className}`}
//     >
//       <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-color/10 text-3xl text-primary-color">
//         {icon}
//       </span>

//       <h4 className="mt-5 font-heading-font text-lg font-bold text-dark-color sm:text-xl">
//         {title}
//       </h4>
//       <span className="mx-auto mt-2 block h-0.5 w-10 rounded-full bg-primary-color" />

//       <p className="mt-3 font-body-font text-sm leading-relaxed text-gray-color">
//         {description}
//       </p>

//       <div className="mt-5">
//         <Button variant="tertiary" to={to} href={href}>
//           {linkText}
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;









import React from "react";
import { FaStar, FaArrowRight } from "react-icons/fa";
import { Button, IconButton } from "../Button/Button";

/**
 * variant -> badge pill color classes (used by the "badge" variant)
 * All values map to theme tokens defined in index.css — no off-palette colors.
 */
const BADGE_COLORS = {
  primary: "bg-primary-color text-white-color",
  dark: "bg-dark-color text-white-color",
  black: "bg-black-color text-white-color",
  outline: "border border-primary-color bg-white-color text-primary-color",
};

/**
 * ServiceCard
 * variant: "default" | "outlined" | "horizontal" | "featured" | "badge"
 *
 * Static UI only for now — icon / title / description / links are all
 * passed as props so real service data can be wired in later.
 */
const ServiceCard = ({
  variant = "default",
  icon,
  title = "Service Title",
  description = "Short description of the service goes here.",
  linkText = "Learn More",
  to,
  href,
  image,
  popularLabel = "POPULAR",
  badge, // { label: "NEW", color: "primary" | "dark" | "black" | "outline" }
  className = "",
}) => {
  /* ---------------------------------------------------------- */
  /* Variant 3 — Horizontal Card                                 */
  /* ---------------------------------------------------------- */
  if (variant === "horizontal") {
    return (
      <div
        className={`flex items-center gap-4 rounded-2xl bg-white-color p-5 shadow-sm transition-shadow duration-300 hover:shadow-md ${className}`}
      >
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-color/10 text-2xl text-primary-color">
          {icon}
        </span>

        <div className="flex-1">
          <h4 className="font-heading-font text-base font-bold text-dark-color sm:text-lg">
            {title}
          </h4>
          <p className="mt-1 font-body-font text-sm leading-relaxed text-gray-color">
            {description}
          </p>
        </div>

        <IconButton
          icon={<FaArrowRight />}
          size="sm"
          to={to}
          href={href}
          label={undefined}
          className="shrink-0"
        />
      </div>
    );
  }

  /* ---------------------------------------------------------- */
  /* Variant 4 — Featured Card                                   */
  /* ---------------------------------------------------------- */
  if (variant === "featured") {
    return (
      <div
        className={`relative grid overflow-hidden rounded-2xl bg-dark-color sm:grid-cols-2 ${className}`}
      >
        {/* Popular ribbon */}
        <span className="absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-primary-color px-3 py-1 font-body-font text-xs font-bold uppercase tracking-wide text-white-color">
          <FaStar className="text-[10px]" />
          {popularLabel}
        </span>

        {/* Content */}
        <div className="flex flex-col justify-center gap-4 px-6 py-10 sm:px-8">
          <div>
            <h3 className="font-heading-font text-2xl font-bold text-white-color sm:text-3xl">
              {title}
            </h3>
            <span className="mt-3 block h-1 w-14 rounded-full bg-primary-color" />
          </div>

          <p className="max-w-sm font-body-font text-sm leading-relaxed text-white-color/70 sm:text-base">
            {description}
          </p>

          <Button variant="primary" appearance="solid" to={to} href={href}>
            {linkText}
          </Button>
        </div>

        {/* Image */}
        <div className="relative min-h-[220px] sm:min-h-full">
          {image ? (
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-primary-color/30 via-dark-color to-black-color" />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-dark-color via-dark-color/10 to-transparent sm:bg-gradient-to-r sm:from-dark-color/40 sm:via-transparent" />
        </div>
      </div>
    );
  }

  /* ---------------------------------------------------------- */
  /* Variant 5 — Badge Card                                      */
  /* ---------------------------------------------------------- */
  if (variant === "badge") {
    return (
      <div
        className={`relative rounded-2xl bg-secondary-color px-6 py-8 text-center shadow-sm ${className}`}
      >
        {badge && (
          <span
            className={`absolute right-4 top-4 rounded-md px-2.5 py-1 font-body-font text-[10px] font-bold uppercase tracking-wide ${
              BADGE_COLORS[badge.color] || BADGE_COLORS.primary
            }`}
          >
            {badge.label}
          </span>
        )}

        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white-color text-3xl text-primary-color shadow-sm">
          {icon}
        </span>

        <h4 className="mt-5 font-heading-font text-lg font-bold text-dark-color">
          {title}
        </h4>
        <span className="mx-auto mt-2 block h-0.5 w-10 rounded-full bg-primary-color" />

        <p className="mt-3 font-body-font text-sm leading-relaxed text-gray-color">
          {description}
        </p>

        <div className="mt-5">
          <Button variant="tertiary" to={to} href={href}>
            {linkText}
          </Button>
        </div>
      </div>
    );
  }

  /* ---------------------------------------------------------- */
  /* Variant 1 / 2 — Default & Outlined Card                     */
  /* ---------------------------------------------------------- */
  const isOutlined = variant === "outlined";

  return (
    <div
      className={`rounded-2xl bg-white-color px-5 py-7 text-center transition-all duration-300 sm:px-6 sm:py-8 ${
        isOutlined
          ? "border-2 border-primary-color/30 hover:border-primary-color"
          : "shadow-sm hover:shadow-md"
      } ${className}`}
    >
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-color/10 text-2xl text-primary-color sm:h-16 sm:w-16 sm:text-3xl">
        {icon}
      </span>

      <h4 className="mt-5 font-heading-font text-lg font-bold text-dark-color">
        {title}
      </h4>
      <span className="mx-auto mt-2 block h-0.5 w-10 rounded-full bg-primary-color" />

      <p className="mt-3 font-body-font text-sm leading-relaxed text-gray-color">
        {description}
      </p>

      <div className="mt-5">
        <Button variant="tertiary" to={to} href={href}>
          {linkText}
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;