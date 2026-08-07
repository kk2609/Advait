import React, { useState } from 'react'
import { FiPlus, FiMinus, FiTrendingUp, FiCalendar, FiAward } from 'react-icons/fi'
import { BsShieldCheck } from 'react-icons/bs'
import { FaRupeeSign } from 'react-icons/fa'

const FAQS = [
  {
    icon: FiAward,
    question: 'What services does Advait Financial Services offer?',
    answer:
      'We offer a wide range of financial services including SIP Investment, Mutual Funds, Financial Planning, Tax Planning, Retirement Planning, Wealth Management, Insurance Planning and more.',
  },
  {
    icon: FiTrendingUp,
    question: 'How can I start investing with Advait?',
    answer:
      "Getting started is simple. Book a free consultation with our experts, share your financial goals, and we'll create a personalized investment plan tailored to your needs.",
  },
  {
    icon: BsShieldCheck,
    question: 'Is my personal information secure?',
    answer:
      'Absolutely. We use industry-standard encryption and security protocols to protect your data. Your information is always confidential and never shared with third parties.',
  },
  {
    icon: FiCalendar,
    question: 'Can I schedule a free consultation?',
    answer:
      "Yes, we offer a free, no-obligation consultation with one of our financial experts. You can book a slot that's convenient for you through our website or by calling us directly.",
  },
  {
    icon: FaRupeeSign,
    question: 'What is the minimum amount required to invest?',
    answer:
      'The minimum investment amount varies by product. SIPs can start as low as ₹500 per month, making it easy for anyone to begin their investment journey with us.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <section className="w-full bg-secondary-color px-4 py-10 sm:px-6 lg:py-10">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white p-4 shadow-lg shadow-dark-color/5 sm:p-6 lg:p-8">
        {FAQS.map((item, index) => {
          const Icon = item.icon
          const isOpen = openIndex === index
          const isLast = index === FAQS.length - 1

          return (
            <div key={item.question} className={isLast ? '' : 'border-b border-black-color/10'}>
              <button
                type="button"
                onClick={() => toggle(index)}
                className="flex w-full items-center gap-4 py-5 text-left sm:gap-5 sm:py-6"
                aria-expanded={isOpen}
              >
                <span
                  className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:h-14 sm:w-14 ${
                    isOpen ? 'bg-primary-color/10' : 'bg-secondary-color'
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 sm:h-6 sm:w-6 ${
                      isOpen ? 'text-primary-color' : 'text-primary-color/80'
                    }`}
                  />
                </span>

                <span
                  className={`flex-1 font-body-font text-base font-bold sm:text-xl ${
                    isOpen ? 'text-primary-color' : 'text-dark-color'
                  }`}
                >
                  {item.question}
                </span>

                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center text-dark-color">
                  {isOpen ? (
                    <FiMinus className="h-5 w-5 sm:h-6 sm:w-6" />
                  ) : (
                    <FiPlus className="h-5 w-5 sm:h-6 sm:w-6" />
                  )}
                </span>
              </button>

              {isOpen && (
                <div className="pb-6 pl-[3.75rem] pr-8 sm:pb-8 sm:pl-[4.75rem]">
                  <p className="border-l-2 border-primary-color pl-5 font-body-font text-sm leading-relaxed text-gray-color sm:pl-6 sm:text-base">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FAQ