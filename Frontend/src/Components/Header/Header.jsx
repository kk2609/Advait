import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../../assets/logo.png";

const services = [
  { label: "SIP Investment", path: "/services/sip-investment" },
  { label: "Systematic Withdraw Plan", path: "/services/systematic-withdraw-plan" },
  { label: "Retirement Planning", path: "/services/retirement-planning" },
  { label: "Goal Planning", path: "/services/goal-planning" },
  { label: "Tax Planning", path: "/services/tax-planning" },
  { label: "Wealth Creation", path: "/services/wealth-creation" },
  { label: "Child Education Planning", path: "/services/child-education-planning" },
  { label: "Wealth Protection", path: "/services/wealth-protection" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const toggleMobileDropdown = (key) => {
    setMobileDropdown((prev) => (prev === key ? null : key));
  };

  const navLinkClass = ({ isActive }) =>
    `relative font-body-font text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "text-primary-color after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-primary-color"
        : "text-dark-color hover:text-primary-color"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full bg-white-color/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-10 xl:px-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Advait Financial Services"
            className="h-10 w-auto object-contain"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-heading-font text-xl font-semibold text-dark-color">
              Advait
            </span>
            <span className="text-[11px] tracking-wide text-gray-color">
              Financial Services
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-align-center gap-8 lg:flex">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About Us
          </NavLink>

          {/* Services dropdown – now a NavLink */}
          <div className="group relative">
            <NavLink
              to="/services"
              end
              className={({ isActive }) =>
                `flex items-center gap-1 ${navLinkClass({ isActive })}`
              }
            >
              Services
              <FaChevronDown className="text-xs transition-transform duration-200 group-hover:rotate-180" />
            </NavLink>
            <div className="invisible absolute left-0 top-full w-60 translate-y-2 rounded-xl bg-white-color p-2 opacity-0 shadow-lg ring-1 ring-black-color/5 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {services.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block rounded-lg px-3 py-2 font-body-font text-sm text-dark-color hover:bg-secondary-color hover:text-primary-color"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <NavLink to="/contact" className={navLinkClass}>
            Contact Us
          </NavLink>
        </nav>

        {/* Right side: CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden rounded-xl bg-primary-color px-6 py-2.5 font-body-font text-sm font-semibold text-white-color shadow-sm transition-colors duration-200 hover:bg-primary-color/90 lg:inline-block"
          >
            Book a Consultation
          </Link>

          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-2xl text-dark-color lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden bg-white-color transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-[520px] border-t border-black-color/5" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          <NavLink
            to="/"
            end
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              `rounded-lg px-3 py-2 font-body-font text-sm font-medium ${
                isActive
                  ? "bg-secondary-color text-primary-color"
                  : "text-dark-color"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              `rounded-lg px-3 py-2 font-body-font text-sm font-medium ${
                isActive
                  ? "bg-secondary-color text-primary-color"
                  : "text-dark-color"
              }`
            }
          >
            About Us
          </NavLink>

          {/* Mobile Services: link + separate toggle */}
          <div className="flex items-center justify-between rounded-lg px-3 py-2">
            <NavLink
              to="/services"
              end
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `font-body-font text-sm font-medium ${
                  isActive
                    ? "text-primary-color"
                    : "text-dark-color"
                }`
              }
            >
              Services
            </NavLink>
            <button
              onClick={() => toggleMobileDropdown("services")}
              className="p-1"
              aria-label="Toggle services submenu"
            >
              <FaChevronDown
                className={`text-xs transition-transform duration-200 ${
                  mobileDropdown === "services" ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
          <div
            className={`overflow-hidden pl-3 transition-all duration-200 ${
              mobileDropdown === "services" ? "max-h-96" : "max-h-0"
            }`}
          >
            {services.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-2 font-body-font text-sm text-gray-color hover:text-primary-color"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <NavLink
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              `rounded-lg px-3 py-2 font-body-font text-sm font-medium ${
                isActive
                  ? "bg-secondary-color text-primary-color"
                  : "text-dark-color"
              }`
            }
          >
            Contact Us
          </NavLink>

          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 rounded-full bg-primary-color px-6 py-2.5 text-center font-body-font text-sm font-semibold text-white-color"
          >
            Book a Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;