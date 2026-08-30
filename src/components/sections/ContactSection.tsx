'use client';

import VaultContactSection, { VaultContactSectionProps } from './VaultContactSection';

export default function ContactSection(props: VaultContactSectionProps) {
  return (
    <VaultContactSection
      theme="navy-teal"
      brandTag="SM Associate · Finance Desk"
      title={
        <>
          Turn your dreams into <em>reality</em>.
        </>
      }
      subtitle="Loans, vehicle marketplace, and insurance handled under one roof. Tell us what you need — we will give you the best deal."
      stats={[
        { label: 'Loans Disbursed, YTD', target: 21400000, prefix: '₹', suffix: '+' },
        { label: 'Avg. Time to Offer', target: 'under 24 hrs', isStatic: true },
        { label: 'Financing Approved', target: 683, suffix: ' clients' },
      ]}
      formEyebrow="Start an inquiry"
      formTitle="A specialist replies within one business day."
      formSubtitle="Financing, vehicle purchase, resale, or insurance — tell us below."
      reasonLabel="I'm reaching out about"
      reasonOptions={[
        { value: 'home_loan', label: 'Home Loan' },
        { value: 'car_loan', label: 'Car Loan' },
        { value: 'personal_loan', label: 'Personal Loan' },
        { value: 'business_loan', label: 'Business Loan' },
        { value: 'bike_loan', label: 'Bike Loan' },
        { value: 'insurance', label: 'Insurance' },
        { value: 'vehicle', label: 'Vehicle Resale / Buy' },
        { value: 'other', label: 'Other' },
      ]}
      defaultReason="home_loan"
      valueLabel="Approximate amount / value"
      valuePlaceholder="e.g. ₹10,00,000"
      phoneLabel="Phone number"
      phonePlaceholder="+91 97902 19874"
      messagePlaceholder="Describe what you need, tenure preference, or vehicle details..."
      submitButtonText="Submit inquiry"
      {...props}
    />
  );
}

