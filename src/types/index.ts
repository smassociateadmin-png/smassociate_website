// User Types
export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'user' | 'admin';
  isVerified: boolean;
  profileImage?: string;
}

// Vehicle Types
export interface Vehicle {
  _id: string;
  brand: string;
  model: string;
  variant: string;
  year: number;
  type: 'car' | 'bike' | 'suv' | 'commercial';
  fuelType: 'petrol' | 'diesel' | 'hybrid' | 'electric' | 'cng';
  transmission: 'manual' | 'automatic';
  kmDriven: number;
  ownerCount: number | string;
  location: string;
  sellingPrice: number;
  images: { url: string; publicId?: string }[];
  description?: string;
  isVerified: boolean;
  isFeatured: boolean;
  isSold: boolean;
  insurance?: { status: string; expiryDate: string };
  registration?: { status: string; number: string; expiryDate: string };
  specifications?: {
    mileage?: number;
    engineCapacity?: string;
    seatingCapacity?: number;
    color?: string;
  };
  createdAt: string;
  updatedAt: string;
}

// Loan Types
export interface LoanProduct {
  name: string;
  minAmount: number;
  maxAmount: number;
  minTenure: number;
  maxTenure: number;
  baseInterestRate: number;
  variants?: string[];
}

export interface LoanApplication {
  _id?: string;
  referenceNumber: string;
  loanType: 'home' | 'car' | 'bike' | 'personal' | 'business';
  applicant: {
    fullName: string;
    mobile: string;
    email: string;
    dateOfBirth?: string;
    employmentType: 'salaried' | 'self-employed' | 'business' | 'student';
    monthlyIncome: number;
  };
  loanDetails: {
    requiredAmount: number;
    tenure: number;
    preferredEMI?: number;
  };
  documents?: Array<{ type: string; url: string }>;
  status: 'submitted' | 'under_review' | 'approved' | 'rejected' | 'completed';
  estimatedEMI?: number;
  totalInterest?: number;
  totalPayable?: number;
  createdAt?: string;
}

// Partner Types
export interface Partner {
  _id: string;
  name: string;
  designation: string;
  biography: string;
  experience?: string;
  expertise?: string[];
  photo?: { url: string; publicId?: string };
  socialLinks?: {
    linkedin?: string;
    email?: string;
    phone?: string;
  };
  isActive: boolean;
  order: number;
}

// Testimonial Types
export interface Testimonial {
  _id: string;
  customerName: string;
  location?: string;
  rating: number;
  review: string;
  customerPhoto?: { url: string };
  serviceType: 'loan' | 'vehicle' | 'both';
  isApproved: boolean;
}

// Contact Types
export interface ContactForm {
  name: string;
  mobile: string;
  email: string;
  serviceRequired: 'loan' | 'vehicle' | 'both' | 'other';
  message: string;
}

// EMI Calculator
export interface EMICalculation {
  principal: number;
  rate: number;
  tenure: number;
  emi: number;
  totalInterest: number;
  totalPayable: number;
  monthlyPayment: number;
}

// API Response
export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  token?: string;
  error?: string;
}

// Statistics
export interface Statistics {
  totalLeads?: number;
  totalVehicles?: number;
  totalApplications?: number;
  customersServed?: number;
  avgProcessingTime?: string;
}
