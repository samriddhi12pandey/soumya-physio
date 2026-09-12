import { motion } from 'framer-motion'
import { Star, Award } from 'lucide-react'

const stats = [
  {
    id: 'patients',
    value: '1200+',
    label: 'Patients Treated',
    icon: '🏥',
    bg: 'from-primary-600 to-primary-800',
    iconBg: 'bg-white/20',
  },
  {
    id: 'experience',
    value: '5+',
    label: 'Years Clinical Experience',
    customIcon: Award,
    bg: 'from-teal-600 to-teal-800',
    iconBg: 'bg-white/20',
  },
  {
    id: 'rating',
    value: '4.9',
    label: 'Patient Rating',
    stars: true,
    bg: 'from-amber-500 to-amber-700',
    iconBg: 'bg-white/20',
  },
]

export default function StatsSection() {
  return (
    <section className="relative -mt-6 z-10 px-4 md:px-8 lg:px-16 pb-4">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`relative overflow-hidden bg-gradient-to-br ${stat.bg} rounded-3xl p-5 sm:p-6 text-white shadow-hero min-h-[150px] sm:min-h-[170px] h-full flex flex-col justify-between`}
              >
                {/* Background circle decoration */}
                <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-white/10" />
                <div className="absolute -right-2 -bottom-8 w-20 h-20 rounded-full bg-white/10" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-display font-extrabold text-4xl sm:text-5xl leading-none">
                      {stat.value}
                    </p>
                    {stat.customIcon && (
                      <stat.customIcon size={28} className="text-white/80" />
                    )}
                  </div>
                  
                  {stat.stars && (
                    <div className="flex gap-0.5 my-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="fill-amber-200 text-amber-200" />
                      ))}
                    </div>
                  )}
                  <p className="text-white/80 text-sm font-medium mt-1">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}