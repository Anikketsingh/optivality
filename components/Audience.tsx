const audiences = [
  {
    number: '01',
    title: 'Urban Professionals',
    description: 'For those managing demanding careers and seeking sustainable wellness solutions.',
    accent: 'from-[#2c6b58] to-[#5aa07c]',
  },
  {
    number: '02',
    title: 'Fitness Enthusiasts',
    description: 'Performance-driven individuals looking to optimize their physical potential.',
    accent: 'from-[#1f5a4a] to-[#2c6b58]',
  },
  {
    number: '03',
    title: 'Wellness Seekers',
    description: 'Conscious consumers committed to preventive health and holistic well-being.',
    accent: 'from-[#133a2f] to-[#1f5a4a]',
  },
  {
    number: '04',
    title: 'Preventive Health Users',
    description: 'Proactive individuals focused on long-term health rather than reactive treatment.',
    accent: 'from-[#2c6b58] to-[#5aa07c]',
  },
]

export default function Audience() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#fbfdfb] to-white">
      <div className="max-w-7xl mx-auto">
        {/* Single Rounded Container with Background Image */}
        <div
          className="relative rounded-3xl overflow-hidden border border-[#eef6f0] shadow-2xl bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/lucas-calloch-P-yzuyWFEIk-unsplash.jpg')",
          }}
        >
          {/* Dark/green overlay to keep text readable */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/55 via-[#133a2f]/75 to-black/55" />

          {/* Content Container */}
          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            {/* Centered Header */}
            <div className="text-center mb-12 md:mb-16">
              <h4 className="text-sm text-white/90 font-medium mb-4 tracking-wider uppercase">
                Who It's For
              </h4>
              <h2 className="text-4xl md:text-6xl font-serif leading-tight text-white mb-6">
                Designed for those who
                <br />
                <span className="italic text-white">choose balance</span>
              </h2>
              <p className="text-white/90 max-w-2xl mx-auto text-lg">
                Optivality is crafted for modern individuals who value preventive health, 
                evidence-based solutions, and sustainable wellness.
              </p>
            </div>

            {/* Creative Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
              {audiences.map((audience, index) => (
                <div
                  key={index}
                  className="group relative"
                >
                  {/* Number Badge */}
                  <div className="absolute -top-4 -left-4 z-10">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${audience.accent} flex items-center justify-center shadow-lg`}>
                      <span className="text-white font-bold text-xl">{audience.number}</span>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-white/20 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                    {/* Decorative accent line */}
                    <div className={`h-1 w-20 bg-gradient-to-r ${audience.accent} rounded-full mb-6`} />
                    
                    <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 leading-tight">
                      {audience.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed text-base md:text-lg">
                      {audience.description}
                    </p>

                    {/* Hover effect overlay */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${audience.accent} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`} />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA Section */}
            <div className="mt-12 md:mt-16 text-center">
              <div className="inline-block rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 shadow-sm">
                <p className="text-white text-sm md:text-base">
                  <span className="font-semibold text-white">Join thousands</span> who have chosen Optivality for their wellness journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

