import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import DonationSection from '@/components/DonationSection'
import ImpactStats from '@/components/ImpactStats'
import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-coral-50/30 to-white">
      <Navbar />
      <Hero />
      <DonationSection />
      <ImpactStats />
      <AboutSection />
      <Footer />
    </main>
  )
}
