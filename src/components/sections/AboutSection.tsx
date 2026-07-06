import { motion } from 'framer-motion'
import { CheckCircle2, Award, GraduationCap, Users } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

const credentials = [
  { icon: GraduationCap, text: 'BPT & MPT — Dual Physiotherapy Degrees' },
  { icon: Award, text: 'Certified Yoga Instructor (CYI)' },
  { icon: Users, text: '8+ Years of Clinical Experience' },
  { icon: CheckCircle2, text: 'Specialization in Orthopedic & Neuro Rehab' },
]

const specializations = [
  'Orthopedic', 'Neurological', 'Sports', 'Spine', 'Pediatric', 'Geriatric',
]

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
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
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary-50 to-teal-50 aspect-[4/5] shadow-card border border-gray-100">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary-200 to-teal-200 flex items-center justify-center mb-6 shadow-md">
                  <span className="text-7xl">👩‍⚕️</span>
                </div>
                <div className="text-center">
                  <p className="font-display font-bold text-heading text-xl">Dr. Soumya Pandey</p>
                  <p className="text-primary-600 text-sm mt-1 font-medium">Consultant Physiotherapist</p>
                  <p className="text-body text-xs mt-2">BPT · MPT · CYI</p>
                </div>
              </div>
              {/* Decorative */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100/50 rounded-bl-[60px]" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-100/50 rounded-tr-[50px]" />
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
                <p className="font-display font-bold text-heading text-3xl">8+</p>
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
              subtitle="With a postgraduate degree in physiotherapy and certified yoga instruction, Soumya Pandey brings evidence-based care and a holistic approach to every patient."
            />

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-body text-base leading-relaxed mt-6 mb-8"
            >
              Soumya has helped over 1,200 patients recover from musculoskeletal injuries, neurological conditions, and chronic pain disorders. Her practice combines hands-on manual therapy, tailored exercise programs, and patient education — all designed around your individual recovery goals.
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

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="btn-primary"
            >
              Read More About Soumya
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
