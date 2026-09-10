import { motion } from 'framer-motion'
import { SERVICES } from '@/constants'
import SectionHeader from '@/components/ui/SectionHeader'

const colorMap: Record<string, { card: string; icon: string }> = {
  'bg-teal-50 text-teal-700': {
    card: 'hover:border-teal-200 hover:bg-teal-50/30',
    icon: 'bg-teal-50',
  },
  'bg-sky-50 text-sky-700': {
    card: 'hover:border-sky-200 hover:bg-sky-50/30',
    icon: 'bg-sky-50',
  },
  'bg-violet-50 text-violet-700': {
    card: 'hover:border-violet-200 hover:bg-violet-50/30',
    icon: 'bg-violet-50',
  },
  'bg-amber-50 text-amber-700': {
    card: 'hover:border-amber-200 hover:bg-amber-50/30',
    icon: 'bg-amber-50',
  },
  'bg-rose-50 text-rose-700': {
    card: 'hover:border-rose-200 hover:bg-rose-50/30',
    icon: 'bg-rose-50',
  },
  'bg-green-50 text-green-700': {
    card: 'hover:border-green-200 hover:bg-green-50/30',
    icon: 'bg-green-50',
  },
}

const targetOrganizations = [
  'IT Companies',
  'Schools',
  'Colleges',
  'Banks',
  'Offices',
  'Coaching Institutes',
]

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-max">
        <div className="flex flex-col items-center mb-12">
          <SectionHeader
            tag="Our Services"
            title="Comprehensive Care for"
            titleHighlight="Health & Recovery"
            subtitle="Integrating evidence-based physiotherapy, therapeutic yoga, clinical nutrition, and personalized women's health care into customized treatment plans."
            centered
          />
        </div>

        {/* Existing 6 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, index) => {
            const colors = colorMap[service.color] ?? {
              card: 'hover:border-primary-200',
              icon: 'bg-primary-50',
            }

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group bg-white rounded-3xl border border-gray-100 p-6 md:p-7 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 ${colors.card}`}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 ${colors.icon} rounded-2xl flex items-center justify-center text-3xl mb-5 transition-transform duration-300 group-hover:scale-110`}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-heading text-lg mb-3 group-hover:text-primary-700 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-body text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Full-width Corporate & Institutional Wellness Feature Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 bg-gradient-to-r from-teal-50/80 via-white to-emerald-50/80 rounded-3xl border border-teal-200/70 p-6 md:p-10 shadow-card hover:shadow-card-hover transition-all duration-300"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/80 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-4">
                <span>🏢</span> Corporate & Institutional Solutions
              </div>

              <h3 className="font-display font-bold text-heading text-2xl md:text-3xl mb-3">
                Corporate Wellness Programs
              </h3>

              <p className="text-body text-sm md:text-base leading-relaxed mb-5">
                Specialized workplace ergonomics, posture correction workshops, screen-fatigue relief, and guided therapeutic wellness sessions tailored to keep teams and students active, pain-free, and energized.
              </p>

              {/* Target sectors */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-gray-500 mr-1">Programs designed for:</span>
                {targetOrganizations.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-3 py-1 rounded-xl bg-white border border-teal-100 text-teal-900 text-xs font-medium shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <div className="w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-2.5 flex-shrink-0">
              <a
                href="https://wa.me/917355671043?text=Hi%20Dr.%20Soumya,%20we%20are%20interested%20in%20a%20Corporate%20/%20Institutional%20Wellness%20program"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-medium text-sm transition-all duration-200 shadow-md hover:shadow-lg text-center"
              >
                Inquire for Your Organization →
              </a>
              <span className="text-xs text-gray-500 text-center lg:text-right">
                On-site workshops & online ergonomic audits
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}