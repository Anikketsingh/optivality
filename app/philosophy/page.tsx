import Navbar from '@/components/Navbar'
import Philosophy from '@/components/PhilosophyNew'
import Differentiators from '@/components/Differentiators'
import FounderVision from '@/components/FounderVision'
import Footer from '@/components/Footer'

export default function PhilosophyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Philosophy />
      <Differentiators />
      <FounderVision />
      <Footer />
    </main>
  )
}
