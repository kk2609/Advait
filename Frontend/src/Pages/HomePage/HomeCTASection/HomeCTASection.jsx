import React from "react";
import FAQ from "../../../Components/FAQ/FAQ";

const HOME_FAQS = [
  {
    question: "What is a SIP?",
    answer:
      "A Systematic Investment Plan (SIP) lets you invest a fixed amount regularly in mutual funds, helping you build wealth steadily through the power of compounding.",
  },
  {
    question: "What is the minimum amount for SIP?",
    answer:
      "You can start a SIP with as little as ₹500 per month, depending on the mutual fund scheme you choose.",
  },
  {
    question: "Can I stop or modify my SIP?",
    answer:
      "Yes, SIPs are flexible. You can pause, stop, increase, or decrease your SIP amount at any time without penalty.",
  },
  {
    question: "How long should I continue my SIP?",
    answer:
      "SIPs work best when continued for the long term — ideally 5 years or more — to ride out market volatility and maximize compounding.",
  },
];

const HomeFAQSection = () => {
  return (
    <section className="bg-secondary-color px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-heading-font text-2xl font-bold text-dark-color sm:text-3xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-center font-body-font text-sm text-gray-color sm:text-base">
          Answers to the questions we hear most often from our clients.
        </p>

        <div className="mt-10">
          <FAQ items={HOME_FAQS} />
        </div>
      </div>
    </section>
  );
};

export default HomeFAQSection;