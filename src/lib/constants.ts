// Company Information
export const COMPANY_INFO = {
  name: 'SM Associate',
  tagline: 'Your Trusted Partner for Finance & Mobility',
  description: 'Professional Finance Services + Vehicle Resale + Financial Assistance Company',
  phone: '+91 9790219874, +91 9047007720',
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919790219874',
  email: process.env.CONTACT_TO_EMAIL || '',
  supportEmail: process.env.CONTACT_TO_EMAIL || '',
  address: 'No 183 E4, Nellaiapper High Road, Thirunagar, Tirunelveli Junction, Tirunelveli, Tamil Nadu 627001',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.5297885552337!2d77.74028!3d8.74166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b041f5d5d5d5d5d%3A0x5d5d5d5d5d5d5d5d!2sNo%20183%20E4%2C%20Nellaiapper%20High%20Road%2C%20Thirunagar%2C%20Tirunelveli%20Junction%2C%20Tirunelveli%2C%20Tamil%20Nadu%20627001!5e0!3m2!1sen!2sin!4v1234567890',
};

// Services
export const SERVICES = [
  { id: 'home-loan', name: 'Home Loan', description: 'Home Purchase, Construction, Renovation' },
  { id: 'car-loan', name: 'Car Loan', description: 'New & Used Car Finance' },
  { id: 'bike-loan', name: 'Bike Loan', description: 'New & Used Bike Finance' },
  { id: 'personal-loan', name: 'Personal Loan', description: 'Quick Personal Funds' },
  { id: 'business-loan', name: 'Business Loan', description: 'Expansion & Working Capital' },
  { id: 'two-wheeler-insurance', name: 'Two Wheeler Insurance', description: 'Comprehensive & Third-Party Protection' },
];

// Vehicle Types
export const VEHICLE_TYPES = [
  { value: 'car', label: 'Cars' },
  { value: 'bike', label: 'Bikes' },
  { value: 'suv', label: 'SUVs' },
  { value: 'commercial', label: 'Commercial Vehicles' },
];

export const FUEL_TYPES = [
  { value: 'petrol', label: 'Petrol' },
  { value: 'diesel', label: 'Diesel' },
  { value: 'hybrid', label: 'Hybrid' },
  { value: 'electric', label: 'Electric' },
  { value: 'cng', label: 'CNG' },
];

export const TRANSMISSION_TYPES = [
  { value: 'manual', label: 'Manual' },
  { value: 'automatic', label: 'Automatic' },
];

// Trust Statistics
export const STATISTICS = {
  customersServed: '500+',
  vehiclesListed: '100+',
  processingTime: 'Fast',
  trustRating: 'Trusted',
};

// How It Works Steps
export const STEPS = [
  {
    number: '01',
    title: 'Choose Your Service',
    description: 'Select a loan or vehicle that suits your needs',
    icon: 'CheckCircle',
  },
  {
    number: '02',
    title: 'Submit Your Details',
    description: 'Provide basic information through our simple form',
    icon: 'FileText',
  },
  {
    number: '03',
    title: 'Get Assistance',
    description: 'Our team reviews your requirements and provides guidance',
    icon: 'Headphones',
  },
  {
    number: '04',
    title: 'Complete Transaction',
    description: 'Finalize your financing or vehicle purchase',
    icon: 'CheckCircle',
  },
];

// Why Choose Us
export const WHYCHOOSE = [
  {
    title: 'Trusted Assistance',
    description: 'Professional guidance throughout the process',
    icon: 'Shield',
  },
  {
    title: 'Transparent Process',
    description: 'Clear information without unnecessary complexity',
    icon: 'Eye',
  },
  {
    title: 'Multiple Options',
    description: 'Solutions for different financial requirements',
    icon: 'Layers',
  },
  {
    title: 'Quality Vehicles',
    description: 'Carefully listed pre-owned vehicles',
    icon: 'Star',
  },
  {
    title: 'Fast Support',
    description: 'Quick response from our dedicated team',
    icon: 'Zap',
  },
  {
    title: 'Customer First',
    description: 'Solutions based on your requirements',
    icon: 'Heart',
  },
];

// Blog Posts
export const BLOG_POSTS = [
  {
    id: 1,
    title: 'How to Improve Your Loan Eligibility',
    slug: 'improve-loan-eligibility',
    category: 'Finance',
    date: '2024-01-15',
    image: '/blog/loan-eligibility.jpg',
    excerpt:
      'A strong repayment profile, clean documentation, and stable income can improve your chances of getting a loan approved with better terms.',
    content: [
      {
        heading: 'Why loan eligibility matters',
        paragraphs: [
          'Loan eligibility is the first checkpoint lenders use before approving your application. It looks at your income, repayment history, employer profile, and debt obligations to decide whether you can manage another EMI comfortably.',
          'When your profile is stronger, you are more likely to receive higher approval chances, lower interest rates, and better repayment flexibility. That is why it is important to improve your eligibility before applying.',
        ],
      },
      {
        heading: 'Key points to improve your eligibility',
        points: [
          'Maintain a steady income source and keep your monthly liabilities under control.',
          'Avoid multiple active loans or credit card dues that reduce your repayment capacity.',
          'Keep your credit report accurate and clear of missed payments or defaults.',
          'Apply with complete documents, consistent employment history, and a realistic loan amount.',
        ],
      },
      {
        heading: 'A practical approach',
        paragraphs: [
          'Before submitting a loan form, calculate your EMI based on your monthly budget and compare it with your current commitments. A realistic borrowing amount usually results in a smoother approval journey.',
          'If you are planning to apply soon, it helps to review your financial habits, pay off small dues, and keep your records organized. Small changes in income stability and credit behavior can make a meaningful difference.',
        ],
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          'Improving loan eligibility is not about changing your entire financial life in one step. It is about building a reliable repayment profile over time and approaching the lender with confidence.',
          'At SM Associate, we help borrowers understand what matters most and prepare a strong profile before applying for financing.',
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Home Loan vs Personal Loan - Complete Guide',
    slug: 'home-loan-vs-personal-loan',
    category: 'Loans',
    date: '2024-01-10',
    image: '/blog/home-vs-personal.jpg',
    excerpt:
      'Choose the right loan based on your goal, tenure, security, and repayment comfort before signing any agreement.',
    content: [
      {
        heading: 'Understanding the difference',
        paragraphs: [
          'A home loan is designed for property-related expenses and is usually secured against the property itself. A personal loan is a more flexible unsecured loan used for personal needs such as medical emergencies, education, weddings, or travel.',
          'Because of the difference in collateral and purpose, lenders offer different interest rates, tenures, and approval criteria. That makes the right choice highly dependent on your financial situation.',
        ],
      },
      {
        heading: 'What to compare before deciding',
        points: [
          'Interest rate and total repayment cost over the full term.',
          'Repayment flexibility and monthly EMI burden.',
          'Whether the loan is secured or unsecured.',
          'How the loan amount matches your actual use case and timeline.',
        ],
      },
      {
        heading: 'When each option works best',
        paragraphs: [
          'Home loans are best when you are purchasing or constructing property and can commit to a longer repayment plan. They often allow bigger amounts and longer tenures, but require documentation and property-related evaluation.',
          'Personal loans are useful for urgent or flexible funding needs where speed matters more than collateral. However, the interest rate is typically higher and the approved amount may be smaller.',
        ],
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          'The smarter choice depends on your purpose and repayment ability. If the need is property-focused and long-term, a home loan may be more suitable. If the need is personal and immediate, a personal loan may be the faster option.',
          'SM Associate can guide you through both options based on your eligibility, comfort, and goals.',
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Things to Check Before Buying a Used Car',
    slug: 'used-car-checklist',
    category: 'Vehicles',
    date: '2024-01-05',
    image: '/blog/used-car-checklist.jpg',
    excerpt:
      'A used car purchase can be a smart value decision when you inspect the vehicle history, condition, and ownership details carefully.',
    content: [
      {
        heading: 'Start with the vehicle history',
        paragraphs: [
          'Before paying any amount, ask for the full service history, ownership records, accident history, and registration details. A transparent record usually signals a more reliable purchase decision.',
          'If a seller cannot provide consistent paperwork or gives vague answers about damage or maintenance, it is a red flag. It is better to walk away than take a risk on hidden issues.',
        ],
      },
      {
        heading: 'Inspect the important details',
        points: [
          'Check the engine condition, tyre health, and body panel alignment.',
          'Verify the odometer reading and compare it with service records.',
          'Inspect suspension, brakes, electrical systems, and cabin condition.',
          'Test drive the vehicle on different roads and at different speeds.',
        ],
      },
      {
        heading: 'Understand the real cost',
        paragraphs: [
          'A used car may look affordable at first glance, but maintenance, insurance, and repair costs can add up quickly. Budget for registration, documentation, and any immediate repairs after purchase.',
          'A low asking price is not always a bargain if it means frequent upkeep. A well-maintained car with a fair price often offers better value.',
        ],
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          'Buying a used car is a practical choice when you treat it like a careful evaluation process. Reviewing the history, condition, and future costs gives you a stronger foundation for a good decision.',
          'SM Associate can also help you connect with trusted vehicle buyers and financing options for a smoother purchase experience.',
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'How Car EMI Is Calculated',
    slug: 'car-emi-calculation',
    category: 'Finance',
    date: '2023-12-28',
    image: '/blog/bike-finance.jpg',
    excerpt:
      'Car EMI depends on the loan amount, interest rate, and tenure, and understanding the formula helps you choose a more comfortable repayment plan.',
    content: [
      {
        heading: 'The basic formula',
        paragraphs: [
          'Car EMI is usually calculated using the principal loan amount, annual interest rate, and repayment period in months. Lenders apply a standard amortization formula to spread the cost across the loan term.',
          'Even a small change in interest rate or tenure can shift your monthly EMI significantly. That is why it is useful to compare multiple combinations before finalizing your vehicle finance plan.',
        ],
      },
      {
        heading: 'What drives the EMI',
        points: [
          'Higher loan amount means higher EMI unless the tenure is extended.',
          'Lower interest rate reduces the total cost of borrowing.',
          'Longer tenure lowers monthly EMI but increases total interest paid.',
          'Down payment reduces the principal and improves affordability.',
        ],
      },
      {
        heading: 'How to plan better',
        paragraphs: [
          'Use an EMI calculator to estimate the impact of different loan amounts and periods on your monthly budget. This helps you stay aligned with your income and monthly obligations.',
          'A balanced approach is to keep the EMI at a manageable level while still not stretching your finances too thin. That improves both affordability and peace of mind.',
        ],
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          'Understanding how EMI is calculated makes the borrowing process more transparent and helps you make smarter financial decisions. You are better prepared when you know what you are actually paying each month.',
          'SM Associate can help you compare financing options and evaluate the best plan for your car purchase.',
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'Used Car Buying Checklist',
    slug: 'used-car-buying-tips',
    category: 'Vehicles',
    date: '2023-12-20',
    image: '/blog/business-funding.jpg',
    excerpt:
      'A structured checklist helps you review the condition, paperwork, and affordability of a used car before making the final purchase.',
    content: [
      {
        heading: 'Before you inspect the car',
        paragraphs: [
          'Set your budget first, including maintenance and insurance costs. A used car purchase is not complete when the price is agreed; you also need to account for registration, immediate repair, and routine upkeep.',
          'Research the market value of similar cars in your area so you know whether the asking price is fair. This helps you avoid paying extra for a vehicle that is not worth it.',
        ],
      },
      {
        heading: 'Checklist for a safe purchase',
        points: [
          'Verify registration details, ownership transfer, and insurance validity.',
          'Check for rust, accident repairs, oil leaks, or uneven panel gaps.',
          'Test the engine, brakes, steering, and air conditioning during a proper drive.',
          'Ask for service history and confirm if major components were maintained on time.',
        ],
      },
      {
        heading: 'Final decision-making',
        paragraphs: [
          'The best used-car purchase balances price, maintenance reality, and long-term value. If the vehicle is cheaper but requires heavy repair work, the decision can quickly become less attractive.',
          'Always compare a few options before committing. A confidence-building checklist reduces emotional decisions and keeps the process grounded in evidence.',
        ],
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          'A used car can be a smart financial move when you buy deliberately. Taking the time to inspect and compare reduces risk and helps you feel more secure after the purchase.',
          'SM Associate offers guidance to buyers looking for value, transparency, and dependable vehicle options.',
        ],
      },
    ],
  },
  {
    id: 6,
    title: 'How Credit Score Affects Loan Approval',
    slug: 'credit-score-impact',
    category: 'Finance',
    date: '2023-12-15',
    image: '/blog/cibil-score.jpg',
    excerpt:
      'Your credit score tells lenders how reliably you manage borrowed funds, and it directly shapes approval decisions and interest costs.',
    content: [
      {
        heading: 'Why lenders care about credit history',
        paragraphs: [
          'A credit score is a summary of how you manage repayment behavior across loans, credit cards, and financial obligations. Lenders use it to estimate your risk before approving credit.',
          'A stronger credit score often improves the chance of approval and may help you access better interest rates. A weak score can lead to lower limits, higher costs, or application rejection.',
        ],
      },
      {
        heading: 'What influences the score',
        points: [
          'Timely payment history across loans and cards.',
          'Credit utilisation ratio and outstanding balances.',
          'Length of credit history and account consistency.',
          'Recent credit inquiries and newly opened accounts.',
        ],
      },
      {
        heading: 'How to improve it',
        paragraphs: [
          'Paying bills on time, keeping credit card balances low, and avoiding multiple loans in a short period all strengthen your profile. Even small improvements can help over time.',
          'It is also wise to review your report regularly for mistakes or outdated entries that may affect your score unfairly. Correcting these issues can make a noticeable difference.',
        ],
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          'A credit score is not just a number—it is a reflection of your repayment discipline. When you improve it, you improve your chances of better loan terms and financial flexibility.',
          'SM Associate can help you understand how your credit profile affects your financing options and which steps will be most helpful.',
        ],
      },
    ],
  },
];

// Colors
export const COLORS = {
  navy: '#0F172A',
  darkBlue: '#1E3A8A',
  teal: '#14B8A6',
  cyan: '#06B6D4',
  gold: '#F59E0B',
  lightGrey: '#F1F5F9',
  white: '#FFFFFF',
};

// Page Routes
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  LOANS: '/loans',
  HOME_LOAN: '/home-loan',
  CAR_LOAN: '/car-loan',
  BIKE_LOAN: '/bike-loan',
  TWO_WHEELER_INSURANCE: '/two-wheeler-insurance',
  PERSONAL_LOAN: '/personal-loan',
  BUSINESS_LOAN: '/business-loan',
  VEHICLES: '/vehicles',
  VEHICLE_DETAIL: '/vehicles/:id',
  SELL_VEHICLE: '/sell-vehicle',
  CAR_RESALE: '/car-resale',
  EMI_CALCULATOR: '/emi-calculator',
  LOAN_APPLICATION: '/loan-application',
  CONTACT: '/contact',
  BLOG: '/blog',
  PARTNERS: '/partners',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  ADMIN: '/admin',
  ADMIN_DASHBOARD: '/admin/dashboard',
  PRIVACY_POLICY: '/privacy-policy',
  TERMS_CONDITIONS: '/terms-conditions',
  DISCLAIMER: '/disclaimer',
};

const defaultExports = {
  COMPANY_INFO,
  SERVICES,
  VEHICLE_TYPES,
  FUEL_TYPES,
  TRANSMISSION_TYPES,
  STATISTICS,
  STEPS,
  WHYCHOOSE,
  BLOG_POSTS,
  COLORS,
  ROUTES,
};

export default defaultExports;
