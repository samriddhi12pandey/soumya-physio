import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import HeroSection from '@/components/sections/HeroSection'
import StatsSection from '@/components/sections/StatsSection'
import AboutSection from '@/components/sections/AboutSection'
import ServicesSection from '@/components/sections/ServicesSection'
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection'
import ProcessSection from '@/components/sections/ProcessSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import FAQSection from '@/components/sections/FAQSection'
import CTABannerSection from '@/components/sections/CTABannerSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <CTABannerSection />
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
