import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { PROCESS_STEPS } from '@/constants'
import SectionHeader from '@/components/ui/SectionHeader'

export default function ProcessSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <div className="flex flex-col items-center mb-12">
          <SectionHeader
            tag="How It Works"
            title="Your Recovery,"
            titleHighlight="Step by Step"
            subtitle="A clear, structured process so you always know what to expect — from first contact to full recovery."
            centered
          />
        </div>

        {/* Desktop: horizontal steps */}
        <div className="hidden md:grid grid-cols-4 gap-0 relative mb-12">
          {/* Connector line */}
          <div className="absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 z-0" />

          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative z-10 flex flex-col items-center text-center px-4"
            >
              {/* Step circle */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-600 to-primary-800 flex flex-col items-center justify-center shadow-button mb-6 border-4 border-white">
                <span className="text-2xl mb-0.5">{step.icon}</span>
                <span className="text-white text-[10px] font-bold tracking-widest">{step.step}</span>
              </div>

              <h3 className="font-display font-bold text-heading text-base mb-2">
                {step.title}
              </h3>
              <p className="text-body text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical steps */}
        <div className="md:hidden space-y-0 mb-10">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex gap-5"
            >
              {/* Left column: circle + line */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-600 to-primary-800 flex flex-col items-center justify-center shadow-button border-4 border-white flex-shrink-0">
                  <span className="text-xl">{step.icon}</span>
                </div>
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="flex-1 flex flex-col items-center py-1">
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-primary-300 to-primary-100 min-h-[40px]" />
                    <ArrowDown size={14} className="text-primary-300 -mt-1" />
                  </div>
                )}
              </div>

              {/* Right column: content */}
              <div className={`pb-8 ${index < PROCESS_STEPS.length - 1 ? '' : 'pb-0'}`}>
                <span className="text-xs font-bold text-primary-500 tracking-widest uppercase">Step {step.step}</span>
                <h3 className="font-display font-bold text-heading text-base mt-1 mb-1.5">
                  {step.title}
                </h3>
                <p className="text-body text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link to="/book" className="btn-primary">
            Book Appointment
            <ArrowRight size={16} />
          </Link>
          <Link to="/schedule" className="btn-secondary">
            Schedule Appointment
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
