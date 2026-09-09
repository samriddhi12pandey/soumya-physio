import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Award, GraduationCap, Users, Apple, Linkedin, X, ExternalLink } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

// @ts-ignore
import clinicLogo from './logo.png'
// @ts-ignore
import doctorPhoto from './doctor.jpeg'

const credentials = [
  { icon: GraduationCap, text: 'BPT & MPT — Dual Physiotherapy Degrees' },
  { icon: Award, text: 'Diploma in Yoga' },
  { icon: Apple, text: 'Certified in Nutrition & Health Science' },
  { icon: Users, text: '5+ Years of Clinical Experience' },
  { icon: CheckCircle2, text: 'Specialization in Rehab, Weight & Women’s Health' },
]

const specializations = [
  'Orthopedic', 'Nutrition & Weight Management', 'Gynecological Care', 'Postpartum Rehab', 'Neurological', 'Sports', 'Spine', 'Geriatric'
]

export default function AboutSection() {
  const [showSocialModal, setShowSocialModal] = useState(false)

  // Direct LinkedIn URL
  const LINKEDIN_URL = "https://www.linkedin.com/in/dr-soumya-pandey128"

  return (
    <section id="about" className="section-padding bg-white relative">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main portrait image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-card border border-gray-100 bg-slate-100">
              <img 
                src={doctorPhoto} 
                alt="Dr. Soumya Pandey" 
                className="w-full h-full object-cover object-top" 
              />

              {/* Bottom gradient overlay with text */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent pt-16 pb-6 px-6 text-center">
                <p className="font-display font-bold text-white text-xl">Dr. Soumya Pandey</p>
                <p className="text-teal-300 text-sm mt-0.5 font-medium">Consultant Physiotherapist</p>
                <p className="text-slate-200 text-xs mt-1.5">BPT · MPT · Diploma in Yoga & Health Science</p>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-primary-500/10 rounded-bl-[50px] pointer-events-none" />
            </div>

            {/* Floating experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-card-hover border border-gray-100"
            >
              <div className="text-center">
                <p className="font-display font-bold text-heading text-3xl">5+</p>
                <p className="text-body text-xs mt-0.5 whitespace-nowrap">Years Experience</p>
              </div>
            </motion.div>

            {/* Floating credential badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="absolute -top-4 -left-4 bg-primary-700 rounded-2xl p-3.5 shadow-button"
            >
              <div className="flex items-center gap-2">
                <Award size={18} className="text-white flex-shrink-0" />
                <span className="text-white text-xs font-semibold whitespace-nowrap">Certified Expert</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <div>
            <SectionHeader
              tag="About Dr. Soumya Pandey"
              title="Dedicated to Your"
              titleHighlight="Complete Recovery"
              subtitle="With dual postgraduate qualifications in physiotherapy, yoga diplomas, and health science, Dr. Soumya Pandey brings evidence-based clinical care and a holistic wellness approach to every patient."
            />

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-body text-base leading-relaxed mt-6 mb-8"
            >
              Dr. Soumya has helped hundreds of patients recover from musculoskeletal injuries, gynecological issues, weight concerns, and chronic pain disorders. Her practice combines hands-on manual therapy, targeted exercise programs, therapeutic yoga, and nutritional guidance — all designed around your personal recovery goals.
            </motion.p>

            {/* Credentials List */}
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="space-y-3 mb-8"
            >
              {credentials.map((cred, index) => (
                <motion.li
                  key={cred.text}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <cred.icon size={16} className="text-primary-700" />
                  </div>
                  <span className="text-heading text-sm font-medium">{cred.text}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Specialization chips */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {specializations.map((spec) => (
                <span
                  key={spec}
                  className="text-xs font-medium text-primary-700 bg-primary-50 border border-primary-100 px-3 py-1.5 rounded-full"
                >
                  {spec}
                </span>
              ))}
            </motion.div>

            {/* Interactive Button */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              onClick={() => setShowSocialModal(true)}
              className="btn-primary cursor-pointer"
            >
              Read More About Soumya
            </motion.button>
          </div>
        </div>
      </div>

      {/* Social Profile Modal */}
      <AnimatePresence>
        {showSocialModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl p-6 md:p-8 max-w-sm w-full shadow-2xl relative border border-gray-100 text-center"
            >
              <button 
                onClick={() => setShowSocialModal(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-full cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-4 shadow-sm border border-primary-100/80 p-2 overflow-hidden">
                <img 
                  src={clinicLogo} 
                  alt="Dr. Soumya Pandey Logo" 
                  className="w-full h-full object-contain object-center scale-110 -translate-y-0.5" 
                />
              </div>

              <h3 className="font-display font-bold text-xl text-heading mb-1">Connect with Dr. Soumya</h3>
              <p className="text-body text-xs mb-6">
                View her full professional bio, clinical updates, and career background on LinkedIn:
              </p>

              <div>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl border border-gray-100 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                      <Linkedin size={20} />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-sm text-heading group-hover:text-blue-700">LinkedIn Profile</p>
                      <p className="text-[11px] text-body">Dr. Soumya Pandey</p>
                    </div>
                  </div>
                  <ExternalLink size={16} className="text-gray-400 group-hover:text-blue-600" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}