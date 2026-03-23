'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function ShopPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#fbfdfb] to-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <h4 className="text-sm text-[#1f5a4a] font-medium mb-4 tracking-wider uppercase">
              Our Products
            </h4>
            <h1 className="text-4xl md:text-6xl font-serif leading-tight text-[#133a2f] mb-6">
              The Wellness
              <br />
              <span className="italic text-[#2c6b58]">Collection</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Science-backed formulations rooted in Ayurvedic wisdom.
              Designed for modern lifestyles, crafted for lasting vitality.
            </p>
          </div>

          {/* Coming Soon Banner */}
          <div className="rounded-2xl bg-gradient-to-r from-[#2c6b58]/10 via-[#fbfdfb] to-[#2c6b58]/10 border border-[#2c6b58]/20 p-8 md:p-12 text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#2c6b58]/10 px-4 py-1.5 mb-4">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2c6b58] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2c6b58]" />
              </span>
              <span className="text-[#2c6b58] text-sm font-medium">Launching Soon</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif text-[#133a2f] mb-3">
              Products Coming Soon
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              We&apos;re perfecting our formulations with clinical rigor and Ayurvedic precision.
              Be the first to know when we launch.
            </p>
          </div>

          {/* Notify CTA */}
          <div className="rounded-2xl bg-[#fbfdfb] border border-[#eef6f0] p-8 md:p-12 shadow-md text-center">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#133a2f] mb-4">
              Get Early Access
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our waitlist to be the first to know when our products launch.
              Early subscribers get exclusive access and special pricing.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#2b5f4f] text-white px-8 py-3.5 shadow hover:opacity-95 transition-all duration-200 font-semibold"
            >
              Join the Waitlist →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
