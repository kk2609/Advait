import React from "react";
import FAQ from "../../../Components/FAQ/FAQ";

const SERVICES_FAQS = [
  {
    question: "How do I know which service is right for me?",
    answer:
      "Every plan starts with understanding your goals, income and risk appetite. Book a free consultation and our expert will recommend the right mix of services for you.",
  },
  {
    question: "Do you charge for the initial consultation?",
    answer:
      "No, the first consultation is completely free with no obligation to proceed.",
  },
  {
    question: "Can I combine multiple services, like SIP and Tax Planning?",
    answer:
      "Yes, most clients use a combination of services. We build a single integrated plan that covers all your financial goals together.",
  },
  {
    question: "How often will my plan be reviewed?",
    answer:
      "We review your portfolio regularly and reach out proactively whenever your plan needs to be rebalanced or optimized.",
  },
];

const ServicesFAQSection = () => {
  return (
    <section className="bg-secondary-color px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center font-heading-font text-2xl font-bold text-dark-color sm:text-3xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-center font-body-font text-sm text-gray-color sm:text-base">
          Answers to common questions about our services.
        </p>

        <div className="mt-10">
          <FAQ items={SERVICES_FAQS} />
        </div>
      </div>
    </section>
  );
};

export default ServicesFAQSection;