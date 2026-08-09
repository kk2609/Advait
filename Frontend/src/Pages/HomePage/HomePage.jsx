import HomeHeroSection from "./HomeHeroSection/HomeHeroSection";
import HomeTrustSection from "./HomeTrustSection/HomeTrustSection";
import HomeAboutSection from "./HomeAboutSection/HomeAboutSection";
import HomeFounderSection from "./HomeFounderSection/HomeFounderSection";
import HomeServicesSection from "./HomeServicesSection/HomeServicesSection";
import HomeJourneySection from "./HomeJourneySection/HomeJourneySection";
import HomeTestimonialsSection from "./HomeTestimonialsSection/HomeTestimonialsSection";

import HomeCTASection from "./HomeCTASection/HomeCTASection";
import ContactForm from "../../Components/ContactForm/ContactForm"

const HomePage = () => {
  return (
    <>
      <HomeHeroSection /> 
      <HomeTrustSection />
      <HomeAboutSection />
      <HomeServicesSection />
      <HomeJourneySection />
      <HomeTestimonialsSection />
      <HomeFounderSection />
      <HomeCTASection />
      <ContactForm />
    </>
  );
};

export default HomePage;
