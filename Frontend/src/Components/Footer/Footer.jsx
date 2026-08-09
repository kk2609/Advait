import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaChevronRight,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Resources", path: "/resources" },
  { label: "Contact Us", path: "/contact" },
];

const ourServices = [
  { label: "SIP Investment", path: "/services/sip-investment" },
  { label: "Mutual Funds", path: "/services/mutual-funds" },
  { label: "Financial Planning", path: "/services/financial-planning" },
  { label: "Tax Planning", path: "/services/tax-planning" },
  { label: "Wealth Protection", path: "/services/wealth-protection" },
];

const resources = [
  { label: "Financial Insights", path: "/resources" },
  { label: "Guides & Blogs", path: "/resources/guides-blogs" },
  { label: "Market Updates", path: "/resources/market-updates" },
  { label: "FAQs", path: "/resources/faqs" },
  { label: "Calculators", path: "/resources/calculators" },
];

const socialLinks = [
  { icon: <FaFacebookF />, url: "https://facebook.com", label: "Facebook" },
  { icon: <FaLinkedinIn />, url: "https://linkedin.com", label: "LinkedIn" },
  { icon: <FaInstagram />, url: "https://instagram.com", label: "Instagram" },
  { icon: <FaYoutube />, url: "https://youtube.com", label: "YouTube" },
];

const FooterLinkList = ({ title, links }) => (
  <div>
    <h4 className="mb-6 font-heading-font text-lg font-semibold text-primary-color">
      {title}
    </h4>
    <ul className="space-y-3">
      {links.map((item) => (
        <li key={item.path}>
          <Link
            to={item.path}
            className="group flex items-center gap-2 font-body-font text-sm text-white-color/80 transition-colors duration-200 hover:text-primary-color"
          >
            <FaChevronRight className="text-[10px] text-primary-color transition-transform duration-200 group-hover:translate-x-1" />
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="w-full bg-black-color px-4 py-4 sm:px-6 md:py-12 lg:px-14">
      <div className="mx-auto max-w-[1600px]">
        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Logo + About + Social */}
          <div className="lg:col-span-3">
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-color/15 text-2xl text-primary-color">
                <IoMdTrendingUp />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-heading-font text-2xl font-semibold text-white-color">
                  Advait
                </span>
                <span className="text-xs tracking-wide text-white-color/70">
                  Financial Services
                </span>
              </span>
            </Link>

            <div className="mt-4 h-[3px] w-14 rounded-full bg-primary-color" />

            <p className="mt-5 font-body-font text-sm leading-relaxed text-white-color/70">
              Smart investments. Secure future. We help you make informed
              financial decisions, grow your wealth and achieve your life
              goals with confidence.
            </p>

            {/* <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white-color/10 text-white-color transition-colors duration-200 hover:bg-primary-color"
                >
                  {social.icon}
                </a>
              ))}
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:border-l lg:border-white-color/10 lg:pl-8">
            <FooterLinkList title="Quick Links" links={quickLinks} />
          </div>

          {/* Our Services */}
          <div className="lg:col-span-2 lg:border-l lg:border-white-color/10 lg:pl-8">
            <FooterLinkList title="Our Services" links={ourServices} />
          </div>

          {/* Resources */}
          {/* <div className="lg:col-span-2 lg:border-l lg:border-white-color/10 lg:pl-8">
            <FooterLinkList title="Resources" links={resources} />
          </div> */}

          {/* Contact Us */}
          <div className="lg:col-span-3 lg:border-l lg:border-white-color/10 lg:pl-8">
            <h4 className="mb-6 font-heading-font text-lg font-semibold text-primary-color">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-color/15 text-primary-color">
                  <FaPhoneAlt className="text-sm" />
                </span>
                <a
                  href="tel:+919876543210"
                  className="font-body-font text-sm text-white-color/80 hover:text-primary-color"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-color/15 text-primary-color">
                  <FaEnvelope className="text-sm" />
                </span>
                <a
                  href="mailto:hello@advaitfs.com"
                  className="font-body-font text-sm text-white-color/80 hover:text-primary-color"
                >
                  hello@advaitfs.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-color/15 text-primary-color">
                  <FaMapMarkerAlt className="text-sm" />
                </span>
                <span className="font-body-font text-sm leading-relaxed text-white-color/80">
                  201, Financial District, Ahmedabad - 380060, Gujarat, India
                </span>
              </li>
              {/* <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-color/15 text-primary-color">
                  <FaClock className="text-sm" />
                </span>
                <span className="font-body-font text-sm leading-relaxed text-white-color/80">
                  Mon - Sat : 10:00 AM - 6:00 PM
                  <br />
                  Sunday : Closed
                </span>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col gap-6 border-t border-white-color/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-body-font text-sm text-white-color/70">
            © 2026 Advait Financial Services. All Rights Reserved.
          </p>

          <div className="flex items-center gap-3">
            <FaShieldAlt className="text-2xl shrink-0 text-primary-color" />
            <p className="font-body-font text-xs leading-relaxed text-white-color/70 sm:text-sm">
              Mutual Fund investments are subject to market risks, read all
              scheme related documents carefully before investing.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-body-font text-sm font-medium text-white-color">
            <Link to="/privacy-policy" className="hover:text-primary-color">
              Privacy Policy
            </Link>
            <span className="text-white-color/30">|</span>
            <Link
              to="/terms-and-conditions"
              className="hover:text-primary-color"
            >
              Terms & Conditions
            </Link>
            <span className="text-white-color/30">|</span>
            <Link to="/disclaimer" className="hover:text-primary-color">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;