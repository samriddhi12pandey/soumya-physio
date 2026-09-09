// ============================================================
// SITE-WIDE CONSTANTS
// ============================================================
// @ts-ignore
import clinicLogo from './logo.png';

export const SITE = {
  name: 'Soumya Pandey',
  clinic: 'Physiotherapy & Wellness Clinic',
  tagline: 'Heal Better. Move Freely. Live Pain-Free.',
  phone: '+91 7355671043',
  email: 'soumya.physio11@gmail.com',
  whatsapp: '917355671043',
  address: 'Varanasi, Uttar Pradesh, India',
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
    id: 'musculoskeletal-ortho',
    title: 'Musculoskeletal & Joint Care',
    description: 'Specialized therapy for arthritis, frozen shoulder, ligament & tendon injuries, post-fracture stiffness, joint pain, and full mobility restoration.',
    icon: '🦴',
    color: 'bg-teal-50 text-teal-700',
  },
  {
    id: 'nutrition-weight',
    title: 'Nutrition & Weight Management',
    description: 'Expert-guided dietary strategies, metabolic health optimization, weight transformation plans, and sustainable lifestyle guidance.',
    icon: '🥗',
    color: 'bg-green-50 text-green-700',
  },
  {
    id: 'womens-health-gynec',
    title: 'Gynecological & Women’s Health',
    description: 'Dedicated rehabilitation for pregnancy, postpartum weight management, pelvic floor muscle retraining, and women’s health wellness.',
    icon: '🤰',
    color: 'bg-rose-50 text-rose-700',
  },
  {
    id: 'spine-posture',
    title: 'Spine & Postural Rehabilitation',
    description: 'Advanced therapy for chronic lower back pain, neck stiffness, slip disc, sciatica relief, and ergonomic alignment correction.',
    icon: '🧘‍♀️',
    color: 'bg-sky-50 text-sky-700',
  },
  {
    id: 'sports-injury',
    title: 'Sports Injury & Performance',
    description: 'Tailored recovery programs for athletic injuries, muscle strains, joint instability, and athletic conditioning.',
    icon: '⚡',
    color: 'bg-amber-50 text-amber-700',
  },
  {
    id: 'post-surgery-rehab',
    title: 'Post-Surgical Recovery',
    description: 'Structured post-operative care following joint replacements, ligament repairs, arthroscopy, and orthopedic surgeries.',
    icon: '🩺',
    color: 'bg-violet-50 text-violet-700',
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
    icon: '🩺',
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
    avatar: 'RA',
    rating: 5,
    text: 'After two years of chronic back pain and multiple failed treatments, Dr. Soumya got me pain-free in six weeks. The online video sessions were incredibly thorough and the exercise plan was easy to follow at home.',
  },
  {
    id: 2,
    name: 'Priya Mehta',
    condition: 'ACL Rehabilitation',
    location: 'Delhi',
    avatar: 'PM',
    rating: 5,
    text: 'Recovered from ACL surgery 3 months ahead of schedule. Dr. Soumya’s structured rehab plan and constant WhatsApp support made all the difference. Back to playing basketball now!',
  },
  {
    id: 3,
    name: 'Sunita Kapoor',
    condition: 'Frozen Shoulder',
    location: 'Bangalore',
    avatar: 'SK',
    rating: 5,
    text: 'The frozen shoulder was debilitating — I couldn’t sleep or dress myself. Within 10 sessions with Dr. Soumya, my range of motion was completely restored. Brilliant physiotherapist and genuinely compassionate.',
  },
  {
    id: 4,
    name: 'Anish Sharma',
    condition: 'Weight Management & Rehab',
    location: 'Noida',
    avatar: 'AS',
    rating: 5,
    text: 'Combining therapeutic yoga with personalized diet plans worked wonders for my joint pain and weight loss goals. Dr. Soumya provides holistic care that yields real long-term results.',
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
    answer: 'Yes! You can book video calls, voice calls, and chat consultations directly from our website.',
  },
  {
    question: 'Do you offer home visits?',
    answer: 'Home visits are not available',
  },
  {
    question: 'How many sessions will I need?',
    answer: 'This varies by condition. Acute injuries often resolve in 6–8 sessions; chronic conditions may need ongoing care. Soumya will give you a clear recovery timeline after your first assessment.',
  },
  {
    question: 'What should I bring to my first appointment?',
    answer: 'Bring any X-rays, MRIs, or medical reports. For online consultations, upload reports while booking so we can review them beforehand.',
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
    price: '₹300',
    description: 'Full clinical assessment via secure video call',
    popular: true,
  },
  {
    id: 'voice',
    icon: '📞',
    title: 'Voice Call',
    duration: '30 min',
    price: '₹200',
    description: 'Detailed assessment and exercise guidance',
    popular: false,
  },
  {
    id: 'chat',
    icon: '💬',
    title: 'Chat Consultation',
    duration: '15 min',
    price: '₹100',
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