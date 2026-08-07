// import React, { useState, useRef, useEffect } from 'react'
// import {
//   FiUser,
//   FiMail,
//   FiPhone,
//   FiBriefcase,
//   FiChevronDown,
//   FiEdit3,
//   FiSend,
//   FiLock,
//   FiCalendar,
//   FiShield,
//   FiTrendingUp,
// } from 'react-icons/fi'

// const SERVICES = [
//   'SIP Investment',
//   'Mutual Funds',
//   'Financial Planning',
//   'Tax Planning',
//   'Retirement Planning',
//   'Wealth Management',
//   'Insurance Planning',
//   'Goal Planning',
//   'Portfolio Review',
//   'Other (Please specify)',
// ]

// const FEATURES = [
//   {
//     icon: FiCalendar,
//     title: 'Book a Free Consultation',
//     desc: 'Schedule a one-on-one session with our financial experts.',
//   },
//   {
//     icon: FiShield,
//     title: '100% Confidential',
//     desc: 'Your information is secure and always protected.',
//   },
//   {
//     icon: FiTrendingUp,
//     title: 'Expert Guidance',
//     desc: 'Get tailored advice for your unique financial goals.',
//   },
// ]

// const ContactForm = () => {
//   const [form, setForm] = useState({
//     fullName: '',
//     email: '',
//     mobile: '',
//     company: '',
//     service: '',
//     message: '',
//   })
//   const [serviceOpen, setServiceOpen] = useState(false)
//   const dropdownRef = useRef(null)

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setServiceOpen(false)
//       }
//     }
//     document.addEventListener('mousedown', handleClickOutside)
//     return () => document.removeEventListener('mousedown', handleClickOutside)
//   }, [])

//   const handleChange = (field) => (e) => {
//     setForm((prev) => ({ ...prev, [field]: e.target.value }))
//   }

//   const handleSelectService = (service) => {
//     setForm((prev) => ({ ...prev, service }))
//     setServiceOpen(false)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log('Form submitted:', form)
//   }

//   return (
//     <section className="w-full bg-[#fdf8f3] px-4 py-10 sm:px-6 lg:px-10 lg:py-16">
//       <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
//         {/* Left column */}
//         <div className="flex flex-col justify-center">
//           <div>
//             <span className="text-xs font-bold uppercase tracking-wider text-orange-500">
//               Get In Touch
//             </span>
//             <div className="mt-2 h-1 w-10 rounded-full bg-orange-500" />
//           </div>

//           <h1 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
//             Let's Plan Your Financial Future{' '}
//             <span className="text-orange-500">Together</span>
//           </h1>

//           <p className="mt-5 max-w-md text-slate-500">
//             Have questions or need personalized financial advice? Our experts
//             are here to help you make informed decisions and achieve your
//             financial goals.
//           </p>

//           <div className="mt-8 flex flex-col gap-6">
//             {FEATURES.map(({ icon: Icon, title, desc }) => (
//               <div key={title} className="flex items-start gap-4">
//                 <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-orange-100">
//                   <Icon className="h-6 w-6 text-orange-500" />
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-slate-900">{title}</h3>
//                   <p className="mt-0.5 text-sm text-slate-500">{desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Decorative graphic */}
//           <div className="relative mt-10 hidden h-48 items-end justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-orange-50 to-orange-100/60 sm:flex">
//             <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-orange-200/50 blur-2xl" />
//             <FiTrendingUp className="absolute right-8 top-6 h-10 w-10 -rotate-12 text-orange-400" />
//             <div className="mb-0 flex items-end gap-3 pb-0">
//               {[20, 34, 48, 64, 84].map((h, i) => (
//                 <div
//                   key={i}
//                   className="w-8 rounded-t-md bg-white shadow-sm"
//                   style={{ height: `${h}px` }}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right column - form card */}
//         <div className="rounded-3xl bg-white p-6 shadow-xl shadow-orange-900/5 ring-1 ring-slate-100 sm:p-8">
//           <div className="flex items-center gap-4">
//             <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-orange-100">
//               <FiMail className="h-6 w-6 text-orange-500" />
//             </div>
//             <div>
//               <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
//                 Send Us a Message
//               </h2>
//               <p className="text-sm text-slate-500">
//                 Fill out the form below and our team will get back to you.
//               </p>
//             </div>
//           </div>
//           <div className="mt-4 h-1 w-10 rounded-full bg-orange-500" />

//           <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
//             <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//               <div>
//                 <label className="mb-1.5 block text-sm font-semibold text-slate-800">
//                   Full Name <span className="text-orange-500">*</span>
//                 </label>
//                 <div className="flex items-center rounded-xl border border-slate-200 px-3.5 py-2.5 focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-100">
//                   <FiUser className="h-4 w-4 flex-shrink-0 text-slate-400" />
//                   <input
//                     type="text"
//                     required
//                     value={form.fullName}
//                     onChange={handleChange('fullName')}
//                     placeholder="Enter your full name"
//                     className="ml-2.5 w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 outline-none"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-semibold text-slate-800">
//                   Email Address <span className="text-orange-500">*</span>
//                 </label>
//                 <div className="flex items-center rounded-xl border border-slate-200 px-3.5 py-2.5 focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-100">
//                   <FiMail className="h-4 w-4 flex-shrink-0 text-slate-400" />
//                   <input
//                     type="email"
//                     required
//                     value={form.email}
//                     onChange={handleChange('email')}
//                     placeholder="Enter your email address"
//                     className="ml-2.5 w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 outline-none"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-semibold text-slate-800">
//                   Mobile Number <span className="text-orange-500">*</span>
//                 </label>
//                 <div className="flex items-center rounded-xl border border-slate-200 px-3.5 py-2.5 focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-100">
//                   <FiPhone className="h-4 w-4 flex-shrink-0 text-slate-400" />
//                   <input
//                     type="tel"
//                     required
//                     value={form.mobile}
//                     onChange={handleChange('mobile')}
//                     placeholder="Enter your mobile number"
//                     className="ml-2.5 w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 outline-none"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-semibold text-slate-800">
//                   Company Name (Optional)
//                 </label>
//                 <div className="flex items-center rounded-xl border border-slate-200 px-3.5 py-2.5 focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-100">
//                   <FiBriefcase className="h-4 w-4 flex-shrink-0 text-slate-400" />
//                   <input
//                     type="text"
//                     value={form.company}
//                     onChange={handleChange('company')}
//                     placeholder="Enter your company name"
//                     className="ml-2.5 w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 outline-none"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Service dropdown */}
//             <div className="relative" ref={dropdownRef}>
//               <label className="mb-1.5 block text-sm font-semibold text-slate-800">
//                 Service You're Interested In <span className="text-orange-500">*</span>
//               </label>
//               <button
//                 type="button"
//                 onClick={() => setServiceOpen((o) => !o)}
//                 className="flex w-full items-center justify-between rounded-xl border border-slate-200 px-3.5 py-2.5 text-left focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-100"
//               >
//                 <span
//                   className={`text-sm ${
//                     form.service ? 'text-slate-800' : 'text-slate-400'
//                   }`}
//                 >
//                   {form.service || 'Select the service you are interested in'}
//                 </span>
//                 <FiChevronDown
//                   className={`h-4 w-4 flex-shrink-0 text-slate-400 transition-transform ${
//                     serviceOpen ? 'rotate-180' : ''
//                   }`}
//                 />
//               </button>

//               {serviceOpen && (
//                 <div className="absolute z-10 mt-2 w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
//                   <ul className="max-h-72 overflow-y-auto py-1 [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]">
//                     <li
//                       onClick={() => handleSelectService('')}
//                       className="cursor-pointer bg-orange-50 px-4 py-2.5 text-sm text-slate-500"
//                     >
//                       Select the service you are interested in
//                     </li>
//                     {SERVICES.map((service) => (
//                       <li
//                         key={service}
//                         onClick={() => handleSelectService(service)}
//                         className="cursor-pointer px-4 py-2.5 text-sm text-slate-700 hover:bg-orange-50"
//                       >
//                         {service}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>

//             {/* Message */}
//             <div>
//               <label className="mb-1.5 block text-sm font-semibold text-slate-800">
//                 Your Message <span className="text-orange-500">*</span>
//               </label>
//               <div className="flex items-start rounded-xl border border-slate-200 px-3.5 py-2.5 focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-100">
//                 <FiEdit3 className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400" />
//                 <textarea
//                   required
//                   rows={4}
//                   value={form.message}
//                   onChange={handleChange('message')}
//                   placeholder="Tell us about your financial goals or requirements..."
//                   className="ml-2.5 w-full resize-none bg-transparent text-sm text-slate-800 placeholder-slate-400 outline-none"
//                 />
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 py-3.5 text-sm font-semibold text-white shadow-md shadow-orange-500/25 transition-colors hover:bg-orange-600"
//             >
//               <FiSend className="h-4 w-4" />
//               Book a Free Consultation
//             </button>

//             <p className="flex items-center justify-center gap-1.5 text-xs text-slate-400">
//               <FiLock className="h-3.5 w-3.5" />
//               Your information is secure and will never be shared with third parties.
//             </p>
//           </form>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ContactForm





import React, { useState, useRef, useEffect } from 'react'
import {
  FiUser,
  FiMail,
  FiPhone,
  FiBriefcase,
  FiChevronDown,
  FiEdit3,
  FiSend,
  FiLock,
  FiCalendar,
  FiShield,
  FiTrendingUp,
  FiCheckCircle,
  FiRefreshCw,
} from 'react-icons/fi'

const SERVICES = [
  'SIP Investment',
  'Mutual Funds',
  'Financial Planning',
  'Tax Planning',
  'Retirement Planning',
  'Wealth Management',
  'Insurance Planning',
  'Goal Planning',
  'Portfolio Review',
  'Other (Please specify)',
]

const FEATURES = [
  {
    icon: FiCalendar,
    title: 'Book a Free Consultation',
    desc: 'Schedule a one-on-one session with our financial experts.',
  },
  {
    icon: FiShield,
    title: '100% Confidential',
    desc: 'Your information is secure and always protected.',
  },
  {
    icon: FiTrendingUp,
    title: 'Expert Guidance',
    desc: 'Get tailored advice for your unique financial goals.',
  },
]

const INITIAL_FORM = {
  fullName: '',
  email: '',
  mobile: '',
  company: '',
  service: '',
  message: '',
}

const ContactForm = () => {
  const [form, setForm] = useState(INITIAL_FORM)
  const [serviceOpen, setServiceOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServiceOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSelectService = (service) => {
    setForm((prev) => ({ ...prev, service }))
    setServiceOpen(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', form)
    setSubmitted(true)
  }

  const handleSendAnother = () => {
    setForm(INITIAL_FORM)
    setSubmitted(false)
  }

  return (
    <section className="w-full bg-[#fdf8f3] px-4 py-10 sm:px-6 lg:px-10 lg:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
        {/* Left column */}
        <div className="flex flex-col justify-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-500">
              Get In Touch
            </span>
            <div className="mt-2 h-1 w-10 rounded-full bg-orange-500" />
          </div>

          <h1 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
            Let's Plan Your Financial Future{' '}
            <span className="text-orange-500">Together</span>
          </h1>

          <p className="mt-5 max-w-md text-slate-500">
            Have questions or need personalized financial advice? Our experts
            are here to help you make informed decisions and achieve your
            financial goals.
          </p>

          <div className="mt-8 flex flex-col gap-6">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-orange-100">
                  <Icon className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{title}</h3>
                  <p className="mt-0.5 text-sm text-slate-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative graphic */}
          <div className="relative mt-10 hidden h-48 items-end justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-orange-50 to-orange-100/60 sm:flex">
            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-orange-200/50 blur-2xl" />
            <FiTrendingUp className="absolute right-8 top-6 h-10 w-10 -rotate-12 text-orange-400" />
            <div className="mb-0 flex items-end gap-3 pb-0">
              {[20, 34, 48, 64, 84].map((h, i) => (
                <div
                  key={i}
                  className="w-8 rounded-t-md bg-white shadow-sm"
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right column - form card */}
        <div className="rounded-3xl bg-white p-6 shadow-xl shadow-orange-900/5 ring-1 ring-slate-100 sm:p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-orange-100">
              {submitted ? (
                <FiCheckCircle className="h-6 w-6 text-orange-500" />
              ) : (
                <FiMail className="h-6 w-6 text-orange-500" />
              )}
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
                {submitted ? 'Inquiry Sent Successfully' : 'Send Us a Message'}
              </h2>
              <p className="text-sm text-slate-500">
                {submitted
                  ? "Thanks for reaching out — our team will get back to you shortly."
                  : 'Fill out the form below and our team will get back to you.'}
              </p>
            </div>
          </div>
          <div className="mt-4 h-1 w-10 rounded-full bg-orange-500" />

          {submitted ? (
            <div className="mt-8 flex flex-col items-center rounded-2xl border border-orange-100 bg-orange-50/60 px-6 py-10 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500">
                <FiCheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Inquiry Sent Successfully!
              </h3>
              <p className="mt-2 max-w-sm text-sm text-slate-500">
                We've received your message and one of our financial experts
                will reach out to you soon.
              </p>
              <button
                type="button"
                onClick={handleSendAnother}
                className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-orange-500/25 transition-colors hover:bg-orange-600"
              >
                <FiRefreshCw className="h-4 w-4" />
                Send Another Inquiry
              </button>
            </div>
          ) : (
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-800">
                  Full Name <span className="text-orange-500">*</span>
                </label>
                <div className="flex items-center rounded-xl border border-slate-200 px-3.5 py-2.5 focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-100">
                  <FiUser className="h-4 w-4 flex-shrink-0 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={form.fullName}
                    onChange={handleChange('fullName')}
                    placeholder="Enter your full name"
                    className="ml-2.5 w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-800">
                  Email Address <span className="text-orange-500">*</span>
                </label>
                <div className="flex items-center rounded-xl border border-slate-200 px-3.5 py-2.5 focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-100">
                  <FiMail className="h-4 w-4 flex-shrink-0 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange('email')}
                    placeholder="Enter your email address"
                    className="ml-2.5 w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-800">
                  Mobile Number <span className="text-orange-500">*</span>
                </label>
                <div className="flex items-center rounded-xl border border-slate-200 px-3.5 py-2.5 focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-100">
                  <FiPhone className="h-4 w-4 flex-shrink-0 text-slate-400" />
                  <input
                    type="tel"
                    required
                    value={form.mobile}
                    onChange={handleChange('mobile')}
                    placeholder="Enter your mobile number"
                    className="ml-2.5 w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-800">
                  Company Name (Optional)
                </label>
                <div className="flex items-center rounded-xl border border-slate-200 px-3.5 py-2.5 focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-100">
                  <FiBriefcase className="h-4 w-4 flex-shrink-0 text-slate-400" />
                  <input
                    type="text"
                    value={form.company}
                    onChange={handleChange('company')}
                    placeholder="Enter your company name"
                    className="ml-2.5 w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Service dropdown */}
            <div className="relative" ref={dropdownRef}>
              <label className="mb-1.5 block text-sm font-semibold text-slate-800">
                Service You're Interested In <span className="text-orange-500">*</span>
              </label>
              <button
                type="button"
                onClick={() => setServiceOpen((o) => !o)}
                className="flex w-full items-center justify-between rounded-xl border border-slate-200 px-3.5 py-2.5 text-left focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-100"
              >
                <span
                  className={`text-sm ${
                    form.service ? 'text-slate-800' : 'text-slate-400'
                  }`}
                >
                  {form.service || 'Select the service you are interested in'}
                </span>
                <FiChevronDown
                  className={`h-4 w-4 flex-shrink-0 text-slate-400 transition-transform ${
                    serviceOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {serviceOpen && (
                <div className="absolute z-10 mt-2 w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
                  <ul className="max-h-72 overflow-y-auto py-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    <li
                      onClick={() => handleSelectService('')}
                      className="cursor-pointer bg-orange-50 px-4 py-2.5 text-sm text-slate-500"
                    >
                      Select the service you are interested in
                    </li>
                    {SERVICES.map((service) => (
                      <li
                        key={service}
                        onClick={() => handleSelectService(service)}
                        className="cursor-pointer px-4 py-2.5 text-sm text-slate-700 hover:bg-orange-50"
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-800">
                Your Message <span className="text-orange-500">*</span>
              </label>
              <div className="flex items-start rounded-xl border border-slate-200 px-3.5 py-2.5 focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-100">
                <FiEdit3 className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400" />
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange('message')}
                  placeholder="Tell us about your financial goals or requirements..."
                  className="ml-2.5 w-full resize-none bg-transparent text-sm text-slate-800 placeholder-slate-400 outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 py-3.5 text-sm font-semibold text-white shadow-md shadow-orange-500/25 transition-colors hover:bg-orange-600"
            >
              <FiSend className="h-4 w-4" />
              Book a Free Consultation
            </button>

            <p className="flex items-center justify-center gap-1.5 text-xs text-slate-400">
              <FiLock className="h-3.5 w-3.5" />
              Your information is secure and will never be shared with third parties.
            </p>
          </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default ContactForm