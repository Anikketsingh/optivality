export default function PhilosophyNew() {
  return (
    <section id="philosophy" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
          {/* Left: rounded image card */}
          <div className="md:w-1/3 w-full">
            <div className="rounded-2xl overflow-hidden bg-white shadow-lg">
              <div className="w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[600px]">
                <img
                  src="/assets/philosophy-left.jpg"
                  alt="Philosophy hero"
                  loading="lazy"
                  className="w-full h-full object-cover object-center philosophy-img"
                />
              </div>
            </div>
          </div>

          {/* Right: content card */}
          <div className="md:w-2/3 w-full rounded-2xl bg-[#fbfdfb] border border-[#eef6f0] p-8 md:p-12 shadow-md philosophy-capsule">
            <div className="relative z-10">
              <h4 className="text-sm text-[#1f5a4a] font-medium mb-4">Shifting Paradigms</h4>

              <h2 className="text-3xl md:text-5xl font-serif leading-tight text-[#133a2f] mb-6">
                <span className="italic text-[#2c6b58]">Contentment</span>
                <span className="ml-2">starts</span>
                <br />
                <span className="mr-2 italic text-[#2c6b58]">with listening</span>
                to
                <br />
                your <span className="italic text-[#2c6b58]">body</span>
              </h2>

              <p className="text-gray-600 max-w-2xl mb-8">
                We believe ageing should not limit your choices. That is why we
                created honest, effective support, so you can say yes to big plans,
                quiet moments, and everything in between. Thoughtfully made, so you
                can live fully.
              </p>

              <a
                href="/contact"
                className="inline-block bg-[#2b5f4f] text-white px-6 py-3 rounded-full shadow hover:opacity-95 transition-all"
              >
                Know More About Us →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
