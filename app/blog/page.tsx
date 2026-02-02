import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Longevity: Beyond Just Living Longer',
    excerpt: 'Longevity isn\'t just about adding years to your life—it\'s about adding life to your years. Discover how preventive wellness can transform your healthspan.',
    category: 'Longevity Basics',
    date: 'March 15, 2024',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'The Science of Cellular Health and Longevity',
    excerpt: 'Explore how cellular nutrition forms the foundation of long-term vitality. Learn about the role of mitochondria, cellular repair, and why starting at the cell level matters.',
    category: 'Science',
    date: 'March 10, 2024',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'Ayurveda Meets Modern Science: A Holistic Approach to Longevity',
    excerpt: 'How ancient Ayurvedic wisdom, when combined with modern nutraceutical science, creates powerful solutions for modern-day health challenges.',
    category: 'Wellness Philosophy',
    date: 'March 5, 2024',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'Root-Cause Healing: Why Quick Fixes Don\'t Work',
    excerpt: 'Understanding the difference between symptom suppression and true healing. Why addressing root causes leads to sustainable wellness.',
    category: 'Health Philosophy',
    date: 'February 28, 2024',
    readTime: '5 min read',
  },
  {
    id: 5,
    title: 'Building Resilience: Supporting Your Body\'s Natural Intelligence',
    excerpt: 'Your body has an incredible capacity for self-healing. Learn how to support rather than fight your body\'s natural processes.',
    category: 'Wellness',
    date: 'February 20, 2024',
    readTime: '6 min read',
  },
  {
    id: 6,
    title: 'The Longevity Lifestyle: Small Changes, Big Impact',
    excerpt: 'Practical, evidence-based habits that support long-term health. From nutrition to stress management, discover what really moves the needle.',
    category: 'Lifestyle',
    date: 'February 15, 2024',
    readTime: '8 min read',
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#fbfdfb] to-white">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 md:mb-16">
            <h4 className="text-sm text-[#1f5a4a] font-medium mb-4 tracking-wider uppercase">
              Our Blog
            </h4>
            <h1 className="text-4xl md:text-6xl font-serif leading-tight text-[#133a2f] mb-6">
              Insights on
              <br />
              <span className="italic text-[#2c6b58]">Longevity & Wellness</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Evidence-based articles on longevity, preventive health, and holistic wellness. 
              Learn how to support your body's natural intelligence for sustainable vitality.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group"
              >
                <article className="h-full rounded-2xl bg-[#fbfdfb] border border-[#eef6f0] p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#2c6b58]/10 text-[#2c6b58] text-xs font-medium">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl md:text-2xl font-semibold text-[#133a2f] mb-4 leading-tight group-hover:text-[#2c6b58] transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-[#eef6f0]">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Read More Indicator */}
                  <div className="mt-4 text-[#2c6b58] text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
                    Read more →
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 md:mt-20">
            <div className="rounded-2xl bg-[#fbfdfb] border border-[#eef6f0] p-8 md:p-12 shadow-md text-center">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#133a2f] mb-4">
                Stay Updated
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get the latest articles on longevity, wellness, and preventive health delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-full px-4 py-3 border border-[#eef6f0] bg-white focus:outline-none focus:ring-2 focus:ring-[#2c6b58] focus:border-transparent transition-all"
                />
                <button className="rounded-full bg-[#2b5f4f] text-white px-6 py-3 shadow hover:opacity-95 transition-all duration-200 font-semibold whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
