
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