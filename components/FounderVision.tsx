import Link from 'next/link'

export default function FounderVision() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#fbfdfb]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
          {/* Left: Content card */}
          <div className="md:w-2/3 w-full">
            <div 
              className="relative rounded-2xl overflow-hidden border border-[#eef6f0] p-8 md:p-12 shadow-md h-full flex flex-col justify-center bg-cover bg-center"
              style={{
                backgroundImage: "url('/assets/capsule-right.png')",
              }}
            >
              {/* Overlay for text readability */}
              <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />
              <div className="relative z-10">
                <h4 className="text-sm text-[#1f5a4a] font-medium mb-4">Founder's Vision</h4>

                <div className="mb-6">
                  <svg className="w-12 h-12 text-[#2c6b58]/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10z"/>
                  </svg>
                </div>

                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif leading-tight text-[#133a2f] mb-6 italic">
                  <span className="text-[#2c6b58]">Optivality</span> was born from a simple belief: 
                  that true wellness comes from balance.
                </blockquote>

                <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl">
                  We've created a brand that honors both the ancient wisdom of Ayurveda and the rigor of modern science. 
                  Our mission is to empower you with preventive health solutions that are clean, transparent, and truly effective. 
                  This is wellness reimagined for the modern world.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <Link
                    href="/contact"
                    className="inline-block bg-[#2b5f4f] text-white px-6 py-3 rounded-full shadow hover:opacity-95 transition-all duration-200"
                  >
                    Contact the Founder →
                  </Link>
                  <div className="text-sm text-gray-500">
                    <p className="font-medium text-[#133a2f]">— Founder, Optivality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image card */}
          <div className="md:w-1/3 w-full">
            <div className="rounded-2xl overflow-hidden bg-white shadow-lg h-full">
              <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] bg-gradient-to-br from-[#2c6b58] to-[#1f5a4a] flex items-center justify-center">
                {/* Placeholder for founder image - you can replace this with an actual image */}
                <div className="text-center p-8">
                  <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm mx-auto mb-6 flex items-center justify-center border-4 border-white/30">
                    <svg className="w-16 h-16 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-white/80 text-sm font-medium">Founder Photo</p>
                  <p className="text-white/60 text-xs mt-2">Add image here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

