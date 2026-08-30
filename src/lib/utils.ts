// Format currency
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

// Format date deterministically across server/client render
export const formatDate = (date: string | Date): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  if (Number.isNaN(dateObj.getTime())) {
    return '';
  }

  return new Intl.DateTimeFormat('en-IN', {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateObj);
};

// Format number with commas
export const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// Calculate loan tenure in years and months
export const formatTenure = (months: number): string => {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) return `${months} months`;
  if (remainingMonths === 0) return `${years} year${years > 1 ? 's' : ''}`;
  return `${years} year${years > 1 ? 's' : ''} ${remainingMonths} months`;
};

// Validate email
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate phone number
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phone.replace(/\D/g, ''));
};

// Validate password strength
export const getPasswordStrength = (password: string): 'weak' | 'medium' | 'strong' => {
  if (password.length < 6) return 'weak';
  if (password.length < 10) return 'medium';
  if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) return 'strong';
  return 'medium';
};

// Get initials from name
export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

// Truncate text
export const truncateText = (text: string, length: number): string => {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
};

// Generate WhatsApp message URL
export const generateWhatsAppUrl = (message: string, phone: string): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
};

// Generate call link
export const generateCallLink = (phone: string): string => {
  return `tel:${phone}`;
};

// Get vehicle age
export const getVehicleAge = (year: number): string => {
  const age = new Date().getFullYear() - year;
  if (age === 0) return 'New';
  if (age === 1) return '1 year old';
  return `${age} years old`;
};

// Calculate EMI
export const calculateEMI = (principal: number, rate: number, tenure: number): number => {
  const monthlyRate = rate / 12 / 100;
  const numberOfPayments = tenure;

  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

  return Math.round(emi);
};

// Estimate vehicle EMI (simplified)
export const estimateVehicleEMI = (price: number, downPayment: number = 0.2): number => {
  const loanAmount = price * (1 - downPayment);
  const interestRate = 7.5; // Average car loan interest rate
  const tenure = 60; // months

  return calculateEMI(loanAmount, interestRate, tenure);
};

// Get customer initials for avatar
export const getAvatarColor = (name: string): string => {
  const colors = ['bg-blue-500', 'bg-green-500', 'bg-red-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'];
  const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[hash % colors.length];
};

// Delay function for async operations
export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Get queryString from object
export const createQueryString = (params: Record<string, string | number | boolean | null | undefined>): string => {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== null && value !== undefined && value !== '') {
      query.append(key, String(value));
    }
  });
  return query.toString();
};

const utilsExports = {
  formatCurrency,
  formatDate,
  formatNumber,
  formatTenure,
  isValidEmail,
  isValidPhone,
  getPasswordStrength,
  getInitials,
  truncateText,
  generateWhatsAppUrl,
  generateCallLink,
  getVehicleAge,
  calculateEMI,
  estimateVehicleEMI,
  getAvatarColor,
  delay,
  createQueryString,
};

export default utilsExports;
