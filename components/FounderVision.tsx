export default function FounderVision() {
  return (
    <section id="founder-vision" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#fbfdfb] scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div 
          className="relative rounded-2xl overflow-hidden border border-[#eef6f0] p-8 md:p-12 lg:p-16 shadow-md bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/capsule-right.png')",
          }}
        >
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />
          <div className="relative z-10 max-w-4xl">
            <h4 className="text-sm text-[#1f5a4a] font-medium mb-4">Why OptiVitality Exists</h4>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              Modern life has changed faster than our bodies can adapt. Polluted air, high stress, irregular sleep, 
              smoking history, alcohol exposure, and nutrient-depleted food have quietly weakened our lungs, liver, 
              brain, and overall vitality. Yet most wellness solutions today focus on quick fixes, not root-cause restoration.
            </p>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              <span className="font-semibold text-[#133a2f]">OptiVitality was born to change that.</span>
            </p>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              We created OptiVitality with a simple but powerful belief: <span className="italic text-[#2c6b58]">true health is not repaired overnight—it is rebuilt intelligently.</span> 
              Drawing from the depth of Ayurvedic wisdom and the precision of modern nutraceutical science, our mission is to design 
              wellness solutions that respect the body's natural intelligence while meeting the demands of contemporary life.
            </p>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
              We don't believe in exaggerated promises or miracle claims. We believe in:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="text-gray-600 text-base md:text-lg leading-relaxed flex items-start">
                <span className="text-[#2c6b58] mr-3 mt-1">●</span>
                <span>Clean, high-potency ingredients</span>
              </li>
              <li className="text-gray-600 text-base md:text-lg leading-relaxed flex items-start">
                <span className="text-[#2c6b58] mr-3 mt-1">●</span>
                <span>Thoughtful formulations with purpose</span>
              </li>
              <li className="text-gray-600 text-base md:text-lg leading-relaxed flex items-start">
                <span className="text-[#2c6b58] mr-3 mt-1">●</span>
                <span>Transparency, safety, and long-term results</span>
              </li>
            </ul>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              Every OptiVitality formulation is designed to support the body's natural systems—helping them cleanse, repair, and strengthen over time.
            </p>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              This is not just a supplement brand. It is a wellness philosophy—one that honors tradition, demands scientific rigor, and places responsibility above hype.
            </p>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 italic">
              If you believe your health deserves more than shortcuts, welcome to OptiVitality.
            </p>

            <div className="pt-6 border-t border-[#eef6f0]">
              <p className="text-sm text-gray-500 font-medium text-[#133a2f]">
                — Founder, OptiVitality
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

