import React from "react";
import {
  FaChartLine,
  FaUmbrellaBeach,
  FaBullseye,
  FaFileInvoiceDollar,
  FaShieldAlt,
} from "react-icons/fa";
import ServiceCard from "../../../Components/ServiceCard/ServiceCard";
import { Button } from "../../../Components/Button/Button";

const CORE_SERVICES = [
  {
    icon: <FaChartLine />,
    title: "SIP Investment",
    description:
      "Build wealth systematically with disciplined SIP investments.",
    to: "/services/sip-investment",
  },
  {
    icon: <FaUmbrellaBeach />,
    title: "Retirement Planning",
    description: "Plan your secure and financially independent future.",
    to: "/services/retirement-planning",
  },
  {
    icon: <FaBullseye />,
    title: "Goal Planning",
    description: "Plan for your dreams and achieve them on time.",
    to: "/services/goal-planning",
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Tax Planning",
    description: "Save more with smart and efficient tax strategies.",
    to: "/services/tax-planning",
  },
  {
    icon: <FaShieldAlt />,
    title: "Wealth Protection",
    description: "Secure your wealth and protect your family's future.",
    to: "/services/wealth-protection",
  },
];

const HomeServicesSection = () => {
  return (
    <section className="bg-white-color px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading-font text-2xl font-bold text-dark-color sm:text-3xl">
            Our Core Services
          </h2>
          <p className="mt-3 font-body-font text-sm text-gray-color sm:text-base">
            Comprehensive financial solutions to help you achieve your
            dreams.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {CORE_SERVICES.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              to={service.to}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button variant="primary" appearance="solid" to="/services">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeServicesSection;