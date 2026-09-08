import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, CheckCircle2, ArrowRight, Upload, X, MessageCircle, Mail, Clock } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { CONSULTATION_TYPES, SITE } from '@/constants'

type Step = 1 | 2 | 3 | 4

interface BookingState {
  consultationType: string
  patientName: string
  phone: string
  email: string
  age: string
  gender: string
  condition: string
  notes: string
  reportFile: File | null
  confirmationMethod: 'whatsapp' | 'email' | ''
}

const initialBooking: BookingState = {
  consultationType: '',
  patientName: '',
  phone: '',
  email: '',
  age: '',
  gender: '',
  condition: '',
  notes: '',
  reportFile: null,
  confirmationMethod: '',
}

const inputClass =
  'w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-heading text-sm placeholder-body/50 focus:outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all duration-200'

const stepLabels = ['Choose Type', 'Your Details', 'Upload Reports', 'Confirm']

export default function BookAppointment() {
  const [step, setStep] = useState<Step>(1)
  const [booking, setBooking] = useState<BookingState>(initialBooking)
  const [submitted, setSubmitted] = useState(false)

  const update = (field: keyof BookingState, value: string | File | null) => {
    setBooking((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => setStep((s) => Math.min(s + 1, 4) as Step)
  const prevStep = () => setStep((s) => Math.max(s - 1, 1) as Step)

  const selectedConsult = CONSULTATION_TYPES.find((c) => c.id === booking.consultationType)

  // Build WhatsApp message with all booking details
  const buildWhatsAppMessage = () => {
    return encodeURIComponent(
      `Hi Soumya! I'd like to book an appointment.\n\n` +
      `📋 *Booking Details*\n` +
      `• Consultation: ${selectedConsult?.title}\n` +
      `• Duration: ${selectedConsult?.duration}\n` +
      `• Fee: ${selectedConsult?.price}\n\n` +
      `👤 *Patient Details*\n` +
      `• Name: ${booking.patientName}\n` +
      `• Phone: ${booking.phone}\n` +
      `• Age: ${booking.age || 'Not specified'}\n` +
      `• Gender: ${booking.gender || 'Not specified'}\n` +
      `• Condition: ${booking.condition}\n` +
      `• Notes: ${booking.notes || 'None'}\n\n` +
      `Please confirm my appointment. Thank you!`
    )
  }

  // Build Email mailto link
  const buildEmailLink = () => {
    const subject = encodeURIComponent(`Appointment Request – ${booking.patientName}`)
    const body = encodeURIComponent(
      `Hi Soumya,\n\nI would like to book an appointment. Here are my details:\n\n` +
      `Consultation Type: ${selectedConsult?.title}\n` +
      `Duration: ${selectedConsult?.duration}\n` +
      `Fee: ${selectedConsult?.price}\n\n` +
      `Patient Name: ${booking.patientName}\n` +
      `Phone: ${booking.phone}\n` +
      `Email: ${booking.email || 'Not provided'}\n` +
      `Age: ${booking.age || 'Not specified'}\n` +
      `Gender: ${booking.gender || 'Not specified'}\n` +
      `Condition: ${booking.condition}\n` +
      `Notes: ${booking.notes || 'None'}\n\n` +
      `Please confirm my appointment at your earliest convenience.\n\nThank you!`
    )
    return `mailto:${SITE.email}?subject=${subject}&body=${body}`
  }

  const handleSubmit = () => {
    if (booking.confirmationMethod === 'whatsapp') {
      window.open(`https://wa.me/${SITE.whatsapp}?text=${buildWhatsAppMessage()}`, '_blank')
    } else if (booking.confirmationMethod === 'email') {
      window.location.href = buildEmailLink()
    }
    setSubmitted(true)
  }

  // Success screen
  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-4 py-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-4xl border border-gray-100 shadow-card p-10 md:p-14 text-center max-w-md w-full"
          >
            {/* Icon */}
            <div className="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} className="text-primary-600" />
            </div>

            <h2 className="font-display font-bold text-heading text-2xl mb-3">
              Request Sent!
            </h2>

            <p className="text-body text-sm leading-relaxed mb-6">
              Your appointment request has been sent to Soumya. She will review your details and confirm your appointment shortly.
            </p>

            {/* What happens next */}
            <div className="bg-primary-50 border border-primary-100 rounded-2xl p-5 mb-6 text-left space-y-3">
              <p className="font-display font-semibold text-heading text-sm mb-3">What happens next?</p>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary-700 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                <p className="text-body text-sm">Soumya reviews your booking request</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary-700 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                <p className="text-body text-sm">
                  She confirms via{' '}
                  <strong className="text-heading">
                    {booking.confirmationMethod === 'whatsapp' ? 'WhatsApp' : 'Email'}
                  </strong>{' '}
                  with payment details
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary-700 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
                <p className="text-body text-sm">You pay to confirm the slot</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary-700 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">4</div>
                <p className="text-body text-sm">Your appointment is confirmed!</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-body text-xs mb-8">
              <Clock size={14} className="text-primary-500" />
              Usually confirmed within 2 hours
            </div>

            <Link to="/" className="btn-primary w-full justify-center">
              Back to Home
            </Link>
          </motion.div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-16 px-4 md:px-8">
        <div className="container-max max-w-3xl mx-auto">

          {/* Header */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-body hover:text-primary-700 text-sm font-medium mb-6 transition-colors"
            >
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <h1 className="font-display font-bold text-heading text-3xl md:text-4xl mb-2">
              Book Appointment
            </h1>
            <p className="text-body">Fill in your details and Soumya will confirm your slot personally.</p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center gap-0 mb-10">
            {stepLabels.map((label, i) => {
              const num = i + 1
              const active = step === num
              const done = step > num
              return (
                <div key={label} className="flex items-center flex-1 last:flex-none">
                  <div className="flex flex-col items-center gap-1.5">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-200 ${
                      done ? 'bg-primary-700 border-primary-700 text-white'
                      : active ? 'bg-white border-primary-700 text-primary-700'
                      : 'bg-white border-gray-200 text-body'
                    }`}>
                      {done ? <CheckCircle2 size={16} /> : num}
                    </div>
                    <span className={`text-[10px] font-medium hidden sm:block whitespace-nowrap ${
                      active ? 'text-primary-700' : done ? 'text-primary-500' : 'text-body'
                    }`}>
                      {label}
                    </span>
                  </div>
                  {i < stepLabels.length - 1 && (
                    <div className={`flex-1 h-0.5 mx-2 rounded transition-all duration-300 ${
                      step > num ? 'bg-primary-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              )
            })}
          </div>

          {/* Step Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >

              {/* STEP 1 — Consultation Type */}
              {step === 1 && (
                <div>
                  <h2 className="font-display font-bold text-heading text-xl mb-5">Choose Consultation Type</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {CONSULTATION_TYPES.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => update('consultationType', type.id)}
                        className={`relative text-left p-5 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${
                          booking.consultationType === type.id
                            ? 'border-primary-600 bg-primary-50 shadow-sm'
                            : 'border-gray-200 bg-white hover:border-primary-300'
                        }`}
                      >
                        {type.popular && (
                          <span className="absolute top-3 right-3 text-[10px] font-bold text-primary-700 bg-primary-100 px-2 py-0.5 rounded-full uppercase tracking-wide">
                            Popular
                          </span>
                        )}
                        <div className="text-2xl mb-3">{type.icon}</div>
                        <p className="font-display font-bold text-heading text-base mb-0.5">{type.title}</p>
                        <p className="text-body text-xs mb-3">{type.description}</p>
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-primary-700 text-lg">{type.price}</span>
                          <span className="text-body text-xs">{type.duration}</span>
                        </div>
                        {booking.consultationType === type.id && (
                          <div className="absolute top-3 left-3 w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center">
                            <CheckCircle2 size={12} className="text-white" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={nextStep}
                    disabled={!booking.consultationType}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue <ArrowRight size={16} />
                  </button>
                </div>
              )}

              {/* STEP 2 — Patient Details */}
              {step === 2 && (
                <div>
                  <h2 className="font-display font-bold text-heading text-xl mb-5">Your Details</h2>
                  <div className="bg-white rounded-3xl border border-gray-100 shadow-card p-6 md:p-8 mb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="sm:col-span-2">
                        <label className="block text-heading text-xs font-semibold mb-1.5">
                          Full Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={booking.patientName}
                          onChange={(e) => update('patientName', e.target.value)}
                          placeholder="Your full name"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-heading text-xs font-semibold mb-1.5">
                          Phone <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          value={booking.phone}
                          onChange={(e) => update('phone', e.target.value)}
                          placeholder="+91 98765 43210"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-heading text-xs font-semibold mb-1.5">Email</label>
                        <input
                          type="email"
                          value={booking.email}
                          onChange={(e) => update('email', e.target.value)}
                          placeholder="you@example.com"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-heading text-xs font-semibold mb-1.5">Age</label>
                        <input
                          type="number"
                          value={booking.age}
                          onChange={(e) => update('age', e.target.value)}
                          placeholder="Your age"
                          min="1" max="120"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-heading text-xs font-semibold mb-1.5">Gender</label>
                        <select
                          value={booking.gender}
                          onChange={(e) => update('gender', e.target.value)}
                          className={inputClass}
                        >
                          <option value="">Select gender</option>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Other</option>
                          <option>Prefer not to say</option>
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-heading text-xs font-semibold mb-1.5">
                          Condition / Chief Complaint <span className="text-rose-500">*</span>
                        </label>
                        <select
                          value={booking.condition}
                          onChange={(e) => update('condition', e.target.value)}
                          className={inputClass}
                        >
                          <option value="">Select your main concern</option>
                          <option>Back Pain</option>
                          <option>Neck Pain</option>
                          <option>Knee Pain</option>
                          <option>Shoulder Pain</option>
                          <option>Sports Injury</option>
                          <option>Post Surgery Recovery</option>
                          <option>Sciatica / Slip Disc</option>
                          <option>Neurological Condition</option>
                          <option>Arthritis / Joint Pain</option>
                          <option>Posture Issues</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-heading text-xs font-semibold mb-1.5">Additional Notes</label>
                        <textarea
                          value={booking.notes}
                          onChange={(e) => update('notes', e.target.value)}
                          rows={3}
                          placeholder="Any extra information about your condition..."
                          className={`${inputClass} resize-none`}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={prevStep} className="btn-secondary">
                      <ArrowLeft size={16} /> Back
                    </button>
                    <button
                      onClick={nextStep}
                      disabled={!booking.patientName || !booking.phone || !booking.condition}
                      className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Continue <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3 — Upload Reports */}
              {step === 3 && (
                <div>
                  <h2 className="font-display font-bold text-heading text-xl mb-2">Upload Reports</h2>
                  <p className="text-body text-sm mb-6">
                    Optional — upload any X-rays, MRI scans, or medical reports to help Soumya prepare.
                  </p>
                  <div className="bg-white rounded-3xl border border-gray-100 shadow-card p-6 md:p-8 mb-6">
                    <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-2xl p-10 cursor-pointer hover:border-primary-300 hover:bg-primary-50/30 transition-all duration-200">
                      <Upload size={32} className="text-primary-400 mb-3" />
                      <p className="font-semibold text-heading text-sm mb-1">Click to upload or drag & drop</p>
                      <p className="text-body text-xs">PDF, JPG, PNG up to 10MB</p>
                      <input
                        type="file"
                        className="sr-only"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => update('reportFile', e.target.files?.[0] ?? null)}
                      />
                    </label>
                    {booking.reportFile && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 flex items-center gap-3 bg-primary-50 border border-primary-100 rounded-xl px-4 py-3"
                      >
                        <Upload size={14} className="text-primary-700 flex-shrink-0" />
                        <span className="text-heading text-sm font-medium flex-1 truncate">
                          {booking.reportFile.name}
                        </span>
                        <button
                          onClick={() => update('reportFile', null)}
                          className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                        >
                          <X size={12} />
                        </button>
                      </motion.div>
                    )}
                  </div>
                  <div className="flex gap-3">
                    <button onClick={prevStep} className="btn-secondary">
                      <ArrowLeft size={16} /> Back
                    </button>
                    <button onClick={nextStep} className="btn-primary">
                      Continue <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4 — Choose confirmation method */}
              {step === 4 && (
                <div>
                  <h2 className="font-display font-bold text-heading text-xl mb-2">
                    How should Soumya confirm?
                  </h2>
                  <p className="text-body text-sm mb-6">
                    Your request will be sent now. Soumya will review and reply with payment details to confirm your slot.
                  </p>

                  {/* Booking summary */}
                  <div className="bg-white rounded-3xl border border-gray-100 shadow-card p-6 mb-6">
                    <h3 className="font-display font-semibold text-heading text-sm mb-4 pb-3 border-b border-gray-100">
                      Booking Summary
                    </h3>
                    <div className="space-y-2.5 text-sm mb-0">
                      {[
                        { label: 'Consultation', value: selectedConsult?.title },
                        { label: 'Duration', value: selectedConsult?.duration },
                        { label: 'Fee', value: selectedConsult?.price },
                        { label: 'Patient', value: booking.patientName },
                        { label: 'Phone', value: booking.phone },
                        { label: 'Condition', value: booking.condition },
                      ].map(({ label, value }) => (
                        <div key={label} className="flex justify-between">
                          <span className="text-body">{label}</span>
                          <span className="text-heading font-semibold">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Confirmation method */}
                  <div className="mb-6">
                    <p className="font-display font-semibold text-heading text-sm mb-4">
                      Where should Soumya send the confirmation?
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* WhatsApp */}
                      <button
                        onClick={() => update('confirmationMethod', 'whatsapp')}
                        className={`flex items-center gap-4 p-5 rounded-2xl border-2 transition-all duration-200 cursor-pointer text-left ${
                          booking.confirmationMethod === 'whatsapp'
                            ? 'border-green-500 bg-green-50'
                            : 'border-gray-200 bg-white hover:border-green-300'
                        }`}
                      >
                        <div className="w-12 h-12 bg-[#25D366] rounded-2xl flex items-center justify-center flex-shrink-0">
                          <MessageCircle size={22} className="text-white" />
                        </div>
                        <div>
                          <p className="font-display font-bold text-heading text-sm">WhatsApp</p>
                          <p className="text-body text-xs mt-0.5">Get confirmation on WhatsApp</p>
                          <p className="text-green-600 text-xs font-medium mt-1">Fastest response</p>
                        </div>
                        {booking.confirmationMethod === 'whatsapp' && (
                          <CheckCircle2 size={18} className="text-green-600 ml-auto flex-shrink-0" />
                        )}
                      </button>

                      {/* Email */}
                      <button
                        onClick={() => update('confirmationMethod', 'email')}
                        className={`flex items-center gap-4 p-5 rounded-2xl border-2 transition-all duration-200 cursor-pointer text-left ${
                          booking.confirmationMethod === 'email'
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-gray-200 bg-white hover:border-primary-300'
                        }`}
                      >
                        <div className="w-12 h-12 bg-primary-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <Mail size={22} className="text-white" />
                        </div>
                        <div>
                          <p className="font-display font-bold text-heading text-sm">Email</p>
                          <p className="text-body text-xs mt-0.5">Get confirmation via email</p>
                          <p className="text-primary-600 text-xs font-medium mt-1">Within 2 hours</p>
                        </div>
                        {booking.confirmationMethod === 'email' && (
                          <CheckCircle2 size={18} className="text-primary-600 ml-auto flex-shrink-0" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Info note */}
                  <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 mb-6 flex items-start gap-3">
                    <Clock size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-amber-800 text-sm">
                      <strong>No payment now.</strong> Soumya will confirm your slot and share payment details personally. Your appointment is only confirmed after payment.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button onClick={prevStep} className="btn-secondary">
                      <ArrowLeft size={16} /> Back
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={!booking.confirmationMethod}
                      className={`btn-primary disabled:opacity-50 disabled:cursor-not-allowed ${
                        booking.confirmationMethod === 'whatsapp'
                          ? 'bg-[#25D366] hover:bg-[#1ebe5d]'
                          : ''
                      }`}
                    >
                      {booking.confirmationMethod === 'whatsapp' && <MessageCircle size={16} />}
                      {booking.confirmationMethod === 'email' && <Mail size={16} />}
                      {booking.confirmationMethod === 'whatsapp'
                        ? 'Send via WhatsApp'
                        : booking.confirmationMethod === 'email'
                        ? 'Send via Email'
                        : 'Send Request'}
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}