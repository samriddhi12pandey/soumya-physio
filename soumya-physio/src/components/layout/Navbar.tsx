import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { NAV_LINKS, SITE } from '@/constants'
import { useMobileMenu } from '@/hooks/useMobileMenu'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { isOpen, toggle, close } = useMobileMenu()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    close()
    const sectionId = href.replace('/#', '')
    if (window.location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="container-max">
          <nav className="flex items-center justify-between h-16 md:h-20 px-4 md:px-8 lg:px-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary-700 to-secondary rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-button transition-shadow duration-200">
                <span className="text-white font-display font-bold text-base tracking-tight">SP</span>
              </div>
              <div className="hidden sm:block">
                <p className="font-display font-bold text-heading text-sm leading-tight">Soumya Pandey</p>
                <p className="text-body text-xs leading-tight">Physiotherapy & Wellness</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-body hover:text-heading font-medium text-sm px-4 py-2 rounded-xl hover:bg-gray-50 transition-all duration-150 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-2 text-body hover:text-primary-700 text-sm font-medium transition-colors"
              >
                <Phone size={15} />
                <span className="hidden lg:block">{SITE.phone}</span>
              </a>
              <Link to="/book" className="btn-primary text-sm px-5 py-2.5">
                Book Appointment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggle}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-gray-50 hover:bg-gray-100 text-heading transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/30 z-40 md:hidden"
              onClick={close}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-white z-50 md:hidden flex flex-col shadow-2xl"
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-br from-primary-700 to-secondary rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-sm">SP</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-heading text-sm">Soumya Pandey</p>
                    <p className="text-body text-xs">Physiotherapy</p>
                  </div>
                </div>
                <button
                  onClick={close}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-body transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Mobile Links */}
              <nav className="flex-1 overflow-y-auto p-4">
                <ul className="space-y-1">
                  {NAV_LINKS.map((link, index) => (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="w-full text-left px-4 py-3 rounded-xl text-heading font-medium hover:bg-primary-50 hover:text-primary-700 transition-colors text-sm"
                      >
                        {link.label}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Mobile CTAs */}
              <div className="p-4 border-t border-gray-100 space-y-3">
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                  onClick={close}
                >
                  <Phone size={16} className="text-primary-700" />
                  <span className="text-heading font-medium text-sm">{SITE.phone}</span>
                </a>
                <Link to="/book" className="btn-primary w-full text-sm" onClick={close}>
                  Book Appointment
                </Link>
                <Link to="/schedule" className="btn-secondary w-full text-sm" onClick={close}>
                  Schedule Appointment
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
