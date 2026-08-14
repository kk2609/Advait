import React from "react";
import { Link } from "react-router-dom";
import {
  FaMapSigns,
  FaLeaf,
  FaArrowLeft,
  FaArrowRight,
  FaHome,
} from "react-icons/fa";
import logoImage from "../../assets/404.png"; // adjust path if needed

const PageNotFound = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-[#FFF8F1] px-4 py-14 text-center sm:py-20">
      <div className="mx-auto w-full max-w-sm sm:max-w-md">
        {/* Logo as image */}
        <Link to="/" className="inline-block">
          <img
            src={logoImage}
            alt="Advait Financial Services"
            className="mx-auto h-auto w-32 sm:w-40 md:w-48"
          />
        </Link>

        {/* Illustration (unchanged) */}
        <div className="relative mx-auto mt-10 flex h-56 w-56 items-center justify-center rounded-full bg-primary-color/15 sm:mt-14 sm:h-72 sm:w-72">
          {/* Leaves — left */}
          <div className="absolute -left-4 bottom-5 flex items-end gap-1 sm:-left-6">
            <FaLeaf className="-rotate-[15deg] text-2xl text-primary-color/70 sm:text-3xl" />
            <FaLeaf className="rotate-6 text-lg text-gray-400/70 sm:text-xl" />
          </div>

          {/* Leaves — right */}
          <div className="absolute -right-4 bottom-5 flex items-end gap-1 sm:-right-6">
            <FaLeaf className="rotate-6 text-lg text-gray-400/70 sm:text-xl" />
            <FaLeaf className="rotate-[15deg] text-2xl text-primary-color/70 sm:text-3xl" />
          </div>

          {/* LEFT arrow + "THIS WAY" */}
          <div className="absolute -left-12 top-1/2 flex -translate-y-1/2 flex-col items-center sm:-left-16">
            <FaArrowLeft className="text-xl text-dark-color/60 sm:text-2xl" />
            <span className="mt-1 font-body-font text-[10px] font-semibold uppercase tracking-wider text-dark-color/60 sm:text-xs">
              THIS WAY
            </span>
          </div>

          {/* RIGHT arrow + "THAT WAY" */}
          <div className="absolute -right-12 top-1/2 flex -translate-y-1/2 flex-col items-center sm:-right-16">
            <FaArrowRight className="text-xl text-dark-color/60 sm:text-2xl" />
            <span className="mt-1 font-body-font text-[10px] font-semibold uppercase tracking-wider text-dark-color/60 sm:text-xs">
              THAT WAY
            </span>
          </div>

          {/* "HOME" label at bottom of signpost */}
          <div className="absolute bottom-2 flex flex-col items-center sm:bottom-4">
            <FaHome className="text-xs text-primary-color/70 sm:text-sm" />
            <span className="font-body-font text-[10px] font-semibold uppercase tracking-wider text-primary-color/70 sm:text-xs">
              HOME
            </span>
          </div>

          {/* Main signpost */}
          <FaMapSigns className="relative z-10 text-6xl text-dark-color sm:text-7xl" />
        </div>

        {/* Ground line */}
        <div className="mx-auto mt-4 h-px w-32 bg-dark-color/15 sm:w-44" />

        {/* Text content */}
        <h1 className="mt-8 font-heading-font text-6xl font-extrabold leading-none text-primary-color sm:mt-10 sm:text-7xl">
          404
        </h1>
        <h2 className="mt-3 font-heading-font text-xl font-bold text-dark-color sm:text-2xl">
          Page Not Found
        </h2>
        <p className="mx-auto mt-4 max-w-xs font-body-font text-sm leading-relaxed text-gray-color sm:text-base">
          Oops! Looks like you took a wrong turn. Let&apos;s get you back on
          track.
        </p>

        <Link
          to="/"
          className="mt-7 inline-flex items-center rounded-full bg-primary-color px-8 py-3 font-body-font font-semibold text-white-color shadow-md transition hover:bg-primary-color/90 sm:px-10"
        >
          Go to Homepage
        </Link>
      </div>
    </section>
  );
};

export default PageNotFound;