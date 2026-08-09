import React from "react";
import { Link } from "react-router-dom"; // <-- import Link
import {
  FaCheckCircle,
  FaArrowRight,
  FaPhoneAlt,
} from "react-icons/fa";
import ctaImage from "../../../assets/foundersec.jpg"; // adjust path

const CHECKLIST = [
  {
    title: "Personalized Financial Advice",
    description: "Solutions tailored to your goals and life stage.",
  },
  {
    title: "Expert Guidance",
    description: "Get advice from experienced professionals.",
  },
  {
    title: "Secure Your Future",
    description: "Smart strategies today for a better tomorrow.",
  },
];

const HomeCtaSection = () => {
  return (
    <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-white-color shadow-lg sm:rounded-3xl">
        {/* Main content: left text + right image */}
        <div className="grid grid-cols-1 items-center gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-12">
          {/* Left column */}
          <div className="space-y-6">
            <div>
              <h2 className="font-heading-font text-3xl font-bold leading-tight text-dark-color sm:text-4xl">
                Ready to take the first step?
              </h2>
              <div className="mt-2 h-1 w-12 rounded-full bg-primary-color" />
              <p className="mt-4 font-body-font text-base text-gray-color sm:text-lg">
                Book a free consultation with our financial experts and start
                your journey toward{" "}
                <span className="font-semibold text-primary-color">
                  financial freedom.
                </span>
              </p>
            </div>

            {/* Checklist */}
            <ul className="space-y-4">
              {CHECKLIST.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-green-500 text-green-500">
                    <FaCheckCircle className="text-sm" />
                  </span>
                  <div>
                    <h3 className="font-body-font font-bold text-dark-color">
                      {item.title}
                    </h3>
                    <p className="font-body-font text-sm text-gray-color">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA Button (now a Link) & Phone */}
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary-color px-8 py-3 font-body-font font-semibold text-white-color shadow-md transition hover:bg-primary-color/90 sm:px-10 sm:py-3.5"
              >
                Book a Consultation
                <FaArrowRight className="text-sm" />
              </Link>
              <div className="flex items-center gap-2 text-gray-color">
                <FaPhoneAlt className="text-primary-color" />
                <span className="font-body-font text-sm">
                  Or call us at <br className="hidden sm:inline" />
                  <span className="font-semibold">+91 98765 43210</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right column – image */}
          <div className="relative h-72 w-full overflow-hidden rounded-2xl sm:h-80 lg:h-[420px]">
            <img
              src={ctaImage}
              alt="Financial experts consulting with a client"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCtaSection;