import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '@/constants'
import SectionHeader from '@/components/ui/SectionHeader'

const colorMap: Record<string, { card: string; icon: string; arrow: string }> = {
  'bg-teal-50 text-teal-700': {
    card: 'hover:border-teal-200 hover:bg-teal-50/30',
    icon: 'bg-teal-50',
    arrow: 'text-teal-600',
  },
  'bg-sky-50 text-sky-700': {
    card: 'hover:border-sky-200 hover:bg-sky-50/30',
    icon: 'bg-sky-50',
    arrow: 'text-sky-600',
  },
  'bg-violet-50 text-violet-700': {
    card: 'hover:border-violet-200 hover:bg-violet-50/30',
    icon: 'bg-violet-50',
    arrow: 'text-violet-600',
  },
  'bg-amber-50 text-amber-700': {
    card: 'hover:border-amber-200 hover:bg-amber-50/30',
    icon: 'bg-amber-50',
    arrow: 'text-amber-600',
  },
  'bg-rose-50 text-rose-700': {
    card: 'hover:border-rose-200 hover:bg-rose-50/30',
    icon: 'bg-rose-50',
    arrow: 'text-rose-600',
  },
  'bg-green-50 text-green-700': {
    card: 'hover:border-green-200 hover:bg-green-50/30',
    icon: 'bg-green-50',
    arrow: 'text-green-600',
  },
}

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-max">
        <div className="flex flex-col items-center mb-12">
          <SectionHeader
            tag="Our Services"
            title="Specialized Care for"
            titleHighlight="Every Condition"
            subtitle="Comprehensive physiotherapy services rooted in evidence-based practice. Each treatment plan is tailored to your specific needs and recovery goals."
            centered
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, index) => {
            const colors = colorMap[service.color] ?? {
              card: 'hover:border-primary-200',
              icon: 'bg-primary-50',
              arrow: 'text-primary-600',
            }

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group bg-white rounded-3xl border border-gray-100 p-6 md:p-7 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 cursor-pointer ${colors.card}`}
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
                <p className="text-body text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Link */}
                <div
                  className={`flex items-center gap-1.5 text-sm font-semibold ${colors.arrow} opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-2 group-hover:translate-x-0`}
                >
                  Learn more
                  <ArrowRight size={15} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
