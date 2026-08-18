// src/Pages/ServiceDetailPage/ServiceDetailPage.jsx
import React from "react";
import { useParams } from "react-router-dom";

import services from "../../Data/services";

import ServiceDetailHeroSection from "./ServiceDetailHeroSection/ServiceDetailHeroSection";
import ServiceOverviewSection from "./ServiceOverviewSection/ServiceOverviewSection";
import ServiceBenefitsSection from "./ServiceBenefitsSection/ServiceBenefitsSection";
import ServiceProcessSection from "./ServiceProcessSection/ServiceProcessSection";
import ServiceWhoShouldChooseSection from "./ServiceWhoShouldChooseSection/ServiceWhoShouldChooseSection";
import ServiceFAQSection from "./ServiceFAQSection/ServiceFAQSection";
import ServiceCTASection from "./ServiceCTASection/ServiceCTASection";

// Reuse your existing 404 page
import PageNotFound from "../PageNotFound/PageNotFound";

const ServiceDetailPage = () => {
  const { serviceSlug } = useParams(); // matches your route: /services/:serviceSlug

  const service = services.find((item) => item.slug === serviceSlug);

  if (!service) {
    return <PageNotFound />;
  }

  return (
    <>
      <ServiceDetailHeroSection service={service} />
      <ServiceOverviewSection service={service} />
      <ServiceBenefitsSection service={service} />
      <ServiceProcessSection service={service} />
      <ServiceWhoShouldChooseSection service={service} />
      <ServiceFAQSection service={service} />
      <ServiceCTASection service={service} />
    </>
  );
};

export default ServiceDetailPage;