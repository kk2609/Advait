import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaChevronRight,
  FaFileContract,
  FaGavel,
  FaBalanceScale,
  FaHandshake,
  FaCheckCircle,
} from "react-icons/fa";
import termsImage from "../../assets/terms-conditions.png"; // adjust path if needed

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using the Advait Financial Services website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any of these terms, please discontinue your use of the website and its services.",
  },
  {
    title: "2. Use of Website",
    content:
      "This website is provided for general informational purposes and to help visitors learn about Advait Financial Services and its financial services. You agree to use this website only for lawful purposes and not to use it in any manner that may damage, disable, overburden, or interfere with the website or its proper functioning.",
  },
  {
    title: "3. Financial Information Disclaimer",
    content:
      "The information provided on this website is for general informational and educational purposes only and should not be considered personalized financial, investment, tax, or legal advice. Information relating to mutual funds, SIPs, financial planning, wealth management, and other investment products may not be suitable for every individual. You should consider your financial objectives, risk profile, and circumstances and seek appropriate professional advice before making investment decisions.",
  },
  {
    title: "4. Investment Risk",
    content:
      "Investments in mutual funds and other market-linked products are subject to market risks and may involve the risk of loss of capital. Past performance is not indicative of future results. No representation or guarantee is made regarding the future performance, return, or outcome of any investment. Investors should carefully review all relevant scheme-related documents and understand the associated risks before investing.",
  },
  {
    title: "5. Accuracy of Information",
    content:
      "We make reasonable efforts to keep the information presented on this website accurate and up to date. However, information may change over time and we do not guarantee that all content will always be complete, current, or free from errors or omissions. You should independently verify important information before relying on it for any financial decision.",
  },
  {
    title: "6. Intellectual Property",
    content:
      "All content available on this website, including text, logos, graphics, images, icons, designs, illustrations, and other materials, is owned by or licensed to Advait Financial Services unless otherwise stated. Such content may not be copied, reproduced, modified, distributed, published, or used for commercial purposes without our prior written permission.",
  },
  {
    title: "7. User Responsibilities",
    content:
      "You are responsible for providing accurate and complete information when submitting an enquiry, requesting a consultation, or communicating with us through the website. You agree not to misuse the website, attempt unauthorized access, introduce malicious code, interfere with website security, or use the website for any unlawful or fraudulent purpose.",
  },
  {
    title: "8. Third-Party Links",
    content:
      "Our website may contain links to third-party websites, platforms, or resources for your convenience. These external websites are not controlled by Advait Financial Services, and we are not responsible for their content, accuracy, availability, security, or privacy practices. Accessing third-party websites is at your own discretion and risk.",
  },
  {
    title: "9. Limitation of Liability",
    content:
      "To the extent permitted by applicable law, Advait Financial Services shall not be liable for any direct, indirect, incidental, consequential, or other loss arising from your use of this website, reliance on information provided through the website, interruption of website services, or investment decisions made based on general information available on the website.",
  },
  {
    title: "10. Indemnification",
    content:
      "You agree to indemnify and hold harmless Advait Financial Services, its directors, employees, representatives, and service providers from claims, liabilities, damages, losses, or expenses arising from your misuse of the website, violation of these Terms and Conditions, or infringement of the rights of any third party.",
  },
  {
    title: "11. Changes to These Terms",
    content:
      "Advait Financial Services reserves the right to update or modify these Terms and Conditions from time to time to reflect changes in our services, business practices, technology, or applicable laws and regulations. Any revised terms will be published on this page. Your continued use of the website after such changes are published will constitute your acceptance of the updated terms.",
  },
  {
    title: "12. Governing Law and Contact",
    content:
      "These Terms and Conditions shall be governed by and interpreted in accordance with the applicable laws of India. Any disputes arising in connection with these terms shall be subject to the jurisdiction of the competent courts applicable to Advait Financial Services. If you have any questions regarding these Terms and Conditions, please contact us using the contact information provided on our website.",
  },
];
const TermsConditionsPage = () => {
  return (
    <>
      {/* Hero Section — full-bleed, no rounded container */}
      <section className="relative w-full overflow-hidden bg-secondary-color">
        {/* Decorative dot grid */}
        <div className="absolute right-[8%] top-10 z-10 hidden grid-cols-6 gap-2 lg:right-[38%] lg:grid">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className="h-1 w-1 rounded-full bg-primary-color/40"
            />
          ))}
        </div>

        {/* Decorative wave lines — bottom left */}
        <svg
          aria-hidden="true"
          viewBox="0 0 400 160"
          className="pointer-events-none absolute bottom-0 left-0 hidden w-72 opacity-40 sm:block lg:w-96"
        >
          <path
            d="M0 120 Q60 90 120 120 T240 120 T360 120"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary-color/30"
          />
          <path
            d="M0 145 Q60 115 120 145 T240 145 T360 145"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary-color/20"
          />
        </svg>

        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
            {/* Left — Text */}
            <div className="relative z-10 px-5 py-10 text-center sm:px-8 sm:py-14 lg:px-14 lg:py-24 lg:text-left xl:px-20">
              {/* Breadcrumb */}
              <div className="flex items-center justify-center gap-2 font-body-font text-sm text-dark-color lg:justify-start">
                {/* <FaHome className="text-primary-color" />
                <Link to="/" className="transition-colors hover:text-primary-color">
                  Home
                </Link>
                <FaChevronRight className="text-xs text-gray-color" />
                <span className="font-semibold text-primary-color">
                  Terms &amp; Conditions
                </span> */}
              </div>

              <h1 className="mt-6 font-heading-font text-4xl font-bold leading-tight text-dark-color sm:text-5xl lg:text-6xl">
                Terms &amp; Conditions
              </h1>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary-color lg:mx-0" />

              <p className="mx-auto mt-6 max-w-md text-justify font-body-font text-sm leading-relaxed text-gray-color [text-align-last:center] hyphens-auto sm:text-base lg:mx-0 lg:[text-align-last:left]">
                Please read these Terms and Conditions carefully before using
                our website or services. They explain your rights,
                responsibilities, and the terms that apply when you interact
                with Advait Financial Services.
              </p>
            </div>

            {/* Right — Image with curved edge & floating badges */}
            <div className="relative h-64 w-full sm:h-96 lg:h-auto lg:aspect-[4/3] lg:max-h-[560px]">
              <div className="absolute inset-0 overflow-hidden rounded-2xl lg:rounded-l-[180px] xl:rounded-l-[240px]">
                <img
                  src={termsImage}
                  alt="Signing a contract representing terms and conditions of service"
                  className="h-full w-full object-fit p-4 sm:p-6 lg:p-8 xl:p-10 rounded-2xl"
                />
              </div>

              {/* Orbit arc */}
              {/* <svg
                aria-hidden="true"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
              >
                <circle
                  cx="8"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke="white"
                  strokeOpacity="0.6"
                  strokeWidth="0.3"
                />
              </svg> */}

              {/* Floating badges — responsive sizing */}
              {/* <span className="absolute left-[6%] top-[16%] flex h-8 w-8 items-center justify-center rounded-full bg-primary-color text-sm text-white-color shadow-lg sm:h-12 sm:w-12 sm:text-lg lg:h-16 lg:w-16 lg:text-2xl">
                <FaFileContract />
              </span>
              <span className="absolute right-[16%] top-[6%] flex h-8 w-8 items-center justify-center rounded-full bg-white-color text-sm text-primary-color shadow-lg sm:h-12 sm:w-12 sm:text-lg lg:h-16 lg:w-16 lg:text-2xl">
                <FaGavel />
              </span>
              <span className="absolute right-[2%] top-[40%] flex h-8 w-8 items-center justify-center rounded-full bg-white-color text-sm text-primary-color shadow-lg sm:h-12 sm:w-12 sm:text-lg lg:h-14 lg:w-14 lg:text-xl">
                <FaBalanceScale />
              </span>
              <span className="absolute bottom-[14%] left-[2%] flex h-8 w-8 items-center justify-center rounded-full bg-white-color text-sm text-primary-color shadow-lg sm:h-12 sm:w-12 sm:text-lg lg:h-14 lg:w-14 lg:text-xl">
                <FaHandshake />
              </span>
              <span className="absolute bottom-[8%] right-[10%] flex h-8 w-8 items-center justify-center rounded-full bg-white-color text-sm text-primary-color shadow-lg sm:h-12 sm:w-12 sm:text-lg lg:h-14 lg:w-14 lg:text-xl">
                <FaCheckCircle />
              </span> */}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white-color px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="font-body-font text-sm leading-relaxed text-gray-color sm:text-base">
            These Terms and Conditions set out the rules and guidelines
            governing your access to and use of the Advait Financial Services
            website. Please read them carefully before using our website or
            submitting any enquiry or service request.
          </p>

          <div className="mt-10 space-y-8 sm:mt-12 sm:space-y-10">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="font-heading-font text-lg font-bold text-dark-color sm:text-xl">
                  {section.title}
                </h2>
                <p className="mt-2 text-justify font-body-font text-sm leading-relaxed text-gray-color [text-align-last:left] hyphens-auto sm:text-base">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-14 max-w-2xl text-center font-body-font text-xs font-bold italic leading-relaxed text-dark-color sm:mt-16 sm:text-sm">
            &quot;Mutual Fund investments are subject to market risks, read all
            scheme related documents carefully before investing.&quot;
          </p>
        </div>
      </section>
    </>
  );
};

export default TermsConditionsPage;
