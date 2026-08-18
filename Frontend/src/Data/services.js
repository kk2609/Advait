// // src/Data/services.js
// const services = [
//   {
//     id: 1,
//     title: "SIP Investment",
//     slug: "sip-investment",
//     description: "Systematic investment plans to build wealth over time.",
//     icon: "FiTrendingUp",
//     hero: {
//       title: "SIP Investment",
//       description:
//         "Start your investment journey with a disciplined, rupee-cost averaging approach. Our SIP solutions help you build long-term wealth with minimal market timing risk.",
//       image: "../assets/sip-hero.jpg",
//     },
//     overview: {
//       title: "Build Wealth Consistently with SIP",
//       description:
//         "A Systematic Investment Plan (SIP) allows you to invest a fixed amount regularly in mutual funds. This disciplined approach averages out market volatility and harnesses the power of compounding. Whether you are a first-time investor or looking to diversify, SIPs offer a convenient and affordable way to participate in the equity markets.",
//     },
//     benefits: [
//       "Rupee Cost Averaging",
//       "Builds wealth with the power of compounding",
//       "Disciplined investing",
//       "Flexible — start with any amount",
//       "Helps achieve long-term financial goals",
//     ],
//     process: [
//       { step: "01", title: "Choose a Fund", description: "Select a mutual fund based on your goal." },
//       { step: "02", title: "Set Amount & Date", description: "Choose amount and date for SIP." },
//       { step: "03", title: "Invest Regularly", description: "Your amount gets invested automatically." },
//       { step: "04", title: "Wealth Grows", description: "Stay invested and see your wealth grow." },
//     ],
//     whoShouldChoose: [
//       "New investors",
//       "Salaried professionals",
//       "Anyone looking to build wealth gradually",
//       "Long-term goal achievers",
//     ],
//     faqs: [
//       { question: "What is SIP?", answer: "A Systematic Investment Plan (SIP) is a method of investing a fixed amount regularly in a mutual fund scheme, instead of investing a lump sum at once." },
//       { question: "What is the minimum amount for SIP?", answer: "Most mutual funds allow you to start a SIP with a small monthly amount, making it accessible to almost every investor." },
//       { question: "Can I stop or modify my SIP?", answer: "Yes, SIPs are flexible. You can pause, stop, increase or decrease your SIP amount at any time." },
//       { question: "How long should I continue my SIP?", answer: "SIPs work best when continued for the long term, ideally aligned with the time horizon of your financial goal." },
//     ],
//     cta: {
//       title: "Ready to Start Investing With Confidence?",
//       description: "Let's build an investment strategy around your goals.",
//       buttonText: "Book a Consultation",
//     },
//   },

//   {
//     id: 2,
//     title: "SWP",
//     slug: "systematic-withdraw-plan",
//     description: "Systematic withdrawal plans for regular income.",
//     icon: "FiRepeat",
//     hero: {
//       title: "Systematic Withdrawal Plan (SWP)",
//       description:
//         "Convert your accumulated corpus into a steady stream of income. Our SWP solutions are designed for retirees and those seeking regular cash flow.",
//       image: "/images/services/swp-hero.jpg",
//     },
//     overview: {
//       title: "Regular Income from Your Investments",
//       description:
//         "A Systematic Withdrawal Plan (SWP) allows you to withdraw a fixed amount from your mutual fund investments at regular intervals. It is an ideal tool for generating a predictable income stream during retirement or to meet recurring expenses, while the remaining capital continues to grow.",
//     },
//     benefits: [
//       "Regular, predictable income",
//       "Your remaining corpus stays invested",
//       "Tax-efficient withdrawals",
//       "Flexible withdrawal amount and frequency",
//     ],
//     process: [
//       { step: "01", title: "Understand", description: "Review your income requirements and corpus." },
//       { step: "02", title: "Plan", description: "Decide the withdrawal amount and frequency." },
//       { step: "03", title: "Implement", description: "Set up the SWP on your investment." },
//       { step: "04", title: "Review & Grow", description: "Track and adjust as needed." },
//     ],
//     whoShouldChoose: [
//       "Retirees seeking a regular income",
//       "Individuals nearing retirement",
//       "Investors with a large corpus who need monthly cash flow",
//       "Anyone seeking a tax-efficient income stream",
//     ],
//     faqs: [
//       { question: "What is an SWP?", answer: "SWP lets you withdraw a fixed amount from your mutual fund investment at regular intervals, while the remaining units stay invested." },
//       { question: "How does an SWP work?", answer: "You choose a scheme and specify a withdrawal amount and frequency; the fund redeems units to pay you on the chosen dates." },
//       { question: "Is SWP tax-efficient?", answer: "SWP withdrawals are subject to capital gains tax, and planning the amount can help reduce your tax liability." },
//       { question: "Can I change my withdrawal amount?", answer: "Yes, you can modify the amount or frequency at any time, subject to the fund's terms." },
//     ],
//     cta: {
//       title: "Ready to Secure a Regular Income?",
//       description: "Let's create a withdrawal plan that gives you peace of mind.",
//       buttonText: "Book a Consultation",
//     },
//   },

//   {
//     id: 3,
//     title: "Retirement Planning",
//     slug: "retirement-planning",
//     description: "Secure your golden years with a robust retirement plan.",
//     icon: "FiSunrise",
//     hero: {
//       title: "Retirement Planning",
//       description:
//         "Achieve financial independence and enjoy a comfortable retirement. Our holistic plans cover savings, investments, and income strategies.",
//       image: "/images/services/retirement-hero.jpg",
//     },
//     overview: {
//       title: "Plan for the Retirement You Deserve",
//       description:
//         "Retirement planning is about more than just saving money — it's about ensuring your lifestyle and goals are protected. We help you determine the right corpus, choose suitable investment avenues, and create a withdrawal strategy to make your retirement worry-free.",
//     },
//     benefits: [
//       "Financial independence in later years",
//       "Protection against inflation",
//       "Customized, goal-based strategy",
//       "Peace of mind for you and your family",
//     ],
//     process: [
//       { step: "01", title: "Understand", description: "Evaluate your goals and risk tolerance." },
//       { step: "02", title: "Plan", description: "Calculate corpus and design an investment strategy." },
//       { step: "03", title: "Implement", description: "Execute investments and other instruments." },
//       { step: "04", title: "Review & Grow", description: "Review and adjust as circumstances evolve." },
//     ],
//     whoShouldChoose: [
//       "Individuals in their 30s–50s wanting a structured plan",
//       "Professionals looking to retire early",
//       "Business owners planning a transition",
//       "Anyone seeking a dignified, comfortable retirement",
//     ],
//     faqs: [
//       { question: "When should I start retirement planning?", answer: "The earlier the better — ideally in your 20s or 30s to leverage compounding." },
//       { question: "How much should I save for retirement?", answer: "This depends on your lifestyle goals and inflation. A personalised plan gives you a precise number." },
//       { question: "How do I estimate my retirement needs?", answer: "We factor in current expenses, inflation, life expectancy and goals to calculate the corpus needed." },
//     ],
//     cta: {
//       title: "Ready to Plan Your Retirement?",
//       description: "Let's create a strategy designed around your future needs.",
//       buttonText: "Book a Consultation",
//     },
//   },

//   {
//     id: 4,
//     title: "Goal Planning",
//     slug: "goal-planning",
//     description: "Achieve your life goals with a clear financial roadmap.",
//     icon: "FiTarget",
//     hero: {
//       title: "Goal Planning",
//       description:
//         "Whether it's buying a home, starting a business, or taking a dream vacation, we help you turn aspirations into achievable financial targets.",
//       image: "/images/services/goal-hero.jpg",
//     },
//     overview: {
//       title: "Turn Dreams into Tangible Milestones",
//       description:
//         "Goal planning is the process of identifying your short-term and long-term aspirations and creating a structured investment plan to achieve them. We break down each goal, determine the required corpus, and recommend the right investment vehicles to get you there on time.",
//     },
//     benefits: [
//       "Clarity & focus on each goal",
//       "An actionable, step-by-step roadmap",
//       "Flexibility as goals evolve",
//       "Peace of mind that you're on track",
//     ],
//     process: [
//       { step: "01", title: "Understand", description: "Discuss and prioritise your life goals." },
//       { step: "02", title: "Plan", description: "Calculate target corpus for each goal." },
//       { step: "03", title: "Implement", description: "Set up dedicated investments per goal." },
//       { step: "04", title: "Review & Grow", description: "Track progress and adjust the strategy." },
//     ],
//     whoShouldChoose: [
//       "Young professionals with multiple life goals",
//       "Families planning for education or marriage",
//       "Individuals saving for a home down payment",
//       "Anyone wanting a structured path to their goals",
//     ],
//     faqs: [
//       { question: "What is goal planning?", answer: "It's the process of identifying financial goals and creating a strategic investment plan to achieve them within a timeframe." },
//       { question: "How do I prioritize my goals?", answer: "We help you categorize goals by urgency and importance, balancing short-term needs with long-term aspirations." },
//       { question: "Can I change my goals later?", answer: "Yes, your plan is flexible and reviewed as your circumstances or priorities change." },
//     ],
//     cta: {
//       title: "Ready to Achieve Your Goals?",
//       description: "Let's map out a plan to make your dreams a reality.",
//       buttonText: "Book a Consultation",
//     },
//   },

//   {
//     id: 5,
//     title: "Tax Planning",
//     slug: "tax-planning",
//     description: "Optimize your taxes while maximizing wealth.",
//     icon: "FiFileText",
//     hero: {
//       title: "Tax Planning",
//       description:
//         "Legally reduce your tax liability and invest the savings to build long-term wealth. Our tax strategies align with your financial goals.",
//       image: "/images/services/tax-hero.jpg",
//     },
//     overview: {
//       title: "Tax-Efficient Wealth Creation",
//       description:
//         "Tax planning is not just about saving taxes — it's about integrating tax efficiency into your overall financial plan. We identify deductions, exemptions, and investment avenues that lower your tax burden while contributing to your long-term goals.",
//     },
//     benefits: [
//       "Reduced tax liability",
//       "Increased savings to reinvest",
//       "Compliance & peace of mind",
//       "Holistic integration with your financial plan",
//     ],
//     process: [
//       { step: "01", title: "Understand", description: "Review income sources and existing tax structure." },
//       { step: "02", title: "Plan", description: "Devise a tax-efficient investment strategy." },
//       { step: "03", title: "Implement", description: "Set up recommended investments." },
//       { step: "04", title: "Review & Grow", description: "Monitor law changes and keep the plan optimized." },
//     ],
//     whoShouldChoose: [
//       "Salaried employees maximizing deductions",
//       "Business owners and freelancers",
//       "Individuals with multiple income sources",
//       "Anyone wanting to save on tax while building wealth",
//     ],
//     faqs: [
//       { question: "What is tax planning?", answer: "It involves using legal methods to reduce your tax liability, such as tax-saving investments and deductions." },
//       { question: "What are the best tax-saving investments?", answer: "Popular options include ELSS, PPF, NPS, and tax-saving FDs, depending on your risk appetite and goals." },
//       { question: "Can I do tax planning on my own?", answer: "You can, but a professional can help optimize across income streams and ensure compliance." },
//     ],
//     cta: {
//       title: "Ready to Save on Taxes and Grow Wealth?",
//       description: "Let's build a tax-efficient investment plan.",
//       buttonText: "Book a Consultation",
//     },
//   },

//   {
//     id: 6,
//     title: "Wealth Creation",
//     slug: "wealth-creation",
//     description: "Systematic approach to multiplying your wealth.",
//     icon: "FiBarChart2",
//     hero: {
//       title: "Wealth Creation",
//       description:
//         "Go beyond saving — create lasting wealth through strategic investments and smart financial decisions. Our plans are designed to maximize returns while managing risk.",
//       image: "/images/services/wealth-hero.jpg",
//     },
//     overview: {
//       title: "Create Wealth that Lasts",
//       description:
//         "Wealth creation is about building a strong financial foundation that grows over time. We combine asset allocation, diversification, and periodic rebalancing to help you accumulate substantial wealth.",
//     },
//     benefits: [
//       "Long-term capital growth",
//       "Risk management through diversification",
//       "Tax-efficient returns",
//       "A strategy personalized to your profile",
//     ],
//     process: [
//       { step: "01", title: "Understand", description: "Assess assets, liabilities and capacity to build wealth." },
//       { step: "02", title: "Plan", description: "Design a diversified investment strategy." },
//       { step: "03", title: "Implement", description: "Set up investments and automate contributions." },
//       { step: "04", title: "Review & Grow", description: "Rebalance periodically to stay aligned with goals." },
//     ],
//     whoShouldChoose: [
//       "Individuals with surplus income to grow",
//       "Young professionals aiming for independence",
//       "Business owners multiplying their savings",
//       "Anyone wanting a structured wealth-building plan",
//     ],
//     faqs: [
//       { question: "What is wealth creation?", answer: "It's the process of generating long-term growth through strategic investments and asset accumulation." },
//       { question: "How is this different from saving?", answer: "Saving preserves capital, while wealth creation invests to generate returns that outpace inflation." },
//       { question: "What investment options are suitable?", answer: "Equities, mutual funds, real estate and alternative assets, depending on your risk tolerance." },
//     ],
//     cta: {
//       title: "Ready to Build Lasting Wealth?",
//       description: "Let's design a growth strategy tailored to your ambitions.",
//       buttonText: "Book a Consultation",
//     },
//   },

//   {
//     id: 7,
//     title: "Child Education Planning",
//     slug: "child-education-planning",
//     description: "Secure your child's future education with a dedicated plan.",
//     icon: "FiBookOpen",
//     hero: {
//       title: "Child Education Planning",
//       description:
//         "Ensure your child's educational dreams are financially secure. We help you build a corpus for school, college, and beyond.",
//       image: "/images/services/education-hero.jpg",
//     },
//     overview: {
//       title: "Invest in Your Child's Future",
//       description:
//         "Rising education costs demand early and dedicated planning. We work with you to estimate future expenses, choose appropriate investment vehicles, and set up a disciplined savings plan so your child's education is never compromised.",
//     },
//     benefits: [
//       "A dedicated, goal-based savings fund",
//       "Protection against education inflation",
//       "Flexible withdrawals for tuition and more",
//       "Peace of mind for your child's future",
//     ],
//     process: [
//       { step: "01", title: "Understand", description: "Discuss your child's age and educational path." },
//       { step: "02", title: "Plan", description: "Calculate projected costs and design a strategy." },
//       { step: "03", title: "Implement", description: "Set up recommended investments." },
//       { step: "04", title: "Review & Grow", description: "Adjust as your child grows and costs evolve." },
//     ],
//     whoShouldChoose: [
//       "Parents of young children",
//       "Parents planning for private or overseas education",
//       "Families securing their child's aspirations",
//       "Anyone wanting to plan without financial stress",
//     ],
//     faqs: [
//       { question: "When should I start child education planning?", answer: "As early as possible — the earlier you start, the more you benefit from compounding." },
//       { question: "How much should I invest for my child's education?", answer: "It depends on the type of education and inflation; we help estimate the required corpus." },
//       { question: "What investment options are best?", answer: "Equity mutual funds, PPF, and child-specific plans are common, based on your risk profile." },
//     ],
//     cta: {
//       title: "Ready to Secure Your Child's Future?",
//       description: "Let's build an education fund that grows with your child.",
//       buttonText: "Book a Consultation",
//     },
//   },

//   {
//     id: 8,
//     title: "Wealth Protection",
//     slug: "wealth-protection",
//     description: "Safeguard your assets and legacy with comprehensive protection.",
//     icon: "FiShield",
//     hero: {
//       title: "Wealth Protection",
//       description:
//         "Protect what you've built. Our wealth protection strategies include insurance, estate planning, and risk management to ensure your family's financial security.",
//       image: "/images/services/protection-hero.jpg",
//     },
//     overview: {
//       title: "Preserve Your Legacy",
//       description:
//         "Wealth protection is about shielding your assets from unforeseen risks — death, disability, lawsuits, or market downturns. We help you structure your portfolio with adequate insurance and estate planning tools.",
//     },
//     benefits: [
//       "Risk mitigation for you and your family",
//       "Financial security for your loved ones",
//       "A clear estate and succession plan",
//       "Peace of mind about your legacy",
//     ],
//     process: [
//       { step: "01", title: "Understand", description: "Analyze assets, family structure and risks." },
//       { step: "02", title: "Plan", description: "Design a comprehensive protection strategy." },
//       { step: "03", title: "Implement", description: "Set up policies and legal structures." },
//       { step: "04", title: "Review & Grow", description: "Review coverage as life and assets change." },
//     ],
//     whoShouldChoose: [
//       "Individuals with dependents",
//       "Business owners and entrepreneurs",
//       "Anyone with significant assets to protect",
//       "Individuals planning wealth transfer",
//     ],
//     faqs: [
//       { question: "What is wealth protection?", answer: "Strategies to safeguard your assets from risks such as death, illness, disability, lawsuits and market volatility." },
//       { question: "What insurance do I need?", answer: "Typically life, health, disability and critical illness cover, plus property or liability insurance as needed." },
//       { question: "How do I create an estate plan?", answer: "We help you draft a will, establish trusts, and designate beneficiaries for your assets." },
//     ],
//     cta: {
//       title: "Ready to Protect Your Wealth and Family?",
//       description: "Let's build a comprehensive protection plan for complete peace of mind.",
//       buttonText: "Book a Consultation",
//     },
//   },
// ];

// export default services;






















// // src/Data/services.js
// import sipHero from "../assets/sip-hero.png";
// import serviceHero from "../assets/service-hero.jpg";
// import retirehero from "../assets/retirement-hero.png";
// import goalplanning from "../assets/goalplanning.png";
// import taxplan from"../assets/tax-plan.jpg";
// import wealthcreate from "../assets/wealth-create.png";
// import childplan from "../assets/child-plan.jpg";
// import wealthpro from "../assets/wealth-pro.png";

// const services = [
//   {
//     id: 1,
//     title: "SIP Investment",
//     slug: "sip-investment",
//     description: "Systematic investment plans to build wealth over time.",
//     icon: "FiTrendingUp",
//     hero: {
//       title: "SIP Investment",
//       description:
//         "Start your investment journey with a disciplined, rupee-cost averaging approach. Our SIP solutions help you build long-term wealth with minimal market timing risk.",
//       image: sipHero,
//     },
//     overview: {
//       title: "Build Wealth Consistently with SIP",
//       description:
//         "A Systematic Investment Plan (SIP) allows you to invest a fixed amount regularly in mutual funds. This disciplined approach averages out market volatility and harnesses the power of compounding. Whether you are a first-time investor or looking to diversify, SIPs offer a convenient and affordable way to participate in the equity markets.",
//     },
//     benefits: [
//       "Rupee Cost Averaging",
//       "Builds wealth with the power of compounding",
//       "Disciplined investing",
//       "Flexible — start with any amount",
//       "Helps achieve long-term financial goals",
//     ],
//     process: [
//       { step: "01", title: "Choose a Fund", description: "Select a mutual fund based on your goal." },
//       { step: "02", title: "Set Amount & Date", description: "Choose amount and date for SIP." },
//       { step: "03", title: "Invest Regularly", description: "Your amount gets invested automatically." },
//       { step: "04", title: "Wealth Grows", description: "Stay invested and see your wealth grow." },
//     ],
//     whoShouldChoose: [
//       "New investors",
//       "Salaried professionals",
//       "Anyone looking to build wealth gradually",
//       "Long-term goal achievers",
//     ],
//     faqs: [
//       { question: "What is SIP?", answer: "A Systematic Investment Plan (SIP) is a method of investing a fixed amount regularly in a mutual fund scheme, instead of investing a lump sum at once." },
//       { question: "What is the minimum amount for SIP?", answer: "Most mutual funds allow you to start a SIP with a small monthly amount, making it accessible to almost every investor." },
//       { question: "Can I stop or modify my SIP?", answer: "Yes, SIPs are flexible. You can pause, stop, increase or decrease your SIP amount at any time." },
//       { question: "How long should I continue my SIP?", answer: "SIPs work best when continued for the long term, ideally aligned with the time horizon of your financial goal." },
//     ],
//     cta: {
//       title: "Ready to Start Investing With Confidence?",
//       description: "Let's build an investment strategy around your goals.",
//       buttonText: "Book a Consultation",
//     },
//   },

//   {
//     id: 2,
//     title: "SWP",
//     slug: "systematic-withdraw-plan",
//     description: "Systematic withdrawal plans for regular income.",
//     icon: "FiRepeat",
//     hero: {
//       title: "Systematic Withdrawal Plan (SWP)",
//       description:
//         "Convert your accumulated corpus into a steady stream of income. Our SWP solutions are designed for retirees and those seeking regular cash flow.",
//       image: serviceHero,
//     },
//     overview: {
//       title: "Regular Income from Your Investments",
//       description:
//         "A Systematic Withdrawal Plan (SWP) allows you to withdraw a fixed amount from your mutual fund investments at regular intervals. It is an ideal tool for generating a predictable income stream during retirement or to meet recurring expenses, while the remaining capital continues to grow.",
//     },
//     benefits: [
//       "Regular, predictable income",
//       "Your remaining corpus stays invested",
//       "Tax-efficient withdrawals",
//       "Flexible withdrawal amount and frequency",
//     ],
//     process: [
//       { step: "01", title: "Understand", description: "Review your income requirements and corpus." },
//       { step: "02", title: "Plan", description: "Decide the withdrawal amount and frequency." },
//       { step: "03", title: "Implement", description: "Set up the SWP on your investment." },
//       { step: "04", title: "Review & Grow", description: "Track and adjust as needed." },
//     ],
//     whoShouldChoose: [
//       "Retirees seeking a regular income",
//       "Individuals nearing retirement",
//       "Investors with a large corpus who need monthly cash flow",
//       "Anyone seeking a tax-efficient income stream",
//     ],
//     faqs: [
//       { question: "What is an SWP?", answer: "SWP lets you withdraw a fixed amount from your mutual fund investment at regular intervals, while the remaining units stay invested." },
//       { question: "How does an SWP work?", answer: "You choose a scheme and specify a withdrawal amount and frequency; the fund redeems units to pay you on the chosen dates." },
//       { question: "Is SWP tax-efficient?", answer: "SWP withdrawals are subject to capital gains tax, and planning the amount can help reduce your tax liability." },
//       { question: "Can I change my withdrawal amount?", answer: "Yes, you can modify the amount or frequency at any time, subject to the fund's terms." },
//     ],
//     cta: {
//       title: "Ready to Secure a Regular Income?",
//       description: "Let's create a withdrawal plan that gives you peace of mind.",
//       buttonText: "Book a Consultation",
//     },
//   },

//   {
//     id: 3,
//     title: "Retirement Planning",
//     slug: "retirement-planning",
//     description: "Secure your golden years with a robust retirement plan.",
//     icon: "FiSunrise",
//     hero: {
//       title: "Retirement Planning",
//       description:
//         "Achieve financial independence and enjoy a comfortable retirement. Our holistic plans cover savings, investments, and income strategies.",
//       image: retirehero,
//     },
//     overview: {
//       title: "Plan for the Retirement You Deserve",
//       description:
//         "Retirement planning is about more than just saving money — it's about ensuring your lifestyle and goals are protected. We help you determine the right corpus, choose suitable investment avenues, and create a withdrawal strategy to make your retirement worry-free.",
//     },
//     benefits: [
//       "Financial independence in later years",
//       "Protection against inflation",
//       "Customized, goal-based strategy",
//       "Peace of mind for you and your family",
//     ],
//     process: [
//       { step: "01", title: "Understand", description: "Evaluate your goals and risk tolerance." },
//       { step: "02", title: "Plan", description: "Calculate corpus and design an investment strategy." },
//       { step: "03", title: "Implement", description: "Execute investments and other instruments." },
//       { step: "04", title: "Review & Grow", description: "Review and adjust as circumstances evolve." },
//     ],
//     whoShouldChoose: [
//       "Individuals in their 30s–50s wanting a structured plan",
//       "Professionals looking to retire early",
//       "Business owners planning a transition",
//       "Anyone seeking a dignified, comfortable retirement",
//     ],
//     faqs: [
//       { question: "When should I start retirement planning?", answer: "The earlier the better — ideally in your 20s or 30s to leverage compounding." },
//       { question: "How much should I save for retirement?", answer: "This depends on your lifestyle goals and inflation. A personalised plan gives you a precise number." },
//       { question: "How do I estimate my retirement needs?", answer: "We factor in current expenses, inflation, life expectancy and goals to calculate the corpus needed." },
//     ],
//     cta: {
//       title: "Ready to Plan Your Retirement?",
//       description: "Let's create a strategy designed around your future needs.",
//       buttonText: "Book a Consultation",
//     },
//   },

//   {
//     id: 4,
//     title: "Goal Planning",
//     slug: "goal-planning",
//     description: "Achieve your life goals with a clear financial roadmap.",
//     icon: "FiTarget",
//     hero: {
//       title: "Goal Planning",
//       description:
//         "Whether it's buying a home, starting a business, or taking a dream vacation, we help you turn aspirations into achievable financial targets.",
//       image: goalplanning,
//     },
//     overview: {
//       title: "Turn Dreams into Tangible Milestones",
//       description:
//         "Goal planning is the process of identifying your short-term and long-term aspirations and creating a structured investment plan to achieve them. We break down each goal, determine the required corpus, and recommend the right investment vehicles to get you there on time.",
//     },
//     benefits: [
//       "Clarity & focus on each goal",
//       "An actionable, step-by-step roadmap",
//       "Flexibility as goals evolve",
//       "Peace of mind that you're on track",
//     ],
//     process: [
//       { step: "01", title: "Understand", description: "Discuss and prioritise your life goals." },
//       { step: "02", title: "Plan", description: "Calculate target corpus for each goal." },
//       { step: "03", title: "Implement", description: "Set up dedicated investments per goal." },
//       { step: "04", title: "Review & Grow", description: "Track progress and adjust the strategy." },
//     ],
//     whoShouldChoose: [
//       "Young professionals with multiple life goals",
//       "Families planning for education or marriage",
//       "Individuals saving for a home down payment",
//       "Anyone wanting a structured path to their goals",
//     ],
//     faqs: [
//       { question: "What is goal planning?", answer: "It's the process of identifying financial goals and creating a strategic investment plan to achieve them within a timeframe." },
//       { question: "How do I prioritize my goals?", answer: "We help you categorize goals by urgency and importance, balancing short-term needs with long-term aspirations." },
//       { question: "Can I change my goals later?", answer: "Yes, your plan is flexible and reviewed as your circumstances or priorities change." },
//     ],
//     cta: {
//       title: "Ready to Achieve Your Goals?",
//       description: "Let's map out a plan to make your dreams a reality.",
//       buttonText: "Book a Consultation",
//     },
//   },

//   {
//     id: 5,
//     title: "Tax Planning",
//     slug: "tax-planning",
//     description: "Optimize your taxes while maximizing wealth.",
//     icon: "FiFileText",
//     hero: {
//       title: "Tax Planning",
//       description:
//         "Legally reduce your tax liability and invest the savings to build long-term wealth. Our tax strategies align with your financial goals.",
//       image: taxplan,
//     },
//     overview: {
//       title: "Tax-Efficient Wealth Creation",
//       description:
//         "Tax planning is not just about saving taxes — it's about integrating tax efficiency into your overall financial plan. We identify deductions, exemptions, and investment avenues that lower your tax burden while contributing to your long-term goals.",
//     },
//     benefits: [
//       "Reduced tax liability",
//       "Increased savings to reinvest",
//       "Compliance & peace of mind",
//       "Holistic integration with your financial plan",
//     ],
//     process: [
//       { step: "01", title: "Understand", description: "Review income sources and existing tax structure." },
//       { step: "02", title: "Plan", description: "Devise a tax-efficient investment strategy." },
//       { step: "03", title: "Implement", description: "Set up recommended investments." },
//       { step: "04", title: "Review & Grow", description: "Monitor law changes and keep the plan optimized." },
//     ],
//     whoShouldChoose: [
//       "Salaried employees maximizing deductions",
//       "Business owners and freelancers",
//       "Individuals with multiple income sources",
//       "Anyone wanting to save on tax while building wealth",
//     ],
//     faqs: [
//       { question: "What is tax planning?", answer: "It involves using legal methods to reduce your tax liability, such as tax-saving investments and deductions." },
//       { question: "What are the best tax-saving investments?", answer: "Popular options include ELSS, PPF, NPS, and tax-saving FDs, depending on your risk appetite and goals." },
//       { question: "Can I do tax planning on my own?", answer: "You can, but a professional can help optimize across income streams and ensure compliance." },
//     ],
//     cta: {
//       title: "Ready to Save on Taxes and Grow Wealth?",
//       description: "Let's build a tax-efficient investment plan.",
//       buttonText: "Book a Consultation",
//     },
//   },

//   {
//     id: 6,
//     title: "Wealth Creation",
//     slug: "wealth-creation",
//     description: "Systematic approach to multiplying your wealth.",
//     icon: "FiBarChart2",
//     hero: {
//       title: "Wealth Creation",
//       description:
//         "Go beyond saving — create lasting wealth through strategic investments and smart financial decisions. Our plans are designed to maximize returns while managing risk.",
//       image: wealthcreate,
//     },
//     overview: {
//       title: "Create Wealth that Lasts",
//       description:
//         "Wealth creation is about building a strong financial foundation that grows over time. We combine asset allocation, diversification, and periodic rebalancing to help you accumulate substantial wealth.",
//     },
//     benefits: [
//       "Long-term capital growth",
//       "Risk management through diversification",
//       "Tax-efficient returns",
//       "A strategy personalized to your profile",
//     ],
//     process: [
//       { step: "01", title: "Understand", description: "Assess assets, liabilities and capacity to build wealth." },
//       { step: "02", title: "Plan", description: "Design a diversified investment strategy." },
//       { step: "03", title: "Implement", description: "Set up investments and automate contributions." },
//       { step: "04", title: "Review & Grow", description: "Rebalance periodically to stay aligned with goals." },
//     ],
//     whoShouldChoose: [
//       "Individuals with surplus income to grow",
//       "Young professionals aiming for independence",
//       "Business owners multiplying their savings",
//       "Anyone wanting a structured wealth-building plan",
//     ],
//     faqs: [
//       { question: "What is wealth creation?", answer: "It's the process of generating long-term growth through strategic investments and asset accumulation." },
//       { question: "How is this different from saving?", answer: "Saving preserves capital, while wealth creation invests to generate returns that outpace inflation." },
//       { question: "What investment options are suitable?", answer: "Equities, mutual funds, real estate and alternative assets, depending on your risk tolerance." },
//     ],
//     cta: {
//       title: "Ready to Build Lasting Wealth?",
//       description: "Let's design a growth strategy tailored to your ambitions.",
//       buttonText: "Book a Consultation",
//     },
//   },

//   {
//     id: 7,
//     title: "Child Education Planning",
//     slug: "child-education-planning",
//     description: "Secure your child's future education with a dedicated plan.",
//     icon: "FiBookOpen",
//     hero: {
//       title: "Child Education Planning",
//       description:
//         "Ensure your child's educational dreams are financially secure. We help you build a corpus for school, college, and beyond.",
//       image: childplan,
//     },
//     overview: {
//       title: "Invest in Your Child's Future",
//       description:
//         "Rising education costs demand early and dedicated planning. We work with you to estimate future expenses, choose appropriate investment vehicles, and set up a disciplined savings plan so your child's education is never compromised.",
//     },
//     benefits: [
//       "A dedicated, goal-based savings fund",
//       "Protection against education inflation",
//       "Flexible withdrawals for tuition and more",
//       "Peace of mind for your child's future",
//     ],
//     process: [
//       { step: "01", title: "Understand", description: "Discuss your child's age and educational path." },
//       { step: "02", title: "Plan", description: "Calculate projected costs and design a strategy." },
//       { step: "03", title: "Implement", description: "Set up recommended investments." },
//       { step: "04", title: "Review & Grow", description: "Adjust as your child grows and costs evolve." },
//     ],
//     whoShouldChoose: [
//       "Parents of young children",
//       "Parents planning for private or overseas education",
//       "Families securing their child's aspirations",
//       "Anyone wanting to plan without financial stress",
//     ],
//     faqs: [
//       { question: "When should I start child education planning?", answer: "As early as possible — the earlier you start, the more you benefit from compounding." },
//       { question: "How much should I invest for my child's education?", answer: "It depends on the type of education and inflation; we help estimate the required corpus." },
//       { question: "What investment options are best?", answer: "Equity mutual funds, PPF, and child-specific plans are common, based on your risk profile." },
//     ],
//     cta: {
//       title: "Ready to Secure Your Child's Future?",
//       description: "Let's build an education fund that grows with your child.",
//       buttonText: "Book a Consultation",
//     },
//   },

//   {
//     id: 8,
//     title: "Wealth Protection",
//     slug: "wealth-protection",
//     description: "Safeguard your assets and legacy with comprehensive protection.",
//     icon: "FiShield",
//     hero: {
//       title: "Wealth Protection",
//       description:
//         "Protect what you've built. Our wealth protection strategies include insurance, estate planning, and risk management to ensure your family's financial security.",
//       image: wealthpro,
//     },
//     overview: {
//       title: "Preserve Your Legacy",
//       description:
//         "Wealth protection is about shielding your assets from unforeseen risks — death, disability, lawsuits, or market downturns. We help you structure your portfolio with adequate insurance and estate planning tools.",
//     },
//     benefits: [
//       "Risk mitigation for you and your family",
//       "Financial security for your loved ones",
//       "A clear estate and succession plan",
//       "Peace of mind about your legacy",
//     ],
//     process: [
//       { step: "01", title: "Understand", description: "Analyze assets, family structure and risks." },
//       { step: "02", title: "Plan", description: "Design a comprehensive protection strategy." },
//       { step: "03", title: "Implement", description: "Set up policies and legal structures." },
//       { step: "04", title: "Review & Grow", description: "Review coverage as life and assets change." },
//     ],
//     whoShouldChoose: [
//       "Individuals with dependents",
//       "Business owners and entrepreneurs",
//       "Anyone with significant assets to protect",
//       "Individuals planning wealth transfer",
//     ],
//     faqs: [
//       { question: "What is wealth protection?", answer: "Strategies to safeguard your assets from risks such as death, illness, disability, lawsuits and market volatility." },
//       { question: "What insurance do I need?", answer: "Typically life, health, disability and critical illness cover, plus property or liability insurance as needed." },
//       { question: "How do I create an estate plan?", answer: "We help you draft a will, establish trusts, and designate beneficiaries for your assets." },
//     ],
//     cta: {
//       title: "Ready to Protect Your Wealth and Family?",
//       description: "Let's build a comprehensive protection plan for complete peace of mind.",
//       buttonText: "Book a Consultation",
//     },
//   },
// ];

// export default services;












import sipHero from "../assets/sip-hero.png";
import serviceHero from "../assets/service-hero.jpg";
import retirehero from "../assets/retirement-hero.png";
import goalplanning from "../assets/goalplanning.png";
import taxplan from "../assets/tax-plan.jpg";
import wealthcreate from "../assets/wealth-create.png";
import childplan from "../assets/child-plan.jpg";
import wealthpro from "../assets/wealth-pro.png";

const services = [
  // =====================================================
  // 1. SIP INVESTMENT
  // =====================================================
  {
    id: 1,
    title: "SIP Investment",
    slug: "sip-investment",
    description:
      "Systematic investment plans to build wealth consistently over the long term.",
    icon: "FiTrendingUp",

    hero: {
      title: "SIP Investment",
      description:
        "Start your investment journey with a disciplined approach to long-term wealth creation. Our SIP solutions help you invest regularly, manage market volatility and stay focused on your financial goals.",
      image: sipHero,

      highlights: [
        "Disciplined and consistent investing",
        "Benefit from long-term compounding",
        "Reduce dependence on market timing",
        "Flexible investment amounts",
      ],
    },

    overview: {
      title: "Build Wealth Consistently with SIP",
      description:
        "A Systematic Investment Plan allows you to invest a fixed amount at regular intervals into suitable mutual fund investments. By investing consistently across market conditions, SIPs can help reduce the impact of market timing and benefit from the power of compounding. We help you choose an investment approach based on your goals, investment horizon and risk profile.",
    },

    benefits: [
      "Disciplined and consistent investing",
      "Benefit from long-term compounding",
      "Reduce dependence on market timing",
      "Flexible investment amounts",
      "Suitable for different financial goals",
      "Easy to increase investments as your income grows",
    ],

    process: [
      {
        step: "01",
        title: "Understand",
        description:
          "We understand your financial goals, income, existing investments and risk profile.",
      },
      {
        step: "02",
        title: "Plan",
        description:
          "We identify suitable investment options and determine an investment amount aligned with your goals.",
      },
      {
        step: "03",
        title: "Invest",
        description:
          "We help you start and maintain a disciplined SIP strategy.",
      },
      {
        step: "04",
        title: "Review & Grow",
        description:
          "We periodically review your investments and make adjustments as your goals and circumstances evolve.",
      },
    ],

    whoShouldChoose: [
      "First-time investors",
      "Salaried professionals",
      "Young investors starting their wealth journey",
      "Individuals investing for long-term goals",
      "Investors looking for disciplined wealth creation",
    ],

    faqs: [
      {
        question: "What is a SIP?",
        answer:
          "A SIP is a method of investing a fixed amount regularly into a mutual fund rather than investing a large amount at once.",
      },
      {
        question: "Is SIP suitable for beginners?",
        answer:
          "SIPs can be a convenient way for beginners to start investing gradually while developing a disciplined investment habit.",
      },
      {
        question: "Can I increase my SIP amount?",
        answer:
          "Yes. Your investment amount can generally be increased as your income and financial capacity grow.",
      },
      {
        question: "How long should I continue a SIP?",
        answer:
          "The appropriate duration depends on your financial goal, investment horizon and risk profile. Long-term consistency is generally important.",
      },
    ],

    cta: {
      title: "Ready to Start Investing with Confidence?",
      description:
        "Let's create a disciplined investment strategy around your financial goals.",
      buttonText: "Book a Consultation",
    },
  },

  // =====================================================
  // 2. SWP
  // =====================================================
  {
    id: 2,
    title: "SWP",
    slug: "systematic-withdraw-plan",
    description:
      "Systematic withdrawal solutions designed to create a structured income stream.",
    icon: "FiRepeat",

    hero: {
      title: "Systematic Withdrawal Plan",
      description:
        "Turn your accumulated investments into a structured source of regular income. Our SWP solutions help you plan withdrawals while keeping your remaining investment corpus working toward your long-term needs.",
      image: serviceHero,

      highlights: [
        "Regular and structured income",
        "Flexible withdrawal frequency",
        "Remaining corpus stays invested",
        "Helps manage recurring expenses",
      ],
    },

    overview: {
      title: "Create a Reliable Income Stream",
      description:
        "A Systematic Withdrawal Plan allows you to withdraw a predetermined amount from your mutual fund investments at regular intervals. It can be useful for retirees, individuals approaching retirement and investors who need a planned income stream from their accumulated corpus.",
    },

    benefits: [
      "Regular and structured income",
      "Flexible withdrawal frequency",
      "Remaining corpus stays invested",
      "Helps manage recurring expenses",
      "Can be integrated into retirement planning",
      "Allows withdrawals to be adjusted over time",
    ],

    process: [
      {
        step: "01",
        title: "Understand",
        description:
          "We assess your existing corpus, income requirements and financial commitments.",
      },
      {
        step: "02",
        title: "Plan",
        description:
          "We determine an appropriate withdrawal amount and frequency based on your requirements.",
      },
      {
        step: "03",
        title: "Implement",
        description:
          "We help structure the withdrawal strategy around your investment portfolio.",
      },
      {
        step: "04",
        title: "Review & Adjust",
        description:
          "We monitor your income requirements and portfolio to keep the strategy aligned with your needs.",
      },
    ],

    whoShouldChoose: [
      "Retirees requiring regular income",
      "Individuals approaching retirement",
      "Investors with an accumulated investment corpus",
      "Individuals planning regular cash flow",
      "Investors looking to structure their retirement income",
    ],

    faqs: [
      {
        question: "What is an SWP?",
        answer:
          "SWP allows you to withdraw a predetermined amount from your investment at regular intervals.",
      },
      {
        question: "Who can benefit from SWP?",
        answer:
          "It can be particularly useful for retirees or investors who need a structured income stream from their accumulated investments.",
      },
      {
        question: "Can I change my withdrawal amount?",
        answer:
          "The withdrawal amount and frequency can generally be modified based on your requirements and the applicable investment terms.",
      },
      {
        question: "Does the remaining money stay invested?",
        answer:
          "Yes, the portion of the investment that is not withdrawn remains invested.",
      },
    ],

    cta: {
      title: "Ready to Create a Regular Income Strategy?",
      description:
        "Let's structure your investments around your income and long-term financial needs.",
      buttonText: "Book a Consultation",
    },
  },

  // =====================================================
  // 3. RETIREMENT PLANNING
  // =====================================================
  {
    id: 3,
    title: "Retirement Planning",
    slug: "retirement-planning",
    description:
      "Build a structured financial strategy for a secure and independent retirement.",
    icon: "FiSunrise",

    hero: {
      title: "Retirement Planning",
      description:
        "Build a financially secure future where you can enjoy the lifestyle you've worked for. Our retirement planning approach combines disciplined savings, investments and income planning to prepare you for life after work.",
      image: retirehero,

      highlights: [
        "Build a dedicated retirement corpus",
        "Prepare for rising living costs",
        "Create a structured retirement income",
        "Plan for long-term financial independence",
      ],
    },

    overview: {
      title: "Plan for the Retirement You Deserve",
      description:
        "Retirement planning is about more than simply building a large corpus. It is about creating enough financial security to maintain your lifestyle, manage rising costs and meet your needs after regular employment or business income reduces. We help you estimate your retirement requirements and build a strategy around your timeline and goals.",
    },

    benefits: [
      "Build a dedicated retirement corpus",
      "Prepare for rising living costs",
      "Create a structured retirement income strategy",
      "Reduce dependence on others financially",
      "Align investments with your retirement timeline",
      "Gain greater confidence about your financial future",
    ],

    process: [
      {
        step: "01",
        title: "Understand",
        description:
          "We evaluate your current age, income, expenses, assets and desired retirement lifestyle.",
      },
      {
        step: "02",
        title: "Calculate",
        description:
          "We estimate your future retirement requirements and target corpus.",
      },
      {
        step: "03",
        title: "Build",
        description:
          "We create an investment and savings strategy aligned with your retirement timeline.",
      },
      {
        step: "04",
        title: "Review",
        description:
          "We regularly review your progress and adjust the strategy as your circumstances change.",
      },
    ],

    whoShouldChoose: [
      "Professionals planning long-term financial independence",
      "Individuals in their 30s, 40s and 50s",
      "Early-retirement aspirants",
      "Business owners planning their future",
      "Anyone who wants a structured retirement strategy",
    ],

    faqs: [
      {
        question: "When should I start retirement planning?",
        answer:
          "Ideally, retirement planning should begin as early as possible because a longer investment horizon can provide more time to build the required corpus.",
      },
      {
        question: "How much money will I need for retirement?",
        answer:
          "It depends on your expected lifestyle, current expenses, inflation, retirement age and other financial goals.",
      },
      {
        question:
          "Can I start retirement planning if I am already close to retirement?",
        answer:
          "Yes. The strategy simply needs to be designed around your remaining timeline, current assets and expected income requirements.",
      },
      {
        question: "How often should my retirement plan be reviewed?",
        answer:
          "A retirement plan should be reviewed periodically and whenever there is a meaningful change in your income, expenses, investments, goals or retirement timeline.",
      },
    ],

    cta: {
      title: "Ready to Plan Your Retirement?",
      description:
        "Let's build a retirement strategy designed around the lifestyle and financial independence you want.",
      buttonText: "Book a Consultation",
    },
  },

  // =====================================================
  // 4. GOAL PLANNING
  // =====================================================
  {
    id: 4,
    title: "Goal Planning",
    slug: "goal-planning",
    description:
      "Turn important life goals into achievable financial milestones with a clear roadmap.",
    icon: "FiTarget",

    hero: {
      title: "Goal Planning",
      description:
        "Turn your important life goals into achievable financial milestones. Whether you're planning for a home, travel, education or another major milestone, we help you create a clear financial roadmap.",
      image: goalplanning,

      highlights: [
        "Clear financial direction",
        "Goal-specific investment strategies",
        "Prioritized short and long-term goals",
        "Track progress toward important milestones",
      ],
    },

    overview: {
      title: "Turn Your Goals into a Financial Roadmap",
      description:
        "Every important goal has a financial requirement and a timeline. We help you identify your priorities, estimate the amount required and create an investment strategy designed to move you steadily toward each goal.",
    },

    benefits: [
      "Clear financial direction",
      "Prioritized short and long-term goals",
      "Goal-specific investment strategies",
      "Better control over your finances",
      "Flexible planning as priorities change",
      "Greater confidence about your progress",
    ],

    process: [
      {
        step: "01",
        title: "Identify",
        description:
          "We understand your goals, priorities and expected timelines.",
      },
      {
        step: "02",
        title: "Calculate",
        description:
          "We estimate the amount required for each goal.",
      },
      {
        step: "03",
        title: "Strategize",
        description:
          "We create an investment strategy for each priority.",
      },
      {
        step: "04",
        title: "Track",
        description:
          "We monitor progress and adjust the plan when necessary.",
      },
    ],

    whoShouldChoose: [
      "Young professionals",
      "Families planning major expenses",
      "Individuals planning for a home",
      "Parents planning future expenses",
      "Anyone with multiple financial goals",
    ],

    faqs: [
      {
        question: "What is financial goal planning?",
        answer:
          "It is the process of identifying important financial goals and creating a strategy to achieve them within a defined timeline.",
      },
      {
        question: "Can I plan multiple goals together?",
        answer:
          "Yes. Multiple goals can be prioritized and incorporated into a single financial strategy.",
      },
      {
        question: "Can my goals change later?",
        answer:
          "Absolutely. Financial plans should evolve as your income, priorities and circumstances change.",
      },
      {
        question: "How do you decide which goal should come first?",
        answer:
          "Goals can be prioritized based on importance, timeline, financial requirement and their impact on your overall financial plan.",
      },
    ],

    cta: {
      title: "Ready to Turn Your Goals into Reality?",
      description:
        "Let's create a financial roadmap built around the goals that matter most to you.",
      buttonText: "Book a Consultation",
    },
  },

  // =====================================================
  // 5. TAX PLANNING
  // =====================================================
  {
    id: 5,
    title: "Tax Planning",
    slug: "tax-planning",
    description:
      "Make smarter financial decisions while managing your tax liability efficiently.",
    icon: "FiFileText",

    hero: {
      title: "Tax Planning",
      description:
        "Make smarter financial decisions while managing your tax liability through legitimate tax-planning strategies. We help integrate tax efficiency into your broader investment and financial plan.",
      image: taxplan,

      highlights: [
        "Better tax efficiency",
        "Tax-aware investment decisions",
        "Improved savings potential",
        "Aligned with long-term financial goals",
      ],
    },

    overview: {
      title: "Make Your Money More Tax-Efficient",
      description:
        "Effective tax planning is not simply about reducing taxes at the end of the financial year. It is about making informed investment and financial decisions throughout the year. We help you understand applicable tax-saving opportunities and align them with your broader financial goals.",
    },

    benefits: [
      "Better tax efficiency",
      "Improved savings potential",
      "Tax-aware investment decisions",
      "Better financial organization",
      "Alignment with long-term goals",
      "Greater clarity around tax-saving options",
    ],

    process: [
      {
        step: "01",
        title: "Understand",
        description:
          "We review your income sources, existing investments and current financial structure.",
      },
      {
        step: "02",
        title: "Identify",
        description:
          "We identify relevant tax-saving opportunities based on your financial situation.",
      },
      {
        step: "03",
        title: "Plan",
        description:
          "We integrate suitable tax-efficient strategies into your broader financial plan.",
      },
      {
        step: "04",
        title: "Review",
        description:
          "We review the strategy periodically as your finances and applicable rules change.",
      },
    ],

    whoShouldChoose: [
      "Salaried professionals",
      "Business owners",
      "Freelancers and self-employed individuals",
      "Individuals with multiple income sources",
      "Investors looking for tax-efficient financial planning",
    ],

    faqs: [
      {
        question: "What is tax planning?",
        answer:
          "Tax planning involves making legitimate financial and investment decisions to manage your tax liability efficiently.",
      },
      {
        question: "Is tax planning only useful at year-end?",
        answer:
          "No. Planning throughout the year can help you make better financial decisions rather than making last-minute investments.",
      },
      {
        question: "Can tax planning be combined with wealth creation?",
        answer:
          "Yes. Tax efficiency can be considered as part of a broader investment and wealth-building strategy.",
      },
      {
        question: "Does tax planning depend on my income?",
        answer:
          "Yes. Your income sources, financial structure, applicable deductions and investment choices can influence the most suitable tax-planning approach.",
      },
    ],

    cta: {
      title: "Ready to Make Your Finances More Tax-Efficient?",
      description:
        "Let's build a tax-aware strategy that supports both your current savings and long-term goals.",
      buttonText: "Book a Consultation",
    },
  },

  // =====================================================
  // 6. WEALTH CREATION
  // =====================================================
  {
    id: 6,
    title: "Wealth Creation",
    slug: "wealth-creation",
    description:
      "Build a structured path toward long-term wealth through disciplined investing.",
    icon: "FiBarChart2",

    hero: {
      title: "Wealth Creation",
      description:
        "Move beyond simply saving money and build a structured path toward long-term wealth. Our approach combines disciplined investing, diversification and goal-based strategies to help your wealth grow over time.",
      image: wealthcreate,

      highlights: [
        "Long-term wealth-building strategy",
        "Diversified investment approach",
        "Goal-oriented portfolio planning",
        "Better risk management",
      ],
    },

    overview: {
      title: "Build Wealth That Grows with You",
      description:
        "Long-term wealth creation requires more than choosing individual investments. It requires a clear strategy, appropriate asset allocation, disciplined investing and regular reviews. We help create a portfolio approach designed around your goals, time horizon and risk profile.",
    },

    benefits: [
      "Long-term wealth-building strategy",
      "Diversified investment approach",
      "Goal-oriented portfolio planning",
      "Better risk management",
      "Disciplined investing",
      "Regular portfolio reviews",
    ],

    process: [
      {
        step: "01",
        title: "Assess",
        description:
          "We understand your financial position, goals, risk profile and investment horizon.",
      },
      {
        step: "02",
        title: "Strategize",
        description:
          "We develop an investment strategy based on your objectives.",
      },
      {
        step: "03",
        title: "Build",
        description:
          "We help implement a diversified investment approach.",
      },
      {
        step: "04",
        title: "Grow & Review",
        description:
          "We monitor your portfolio and rebalance the strategy when required.",
      },
    ],

    whoShouldChoose: [
      "Young professionals building their first portfolio",
      "Individuals with surplus income",
      "Business owners",
      "Long-term investors",
      "Individuals seeking structured wealth creation",
    ],

    faqs: [
      {
        question: "What does wealth creation mean?",
        answer:
          "Wealth creation is the process of building and growing financial assets over the long term through disciplined investment and financial planning.",
      },
      {
        question: "Is saving enough to build wealth?",
        answer:
          "Saving can provide financial stability, while appropriately planned investments can provide opportunities for long-term growth.",
      },
      {
        question: "How do you approach wealth creation?",
        answer:
          "We consider your goals, time horizon, risk profile, diversification and overall financial position before developing a strategy.",
      },
      {
        question: "How often should a wealth-building portfolio be reviewed?",
        answer:
          "Regular reviews help ensure that your portfolio remains aligned with your goals, risk profile and changing financial circumstances.",
      },
    ],

    cta: {
      title: "Ready to Build Long-Term Wealth?",
      description:
        "Let's design a disciplined wealth-building strategy around your ambitions.",
      buttonText: "Book a Consultation",
    },
  },

  // =====================================================
  // 7. CHILD EDUCATION PLANNING
  // =====================================================
  {
    id: 7,
    title: "Child Education Planning",
    slug: "child-education-planning",
    description:
      "Build a dedicated financial strategy for your child's future education.",
    icon: "FiBookOpen",

    hero: {
      title: "Child Education Planning",
      description:
        "Give your child's educational dreams a strong financial foundation. We help you estimate future education costs and build a dedicated investment strategy to prepare for them.",
      image: childplan,

      highlights: [
        "Dedicated education fund",
        "Protection against rising education costs",
        "Goal-based investment strategy",
        "Reduced last-minute financial pressure",
      ],
    },

    overview: {
      title: "Invest in Your Child's Future",
      description:
        "Education costs can increase significantly over time, making early planning important. We help you estimate future expenses, determine the required corpus and create a disciplined investment strategy so that education remains a priority without putting unnecessary pressure on your finances.",
    },

    benefits: [
      "Dedicated education fund",
      "Protection against rising education costs",
      "Goal-based investment strategy",
      "Long-term financial preparation",
      "Greater confidence about future expenses",
      "Reduced last-minute financial pressure",
    ],

    process: [
      {
        step: "01",
        title: "Understand",
        description:
          "We understand your child's age, education aspirations and expected timeline.",
      },
      {
        step: "02",
        title: "Estimate",
        description:
          "We calculate the potential future cost of education.",
      },
      {
        step: "03",
        title: "Build",
        description:
          "We create a dedicated investment strategy around the target.",
      },
      {
        step: "04",
        title: "Review",
        description:
          "We track the corpus and adjust the plan as circumstances change.",
      },
    ],

    whoShouldChoose: [
      "Parents of young children",
      "Parents planning higher education",
      "Families considering overseas education",
      "Parents planning private education",
      "Anyone who wants to prepare early for education expenses",
    ],

    faqs: [
      {
        question: "When should I start planning for my child's education?",
        answer:
          "Starting early provides a longer time horizon to build the required corpus.",
      },
      {
        question: "How much should I invest?",
        answer:
          "The required amount depends on your child's age, education goals, expected costs and investment timeline.",
      },
      {
        question: "Can the plan change as my child grows?",
        answer:
          "Yes. Education plans should be reviewed as costs, timelines and educational preferences change.",
      },
      {
        question: "What if my child's education plans change?",
        answer:
          "The strategy can be reviewed and adjusted when education preferences, timelines or expected costs change.",
      },
    ],

    cta: {
      title: "Ready to Secure Your Child's Educational Future?",
      description:
        "Let's build a dedicated financial strategy that grows alongside your child's dreams.",
      buttonText: "Book a Consultation",
    },
  },

  // =====================================================
  // 8. WEALTH PROTECTION
  // =====================================================
  {
    id: 8,
    title: "Wealth Protection",
    slug: "wealth-protection",
    description:
      "Safeguard your assets, family and financial legacy against unexpected risks.",
    icon: "FiShield",

    hero: {
      title: "Wealth Protection",
      description:
        "Protect the wealth you've worked hard to build. Our wealth protection approach focuses on managing financial risks, strengthening your family's security and preparing your assets for the future.",
      image: wealthpro,

      highlights: [
        "Protection against financial risks",
        "Greater financial security for dependents",
        "Better preparedness for unexpected events",
        "Structured estate and succession planning",
      ],
    },

    overview: {
      title: "Protect What You've Built",
      description:
        "Building wealth is only one part of financial planning. Protecting it against unexpected events is equally important. We help you identify potential financial risks and consider appropriate protection, insurance and estate-planning strategies to safeguard your family and long-term financial foundation.",
    },

    benefits: [
      "Protection against financial risks",
      "Greater financial security for dependents",
      "Better preparedness for unexpected events",
      "Structured estate and succession planning",
      "Protection of accumulated wealth",
      "Greater peace of mind for your family",
    ],

    process: [
      {
        step: "01",
        title: "Understand",
        description:
          "We assess your assets, liabilities, family responsibilities and potential financial risks.",
      },
      {
        step: "02",
        title: "Identify Risks",
        description:
          "We identify areas where your financial security may be exposed.",
      },
      {
        step: "03",
        title: "Build Protection",
        description:
          "We develop an appropriate protection and estate-planning strategy.",
      },
      {
        step: "04",
        title: "Review & Secure",
        description:
          "We review your protection as your family, assets and financial responsibilities evolve.",
      },
    ],

    whoShouldChoose: [
      "Individuals with dependents",
      "Families with significant assets",
      "Business owners and entrepreneurs",
      "Individuals planning wealth transfer",
      "Anyone who wants to protect their family's financial future",
    ],

    faqs: [
      {
        question: "What is wealth protection?",
        answer:
          "Wealth protection focuses on safeguarding your assets and family's financial security against significant financial risks and unexpected events.",
      },
      {
        question: "Why is insurance part of wealth protection?",
        answer:
          "Appropriate insurance can help reduce the financial impact of certain unexpected events and protect your broader financial plan.",
      },
      {
        question: "What is estate planning?",
        answer:
          "Estate planning involves organizing how your assets should be managed and transferred according to your wishes.",
      },
      {
        question: "When should I review my protection strategy?",
        answer:
          "Your protection strategy should be reviewed when your income, family responsibilities, assets, liabilities or long-term financial goals change.",
      },
    ],

    cta: {
      title: "Ready to Protect Your Wealth and Family?",
      description:
        "Let's build a comprehensive strategy to protect what you've worked hard to create.",
      buttonText: "Book a Consultation",
    },
  },
];

export default services;