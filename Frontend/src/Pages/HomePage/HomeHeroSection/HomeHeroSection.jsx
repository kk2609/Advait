import React from "react";
import { FaArrowRight, FaPlay, FaUsers } from "react-icons/fa";
import { Button } from "../../../Components/Button/Button";
import heroImage from "../../../assets/herosection.png";

const HomeHeroSection = () => {
  return (
    <section className="overflow-hidden bg-secondary-color px-4 pb-16 pt-10 sm:px-6 sm:pb-20 lg:px-10 lg:pt-14">
      <div className="mx-auto grid max-w-[1600px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left — Content */}
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-color/10 px-4 py-1.5 font-body-font text-xs font-bold uppercase tracking-widest text-primary-color">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-color" />
            Plan Today, Prosper Tomorrow
          </span>

          <h1 className="mt-5 font-heading-font text-3xl font-bold leading-tight text-dark-color sm:text-4xl md:text-5xl lg:text-6xl">
            Smart Investments.
            <br />
            Secure Future.
            <br />
            <span className="text-primary-color">Better Life.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-lg font-body-font text-base leading-relaxed text-gray-color sm:text-lg lg:mx-0">
            We help you make informed financial decisions, grow your wealth
            and achieve your life goals with confidence.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Button
              variant="primary"
              appearance="solid"
              size="lg"
              to="/contact"
              icon={<FaArrowRight />}
            >
              Book a Free Consultation
            </Button>
            <Button
              variant="secondary"
              appearance="outline"
              size="lg"
              to="/services"
              icon={<FaPlay />}
              iconPosition="left"
            >
              Explore Our Services
            </Button>
          </div>
        </div>

        {/* Right — Image, rectangular frame + floating stat card */}
        <div className="relative mx-auto w-full max-w-sm pb-10 sm:max-w-md lg:max-w-none lg:pb-14">
          {/* soft background accent */}
          <span className="absolute -right-4 -top-4 -z-10 h-32 w-32 rounded-full bg-primary-color/15 sm:-right-6 sm:-top-6 sm:h-48 sm:w-48 lg:h-64 lg:w-64" />

          {/* rectangular photo frame */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl sm:rounded-3xl">
            <img
              src={heroImage}
              alt="Family planning their financial future with Advait Financial Services"
              className="h-full w-full object-cover"
            />
          </div>

          {/* floating stat card, centered under the image */}
          {/* <div className="absolute -bottom-2 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 rounded-2xl bg-dark-color px-4 py-3 text-white shadow-xl sm:gap-4 sm:px-5 sm:py-4">
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white/10 sm:h-11 sm:w-11">
              <FaUsers className="text-base text-primary-color sm:text-lg" />
            </span>
            <div className="text-left">
              <p className="font-heading-font text-lg font-bold leading-none sm:text-2xl">
                3,200+
              </p>
              <p className="mt-1 font-body-font text-[10px] uppercase tracking-widest text-white/60 sm:text-xs">
                Families Advised
              </p>
            </div>
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white/10 sm:h-11 sm:w-11">
              <FaUsers className="text-base text-primary-color sm:text-lg" />
            </span>
            <div className="text-left">
              <p className="font-heading-font text-lg font-bold leading-none sm:text-2xl">
                ₹250Cr+
              </p>
              <p className="mt-1 font-body-font text-[10px] uppercase tracking-widest text-white/60 sm:text-xs">
                ASSETS GUIDED
              </p>
            </div>
             <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white/10 sm:h-11 sm:w-11">
              <FaUsers className="text-base text-primary-color sm:text-lg" />
            </span>
            <div className="text-left">
              <p className="font-heading-font text-lg font-bold leading-none sm:text-2xl">
                98%
              </p>
              <p className="mt-1 font-body-font text-[10px] uppercase tracking-widest text-white/60 sm:text-xs">
                CLIENT SATISFACTION
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;