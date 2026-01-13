const pillars = [
  {
    number: '01',
    title: 'Cellular Nutrition',
    description:
      'We nourish health from the ground up — starting at the smallest unit: the cell, combining Ayurvedic wisdom with modern nutraceutical science.',
  },
  {
    number: '02',
    title: 'HealthSpan',
    description: 'Life is more than years — we focus on extending the healthy, vibrant part of it through preventive wellness.',
  },
  {
    number: '03',
    title: 'Scientific Rigor',
    description: 'Every formulation bridges ancient Ayurvedic principles with gold-standard clinical research — no compromises, no shortcuts.',
  },
  {
    number: '04',
    title: 'Accountability',
    description: 'We build transparent systems that track progress and keep us accountable to you, ensuring clean, honest formulations.',
  },
  {
    number: '05',
    title: 'Accessibility',
    description: 'Preventive wellness should be for all — our products are priced to democratize the best of Ayurvedic and modern science.',
  },
  {
    number: '06',
    title: 'Community Education',
    description:
      'Empowering individuals with digestible evidence-based knowledge, fostering proactive choices and collective health outcomes through education.',
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
              <h4 className="text-sm text-[#1f5a4a] font-medium mb-4">Why Optivality® Works Differently</h4>

              <h2 className="text-3xl md:text-4xl font-serif leading-tight text-[#133a2f] mb-6">
                Built on six
                <br />
                <span className="italic text-[#2c6b58]">foundational pillars</span>
              </h2>

              <p className="text-gray-600 max-w-2xl mb-8">
                Formulated with time-tested Ayurvedic herbs and clinically-proven nutraceutical actives, Optivality is designed to support
                core functions that impact your energy, focus, and resilience—bridging ancient wisdom with modern science for preventive wellness.
              </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                {pillars.map((p, i) => (
                  <div key={i}>
                    <div className="text-[20px] text-[#5aa07c] font-medium mb-2">{p.number}</div>
                    <hr className="border-t border-gray-200 mb-4" />
                    <h3 className="text-lg md:text-xl font-semibold text-[#133a2f] mb-2">{p.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
                  </div>
                    ))}
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
                  alt="Smiling people"
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

