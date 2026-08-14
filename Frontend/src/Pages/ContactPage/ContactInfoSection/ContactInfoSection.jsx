// import React from "react";
// import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

// const contactDetails = [
//   {
//     icon: FiMapPin,
//     label: "Address",
//     lines: [
//       "Advait Financial Services",
//       "123, Financial District,",
//       "Ahmedabad, Gujarat - 380009",
//     ],
//   },
//   {
//     icon: FiPhone,
//     label: "Phone",
//     lines: ["+91 98765 43210"],
//   },
//   {
//     icon: FiMail,
//     label: "Email",
//     lines: ["hello@advaitfs.com"],
//   },
//   {
//     icon: FiClock,
//     label: "Office Hours",
//     lines: ["Mon - Sat: 10:00 AM - 6:00 PM", "Sunday: Closed"],
//   },
// ];

// const ContactInfoSection = () => {
//   return (
//     <div className="w-full lg:w-2/5">
//       <h2 className="font-serif text-2xl sm:text-3xl text-[#0B1F3A] mb-8">
//         Contact Information
//       </h2>

//       <div className="space-y-6 mb-8">
//         {contactDetails.map(({ icon: Icon, label, lines }) => (
//           <div key={label} className="flex items-start gap-4">
//             <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center">
//               <Icon size={20} />
//             </span>
//             <div>
//               <p className="text-sm font-semibold text-[#0B1F3A] mb-1">
//                 {label}
//               </p>
//               {lines.map((line, idx) => (
//                 <p key={idx} className="text-sm text-slate-500 leading-relaxed">
//                   {line}
//                 </p>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Office / location preview card */}
//       <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-100">
//         <img
//           src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
//           alt="Advait Financial Services office preview"
//           className="w-full h-32 sm:h-36 object-cover"
//         />
//         <div className="bg-white px-4 py-3">
//           <p className="text-sm font-semibold text-[#0B1F3A]">
//             Advait Financial Services
//           </p>
//           <p className="text-xs text-slate-500">
//             123, Financial District, Ahmedabad - 380009
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactInfoSection;

import React from "react";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

const contactDetails = [
  {
    icon: FiMapPin,
    label: "Address",
    lines: [
      "Advait Financial Services",
      "123, Financial District,",
      "Ahmedabad, Gujarat - 380009",
    ],
  },
  {
    icon: FiPhone,
    label: "Phone",
    lines: ["+91 98765 43210"],
  },
  {
    icon: FiMail,
    label: "Email",
    lines: ["hello@advaitfs.com"],
  },
  {
    icon: FiClock,
    label: "Office Hours",
    lines: ["Mon - Sat: 10:00 AM - 6:00 PM", "Sunday: Closed"],
  },
];

const ContactInfoSection = () => {
  return (
    <div className="max-w-7xl mx-auto text-center  -sm p-6 sm:p-8 lg:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-25">
        {/* Contact details */}
        <div className="lg:col-span-2">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#0B1F3A] mb-8">
            Contact Information
          </h2>

          <div className="space-y-6 text-left">
            {contactDetails.map(({ icon: Icon, label, lines }) => (
              <div key={label} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center">
                  <Icon size={20} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#0B1F3A] mb-1">
                    {label}
                  </p>
                  {lines.map((line, idx) => (
                    <p
                      key={idx}
                      className="text-sm text-slate-500 leading-relaxed"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="lg:col-span-3 flex flex-col">
          <h3 className="text-sm font-semibold text-[#0B1F3A] mb-1">
            Visit Our Office
          </h3>
          <p className="text-xs text-slate-500 mb-4">
            We&apos;d be happy to meet you and understand your financial
            goals in person.
          </p>

          <div className="relative rounded-2xl overflow-hidden border border-slate-100 h-56 sm:h-64 lg:h-full min-h-[16rem]">
            <iframe
              title="Advait Financial Services Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29364.126140080116!2d72.50344959182321!3d23.078207946014057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8332f4fb83db%3A0xa3aa91f921dad281!2sShree%20Bhagwat%20Temple!5e0!3m2!1sen!2sin!4v1786707505093!5m2!1sen!2sin"
              className="w-full h-full border-0 grayscale-[15%] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="absolute bottom-3 left-3 bg-white rounded-xl shadow-md px-3.5 py-2.5 flex items-center gap-2.5 max-w-[85%]">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center">
                <FiMapPin size={16} />
              </span>
              <div>
                <p className="text-xs font-semibold text-[#0B1F3A]">
                  Advait Financial Services
                </p>
                <p className="text-[11px] text-slate-500">
                  123, Financial District, Ahmedabad
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;



