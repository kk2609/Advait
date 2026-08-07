import React from "react";
import { IoMdTrendingUp } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

/**
 * Loader
 * Full-page loading screen — shown while the app / route / data is loading.
 * Brand ring spinner (pure CSS border, no images) rotating around the logo mark.
 */
const Loader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-secondary-color">
      <div className="relative flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28">
        {/* Spinning ring */}
        <span className="absolute inset-0 animate-spin rounded-full border-4 border-primary-color/15 border-t-primary-color" />

        {/* Logo mark */}
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-color/10 text-3xl text-primary-color sm:h-16 sm:w-16 sm:text-4xl">
          <IoMdTrendingUp />
        </span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="font-heading-font text-xl font-semibold text-dark-color sm:text-2xl">
          Advait
        </span>
        <span className="animate-pulse font-body-font text-xs tracking-wide text-gray-color sm:text-sm">
          Loading, please wait...
        </span>
      </div>
    </div>
  );
};

/**
 * Spinner
 * Small inline spinner for buttons, cards, or section-level loading states.
 * sizes: sm | md | lg
 */
export const Spinner = ({ size = "md", className = "" }) => {
  const SIZE_MAP = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl",
  };

  return (
    <AiOutlineLoading3Quarters
      className={`animate-spin text-primary-color ${SIZE_MAP[size]} ${className}`}
    />
  );
};

export default Loader;