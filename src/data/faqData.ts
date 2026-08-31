export interface FAQItem {
  question: string;
  answer: string;
}

export type FAQCategory =
  | 'home'
  | 'about'
  | 'loans'
  | 'homeLoan'
  | 'carLoan'
  | 'bikeLoan'
  | 'personalLoan'
  | 'businessLoan'
  | 'twoWheelerInsurance'
  | 'emiCalculator'
  | 'vehicles'
  | 'vehicleDetail'
  | 'carResale'
  | 'sellVehicle'
  | 'contact'
  | 'blog'
  | 'blogDetail'
  | 'privacyPolicy'
  | 'termsConditions'
  | 'disclaimer';

export const FAQ_DATA: Record<FAQCategory, {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: FAQItem[];
}> = {
  home: {
    title: 'Frequently Asked Questions',
    subtitle: 'Got questions about our loan options, vehicle marketplace, or approval process? Find clear answers below.',
    items: [
      {
        question: 'How is my EMI actually calculated?',
        answer: 'We use the reducing-balance method: principal, interest rate, and tenure feed the standard EMI formula. Every payment first clears interest, then chips away at principal.',
      },
      {
        question: 'Is my financial data actually secure?',
        answer: 'Yes — bank-grade AES-256 encryption at rest, TLS in transit, and read-only access for the AI assistant. No third party ever sees raw account numbers; SM Associate itself can\'t either.',
      },
      {
        question: 'Can I track my investments in real time?',
        answer: 'Yes — mutual funds, SIPs, and linked brokerage holdings refresh live inside your financial profile, alongside credit score and loan balances, in one view.',
      },
      {
        question: 'What documents do I need for a loan?',
        answer: 'PAN and Aadhaar for identity, three months of bank statements, latest salary slips or ITR for the self-employed, and property papers if it\'s a secured loan. Upload once — we reuse it across every application.',
      },
      {
        question: 'What credit score do I need to qualify?',
        answer: 'Most partner lenders look for 700+, but SM Finance AI matches you against lenders who work with lower scores too — you\'ll see your realistic options, not just the best-case ones.',
      },
      {
        question: 'Can I list a car or property to sell?',
        answer: 'Yes — list your car or property in minutes with verified valuation guidance, then track buyer interest from the same dashboard you use for loans and investments.',
      },
      {
        question: 'How fast can I get loan approval?',
        answer: 'In-principle approval in as little as 4 minutes for pre-verified profiles. Full disbursal timing depends on the lender and document checks, but most personal loans clear within 24–48 hours.',
      },
      {
        question: 'Can I switch between loan offers before signing?',
        answer: 'Yes — compare offers side by side and switch lenders anytime before you e-sign. Nothing is locked in until you actually accept a specific offer.',
      },
    ],
  },

  about: {
    title: 'Frequently Asked Questions',
    subtitle: 'Learn more about our Tirunelveli team, our partner banking network, and our commitment to you.',
    items: [
      {
        question: 'Who is SM Associate and where are you located?',
        answer: 'SM Associate is a premier financial brokerage and certified pre-owned vehicle advisory headquartered at No 183 E4, Nellaiapper High Road, Thirunagar, Tirunelveli Junction, Tamil Nadu.',
      },
      {
        question: 'Which banks and NBFCs do you partner with?',
        answer: 'We partner with over 25+ top public, private banks and RBI-registered NBFCs including HDFC, ICICI, SBI, Axis, Bajaj Finserv, Tata Capital, and Cholamandalam to bring you lowest rates.',
      },
      {
        question: 'Are your consultation and loan matching services free?',
        answer: 'Yes! Our initial advisory, loan comparison, and vehicle search guidance are 100% free with no hidden upfront consultation fees.',
      },
      {
        question: 'How do you ensure transparency in vehicle & loan deals?',
        answer: 'Every loan sanction letter comes directly from the partner bank with itemized APR, processing fee, and tenure. For vehicles, we provide full inspection reports and genuine service logs.',
      },
      {
        question: 'Can I visit your office in person for assistance?',
        answer: 'Absolutely! Our Tirunelveli office is open Monday to Saturday from 9:00 AM to 6:00 PM. You can walk in or book a dedicated appointment with our senior loan and automotive advisors.',
      },
      {
        question: 'Do you offer doorstep support across Tirunelveli district?',
        answer: 'Yes, for property inspections, document pickup, physical vehicle evaluations, and loan agreement sign-offs, our field executives provide convenient doorstep visits.',
      },
    ],
  },

  loans: {
    title: 'Frequently Asked Questions',
    subtitle: 'Explore our multi-category borrowing options, eligibility checks, and quick disbursal guidelines.',
    items: [
      {
        question: 'What types of loans does SM Associate facilitate?',
        answer: 'We facilitate Home Loans, Personal Loans, Car Loans (New & Used), Two-Wheeler Loans, Business & MSME Loans, and Machinery/Working Capital loans with custom terms.',
      },
      {
        question: 'How do you find the lowest interest rate for my profile?',
        answer: 'Our proprietary matching engine evaluates your income, CIBIL score, and tenure requirements against real-time rate grids from 25+ lenders to secure the lowest feasible APR.',
      },
      {
        question: 'Can I apply for a loan if I have an existing EMI running?',
        answer: 'Yes, as long as your Total Fixed Obligation to Income Ratio (FOIR) is generally below 50–60%. We can also structure a debt consolidation loan to lower your monthly outflow.',
      },
      {
        question: 'What is the minimum credit score required to get approved?',
        answer: 'While 750+ yields the lowest interest rates, we work with specialized lending partners who cater to credit scores between 600 and 749, as well as first-time borrowers.',
      },
      {
        question: 'Is a co-applicant mandatory for loan approval?',
        answer: 'Not for standard personal or vehicle loans. However, for higher ticket home loans and business loans, adding a working co-applicant significantly boosts eligibility and loan amount.',
      },
      {
        question: 'Can I make partial prepayments or foreclosure before tenure?',
        answer: 'Yes! For floating-rate retail loans (like home loans), RBI mandates zero foreclosure charges. For fixed-rate loans, charges vary between 0% and 3% depending on the lender.',
      },
      {
        question: 'How quickly is the loan disbursed into my bank account?',
        answer: 'Instant personal loans disburse in 4 to 24 hours. Vehicle and business loans typically take 24–48 hours, while secured home loans disburse within 3–5 working days post property legal vetting.',
      },
      {
        question: 'What happens if my loan application gets rejected by one bank?',
        answer: 'We analyze the exact rejection reason (e.g. documentation mismatch or internal bank policy) and route your application to an alternative lender whose criteria fits your profile.',
      },
    ],
  },

  homeLoan: {
    title: 'Frequently Asked Questions',
    subtitle: 'Everything you need to know about purchasing, constructing, or transferring your housing loan.',
    items: [
      {
        question: 'What is the starting interest rate for home loans?',
        answer: 'Home loan interest rates currently start from 6.5% p.a. for salaried professionals with prime credit scores (750+), with flexible terms across leading PSU and private lenders.',
      },
      {
        question: 'What is the maximum repayment tenure available?',
        answer: 'You can choose repayment tenures up to 30 years (or up to retirement age, whichever is earlier), keeping your monthly EMI burden low and manageable.',
      },
      {
        question: 'Can I avail tax benefits on my home loan?',
        answer: 'Yes! You can claim up to ₹1.5 Lakhs on principal repayment under Section 80C and up to ₹2 Lakhs on interest paid under Section 24(b) per financial year.',
      },
      {
        question: 'What property documents are required for home loans?',
        answer: 'Title Deed/Patta, Parent Documents for 30 years, Approved Building Plan/DTCP Approval, Encumbrance Certificate (EC) for 13–30 years, and latest Property Tax receipts.',
      },
      {
        question: 'How does a Home Loan Balance Transfer with Top-Up work?',
        answer: 'We help you shift your existing high-rate home loan to a lower-rate partner bank, saving lakhs in interest, plus unlock an additional low-interest top-up loan for renovation or personal needs.',
      },
      {
        question: 'Can self-employed individuals get a home loan in Tirunelveli?',
        answer: 'Yes! Self-employed business owners, doctors, and contractors can qualify with 2–3 years of ITR returns, computation of income, GST returns, and audited financial statements.',
      },
      {
        question: 'What percentage of the property value can I borrow (LTV)?',
        answer: 'Banks typically fund up to 80–90% of the agreement value for loans up to ₹30 Lakhs, and up to 75–80% for loan amounts exceeding ₹30 Lakhs.',
      },
      {
        question: 'Do you help with property valuation and legal scrutiny?',
        answer: 'Yes, our empanelled legal and technical evaluators examine all patta, encumbrance, and DTCP approvals to ensure a 100% dispute-free title before loan sanction.',
      },
    ],
  },

  personalLoan: {
    title: 'Frequently Asked Questions',
    subtitle: 'Transparent terms, zero collateral, and same-day disbursals for all your personal goals.',
    items: [
      {
        question: 'Do I need to submit any collateral or security?',
        answer: 'No collateral or guarantor is required. Personal loans are 100% unsecured and sanctioned purely based on your income stability and credit history.',
      },
      {
        question: 'How fast can I receive the money in my account?',
        answer: 'For applicants with digital KYC and net banking verification, funds are sanctioned in under 30 minutes and credited directly to your bank account within 4 to 24 hours.',
      },
      {
        question: 'What is the minimum monthly salary required?',
        answer: 'The minimum monthly take-home salary is ₹15,000 for salaried applicants in tier-2/3 cities like Tirunelveli, and ₹20,000 for metro employees.',
      },
      {
        question: 'What can I use the personal loan funds for?',
        answer: 'There are no end-use restrictions! You can use the funds for wedding expenses, medical emergencies, higher education, home renovation, travel, or debt consolidation.',
      },
      {
        question: 'What is the repayment tenure range?',
        answer: 'Flexible repayment terms are available from 12 months up to 60 months (5 years), allowing you to pick an EMI that fits comfortably into your monthly budget.',
      },
      {
        question: 'Can I get a personal loan if I am self-employed or freelance?',
        answer: 'Yes, self-employed professionals and business owners can qualify by providing 1–2 years of ITR filings, 6 months of active bank statements, and business registration proof.',
      },
      {
        question: 'Are there any hidden fees or pre-closure penalties?',
        answer: 'All processing charges (typically 1–2%) and stamp duties are explicitly listed in your digital sanction letter. Many lenders allow zero foreclosure penalties after 6–12 EMIs.',
      },
      {
        question: 'How do I check my maximum eligible loan amount?',
        answer: 'You can use our online EMI and eligibility tool or speak with our credit advisor who will calculate your exact borrowing limit based on your net monthly disposable income.',
      },
    ],
  },

  carLoan: {
    title: 'Frequently Asked Questions',
    subtitle: 'Drive home your dream new or pre-owned car with minimal paperwork and instant approvals.',
    items: [
      {
        question: 'What is the maximum financing percentage available for cars?',
        answer: 'We offer up to 90%–100% on-road financing for brand new cars, and up to 80%–85% of the certified market valuation for pre-owned cars.',
      },
      {
        question: 'What is the difference in interest rates for new vs used cars?',
        answer: 'New car loans generally start from 7.5%–8.5% p.a., while pre-owned car financing starts from 9.5%–11.5% p.a. depending on vehicle age, make, and borrower credit profile.',
      },
      {
        question: 'What is the maximum tenure for a car loan?',
        answer: 'You can choose repayment tenures up to 7 years (84 months) for new cars, and up to 5 years (60 months) for pre-owned cars.',
      },
      {
        question: 'How does RC hypothecation and endorsement work?',
        answer: 'Once the loan is disbursed, the RTO endorses the financing bank onto the vehicle Registration Certificate (RC). When the loan is closed, we help you obtain the Bank NOC and Form 35 to cancel hypothecation.',
      },
      {
        question: 'Can I get a car loan for a vehicle bought from an individual seller?',
        answer: 'Yes! We facilitate private car loan purchases. We carry out an inspection, verify clean RC and insurance papers, and disburse the loan directly to the seller upon ownership transfer.',
      },
      {
        question: 'Can I club accessories, insurance, and road tax in the loan?',
        answer: 'Yes, our on-road financing packages allow you to include 3-to-5 year motor insurance, RTO road taxes, extended warranty, and authorized accessories into a single manageable EMI.',
      },
      {
        question: 'What documents are required to apply for a car loan?',
        answer: 'Aadhaar, PAN, 3 months salary slips or 2 years ITR, 6 months bank statement, and the proforma invoice or seller RC copy for used vehicles.',
      },
      {
        question: 'Can I foreclose or prepay my car loan early?',
        answer: 'Yes, most partner banks allow partial prepayment or complete foreclosure after 6 to 12 months with minimal nominal charges.',
      },
    ],
  },

  bikeLoan: {
    title: 'Frequently Asked Questions',
    subtitle: 'Ride your dream scooter, commuter, or sports bike with low down payment and same-day delivery.',
    items: [
      {
        question: 'How low can my down payment be for a bike loan?',
        answer: 'We offer special low-down-payment schemes starting from just 10%–15% (and up to 95% on-road funding on select models for eligible applicants).',
      },
      {
        question: 'How fast can a two-wheeler loan get approved in Tirunelveli?',
        answer: 'With instant digital KYC and bank statement verification, in-principle approval takes under 15 minutes, allowing you to take delivery the very same day.',
      },
      {
        question: 'Can college students or first-time jobbers get a bike loan?',
        answer: 'Yes! Students with a working co-applicant (parent or guardian) and first-time salaried employees with at least 3 months of pay credits are readily eligible.',
      },
      {
        question: 'What is the typical repayment tenure for two-wheelers?',
        answer: 'You can choose convenient repayment options ranging from 12 months up to 36 or 48 months to keep your monthly installment affordable.',
      },
      {
        question: 'Do you finance pre-owned / second-hand two-wheelers?',
        answer: 'Yes, we provide used two-wheeler financing for verified motorcycles and scooters up to 7–8 years of age with quick inspection and fair interest rates.',
      },
      {
        question: 'Is insurance included in the bike financing package?',
        answer: 'Yes, mandatory 5-year third-party and 1-year comprehensive insurance, road tax, and registration can all be bundled into the financed amount.',
      },
      {
        question: 'What minimum documents are needed for approval?',
        answer: 'Simply provide your PAN Card, Aadhaar Card, proof of current residence in Tamil Nadu, and 3 months bank statement.',
      },
      {
        question: 'How do I pay my monthly bike EMIs?',
        answer: 'EMIs are automated through NACH / e-Mandate auto-debit directly from your salary or savings account on your designated date each month.',
      },
    ],
  },

  businessLoan: {
    title: 'Frequently Asked Questions',
    subtitle: 'Collateral-free working capital, equipment finance, and expansion loans for Tirunelveli businesses.',
    items: [
      {
        question: 'Can I get a business loan without pledging property (unsecured)?',
        answer: 'Yes! We facilitate collateral-free MSME business loans up to ₹50 Lakhs based on your annual business turnover, banking cash flows, and GST filings.',
      },
      {
        question: 'What is the minimum vintage/history required for business financing?',
        answer: 'Most partner lenders require at least 1 to 2 years of active business operations with verifiable bank transactions or GST returns.',
      },
      {
        question: 'What types of commercial credit are available?',
        answer: 'We provide unsecured term loans, overdraft (OD) facilities, cash credit (CC), machinery loans, invoice discounting, and commercial vehicle finance.',
      },
      {
        question: 'What documents do I need to submit for a business loan?',
        answer: 'Business registration (GST / Udyam / Trade License), last 2 years ITR with computation & balance sheets, 12 months bank statements, and KYC of all partners/directors.',
      },
      {
        question: 'How is my business loan eligibility calculated?',
        answer: 'Eligibility is primarily calculated using your Debt Service Coverage Ratio (DSCR), average monthly banking turnover, profit margins, and repayment track record.',
      },
      {
        question: 'Are CGTMSE scheme loans supported through your network?',
        answer: 'Yes, we guide eligible micro and small enterprises through government-backed CGTMSE scheme facilities offering credit guarantee without third-party collateral.',
      },
      {
        question: 'How quickly will the business funds be disbursed?',
        answer: 'Unsecured business loans are sanctioned and disbursed in 48 to 72 hours once all financial statements and banking APIs are verified.',
      },
      {
        question: 'Can retail shop owners and traders in Tirunelveli apply?',
        answer: 'Absolutely! Traders, retail shop owners, manufacturers, doctors, and service providers across Tirunelveli and Southern Tamil Nadu are fully eligible.',
      },
    ],
  },

  twoWheelerInsurance: {
    title: 'Frequently Asked Questions',
    subtitle: 'Instant policy renewal, zero depreciation add-ons, and hassle-free claim settlement support.',
    items: [
      {
        question: 'What is the difference between Third-Party and Comprehensive insurance?',
        answer: 'Third-Party covers legal liabilities and bodily damage to others (mandatory by law). Comprehensive covers both third-party liabilities AND damages to your own bike from accidents, theft, fire, or natural calamities.',
      },
      {
        question: 'How does the Zero Depreciation (Bumper-to-Bumper) add-on help?',
        answer: 'With Zero Dep, insurance pays 100% cost of replacing plastic, rubber, fiber, and metal parts without deducting depreciation when repairing after an accident.',
      },
      {
        question: 'Can I transfer my No Claim Bonus (NCB) from my old bike to a new one?',
        answer: 'Yes! NCB belongs to you (the vehicle owner), not the bike. You can transfer up to 50% accumulated NCB discount onto your new bike insurance policy.',
      },
      {
        question: 'How quickly can I get my expired two-wheeler policy renewed?',
        answer: 'We generate instant digital policy copy in 2 minutes without physical inspection for recently expired policies, ensuring you stay road-legal and penalty-free.',
      },
      {
        question: 'Do you have cashless garage tie-ups in Tirunelveli?',
        answer: 'Yes! Our insurance partner network covers 100+ authorized two-wheeler service centers and dealer workshops in Tirunelveli and nearby towns for 100% cashless repairs.',
      },
      {
        question: 'What is Personal Accident (PA) cover and is it mandatory?',
        answer: 'PA cover provides ₹15 Lakhs financial protection for the owner-driver in case of accidental death or permanent disability, and is legally mandatory unless you already hold an active standalone PA policy.',
      },
      {
        question: 'What steps should I take if an accident occurs?',
        answer: 'Take photos of the damage, inform SM Associate support or the insurer toll-free immediately, avoid moving the bike if severe, and our team will coordinate the surveyor and cashless claim filing.',
      },
      {
        question: 'Can I add roadside assistance (RSA) to my two-wheeler policy?',
        answer: 'Yes, 24x7 Roadside Assistance covers flat tyre support, on-spot minor repairs, towing, and emergency fuel delivery anywhere in Tamil Nadu.',
      },
    ],
  },

  emiCalculator: {
    title: 'Frequently Asked Questions',
    subtitle: 'Understand interest amortization, loan tenures, and how prepayments save you money.',
    items: [
      {
        question: 'What formula is used to calculate loan EMI?',
        answer: 'EMI is calculated using: E = [P × r × (1 + r)^n] / [(1 + r)^n - 1], where P is Principal, r is Monthly Interest Rate (annual rate / 12 / 100), and n is Total Months.',
      },
      {
        question: 'What is the difference between Flat Rate and Reducing Balance Interest?',
        answer: 'Flat rate calculates interest on the initial principal forever. Reducing balance recalculates interest only on your remaining unpaid balance each month, resulting in substantially lower total interest.',
      },
      {
        question: 'How do extra principal prepayments reduce my loan cost?',
        answer: 'Every extra rupee paid goes 100% toward principal reduction. This reduces future compounding interest and can cut years off your mortgage or vehicle loan tenure.',
      },
      {
        question: 'Can I use this calculator for Home, Car, and Personal loans?',
        answer: 'Yes! Simply slide or enter the specific loan amount, interest rate (e.g. 6.5% for Home, 8.5% for Car, 10.5% for Personal), and tenure in years/months to see the exact monthly payout.',
      },
      {
        question: 'Does the calculator include bank processing fees and insurance?',
        answer: 'The EMI tool computes the pure monthly installment. Bank processing fees (typically 0.5%–2%) and loan protection insurance are one-time or amortized additions itemized during final sanction.',
      },
      {
        question: 'How does choosing a longer tenure affect my total interest paid?',
        answer: 'A longer tenure decreases your monthly EMI amount, but increases total interest paid over the life of the loan. A shorter tenure increases monthly EMI but minimizes total interest expense.',
      },
      {
        question: 'What is the Amortization Schedule table?',
        answer: 'An amortization table shows month-by-month breakdown of how much of each EMI goes toward paying interest versus how much reduces your principal loan balance.',
      },
      {
        question: 'Can I apply directly after calculating my EMI on this page?',
        answer: 'Yes! Once you find the ideal EMI and tenure combination, click the "Apply Now" button to submit your pre-filled inquiry directly to our credit desk.',
      },
    ],
  },

  vehicles: {
    title: 'Frequently Asked Questions',
    subtitle: 'Browse certified second-hand cars and two-wheelers in Tirunelveli with 100% clean paperwork.',
    items: [
      {
        question: 'How do you verify the condition of pre-owned cars and bikes?',
        answer: 'Every vehicle undergoes a stringent 140+ point inspection covering engine diagnostics, transmission, electricals, suspension, chassis integrity, and verified non-accidental history.',
      },
      {
        question: 'Do you handle the RTO RC ownership transfer for buyers?',
        answer: 'Yes! We handle 100% of the RTO paperwork, Form 29/30 filing, address verification, and deliver the newly transferred Registration Certificate (RC) to your doorstep.',
      },
      {
        question: 'Can I schedule a test drive in Tirunelveli before purchasing?',
        answer: 'Yes! You can book a free test drive online or visit our Tirunelveli showroom to test drive any car or motorcycle at your convenience.',
      },
      {
        question: 'Can I get financing / loan on the vehicles listed in the marketplace?',
        answer: 'Absolutely. We offer integrated used-vehicle loans with up to 85% funding, attractive interest rates, and approval within 24 hours directly through our desk.',
      },
      {
        question: 'Are there any hidden brokerages or commission fees for buyers?',
        answer: 'No hidden fees. Listed prices are fully transparent, with itemized transfer costs and optional warranty packages clearly specified upfront.',
      },
      {
        question: 'What documents will I receive upon completing the purchase?',
        answer: 'You will receive the vehicle invoice, delivery challan, transfer acknowledgment receipt, valid insurance policy copy, pollution certificate (PUCC), and original keys/manuals.',
      },
      {
        question: 'Can I exchange or trade in my old two-wheeler or car?',
        answer: 'Yes! We offer spot vehicle exchange. Bring your existing vehicle for a 20-minute inspection, and apply its valuation directly as down payment for your upgrade.',
      },
      {
        question: 'What if I want a specific vehicle model that is not listed?',
        answer: 'Reach out to our sourcing desk! With our dealer network across Tamil Nadu, we can source your desired make, model, and year within 3 to 7 days.',
      },
    ],
  },

  vehicleDetail: {
    title: 'Frequently Asked Questions',
    subtitle: 'Learn about booking tokens, inspection reports, warranty protection, and transfer steps.',
    items: [
      {
        question: 'How do I reserve or book this specific vehicle?',
        answer: 'You can place a nominal refundable booking token online or at our branch to lock the vehicle for 48 hours while you complete your test drive and financing checks.',
      },
      {
        question: 'Is the booking amount refundable if I change my mind?',
        answer: 'Yes, 100% refundable with zero deduction if you decide not to proceed prior to RTO transfer application submission.',
      },
      {
        question: 'Can I bring my own mechanic to inspect the vehicle?',
        answer: 'We actively encourage it! You are welcome to inspect every inch of the vehicle, plug in OBD scanners, and conduct a thorough road test with your trusted technician.',
      },
      {
        question: 'Is the odometer reading guaranteed genuine?',
        answer: 'Yes. We cross-verify the odometer reading against authorized brand service history records, insurance renewal logs, and RTO vehicle databases.',
      },
      {
        question: 'How long does the RTO transfer take to reflect in mParivahan?',
        answer: 'The transfer application is submitted within 24 hours of purchase, and the updated RC status typically reflects in mParivahan / Digilocker within 7 to 14 working days.',
      },
      {
        question: 'Is warranty included with this certified vehicle?',
        answer: 'Eligible certified cars and bikes include complimentary 6-month engine and transmission warranty with options to extend coverage up to 2 years.',
      },
    ],
  },

  carResale: {
    title: 'Frequently Asked Questions',
    subtitle: 'Get top market valuation, instant spot bank transfer, and zero-liability ownership transfer.',
    items: [
      {
        question: 'How do you determine the valuation of my car?',
        answer: 'We evaluate real-time Tamil Nadu resale market trends, vehicle age, odometer reading, cosmetic condition, service history, and engine health to give you the highest competitive price.',
      },
      {
        question: 'How fast do I receive payment after selling my car?',
        answer: 'Instant payment! Once the agreement is signed and physical keys/documents are handed over, the full amount is credited to your bank account via IMPS/RTGS on the spot.',
      },
      {
        question: 'Am I protected from future traffic challans or liabilities after sale?',
        answer: 'Yes! We issue an official legal Delivery Receipt and indemnity agreement transferring full operational liability to us immediately, followed by guaranteed RTO transfer.',
      },
      {
        question: 'Can I sell a car that currently has an active bank loan / hypothecation?',
        answer: 'Yes! We coordinate directly with your lending bank to clear the outstanding loan balance, obtain the Foreclosure Letter / NOC, and pay you the remaining equity balance.',
      },
      {
        question: 'Do I have to bring my car to your office for inspection?',
        answer: 'We provide free doorstep inspection across Tirunelveli and nearby towns, or you can drive into our Thirunagar office for a 20-minute rapid evaluation.',
      },
      {
        question: 'What documents do I need to provide when selling my car?',
        answer: 'Original RC Book, valid Insurance policy, latest PUC certificate, duplicate key, Aadhaar card, PAN card, and bank account details for instant fund transfer.',
      },
      {
        question: 'Are there any hidden inspection or paperwork deduction charges?',
        answer: 'Zero deductions. Our valuation quote is 100% net to you, with all RTO transfer charges and documentation fees absorbed by SM Associate.',
      },
      {
        question: 'What happens if my car has minor dents or pending repairs?',
        answer: 'We buy cars in as-is condition. Minor dents, paint scratches, or pending tire changes are transparently factored into the valuation without delaying the sale.',
      },
    ],
  },

  sellVehicle: {
    title: 'Frequently Asked Questions',
    subtitle: 'Sell your bike, scooter, or car in 3 simple steps with guaranteed best market price.',
    items: [
      {
        question: 'How do I start the process to sell my vehicle?',
        answer: 'Simply fill out our 1-minute vehicle submission form with your vehicle make, model, year, and mileage, and our valuation specialist will call you with a preliminary quote.',
      },
      {
        question: 'Can I sell my two-wheeler / bike through this platform?',
        answer: 'Yes! We buy all brands of scooters and motorcycles (Honda, TVS, Yamaha, Royal Enfield, Bajaj, Hero, Suzuki, KTM) with instant same-day spot cash settlement.',
      },
      {
        question: 'Do I have to negotiate with multiple random buyers?',
        answer: 'Never! SM Associate buys directly or handles verified buyers, eliminating annoying phone calls, lowball offers, and risky test drives by strangers.',
      },
      {
        question: 'How does doorstep evaluation work?',
        answer: 'Our certified mobile evaluator visits your home or workplace at your scheduled time, completes a 15-minute physical check, and provides a final binding purchase offer.',
      },
      {
        question: 'What if my vehicle registration is from another RTO district in TN?',
        answer: 'We accept vehicles registered in any RTO across Tamil Nadu (TN-72, TN-76, TN-69, TN-01 to TN-99) and manage inter-RTO clearance and NOC seamlessly.',
      },
      {
        question: 'Is my sale agreement legally binding?',
        answer: 'Yes, both parties sign an authorized Stamp Paper / legal sales agreement with valid date and time stamps protecting both seller and buyer rights.',
      },
    ],
  },

  contact: {
    title: 'Frequently Asked Questions',
    subtitle: 'Get quick answers about visiting our office, response times, and application tracking.',
    items: [
      {
        question: 'What are your operating hours and office address?',
        answer: 'Our main office is at No 183 E4, Nellaiapper High Road, Thirunagar, Tirunelveli Junction, open Monday to Saturday from 9:00 AM to 6:00 PM.',
      },
      {
        question: 'How fast will an advisor get back to my online message?',
        answer: 'During business hours, our support team responds within 15 to 30 minutes. Messages submitted overnight are addressed first thing the following morning.',
      },
      {
        question: 'Can I reach your team directly via WhatsApp?',
        answer: 'Yes! You can message us anytime at +91 9790219874 on WhatsApp for instant rate queries, document uploads, and quick status tracking.',
      },
      {
        question: 'Can I book a personalized one-on-one financial planning session?',
        answer: 'Yes! Submit your contact details with a note requesting a consultation, and we will schedule an in-person or telephonic session with a senior mortgage/credit advisor.',
      },
      {
        question: 'Do you charge any fee for loan consultation or eligibility review?',
        answer: 'No, our initial consultation, eligibility evaluation, and bank comparisons are 100% free with no obligation to proceed.',
      },
      {
        question: 'How do I track the current status of my submitted loan application?',
        answer: 'You can call our dedicated support desk at +91 9790219874 / +91 9047007720 with your application reference ID or registered phone number for real-time updates.',
      },
    ],
  },

  blog: {
    title: 'Frequently Asked Questions',
    subtitle: 'Insights, market updates, credit score tips, and automobile buying strategies.',
    items: [
      {
        question: 'What topics does the SM Associate blog cover?',
        answer: 'We publish in-depth guides on home and personal loans, CIBIL credit score improvement, auto market trends, used-vehicle inspection checklists, and tax-saving strategies.',
      },
      {
        question: 'How often are new articles and interest rate updates published?',
        answer: 'We publish fresh market analyses, RBI repo rate updates, and practical financing guides bi-weekly to keep borrowers and car buyers well informed.',
      },
      {
        question: 'Can I request a guide on a specific financial or automotive topic?',
        answer: 'Yes! Send us a message via our Contact page with your requested topic, and our editorial and advisory team will be glad to feature it in upcoming posts.',
      },
      {
        question: 'How can I apply the tips from these articles to my loan application?',
        answer: 'Every blog post includes actionable steps and direct links to our interactive calculators and advisory desks to help you put advice into practice immediately.',
      },
      {
        question: 'Are the interest rates quoted in articles updated with latest RBI repo rates?',
        answer: 'Yes, our finance team regularly audits and updates interest benchmarks and policy details following every RBI Monetary Policy Committee meeting.',
      },
      {
        question: 'Can I share these articles with friends and family?',
        answer: 'Please do! You can share our articles via WhatsApp, LinkedIn, Facebook, or Twitter using the share links on each article page.',
      },
    ],
  },

  blogDetail: {
    title: 'Frequently Asked Questions',
    subtitle: 'Need more clarification on the insights shared in this article? Explore quick answers below.',
    items: [
      {
        question: 'How can I discuss this article with an SM Associate specialist?',
        answer: 'Click the "Apply Now" or "Contact Us" buttons on this page to discuss custom scenarios, loan restructuring, or vehicle options with our team.',
      },
      {
        question: 'How do recent regulatory changes affect the advice in this guide?',
        answer: 'Our insights adhere strictly to the latest RBI and IRDAI directives. We update figures whenever statutory guidelines or lending rules change.',
      },
      {
        question: 'Can I get a personalized calculation tailored to my numbers?',
        answer: 'Yes! Use our free online EMI Calculator or send your numbers via WhatsApp for a tailored loan amortization projection.',
      },
      {
        question: 'Where can I read more related articles?',
        answer: 'Explore our full library in the Blog section for interconnected guides on credit scores, home mortgages, vehicle resale, and personal finance.',
      },
    ],
  },

  privacyPolicy: {
    title: 'Frequently Asked Questions',
    subtitle: 'Transparent details on how we safeguard, encrypt, and respect your personal information.',
    items: [
      {
        question: 'What personal information does SM Associate collect?',
        answer: 'We only collect essential details required for loan eligibility matching and vehicle transactions, such as name, contact number, income bracket, and KYC documents.',
      },
      {
        question: 'Is my personal data ever sold or rented to third-party telemarketers?',
        answer: 'Never. We do not sell, rent, or trade your personal data. Information is shared strictly with authorized partner banks/NBFCs with your explicit consent for loan processing.',
      },
      {
        question: 'How is my financial and KYC data secured?',
        answer: 'All data is stored in bank-grade encrypted databases (AES-256) and transmitted via secure TLS/HTTPS protocols with strict role-based access controls.',
      },
      {
        question: 'Can I request deletion or update of my personal data?',
        answer: `Yes. You can contact our data protection team at ${process.env.CONTACT_TO_EMAIL || 'your email'} anytime to request review, update, or deletion of your stored records.`,
      },
      {
        question: 'How long do you retain my submitted documents?',
        answer: 'Documents are retained only for the duration necessary to complete your loan sanction or vehicle transfer, and in accordance with statutory compliance guidelines.',
      },
      {
        question: 'Does your website use cookies?',
        answer: 'We use standard functional and analytical cookies solely to enhance browsing performance and analyze user traffic, never for unauthorized tracking.',
      },
    ],
  },

  termsConditions: {
    title: 'Frequently Asked Questions',
    subtitle: 'Key guidelines governing our financial brokerage, vehicle marketplace, and advisory services.',
    items: [
      {
        question: 'What is the role of SM Associate in loan transactions?',
        answer: 'SM Associate operates as an authorized corporate direct sales associate (DSA) and advisory intermediary connecting borrowers with certified partner banks and NBFCs.',
      },
      {
        question: 'Who makes the final loan sanction and interest rate decision?',
        answer: 'The final credit decision, interest rate pricing, and sanction terms are determined by the respective underwriting banks/NBFCs in accordance with their internal policies.',
      },
      {
        question: 'What are the buyer and seller obligations in vehicle marketplace transactions?',
        answer: 'Sellers must disclose accurate vehicle history and clear encumbrances. Buyers agree to inspect the vehicle prior to final sale and cooperate with timely RTO transfer.',
      },
      {
        question: 'Are quoted interest rates and EMI figures binding?',
        answer: 'Online calculators provide accurate mathematical estimates. Final contractual APR and fees are established upon official bank sanction letter issuance.',
      },
      {
        question: 'Which jurisdiction applies in the event of legal disputes?',
        answer: 'All services and agreements are governed by the laws of India and subject to the exclusive jurisdiction of the competent courts in Tirunelveli, Tamil Nadu.',
      },
      {
        question: 'How can I resolve a grievance or service issue?',
        answer: `We maintain a dedicated customer grievance cell. You can reach out directly to ${process.env.CONTACT_TO_EMAIL || 'your email'} or call +91 9790219874 for prompt resolution within 48 hours.`,
      },
    ],
  },

  disclaimer: {
    title: 'Frequently Asked Questions',
    subtitle: 'Statutory notices regarding financial calculations, partner approvals, and vehicle listings.',
    items: [
      {
        question: 'Is SM Associate a bank or deposit-taking institution?',
        answer: 'No. SM Associate is an independent financial brokerage and automotive advisory firm, not a deposit-taking bank or non-banking financial institution.',
      },
      {
        question: 'Are loan approvals guaranteed by SM Associate?',
        answer: 'We guarantee the highest possible matching accuracy and fastest processing, but formal sanction is subject to the lending institution\'s credit verification and risk policies.',
      },
      {
        question: 'How accurate are vehicle valuations and listings?',
        answer: 'Vehicle valuations represent estimated fair market values based on condition and historical pricing. Physical inspection by the buyer is always recommended before final deal.',
      },
      {
        question: 'Do interest rates change after application submission?',
        answer: 'Interest rates fluctuate based on RBI policy rate revisions and individual credit profile evaluation at the time of final bank sanction.',
      },
      {
        question: 'Are there any upfront fees demanded by SM Associate agents?',
        answer: 'No SM Associate representative will ever ask for cash or upfront deposits into personal accounts. All fees are paid directly to verified partner institutions.',
      },
      {
        question: 'How do I verify the authenticity of an SM Associate representative?',
        answer: 'Every authorized executive carries an official SM Associate identification card. You can verify any representative by calling our headquarters at +91 9790219874.',
      },
    ],
  },
};
