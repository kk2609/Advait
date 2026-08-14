import React from "react";

import ContactHeroSection from "./ContactHeroSection/ContactHeroSection";
import ContactInfoSection from "./ContactInfoSection/ContactInfoSection";
import ContactFormSection from "./ContactFormSection/ContactFormSection";
import ContactFAQSection from "./ContactFAQSection/ContactFAQSection";
import ContactCTASection from "./ContactCTASection/ContactCTASection";

const ContactPage = () => {
  return (
    <>
      <ContactHeroSection />
      <ContactInfoSection />
      <ContactFormSection />
      <ContactCTASection />
      <ContactFAQSection />
    </>
  );
};

export default ContactPage;
