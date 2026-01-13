'use client'

const features = [
  'Science-Led Innovation',
  'Clinically Backed Formulas',
  'Support for Every Stage',
  'Longevity, Not Quick Fixes',
  'Ethical & Sustainable',
  'Made in India',
  'Preventive Healthcare Focus',
  'Clean & Transparent',
]

export default function ScrollingFeatures() {
  // Duplicate the array for seamless loop
  const duplicatedFeatures = [...features, ...features]

  return (
    <div className="relative overflow-hidden bg-white border-t border-gray-100 py-4" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', position: 'relative' }}>
      <div className="flex animate-scroll will-change-transform">
        {duplicatedFeatures.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-8 whitespace-nowrap flex-shrink-0"
          >
            <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
            <span className="text-sm md:text-base text-text-muted font-medium">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

