export interface TestimonialItem {
  id: number;
  initials: string;
  name: string;
  role: string;
  company: string;
  category: string;
  service: string;
  amount: string;
  stamp?: string;
  message: string;
}

const testimonialData: TestimonialItem[] = [
  {
    id: 1,
    initials: "RK",
    name: "Rajesh Kumar",
    role: "Director",
    company: "Kumar Enterprises Pvt. Ltd.",
    category: "Finance · Business Loan",
    service: "Machinery & Working Capital",
    amount: "₹25,00,000",
    stamp: "VERIFIED\nDISBURSED",
    message:
      "SM Associate helped us secure funding quickly and professionally. Their understanding of financial products and customer needs is exceptional. We couldn't have asked for a better partner.",
  },
  {
    id: 2,
    initials: "PS",
    name: "Priya Sharma",
    role: "Business Owner",
    company: "Sharma Trading Co.",
    category: "Vehicle · Used Car Loan",
    service: "Hyundai Creta 1.5 SX (2022)",
    amount: "₹9,50,000",
    stamp: "VERIFIED\nPAID",
    message:
      "Excellent service and transparent approach. They guided us through every step of the loan process with clarity and care. Highly recommended for both loans and vehicle purchases.",
  },
  {
    id: 3,
    initials: "AP",
    name: "Amit Patel",
    role: "Fleet Manager",
    company: "Patel Logistics",
    category: "Commercial · Fleet Finance",
    service: "Tata Ace Commercial Fleet (x3)",
    amount: "₹18,20,000",
    stamp: "VERIFIED\nAPPROVED",
    message:
      "Fast processing, professional guidance, and the best rates I've found anywhere. SM Associate is hands-down the best choice for vehicle and business finance solutions.",
  },
  {
    id: 4,
    initials: "SR",
    name: "Sunita Reddy",
    role: "Managing Director",
    company: "Reddy Constructions",
    category: "Property · Home Loan",
    service: "Residential Villa Construction",
    amount: "₹45,00,000",
    stamp: "VERIFIED\nDISBURSED",
    message:
      "The team was incredibly helpful throughout my home loan application. They handled all the paperwork and got me the best interest rate available. A truly remarkable experience.",
  },
  {
    id: 5,
    initials: "KM",
    name: "Kiran Mehta",
    role: "Entrepreneur",
    company: "Mehta Auto Dealership",
    category: "Finance · Personal Loan",
    service: "Instant Expansion Funds",
    amount: "₹6,00,000",
    stamp: "VERIFIED\nAPPROVED",
    message:
      "Smooth and hassle-free process from start to finish. My loan was approved within 24 hours. I've recommended SM Associate to all my contacts — they never disappoint.",
  },
  {
    id: 6,
    initials: "VN",
    name: "Vijay Nair",
    role: "CEO",
    company: "Nair Tech Solutions",
    category: "Corporate · Working Capital",
    service: "Tech Infrastructure Credit",
    amount: "₹30,00,000",
    stamp: "VERIFIED\nDISBURSED",
    message:
      "Professional, reliable, and incredibly responsive. SM Associate's team understood our business needs perfectly and delivered beyond expectations. Will definitely work with them again.",
  },
];

export default testimonialData;
