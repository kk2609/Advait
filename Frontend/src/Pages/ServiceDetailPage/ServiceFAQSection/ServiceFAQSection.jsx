// src/Pages/ServiceDetailPage/ServiceFAQSection/ServiceFAQSection.jsx
import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const ServiceFAQSection = ({ service }) => {
  const { faqs } = service;
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2A3B] mb-8 text-center">
          FAQs
        </h2>

        <div className="border-t border-[#1E2A3B]/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-[#1E2A3B]/10">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="text-[#1E2A3B] font-medium text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#E8823C]/10 text-[#E8823C] shrink-0">
                    {isOpen ? (
                      <FiMinus className="w-3.5 h-3.5" strokeWidth={2.5} />
                    ) : (
                      <FiPlus className="w-3.5 h-3.5" strokeWidth={2.5} />
                    )}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed pb-4 pr-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQSection;