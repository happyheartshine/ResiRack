import Header from './components/Header'
import HeroSection from './components/HeroSection'
import PricingSection from './components/PricingSection'
import FeaturesSection from './components/FeaturesSection'
import TestimonialsSection from './components/TestimonialsSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PricingSection />
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
