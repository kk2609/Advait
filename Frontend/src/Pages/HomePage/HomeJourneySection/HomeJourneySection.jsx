import React from "react";
import {
  FaComments,
  FaClipboardList,
  FaWallet,
  FaSyncAlt,
  FaFlagCheckered,
} from "react-icons/fa";
import heroImage from "../../../assets/hero.png";

const STEPS = [
  {
    icon: <FaComments />,
    title: "Understand",
    description: "We understand your goals and needs.",
  },
  {
    icon: <FaClipboardList />,
    title: "Plan",
    description: "We create a personalized financial plan.",
  },
  {
    icon: <FaWallet />,
    title: "Invest",
    description: "We help you invest wisely to grow.",
  },
  {
    icon: <FaSyncAlt />,
    title: "Review",
    description: "We regularly optimize your portfolio.",
  },
  {
    icon: <FaFlagCheckered />,
    title: "Achieve",
    description: "You achieve financial freedom.",
  },
];

const HomeJourneySection = () => {
  return (
    <section className="bg-secondary-color px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <img
            src={heroImage}
            alt="Advisors reviewing a client's financial plan"
            className="w-full rounded-3xl object-cover shadow-lg"
          />

          <div>
            <span className="font-body-font text-xs font-bold uppercase tracking-widest text-primary-color">
              Your Journey to Financial Freedom
            </span>
            <h2 className="mt-3 font-heading-font text-2xl font-bold text-dark-color sm:text-3xl">
              Our 5-Step Proven Process
            </h2>
            <p className="mt-3 font-body-font text-sm leading-relaxed text-gray-color sm:text-base">
              A simple, transparent and effective approach to growing your
              financial future.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {STEPS.map((step, index) => (
            <div key={step.title} className="flex flex-col items-center text-center">
              <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary-color text-xl text-white-color">
                {step.icon}
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-dark-color font-body-font text-[10px] font-bold text-white-color">
                  {index + 1}
                </span>
              </span>
              <h3 className="mt-4 font-body-font text-sm font-bold text-dark-color">
                {step.title}
              </h3>
              <p className="mt-1 font-body-font text-xs text-gray-color">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeJourneySection;