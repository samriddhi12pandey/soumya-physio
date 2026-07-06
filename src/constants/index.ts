// ============================================================
// SITE-WIDE CONSTANTS
// ============================================================

export const SITE = {
  name: 'Soumya Pandey',
  clinic: 'Physiotherapy & Wellness Clinic',
  tagline: 'Heal Better. Move Freely. Live Pain-Free.',
  phone: '+91 7355671043',
  email: 'sam1riddhi128@gmail.com',
  whatsapp: '917355671043',
  address: '203, Wellness Tower, Andheri West, Mumbai – 400053',
  mapUrl: 'https://maps.google.com/?q=Andheri+West+Mumbai',
  instagram: 'https://instagram.com/',
  facebook: 'https://facebook.com/',
  youtube: 'https://youtube.com/',
} as const

export const NAV_LINKS = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Contact', href: '/#contact' },
] as const

export const STATS = [
  {
    value: '1200+',
    label: 'Patients Treated',
    icon: '🏥',
  },
  {
    value: '4.9',
    label: 'Patient Rating',
    stars: true,
  },
] as const

export const SERVICES = [
  {
    id: 'orthopedic',
    icon: '🦴',
    title: 'Orthopedic Physiotherapy',
    description: 'Targeted rehabilitation for bones, joints, and soft tissue injuries. Restore full function after fractures, sprains, and ligament tears.',
    color: 'bg-teal-50 text-teal-700',
  },
  {
    id: 'sports',
    icon: '⚡',
    title: 'Sports Rehabilitation',
    description: 'Return-to-sport protocols for athletes of all levels. Faster recovery, stronger performance, and reduced re-injury risk.',
    color: 'bg-sky-50 text-sky-700',
  },
  {
    id: 'neuro',
    icon: '🧠',
    title: 'Neuro Rehabilitation',
    description: 'Specialized care for stroke, Parkinson\'s, and neurological conditions. Evidence-based therapy to restore independence and mobility.',
    color: 'bg-violet-50 text-violet-700',
  },
  {
    id: 'spine',
    icon: '🔄',
    title: 'Spine Care',
    description: 'Comprehensive care for back and neck conditions including slip disc, sciatica, and postural disorders through manual and exercise therapy.',
    color: 'bg-amber-50 text-amber-700',
  },
  {
    id: 'post-surgery',
    icon: '🩺',
    title: 'Post Surgery Recovery',
    description: 'Structured rehabilitation plans after orthopaedic surgeries. We work with your surgical team for safe, progressive recovery.',
    color: 'bg-rose-50 text-rose-700',
  },
  {
    id: 'yoga',
    icon: '🧘',
    title: 'Yoga Therapy',
    description: 'Therapeutic yoga as a complement to physiotherapy. Improve flexibility, reduce stress, and support long-term physical wellness.',
    color: 'bg-green-50 text-green-700',
  },
] as const

export const CONDITIONS = [
  'Back Pain', 'Neck Pain', 'Slip Disc', 'Sciatica',
  'Frozen Shoulder', 'ACL Injury', 'Arthritis', 'Knee Pain',
  'Stroke Recovery', "Bell's Palsy", 'Parkinson\'s', 'Tech Neck',
  'Post-Surgery', 'Fracture Rehab', 'Postural Disorders', 'WFH Pain',
] as const

export const WHY_CHOOSE_US = [
  {
    icon: '👩‍⚕️',
    title: 'Dual Qualified Expert',
    description: 'BPT & MPT degrees with certified yoga instruction. 8+ years of clinical experience across musculoskeletal and neurological conditions.',
  },
  {
    icon: '📱',
    title: 'Online & Clinic Care',
    description: 'Video, voice, and chat consultations mean expert care wherever you are. No travel required for follow-ups.',
  },
  {
    icon: '📋',
    title: 'Personalized Treatment',
    description: 'No generic protocols. Every plan is crafted around your specific condition, lifestyle, and recovery milestones.',
  },
  {
    icon: '🏆',
    title: '1200+ Recoveries',
    description: 'A track record of successful recoveries with a 94% patient satisfaction rate and 4.9-star rating across all platforms.',
  },
] as const

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Book Appointment',
    description: 'Choose your consultation type — clinic, video, voice, or chat. Instant confirmation.',
    icon: '📅',
  },
  {
    step: '02',
    title: 'Choose Date & Time',
    description: 'Pick a slot that fits your schedule. Available 7 days a week including evenings.',
    icon: '⏰',
  },
  {
    step: '03',
    title: 'Clinic or Video Consultation',
    description: 'Meet Soumya in-person or via a secure video call. Upload reports in advance.',
    icon: '💻',
  },
  {
    step: '04',
    title: 'Start Your Recovery',
    description: 'Receive your personalized plan and begin your journey to pain-free movement.',
    icon: '🚀',
  },
] as const

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rahul Agarwal',
    condition: 'Chronic Lower Back Pain',
    location: 'Mumbai',
    rating: 5,
    review: 'After two years of chronic back pain and multiple failed treatments, Soumya got me pain-free in six weeks. The online video sessions were incredibly thorough and the exercise plan was easy to follow at home.',
    initials: 'RA',
    bgColor: 'bg-teal-100',
    textColor: 'text-teal-700',
  },
  {
    id: 2,
    name: 'Priya Mehta',
    condition: 'ACL Rehabilitation',
    location: 'Delhi',
    rating: 5,
    review: 'Recovered from ACL surgery 3 months ahead of schedule. Soumya\'s structured rehab plan and constant WhatsApp support made all the difference. Back to playing basketball now!',
    initials: 'PM',
    bgColor: 'bg-sky-100',
    textColor: 'text-sky-700',
  },
  {
    id: 3,
    name: 'Sunita Kapoor',
    condition: 'Frozen Shoulder',
    location: 'Bangalore',
    rating: 5,
    review: 'The frozen shoulder was debilitating — I couldn\'t sleep or dress myself. Within 10 sessions, my range of motion was completely restored. Brilliant physiotherapist and genuinely compassionate.',
    initials: 'SK',
    bgColor: 'bg-violet-100',
    textColor: 'text-violet-700',
  },
  {
    id: 4,
    name: 'Arjun Nair',
    condition: 'Sports Knee Injury',
    location: 'Pune',
    rating: 5,
    review: 'Tore my meniscus during a marathon. Soumya had me running again in 14 weeks. The video consultations were as good as being there in person — detailed, focused, and very effective.',
    initials: 'AN',
    bgColor: 'bg-amber-100',
    textColor: 'text-amber-700',
  },
  {
    id: 5,
    name: 'Deepa Krishnan',
    condition: 'Sciatica',
    location: 'Chennai',
    rating: 5,
    review: 'Sciatic pain radiating to my foot for 8 months. Two sessions in and the pain reduced by 70%. The combination of manual therapy and the yoga exercises is simply brilliant.',
    initials: 'DK',
    bgColor: 'bg-rose-100',
    textColor: 'text-rose-700',
  },
  {
    id: 6,
    name: 'Vikram Sharma',
    condition: 'Post-Knee Surgery',
    location: 'Hyderabad',
    rating: 5,
    review: 'Post total knee replacement, I was worried about recovery. Soumya\'s step-by-step protocol restored full mobility in 8 weeks. Highly professional and extremely knowledgeable.',
    initials: 'VS',
    bgColor: 'bg-green-100',
    textColor: 'text-green-700',
  },
] as const

export const FAQ_ITEMS = [
  {
    question: 'How long is a physiotherapy session?',
    answer: 'Initial assessment sessions are 45–60 minutes. Follow-up sessions are typically 30–45 minutes depending on your treatment plan. Online consultations follow the same duration.',
  },
  {
    question: 'Do I need an appointment, or can I walk in?',
    answer: 'We work by appointment to ensure you receive dedicated, uninterrupted care. You can book online instantly or call us directly. Same-day appointments are often available.',
  },
  {
    question: 'Can I book a consultation online?',
    answer: 'Yes! You can book clinic visits, video calls, voice calls, and chat consultations directly from our website. Online payment is accepted via UPI, cards, and net banking.',
  },
  {
    question: 'Do you offer home visits?',
    answer: 'Home visits are available within select areas of Mumbai for patients with limited mobility or post-surgery conditions. Please call or WhatsApp us to check availability in your area.',
  },
  {
    question: 'How many sessions will I need?',
    answer: 'This varies by condition. Acute injuries often resolve in 6–8 sessions; chronic conditions may need ongoing care. Soumya will give you a clear recovery timeline after your first assessment.',
  },
  {
    question: 'What should I bring to my first appointment?',
    answer: 'Wear comfortable clothing. Bring any X-rays, MRIs, or medical reports. For online consultations, upload reports while booking so we can review them beforehand.',
  },
  {
    question: 'Do you treat children and elderly patients?',
    answer: 'Yes — we offer pediatric physiotherapy for children and specialized geriatric care for elderly patients, including balance training and fall prevention programs.',
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'We accept UPI (PhonePe, GPay, Paytm), credit/debit cards, and net banking via Razorpay. Payment is collected securely at the time of booking.',
  },
] as const

export const CONSULTATION_TYPES = [
  {
    id: 'video',
    icon: '📹',
    title: 'Video Consultation',
    duration: '30–45 min',
    price: '₹800',
    description: 'Full clinical assessment via secure video call',
    popular: true,
  },
  {
    id: 'voice',
    icon: '📞',
    title: 'Voice Call',
    duration: '30 min',
    price: '₹600',
    description: 'Detailed assessment and exercise guidance',
    popular: false,
  },
  {
    id: 'chat',
    icon: '💬',
    title: 'Chat Consultation',
    duration: '15 min',
    price: '₹500',
    description: 'Quick doubts, report review, and guidance',
    popular: false,
  },
  {
    id: 'clinic',
    icon: '🏥',
    title: 'Clinic Visit',
    duration: '45–60 min',
    price: 'Call us',
    description: 'In-person assessment and hands-on treatment',
    popular: false,
  },
] as const
