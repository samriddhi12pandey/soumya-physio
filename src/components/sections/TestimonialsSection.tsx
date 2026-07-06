import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { TESTIMONIALS } from '@/constants'
import SectionHeader from '@/components/ui/SectionHeader'

export default function TestimonialsSection() {
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <section id="testimonials" className="section-padding bg-white overflow-hidden">
      <div className="container-max">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <SectionHeader
            tag="Patient Stories"
            title="Real Recoveries,"
            titleHighlight="Real People"
            subtitle="Hear from patients who have reclaimed their lives through expert physiotherapy."
          />

          {/* Navigation buttons */}
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-11 h-11 rounded-2xl border-2 border-gray-200 flex items-center justify-center text-heading hover:border-primary-400 hover:text-primary-700 hover:bg-primary-50 transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-11 h-11 rounded-2xl bg-primary-700 flex items-center justify-center text-white hover:bg-hover transition-colors duration-200 shadow-button"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            onSwiper={(swiper) => { swiperRef.current = swiper }}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-2"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="group bg-white rounded-3xl border border-gray-100 p-6 md:p-7 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                  {/* Quote icon */}
                  <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center mb-5 flex-shrink-0">
                    <Quote size={18} className="text-primary-600 fill-primary-100" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-heading text-sm leading-relaxed flex-1 mb-6">
                    "{t.review}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div
                      className={`w-11 h-11 rounded-2xl ${t.bgColor} ${t.textColor} font-display font-bold text-sm flex items-center justify-center flex-shrink-0`}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-display font-bold text-heading text-sm">{t.name}</p>
                      <p className="text-body text-xs mt-0.5">{t.condition} · {t.location}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom pagination */}
          <div className="swiper-pagination-custom flex justify-center gap-2 mt-6" />
        </motion.div>
      </div>
    </section>
  )
}
