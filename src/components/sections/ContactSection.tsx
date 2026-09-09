import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2 } from 'lucide-react'
import { SITE } from '@/constants'
import SectionHeader from '@/components/ui/SectionHeader'

interface FormState {
  name: string
  phone: string
  email: string
  condition: string
  message: string
}

const initialForm: FormState = {
  name: '',
  phone: '',
  email: '',
  condition: '',
  message: '',
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call
    await new Promise((res) => setTimeout(res, 1200))
    setLoading(false)
    setSubmitted(true)
    setForm(initialForm)
  }

  const whatsappMsg = encodeURIComponent(
    'Hi Soumya! I found your website and would like to get in touch about physiotherapy.'
  )

  const contactItems = [
    {
      icon: Phone,
      label: 'Phone',
      value: SITE.phone,
      href: `tel:${SITE.phone}`,
      color: 'bg-primary-50 text-primary-700',
    },
    {
      icon: Mail,
      label: 'Email',
      value: SITE.email,
      href: `mailto:${SITE.email}`,
      color: 'bg-sky-50 text-sky-700',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: SITE.address,
      href: SITE.mapUrl,
      color: 'bg-rose-50 text-rose-700',
    },
  ]

  const inputClass =
    'w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-heading text-sm placeholder-body/60 focus:outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all duration-200'

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left */}
          <div>
            <SectionHeader
              tag="Get in Touch"
              title="We're Here to"
              titleHighlight="Help You Heal"
              subtitle="Have a question or ready to start your recovery? Reach out — we usually respond within 2 hours."
            />

            {/* Contact items */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4 mt-8 mb-8"
            >
              {contactItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + i * 0.08 }}
                  className="flex items-start gap-4 p-4 rounded-2xl border border-gray-100 hover:border-primary-200 hover:bg-primary-50/30 transition-all duration-200 group"
                >
                  <div className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p className="text-body text-xs font-medium mb-0.5">{item.label}</p>
                    <p className="text-heading text-sm font-semibold group-hover:text-primary-700 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.a
              href={`https://wa.me/${SITE.whatsapp}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-sm px-6 py-3.5 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </motion.a>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-8 rounded-3xl overflow-hidden border border-gray-100 shadow-card h-52"
            >
              <iframe
                title="Clinic Location Map"
                src="https://maps.google.com/maps?q=Andheri+West+Mumbai&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl border border-gray-100 shadow-card p-7 md:p-8">
              <h3 className="font-display font-bold text-heading text-xl mb-1">Send Us a Message</h3>
              <p className="text-body text-sm mb-7">We'll get back to you within 2 hours.</p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} className="text-primary-600" />
                  </div>
                  <h4 className="font-display font-bold text-heading text-lg mb-2">Message Sent!</h4>
                  <p className="text-body text-sm max-w-xs">
                    Thanks for reaching out. Soumya will get back to you within 2 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-ghost mt-6 text-sm"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-heading text-xs font-semibold mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-heading text-xs font-semibold mb-1.5">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-heading text-xs font-semibold mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-heading text-xs font-semibold mb-1.5">
                      Condition / Concern
                    </label>
                    <select
                      name="condition"
                      value={form.condition}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select your condition</option>
                      <option>Back Pain</option>
                      <option>Neck Pain</option>
                      <option>Knee Pain</option>
                      <option>Shoulder Pain</option>
                      <option>Sports Injury</option>
                      <option>Post Surgery Recovery</option>
                      <option>Sciatica</option>
                      <option>Neurological Condition</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-heading text-xs font-semibold mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Briefly describe your condition or any questions..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
