import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

/**
 * Shared size scale for text buttons (Primary / Secondary).
 */
const SIZE_CLASSES = {
  xs: "px-4 py-2 text-xs gap-1.5",
  sm: "px-5 py-2.5 text-sm gap-2",
  md: "px-6 py-3 text-sm gap-2",
  lg: "px-8 py-4 text-base gap-2.5",
};

/**
 * variant + appearance -> class map, mirrors:
 * 1. Primary Buttons   -> variant="primary"   appearance="solid | gradient | outline | dashed"
 * 2. Secondary Buttons -> variant="secondary" appearance="solid | outline | dashed"
 * 3. Tertiary Buttons  -> variant="tertiary"  appearance="solid" (text-only, use `underline` prop for the underline style)
 */
const APPEARANCE_CLASSES = {
  primary: {
    solid:
      "bg-primary-color text-white-color shadow-sm hover:bg-primary-color/90",
    gradient:
      "bg-gradient-to-r from-primary-color to-[#ff9a56] text-white-color shadow-sm hover:opacity-90",
    outline:
      "border-2 border-primary-color bg-transparent text-primary-color hover:bg-primary-color hover:text-white-color",
    dashed:
      "border-2 border-dashed border-primary-color bg-transparent text-primary-color hover:bg-primary-color/10",
  },
  secondary: {
    solid:
      "bg-white-color text-primary-color shadow-sm hover:bg-white-color/90",
    outline:
      "border-2 border-primary-color bg-white-color text-primary-color hover:bg-secondary-color",
    dashed:
      "border-2 border-dashed border-primary-color bg-white-color text-primary-color hover:bg-secondary-color",
  },
  tertiary: {
    solid: "bg-transparent text-primary-color hover:opacity-80",
  },
};

/**
 * Button
 * Covers Primary / Secondary / Tertiary text buttons, all sizes, icon left/right,
 * loading + disabled states, and renders as <button>, <a>, or router <Link>.
 */
export const Button = ({
  children,
  variant = "primary",
  appearance = "solid",
  size = "md",
  icon = null,
  iconPosition = "right",
  underline = false,
  loading = false,
  disabled = false,
  to,
  href,
  target,
  onClick,
  type = "button",
  className = "",
  ...rest
}) => {
  const isTertiary = variant === "tertiary";

  const baseClasses = isTertiary
    ? `group inline-flex items-center font-body-font font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${
        underline ? "underline underline-offset-4" : ""
      }`
    : "group inline-flex items-center justify-center rounded-lg font-body-font font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50";

  const sizeClasses = isTertiary ? "text-sm gap-2" : SIZE_CLASSES[size];
  const appearanceClasses =
    APPEARANCE_CLASSES[variant]?.[appearance] ||
    APPEARANCE_CLASSES.primary.solid;

  const classes = `${baseClasses} ${sizeClasses} ${appearanceClasses} ${className}`;

  const content = (
    <>
      {iconPosition === "left" && icon && !loading && (
        <span className="flex items-center text-lg">{icon}</span>
      )}

      {loading ? (
        <>
          <AiOutlineLoading3Quarters className="animate-spin text-lg" />
          <span>Loading...</span>
        </>
      ) : (
        <span>{children}</span>
      )}

      {iconPosition === "right" && icon && !loading && (
        <span className="flex items-center text-lg transition-transform duration-200 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </>
  );

  if (to && !disabled && !loading) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href && !disabled && !loading) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
      {...rest}
    >
      {content}
    </button>
  );
};

Button.defaultProps = {
  icon: <FaArrowRight />,
};

/**
 * IconButton
 * Covers section 4 (Icon Buttons) and section 5 (Floating Action Buttons).
 * - appearance="solid"   -> filled circle (Call Now, WhatsApp, Email Us...)
 * - appearance="outline" -> outlined circle (Location, Share, Login...)
 * - pass `bgClassName` to override the fill color for FAB use-cases
 *   (e.g. WhatsApp green, Call blue) instead of the default primary color.
 * - pass `label` to render the caption underneath, matching the reference grid.
 */
export const IconButton = ({
  icon,
  appearance = "solid",
  size = "md",
  label,
  bgClassName,
  to,
  href,
  target,
  onClick,
  className = "",
  ...rest
}) => {
  const SIZE_MAP = {
    sm: "h-10 w-10 text-base",
    md: "h-12 w-12 text-lg sm:h-14 sm:w-14 sm:text-xl",
    lg: "h-16 w-16 text-2xl",
  };

  const appearanceClasses =
    appearance === "outline"
      ? "border-2 border-primary-color bg-transparent text-primary-color hover:bg-primary-color hover:text-white-color"
      : bgClassName ||
        "bg-primary-color text-white-color hover:bg-primary-color/90";

  const classes = `flex shrink-0 items-center justify-center rounded-full shadow-sm transition-all duration-200 hover:scale-105 ${SIZE_MAP[size]} ${appearanceClasses} ${className}`;

  let buttonEl;

  if (to) {
    buttonEl = (
      <Link to={to} aria-label={label} className={classes} {...rest}>
        {icon}
      </Link>
    );
  } else if (href) {
    buttonEl = (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        aria-label={label}
        className={classes}
        {...rest}
      >
        {icon}
      </a>
    );
  } else {
    buttonEl = (
      <button
        type="button"
        onClick={onClick}
        aria-label={label}
        className={classes}
        {...rest}
      >
        {icon}
      </button>
    );
  }

  if (!label) return buttonEl;

  return (
    <div className="flex flex-col items-center gap-2">
      {buttonEl}
      <span className="font-body-font text-xs font-medium text-dark-color sm:text-sm">
        {label}
      </span>
    </div>
  );
};

export default Button;  






// // 1. Primary
// <Button variant="primary" appearance="solid">Book a Consultation</Button>
// <Button variant="primary" appearance="gradient">Book a Consultation</Button>
// <Button variant="primary" appearance="outline">Book a Consultation</Button>
// <Button variant="primary" appearance="dashed">Book a Consultation</Button>

// // 2. Secondary
// <Button variant="secondary" appearance="solid">Learn More</Button>
// <Button variant="secondary" appearance="outline" icon={<FaDownload />} iconPosition="left">Download Brochure</Button>

// // 3. Tertiary / Text
// <Button variant="tertiary">Read More</Button>
// <Button variant="tertiary" underline>Read More</Button>
// <Button variant="tertiary" icon={<FaExternalLinkAlt />}>Know More</Button>

// // Sizes: xs | sm | md | lg  →  size="lg"
// // States: disabled, loading  →  <Button loading>Get Started</Button>
// // Renders as <button>, <a href>, or router <Link to> automatically



// <IconButton icon={<FaPhoneAlt />} label="Call Now" />                          // solid, filled
// <IconButton icon={<FaShareAlt />} appearance="outline" label="Share" />        // outline
// <IconButton icon={<FaWhatsapp />} bgClassName="bg-[#25D366] text-white-color hover:bg-[#25D366]/90" label="WhatsApp" />