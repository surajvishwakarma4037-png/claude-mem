export const siteConfig = {
  location: 'Banjara Hills, Hyderabad, India',
  mapUrl: 'https://www.google.com/maps?q=Banjara+Hills+Hyderabad+India&output=embed',
  phone: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  whatsapp: '919876543210',
  whatsappUrl: 'https://wa.me/919876543210?text=Hello%20HealthScan%20Diagnostics%2C%20I%20need%20help%20with%20a%20test%20booking.',
  email: 'hello@healthscandiagnostics.com',
  address: '12 Health Avenue, Banjara Hills, Hyderabad, Telangana 500034',
  hours: 'Mon-Sat: 7:00 AM - 9:00 PM'
};

export const categories = ['All', 'General Health', 'Cardiac', 'Hormone', 'Infection', 'Nutritional', 'Preventive'];

export const tests = [
  {
    id: 'cbc',
    name: 'Complete Blood Count',
    category: 'General Health',
    price: 1290,
    turnaround: '24 hours',
    description: 'Core blood analysis for CBC, WBC, RBC, platelet count and haemoglobin profile.',
    popular: true,
  },
  {
    id: 'lipid',
    name: 'Lipid Profile',
    category: 'Cardiac',
    price: 1490,
    turnaround: '24 hours',
    description: 'Cholesterol and triglyceride monitoring for heart health and risk assessment.',
    popular: true,
  },
  {
    id: 'thyroid',
    name: 'Thyroid Function Test',
    category: 'Hormone',
    price: 1790,
    turnaround: '24 hours',
    description: 'Evaluate thyroid regulating hormones for metabolic and energy concerns.',
    popular: true,
  },
  {
    id: 'vitamin-d',
    name: 'Vitamin D & B12',
    category: 'Nutritional',
    price: 2190,
    turnaround: '48 hours',
    description: 'Assess deficiency markers related to immunity, fatigue and bone health.',
  },
  {
    id: 'covid',
    name: 'RT-PCR COVID Test',
    category: 'Infection',
    price: 1590,
    turnaround: '12 hours',
    description: 'Rapid molecular detection for suspected viral infections with home collection support.',
  },
  {
    id: 'liver',
    name: 'Liver Function Test',
    category: 'General Health',
    price: 1690,
    turnaround: '24 hours',
    description: 'Track liver enzymes, bilirubin and protein functions for screening and monitoring.',
  },
  {
    id: 'hba1c',
    name: 'HbA1c',
    category: 'Preventive',
    price: 1390,
    turnaround: '24 hours',
    description: 'Long-term blood sugar level screening for diabetes prevention and monitoring.',
  },
  {
    id: 'kidney',
    name: 'Kidney Function Test',
    category: 'General Health',
    price: 1490,
    turnaround: '24 hours',
    description: 'Assess creatinine, BUN and renal filtration benchmarks for kidney health.',
  },
];

export const packages = [
  {
    name: 'Essential Care',
    price: 2999,
    description: 'Ideal for annual preventive screening with essential blood and metabolism markers.',
    features: ['CBC', 'Lipid Profile', 'Kidney Function', 'Vitamin D'],
    prefix: 'Starter',
  },
  {
    name: 'Women’s Health Plus',
    price: 4599,
    description: 'Supports preventive care with hormone and nutritional insights relevant to wellness.',
    features: ['Thyroid', 'Vitamin D', 'CBC', 'HbA1c'],
    prefix: 'Popular',
  },
  {
    name: 'Executive Health Scan',
    price: 6999,
    description: 'Comprehensive corporate and premium health assessment for proactive care planning.',
    features: ['CBC', 'Lipid', 'Liver', 'Kidney', 'Thyroid', 'Vitamin D'],
    prefix: 'Premium',
  },
];

export const faqs = [
  {
    question: 'How can I book a test?',
    answer: 'Use the Book a Test form on our website or call our care desk. We confirm collection scheduling and test details instantly.',
  },
  {
    question: 'Do you offer home sample collection?',
    answer: 'Yes. Our trained phlebotomists visit homes and workplaces for sample collection in major city areas.',
  },
  {
    question: 'How soon will I receive reports?',
    answer: 'Most routine reports are available within 24 hours. Some special tests may take longer based on processing needs.',
  },
  {
    question: 'Can I consult a doctor for abnormal results?',
    answer: 'Yes. We provide guidance and can connect you to our support team for follow-up consultation recommendations.',
  },
];

export const testimonials = [
  {
    name: 'Aisha Mehta',
    title: 'Working Professional',
    quote: 'The booking process was incredibly smooth and the home collection team was punctual. The report was easy to understand.',
  },
  {
    name: 'Rohit Sharma',
    title: 'Fitness Enthusiast',
    quote: 'Excellent service and transparent pricing. I especially appreciated the clear instructions and quick turnaround.',
  },
  {
    name: 'Sneha Reddy',
    title: 'Parent',
    quote: 'I booked a full health package for my family and the experience felt premium, reassuring and efficient.',
  },
];

export const sampleBookings = [
  { id: 'BK-1001', patient: 'Aisha Mehta', test: 'CBC + Thyroid', date: '2026-11-02', status: 'Pending' },
  { id: 'BK-1002', patient: 'Rohit Sharma', test: 'Lipid Profile', date: '2026-11-03', status: 'Completed' },
  { id: 'BK-1003', patient: 'Sneha Reddy', test: 'Executive Health Scan', date: '2026-11-05', status: 'Pending' },
  { id: 'BK-1004', patient: 'Ananya Bose', test: 'Vitamin D & B12', date: '2026-11-06', status: 'Completed' },
];

export const patientReports = [
  {
    id: 'RP-501', name: 'Annual Summary Report', date: '2026-10-15', type: 'General Health', file: 'annual-summary.pdf', status: 'Ready',
  },
  {
    id: 'RP-502', name: 'Thyroid Evaluation', date: '2026-09-18', type: 'Hormone', file: 'thyroid-evaluation.pdf', status: 'Ready',
  },
  {
    id: 'RP-503', name: 'Executive Health Package Report', date: '2026-08-11', type: 'Premium', file: 'executive-health.pdf', status: 'Ready',
  },
];

export const adminStats = {
  totalBookings: 248,
  pendingBookings: 18,
  completedBookings: 219,
};

export const services = [
  {
    title: 'Pathology',
    description: 'Accurate routine and advanced diagnostic blood, urine and stool analysis with standard turnaround times.',
  },
  {
    title: 'Radiology',
    description: 'Digital imaging consultations and diagnostic support for screening, follow-up and preventive care.',
  },
  {
    title: 'Wellness Packages',
    description: 'Curated packages for annual checkups, family screening and strategically designed preventive health plans.',
  },
  {
    title: 'Home Collection',
    description: 'Comfort-first sample collection by trained staff with secure transport to our laboratory network.',
  },
];

export const reasons = [
  'Sample collection with strict chain-of-custody procedures',
  'Modern digital platform with transparent scheduling and tracking',
  'Patient-first support and clear result guidance',
  'Secure data handling with role-based access for admin and patient workflows',
];
