const pillars = [
  {
    number: '01',
    title: 'Cellular Nutrition',
    description:
      'We nourish health from the ground up — starting at the smallest unit: the cell.',
  },
  {
    number: '02',
    title: 'HealthSpan',
    description: 'Life is more than years — we focus on extending the healthy, vibrant part of it.',
  },
  {
    number: '03',
    title: 'Scientific Rigor',
    description: 'Every formulation is backed by gold-standard research — no compromises, no shortcuts.',
  },
  {
    number: '04',
    title: 'Accountability',
    description: 'We build transparent systems that track progress and keep us accountable to you.',
  },
  {
    number: '05',
    title: 'Accessibility',
    description: 'Longevity should be for all — our products are priced to democratize cutting-edge science.',
  },
  {
    number: '06',
    title: 'Community Education',
    description:
      'Empowering individuals with digestible evidence-based knowledge fostering proactive choices and collective health outcomes.',
  },
]

export default function Differentiators() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto max-h-[85vh] md:h-[85vh] overflow-hidden">
        <div className="h-full flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left column: heading, intro, grid of pillars */}
          <div className="md:w-2/5 w-full h-full flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
              The Varalife® Pillars
            </h2>
            <p className="text-text-muted max-w-2xl mb-6">
              Formulated with time-tested adaptogens and bioavailable actives, Varalife is designed to support core functions that impact your energy, focus, and resilience over time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
              {pillars.map((p, i) => (
                <div key={i} className="">
                  <div className="text-[20px] text-[#5aa07c] font-medium mb-2">{p.number}</div>
                  <hr className="border-t border-gray-200 mb-4" />
                  <h3 className="text-xl font-semibold text-text-dark mb-2">{p.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: large rounded image */}
          <div className="md:w-3/5 w-full h-full flex items-center justify-end">
            <div className="w-full max-w-[820px] rounded-2xl overflow-hidden shadow-lg h-full">
              <img
                src="/assets/differentiators-right.jpg"
                alt="Smiling people"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

