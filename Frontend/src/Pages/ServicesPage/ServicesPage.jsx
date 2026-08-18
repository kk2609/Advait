import ServicesHeroSection from "./ServicesHeroSection/ServicesHeroSection";
import ServicesOverviewSection from "./ServicesOverviewSection/ServicesOverviewSection";
import ServicesGridSection from "./ServicesGridSection/ServicesGridSection";
import ServicesProcessSection from "./ServicesProcessSection/ServicesProcessSection";
import ServicesCTASection from "./ServicesCTASection/ServicesCTASection";

const ServicesPage = () => {
  return (
    <>
      <ServicesHeroSection />
      <ServicesProcessSection />
      <ServicesOverviewSection />
      <ServicesGridSection />
      <ServicesCTASection />

      {/* <p className="mx-auto max-w-2xl px-4 py-10 text-center font-body-font text-xs italic leading-relaxed text-gray-color sm:text-sm">
        Mutual Fund investments are subject to market risks, read all
        scheme related documents carefully before investing.
      </p> */}
    </>
  );
};

export default ServicesPage;