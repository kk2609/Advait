import React from "react";
import { FaQuoteLeft, FaUserTie } from "react-icons/fa";
import { Button } from "../../../Components/Button/Button";

const HomeFounderSection = () => {
  return (
    <section className="bg-secondary-color px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 rounded-3xl bg-white-color p-8 shadow-sm sm:p-12 lg:grid-cols-[auto_1fr] lg:gap-14">
        {/* Avatar placeholder */}
        <div className="mx-auto flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-primary-color/10 text-5xl text-primary-color sm:h-40 sm:w-40 sm:text-6xl">
          <FaUserTie />
        </div>

        {/* Quote */}
        <div className="text-center lg:text-left">
          <FaQuoteLeft className="mx-auto text-2xl text-primary-color/30 lg:mx-0" />
          <p className="mt-4 font-heading-font text-xl italic leading-relaxed text-dark-color sm:text-2xl">
            We believe wealth is not just about money, it's about freedom,
            peace of mind and a better life for you and your loved ones.
          </p>

          <div className="mt-6">
            <span className="block font-body-font text-base font-bold text-dark-color">
              Aashit Shah
            </span>
            <span className="block font-body-font text-sm text-gray-color">
              Founder & Wealth Advisor
            </span>
          </div>

          <div className="mt-6">
            <Button variant="tertiary" to="/about">
              Read Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFounderSection;