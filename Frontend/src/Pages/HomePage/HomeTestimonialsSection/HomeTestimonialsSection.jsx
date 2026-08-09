import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const TESTIMONIALS = [
  {
    quote:
      "Advait is regularly transparent and disciplined. My portfolio has never performed better and I finally feel in control of my future.",
    name: "Rajesh Mehta",
    role: "Business Owner",
  },
  {
    quote:
      "We finally have a solid financial plan that keeps us on track and gives real peace of mind about our family's future.",
    name: "Priya & Nilesh",
    role: "Working Professionals",
  },
  {
    quote:
      "Professional, knowledgeable and reliable — I've been investing with them for years and highly recommend their guidance.",
    name: "Amit Patel",
    role: "Entrepreneur",
  },
];

const HomeTestimonialsSection = () => {
  return (
    <section className="bg-white-color px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <h2 className="text-center font-heading-font text-2xl font-bold text-dark-color sm:text-3xl">
          Trusted by Families. Proven by Results.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col rounded-2xl bg-secondary-color p-6 sm:p-7"
            >
              <div className="flex items-center gap-1 text-primary-color">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="text-sm" />
                ))}
              </div>

              <FaQuoteLeft className="mt-4 text-xl text-primary-color/25" />

              <p className="mt-3 flex-1 font-body-font text-sm leading-relaxed text-dark-color/80">
                {testimonial.quote}
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-color/15 font-heading-font text-base font-bold text-primary-color">
                  {testimonial.name.charAt(0)}
                </span>
                <div>
                  <span className="block font-body-font text-sm font-bold text-dark-color">
                    {testimonial.name}
                  </span>
                  <span className="block font-body-font text-xs text-gray-color">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonialsSection;