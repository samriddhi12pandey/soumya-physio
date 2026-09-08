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
      </div>
    </section>
  )
}