import React from "react";
import { Link } from "react-router-dom";
import ctaImage from "../../../assets/journey.jpg"; // adjust path

const AboutCTASection = () => {
  return (
    <section className="bg-white-color px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-2xl bg-primary-color/10 sm:rounded-3xl">
        <div className="grid grid-cols-1 items-center gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10">
          {/* Left — Text */}
          <div>
            <h2 className="font-heading-font text-xl font-bold leading-tight text-dark-color sm:text-2xl lg:text-3xl">
              Let&apos;s Build Your Financial Future
            </h2>
            <p className="mt-3 font-body-font text-sm text-gray-color sm:text-base">
              Connect with us and experience the Advait difference.
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center rounded-full bg-primary-color px-6 py-3 font-body-font text-sm font-semibold text-white-color shadow-md transition hover:bg-primary-color/90 sm:px-8"
            >
              Book a Free Consultation
            </Link>
          </div>

          {/* Right — Image */}
          <div className="relative h-56 w-full overflow-hidden rounded-2xl sm:h-64 lg:h-72">
            <img
              src={ctaImage}
              alt="Advait Financial Services team working with a client"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTASection;