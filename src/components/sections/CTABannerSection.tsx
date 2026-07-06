import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CalendarDays, MessageCircle } from 'lucide-react'
import { SITE } from '@/constants'

export default function CTABannerSection() {
  const whatsappMsg = encodeURIComponent(
    'Hi! I want to book a physiotherapy consultation with Dr. Soumya Pandey.'
  )

  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 rounded-4xl p-10 md:p-16 text-white text-center"
        >
          {/* Decorative blobs */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.03] rounded-full pointer-events-none" />

          <div className="relative">
            <span className="inline-block bg-white/15 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Start Your Recovery Today
            </span>

            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-5 leading-tight max-w-2xl mx-auto">
              Ready to Move Pain-Free Again?
            </h2>

            <p className="text-white/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Book your first consultation — clinic, video, voice, or chat. Expert physiotherapy, wherever you are.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/book"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-800 font-semibold text-sm px-7 py-4 rounded-2xl hover:bg-primary-50 transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
              >
                Book Appointment
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/schedule"
                className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold text-sm px-7 py-4 rounded-2xl border border-white/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                <CalendarDays size={16} />
                Schedule Appointment
              </Link>
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366]/90 hover:bg-[#25D366] text-white font-semibold text-sm px-7 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
