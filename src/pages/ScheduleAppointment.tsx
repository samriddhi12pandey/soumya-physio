import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { CONSULTATION_TYPES } from '@/constants'

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const TIME_SLOTS = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
  '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
  '6:00 PM',
]

// Simulate some booked slots
const BOOKED_SLOTS = ['10:00 AM', '2:30 PM', '4:00 PM']

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay()
}

export default function ScheduleAppointment() {
  const today = new Date()
  const [viewMonth, setViewMonth] = useState(today.getMonth())
  const [viewYear, setViewYear] = useState(today.getFullYear())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [selectedType, setSelectedType] = useState<string>('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const [loading, setLoading] = useState(false)

  const daysInMonth = getDaysInMonth(viewYear, viewMonth)
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth)

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1) }
    else setViewMonth(m => m - 1)
    setSelectedDate(null); setSelectedTime(null)
  }
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1) }
    else setViewMonth(m => m + 1)
    setSelectedDate(null); setSelectedTime(null)
  }

  const isToday = (day: number) => {
    const d = new Date(viewYear, viewMonth, day)
    return d.toDateString() === today.toDateString()
  }

  const isPast = (day: number) => {
    const d = new Date(viewYear, viewMonth, day)
    d.setHours(23, 59, 59)
    return d < today
  }

  const isSelected = (day: number) => {
    if (!selectedDate) return false
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === viewMonth &&
      selectedDate.getFullYear() === viewYear
    )
  }

  const handleDayClick = (day: number) => {
    if (isPast(day)) return
    setSelectedDate(new Date(viewYear, viewMonth, day))
    setSelectedTime(null)
  }

  const handleConfirm = async () => {
    if (!selectedDate || !selectedTime || !selectedType || !name || !phone) return
    setLoading(true)
    await new Promise(res => setTimeout(res, 1200))
    setLoading(false)
    setConfirmed(true)
  }

  const selectedConsult = CONSULTATION_TYPES.find(c => c.id === selectedType)
  const canConfirm = selectedDate && selectedTime && selectedType && name && phone

  const inputClass = 'w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-heading text-sm placeholder-body/50 focus:outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all duration-200'

  if (confirmed) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-4 py-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-4xl border border-gray-100 shadow-card p-10 md:p-14 text-center max-w-md w-full"
          >
            <div className="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} className="text-primary-600" />
            </div>
            <h2 className="font-display font-bold text-heading text-2xl mb-2">Appointment Scheduled!</h2>
            <div className="bg-primary-50 border border-primary-100 rounded-2xl p-4 mb-6 text-sm">
              <p className="font-bold text-heading mb-1">
                {selectedDate?.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
              <p className="text-primary-700 font-medium">{selectedTime} · {selectedConsult?.title}</p>
            </div>
            <p className="text-body text-sm mb-8">
              A confirmation will be sent to <strong className="text-heading">{phone}</strong> via WhatsApp.
            </p>
            <Link to="/" className="btn-primary w-full justify-center">Back to Home</Link>
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
        <div className="container-max max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-body hover:text-primary-700 text-sm font-medium mb-5 transition-colors">
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <h1 className="font-display font-bold text-heading text-3xl md:text-4xl mb-2">Schedule Appointment</h1>
            <p className="text-body">Pick a date, time, and consultation type that works for you.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Calendar */}
            <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-card p-6 md:p-7">
              {/* Month Nav */}
              <div className="flex items-center justify-between mb-6">
                <button onClick={prevMonth} className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <ChevronLeft size={16} />
                </button>
                <h3 className="font-display font-bold text-heading text-lg">
                  {MONTHS[viewMonth]} {viewYear}
                </h3>
                <button onClick={nextMonth} className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <ChevronRight size={16} />
                </button>
              </div>

              {/* Day headers */}
              <div className="grid grid-cols-7 mb-2">
                {DAYS.map(d => (
                  <div key={d} className="text-center text-xs font-semibold text-body py-2">{d}</div>
                ))}
              </div>

              {/* Calendar grid */}
              <div className="grid grid-cols-7 gap-1">
                {[...Array(firstDay)].map((_, i) => <div key={`empty-${i}`} />)}
                {[...Array(daysInMonth)].map((_, i) => {
                  const day = i + 1
                  const past = isPast(day)
                  const selected = isSelected(day)
                  const todayDay = isToday(day)
                  return (
                    <button
                      key={day}
                      onClick={() => handleDayClick(day)}
                      disabled={past}
                      className={`aspect-square rounded-xl text-sm font-medium transition-all duration-150 flex items-center justify-center
                        ${past ? 'text-gray-300 cursor-not-allowed' : 'cursor-pointer hover:bg-primary-50 hover:text-primary-700'}
                        ${selected ? 'bg-primary-700 text-white hover:bg-primary-800 hover:text-white shadow-button' : ''}
                        ${todayDay && !selected ? 'ring-2 ring-primary-300 text-primary-700 font-bold' : ''}
                        ${!past && !selected ? 'text-heading' : ''}
                      `}
                    >
                      {day}
                    </button>
                  )
                })}
              </div>

              {/* Time slots */}
              <AnimatePresence>
                {selectedDate && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="mt-6 pt-6 border-t border-gray-100"
                  >
                    <h4 className="font-display font-semibold text-heading text-sm mb-4">
                      Available Times —{' '}
                      {selectedDate.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })}
                    </h4>
                    <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                      {TIME_SLOTS.map(slot => {
                        const booked = BOOKED_SLOTS.includes(slot)
                        const chosen = selectedTime === slot
                        return (
                          <button
                            key={slot}
                            onClick={() => !booked && setSelectedTime(slot)}
                            disabled={booked}
                            className={`text-xs font-medium py-2 px-1 rounded-xl border transition-all duration-150 text-center
                              ${booked ? 'border-gray-100 bg-gray-50 text-gray-300 cursor-not-allowed line-through' : ''}
                              ${chosen ? 'border-primary-600 bg-primary-700 text-white shadow-sm' : ''}
                              ${!booked && !chosen ? 'border-gray-200 text-heading hover:border-primary-300 hover:bg-primary-50 cursor-pointer' : ''}
                            `}
                          >
                            {slot}
                          </button>
                        )
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sidebar: Consult type + Details */}
            <div className="space-y-5">
              {/* Consultation type */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-card p-5">
                <h4 className="font-display font-semibold text-heading text-sm mb-4">Consultation Type</h4>
                <div className="space-y-2.5">
                  {CONSULTATION_TYPES.map(type => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`w-full text-left flex items-center gap-3 p-3 rounded-xl border-2 transition-all duration-150 cursor-pointer ${
                        selectedType === type.id
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-gray-100 hover:border-primary-200'
                      }`}
                    >
                      <span className="text-xl flex-shrink-0">{type.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-heading text-xs leading-tight">{type.title}</p>
                        <p className="text-body text-[11px]">{type.duration}</p>
                      </div>
                      <span className="font-bold text-primary-700 text-sm flex-shrink-0">{type.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Patient Info */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-card p-5">
                <h4 className="font-display font-semibold text-heading text-sm mb-4">Your Details</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-heading text-xs font-semibold mb-1">Name *</label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your name" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-heading text-xs font-semibold mb-1">Phone *</label>
                    <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+91 98765 43210" className={inputClass} />
                  </div>
                </div>
              </div>

              {/* Selection summary */}
              {(selectedDate || selectedTime || selectedType) && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-primary-50 border border-primary-100 rounded-2xl p-4 text-sm space-y-2"
                >
                  {selectedDate && (
                    <div className="flex justify-between">
                      <span className="text-body">Date</span>
                      <span className="font-semibold text-heading">
                        {selectedDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>
                    </div>
                  )}
                  {selectedTime && (
                    <div className="flex justify-between">
                      <span className="text-body">Time</span>
                      <span className="font-semibold text-heading">{selectedTime}</span>
                    </div>
                  )}
                  {selectedType && (
                    <div className="flex justify-between">
                      <span className="text-body">Type</span>
                      <span className="font-semibold text-primary-700">{selectedConsult?.price}</span>
                    </div>
                  )}
                </motion.div>
              )}

              <button
                onClick={handleConfirm}
                disabled={!canConfirm || loading}
                className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Confirming...
                  </>
                ) : (
                  <>
                    Confirm Appointment
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
