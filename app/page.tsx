import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Philosophy from '@/components/PhilosophyNew'
import Differentiators from '@/components/Differentiators'
import Audience from '@/components/Audience'
import FounderVision from '@/components/FounderVision'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Philosophy />
      <Differentiators />
      <Audience />
      <FounderVision />
      <Footer />
    </main>
  )
}

