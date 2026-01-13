import Link from 'next/link'

const products = [
  {
    name: 'Lung Detox Capsules',
    benefit: 'Support respiratory health and combat pollution effects',
  },
  {
    name: 'Stamina + Performance Capsules',
    benefit: 'Enhance energy, endurance, and physical performance',
  },
  {
    name: 'Liver Detox Kit',
    benefit: 'Promote liver health and natural detoxification',
  },
  {
    name: 'Brain Focus + Cognitive Support',
    benefit: 'Boost mental clarity, focus, and cognitive function',
  },
  {
    name: "Women's Hormonal Balance / PCOS Kit",
    benefit: 'Support hormonal balance and women\'s wellness',
  },
  {
    name: 'Tridha Shuddhi Rasayana',
    benefit: 'Complete full-body detox and rejuvenation',
  },
]

export default function ProductPreview() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-text-dark text-center mb-12 md:mb-16">
          Our Formulations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-secondary-light/50 p-6 md:p-8 rounded-lg border border-secondary/30 hover:border-primary/30 transition-all duration-200 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-text-dark mb-3">
                {product.name}
              </h3>
              <p className="text-text-muted mb-6 leading-relaxed">
                {product.benefit}
              </p>
              <Link
                href="/products"
                className="inline-block text-primary font-semibold hover:text-primary-light transition-colors"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

