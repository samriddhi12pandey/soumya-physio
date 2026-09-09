import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Heart } from 'lucide-react'
import { SITE, NAV_LINKS, SERVICES } from '@/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollToSection = (href: string) => {
    const sectionId = href.replace('/#', '')
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-heading text-white">
      {/* Main Footer */}
      <div className="container-max px-4 md:px-8 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-base">SP</span>
              </div>
              <div>
                <p className="font-display font-bold text-white text-sm">Soumya Pandey</p>
                <p className="text-white/50 text-xs">Physiotherapy & Wellness</p>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Expert physiotherapy care for lasting recovery. Heal better, move freely, live pain-free.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-primary-700 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-primary-700 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href={SITE.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-primary-700 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-5 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/60 hover:text-primary-400 text-sm transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <Link to="/book" className="text-white/60 hover:text-primary-400 text-sm transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="text-white/60 hover:text-primary-400 text-sm transition-colors">
                  Schedule Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-5 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => scrollToSection('/#services')}
                    className="text-white/60 hover:text-primary-400 text-sm transition-colors cursor-pointer text-left"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-5 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-start gap-3 text-white/60 hover:text-primary-400 transition-colors group"
                >
                  <Phone size={15} className="mt-0.5 flex-shrink-0 group-hover:text-primary-400" />
                  <span className="text-sm">{SITE.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-start gap-3 text-white/60 hover:text-primary-400 transition-colors group"
                >
                  <Mail size={15} className="mt-0.5 flex-shrink-0 group-hover:text-primary-400" />
                  <span className="text-sm">{SITE.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/60 hover:text-primary-400 transition-colors group"
                >
                  <MapPin size={15} className="mt-0.5 flex-shrink-0 group-hover:text-primary-400" />
                  <span className="text-sm">{SITE.address}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-max px-4 md:px-8 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {year} Soumya Pandey Physiotherapy & Wellness Clinic. All rights reserved.
          </p>
          <p className="text-white/40 text-xs flex items-center gap-1">
            Made with <Heart size={11} className="text-rose-400 fill-rose-400" /> for better health
          </p>
        </div>
      </div>
    </footer>
  )
}
