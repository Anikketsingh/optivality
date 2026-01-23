const pillars = [
  {
    number: '01',
    title: 'Root-Cause Healing, Not Short-Term Fixes',
    tagline: 'No hype. No shortcuts.',
    points: [
      'Long-term organ support',
      'Systemic balance, not symptom suppression',
      'Sustainable vitality over instant stimulation',
    ],
  },
  {
    number: '02',
    title: 'Ayurveda × Modern Nutraceutical Science',
    tagline: 'Ancient principles. Modern execution.',
    points: [
      'Using standardized, high-potency herbal extracts',
      'Prioritizing bioavailability and absorption',
      'Formulating for modern stress, pollution, and lifestyle damage',
    ],
  },
  {
    number: '03',
    title: 'Transparency, Safety & Responsibility',
    tagline: 'Your trust matters more than marketing.',
    points: [
      'Clean-label ingredients',
      'No hidden blends or exaggerated claims',
      'Designed for daily use, not dependency',
      'Respect for AYUSH principles and FSSAI compliance',
    ],
  },
]

export default function Differentiators() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto md:max-h-[80vh] md:h-[80vh]">
        <div className="h-full flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
          {/* Left: content card */}
          <div className="md:w-2/3 w-full h-full">
            <div className="h-full rounded-2xl bg-[#fbfdfb] border border-[#eef6f0] p-8 md:p-12 shadow-md flex flex-col">
              <div className="relative z-10 flex-1 overflow-y-auto pr-1 md:pr-2">
                <h4 className="text-sm text-[#1f5a4a] font-medium mb-4">About Optivality</h4>

                <h2 className="text-3xl md:text-5xl font-serif leading-tight text-[#133a2f] mb-6">
                  The OptiVitality Way
                  <br />
                  <span className="italic text-[#2c6b58]">of Wellness</span>
                </h2>

                <p className="text-gray-600 max-w-2xl mb-8">
                  At OptiVitality, we believe wellness is not about fighting the body — 
                  it is about supporting its natural intelligence. Our philosophy is built on 
                  three non-negotiable pillars:
                </p>

                <div className="space-y-8">
                  {pillars.map((p, i) => (
                    <div key={i} className="border-l-4 border-[#2c6b58] pl-6">
                      <div className="flex items-start gap-4 mb-3">
                        <div className="text-[24px] text-[#2c6b58] font-bold">{p.number}</div>
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-semibold text-[#133a2f] mb-2">
                            {p.title}
                          </h3>
                          <p className="text-sm text-[#2c6b58] font-medium italic mb-4">
                            {p.tagline}
                          </p>
                          <ul className="space-y-2">
                            {p.points.map((point, idx) => (
                              <li key={idx} className="text-gray-600 text-sm md:text-base leading-relaxed flex items-start">
                                <span className="text-[#2c6b58] mr-2">●</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-[#eef6f0]">
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed italic">
                    <span className="font-semibold text-[#133a2f]">Our Promise:</span> OptiVitality exists to help you rebuild strength from within — 
                    breath by breath, system by system, habit by habit. This is not wellness as a trend. 
                    This is wellness as a lifelong asset.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: rounded image card */}
          <div className="md:w-1/3 w-full h-full">
            <div className="h-full rounded-2xl overflow-hidden bg-white shadow-lg">
              <div className="w-full h-full">
                <img
                  src="/assets/differentiators-right.jpg"
                  alt="Optivality wellness"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

