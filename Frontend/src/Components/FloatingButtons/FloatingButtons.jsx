import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const WHATSAPP_NUMBER = "9265474210";
const PHONE_NUMBER = "+91 9265474210";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full border-4 border-white-color bg-[#25D366] text-xl text-white-color shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 sm:h-14 sm:w-14 sm:text-2xl"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366]/60" />
        <FaWhatsapp className="relative" />

        <span className="pointer-events-none absolute left-full ml-3 hidden whitespace-nowrap rounded-lg bg-dark-color px-3 py-1.5 font-body-font text-xs font-medium text-white-color opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 sm:block">
          Chat on WhatsApp
        </span>
      </a>

      {/* Call */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        aria-label="Call Us"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full border-4 border-white-color bg-primary-color text-xl text-white-color shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 sm:h-14 sm:w-14 sm:text-2xl"
      >
        <FaPhoneAlt />

        <span className="pointer-events-none absolute left-full ml-3 hidden whitespace-nowrap rounded-lg bg-dark-color px-3 py-1.5 font-body-font text-xs font-medium text-white-color opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 sm:block">
          Call Us
        </span>
      </a>
    </div>
  );
};

export default FloatingButtons;