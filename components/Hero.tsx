import Link from 'next/link'
import ScrollingFeatures from './ScrollingFeatures'
import { LeftPanelBackground, RightPanelBackground } from './AnimatedBackgrounds'

const trustSignals = [
  'Clinically Tested',
  'Clean Ingredients',
  'Preventive Wellness',
  'Made in India',
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-32 pb-0 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary-light/80 via-white to-primary/5">
      {/* Soft layered backdrop to add premium depth */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[-10%] top-10 h-64 w-64 rounded-full bg-secondary/50 blur-3xl" />
        <div className="absolute left-1/3 bottom-[-18%] h-96 w-96 rounded-full bg-primary/8 blur-[110px]" />
        <svg
          className="absolute inset-x-0 top-10 h-44 w-full text-primary/15"
          viewBox="0 0 1440 320"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0,96 C240,160 480,32 720,74.67 C960,117.33 1200,245.33 1440,213.33"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            className="opacity-40"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Two Panel Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-10">
          {/* Left Panel - Glassmorphic brand moment */}
          <div
            className="relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-square bg-white/10 backdrop-blur-xl border border-white/30 shadow-[0_32px_80px_-40px_rgba(16,64,38,0.6)] ring-1 ring-white/20"
            style={{
              backgroundImage: "url('/assets/istockphoto-1468149085-612x612.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Subtle dark overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/20" />

            <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-8">
              <div className="flex items-center gap-3 text-white/80 text-xs uppercase tracking-[0.28em]">
                <span className="h-px w-8 bg-white/40" />
                Nature + Science
              </div>
              <div className="space-y-4">
                <p className="text-white/95 text-lg md:text-xl lg:text-2xl font-semibold leading-snug">
                  “True vitality is balance.”
                </p>
                <p className="text-white/80 text-sm md:text-base max-w-xs">
                  Calm confidence guided by Ayurvedic wisdom and modern clinical rigor.
                </p>
                <div className="flex flex-wrap gap-2">
                  {trustSignals.map((signal) => (
                    <span
                      key={signal}
                      className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs md:text-sm text-white/90 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.45)]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
                      {signal}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Text Content */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-square bg-white/80 backdrop-blur-md border border-primary/10 shadow-[0_28px_75px_-45px_rgba(13,62,16,0.65)] p-8 md:p-12 flex flex-col justify-center">
            {/* Animated SVG Background */}
            <RightPanelBackground />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/6 via-white/70 to-secondary-light/70" />

            {/* Headline with mixed colors */}
            <h1 className="relative z-10 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-[1.08] text-text-dark mb-5 md:mb-6">
              Ayurvedic + Nutraceutical
              <br />
              <span className="text-primary">Wellness Solutions</span>
              <br />
              for Modern Lifestyles,
              <br />
              <span className="text-primary">Backed by Science.</span>
            </h1>

            <p className="relative z-10 text-base md:text-lg text-text-muted max-w-2xl mb-8">
              Crafted for urban, high-performance lives—clean formulations, clinically grounded, and designed for preventive balance.
            </p>

            {/* CTA Buttons */}
            <div className="relative z-10 flex flex-col sm:flex-row gap-3 sm:items-center">
              <Link
                href="/contact"
                aria-label="Start your wellness journey with OptiVitality"
                className="inline-flex items-center justify-center w-fit px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-primary-light text-white font-semibold shadow-lg shadow-primary/25 border border-primary/15 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-white"
              >
                Start Your Journey
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>

              <a
                href="#founder-vision"
                aria-label="Learn about the OptiVitality philosophy"
                className="inline-flex items-center justify-center w-fit px-7 py-4 rounded-xl border border-primary/20 text-primary font-semibold bg-white/70 hover:bg-primary/5 shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2 focus:ring-offset-white"
              >
                View Philosophy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Features Bar */}
      <ScrollingFeatures />
    </section>
  )
}
