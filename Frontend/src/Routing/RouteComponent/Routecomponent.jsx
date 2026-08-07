import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout Components
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
import FloatingButtons from "../../Components/FloatingButtons/FloatingButtons";

// Page Components
import HomePage from "../../Pages/HomePage/HomePage";
import AboutPage from "../../Pages/AboutPage/AboutPage";
import ServicesPage from "../../Pages/ServicesPage/ServicesPage";
import ServiceDetailPage from "../../Pages/ServiceDetailPage/ServiceDetailPage";
import ContactPage from "../../Pages/ContactPage/ContactPage";
import PrivacyPolicyPage from "../../Pages/PrivacyPolicyPage/PrivacyPolicyPage";
import TermsConditionsPage from "../../Pages/TermsConditionsPage/TermsConditionsPage";
import PageNotFound from "../../Pages/PageNotFound/PageNotFound";

const WebSiteLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

const RouteComponent = () => {
  return (
    <>
      <ScrollToTop />
      <FloatingButtons />
      <Routes>
        {/* --- Core Pages --- */}
        <Route path="/" element={<WebSiteLayout><HomePage /></WebSiteLayout>} />
        <Route path="/about" element={<WebSiteLayout><AboutPage /></WebSiteLayout>} />
        <Route path="/services" element={<WebSiteLayout><ServicesPage /></WebSiteLayout>} />
        <Route path="/services/:serviceSlug" element={<WebSiteLayout><ServiceDetailPage /></WebSiteLayout>} />
        <Route path="/contact" element={<WebSiteLayout><ContactPage /></WebSiteLayout>} />
        <Route path="/privacy-policy" element={<WebSiteLayout><PrivacyPolicyPage /></WebSiteLayout>} />
        <Route path="/terms-and-conditions" element={<WebSiteLayout><TermsConditionsPage /></WebSiteLayout>} />

        {/* --- Fallback --- */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default RouteComponent;