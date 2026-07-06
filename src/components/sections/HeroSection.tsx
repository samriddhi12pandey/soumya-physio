import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CalendarDays, CheckCircle2, Star } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-teal-50/30"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary-100/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-teal-100/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary-100/40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full border border-primary-50/60" />
      </div>

      <div className="container-max w-full px-4 md:px-8 lg:px-16 pt-24 pb-16 md:pt-28 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="relative z-10">
            {/* Tag */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-white border border-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full shadow-sm mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
              Certified Physiotherapist & Yoga Instructor
            </motion.div>

            {/* Heading */}
            <motion.h1
              custom={0.1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-display font-bold text-heading text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight mb-6"
            >
              Helping You{' '}
              <span className="relative">
                <span className="text-gradient">Move</span>
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 6 Q50 0 100 5 Q150 10 200 4"
                    stroke="url(#underline-grad)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <defs>
                    <linearGradient id="underline-grad" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#0F766E" />
                      <stop offset="1" stopColor="#14B8A6" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{' '}
              Pain-Free Again
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              custom={0.2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-body text-lg leading-relaxed mb-8 max-w-xl"
            >
              Expert Physiotherapy Care for Back Pain, Sports Injuries & Post Surgery Recovery.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              custom={0.3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap items-center gap-5 mb-10"
            >
              <div className="flex items-center gap-2 text-heading font-semibold text-sm">
                <CheckCircle2 size={18} className="text-primary-600 flex-shrink-0" />
                1200+ Patients Treated
              </div>
              <div className="flex items-center gap-2 text-heading font-semibold text-sm">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span>4.9 Patient Rating</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              custom={0.4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link to="/book" className="btn-primary text-base px-7 py-4 shadow-button">
                Book Appointment
                <ArrowRight size={18} />
              </Link>
              <Link to="/schedule" className="btn-secondary text-base px-7 py-4">
                <CalendarDays size={18} />
                Schedule Appointment
              </Link>
            </motion.div>

            {/* Doctor Credentials */}
            <motion.div
              custom={0.5}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-10 pt-8 border-t border-gray-100 flex flex-wrap items-center gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary-700 to-secondary flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-white font-bold text-sm">SP</span>
                </div>
                <div>
                  <p className="font-display font-bold text-heading text-sm">Dr. Soumya Pandey</p>
                  <p className="text-body text-xs">BPT · MPT · Certified Yoga Instructor</p>
                </div>
              </div>
              <div className="hidden sm:block h-8 w-px bg-gray-200" />
              <div className="flex flex-wrap gap-2">
                {['Orthopedic', 'Neuro', 'Sports'].map((spec) => (
                  <span
                    key={spec}
                    className="text-xs font-medium text-primary-700 bg-primary-50 border border-primary-100 px-3 py-1 rounded-full"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Main Image Card */}
            <div className="relative w-full max-w-[460px]">
              {/* Image Placeholder - replace with actual doctor photo */}
              <div className="relative aspect-[3/4] rounded-4xl overflow-hidden bg-gradient-to-br from-primary-100 via-teal-50 to-primary-50 shadow-hero border border-white">
                {/* Decorative elements inside card */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-200 to-teal-200 mb-4 flex items-center justify-center">
                    <span className="text-5xl">👩‍⚕️</span>
                  </div>
                  <div className="text-center">
                    <p className="font-display font-bold text-primary-900 text-lg">Dr. Soumya Pandey</p>
                    <p className="text-primary-600 text-sm mt-1">Physiotherapist</p>
                    <div className="mt-3 flex justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-primary-500 text-xs mt-2">8+ Years Experience</p>
                  </div>
                </div>
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary-900/20 to-transparent" />
              </div>

              {/* Floating Stat Cards */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -left-10 top-16 bg-white rounded-2xl p-4 shadow-card-hover border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🏥</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-heading text-lg leading-none">1200+</p>
                    <p className="text-body text-xs mt-0.5">Patients Treated</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -right-8 bottom-24 bg-white rounded-2xl p-4 shadow-card-hover border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Star size={18} className="text-amber-400 fill-amber-400" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-heading text-lg leading-none">4.9</p>
                    <p className="text-body text-xs mt-0.5">Patient Rating</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-2xl px-5 py-3 shadow-card-hover border border-gray-100 flex items-center gap-3 whitespace-nowrap"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <span className="text-heading font-semibold text-sm">Available for Online Consultation</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
