import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import { WHY_CHOOSE_US } from '@/constants'
import SectionHeader from '@/components/ui/SectionHeader'

export default function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-32 top-0 w-72 h-72 rounded-full bg-primary-50/60 blur-3xl" />
        <div className="absolute -left-32 bottom-0 w-72 h-72 rounded-full bg-teal-50/60 blur-3xl" />
      </div>

      <div className="container-max relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <SectionHeader
              tag="Why Choose Us"
              title="Care That Goes"
              titleHighlight="Beyond Treatment"
              subtitle="We combine clinical expertise, technology, and genuine compassion to deliver outcomes that change lives."
            />

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-4 my-8"
            >
              <div className="bg-primary-50 rounded-2xl p-5 border border-primary-100">
                <p className="font-display font-bold text-heading text-3xl">1200+</p>
                <p className="text-body text-sm mt-1">Patients Treated</p>
              </div>
              <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="font-display font-bold text-heading text-3xl">4.9</p>
                <p className="text-body text-sm mt-0.5">Patient Rating</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex gap-3"
            >
              <Link to="/book" className="btn-primary">
                Book Appointment
                <ArrowRight size={16} />
              </Link>
              <Link to="/schedule" className="btn-secondary">
                Schedule Now
              </Link>
            </motion.div>
          </div>

          {/* Right: Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHY_CHOOSE_US.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-base p-5 md:p-6"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-2xl flex items-center justify-center text-2xl mb-4">
                  {item.icon}
                </div>
                <h4 className="font-display font-bold text-heading text-base mb-2">
                  {item.title}
                </h4>
                <p className="text-body text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
