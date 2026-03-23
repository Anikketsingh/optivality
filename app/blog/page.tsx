'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'Ayurveda vs. Modern Medicine: A Comparative Look at Disease Management',
    excerpt: 'Ayurveda emphasizes holistic balance through Tridoshas while modern medicine excels in acute care with evidence-based interventions. Discover how these two systems compare in managing chronic and lifestyle diseases—and why integration could be the future of healthcare.',
    category: 'Integrative Medicine',
    date: 'March 20, 2025',
    readTime: '8 min read',
  },
  {
    id: 2,
    title: 'Bridging Ancient Wisdom and Modern Science: The Case for Integrating Ayurveda',
    excerpt: 'From Ayurgenomics to systems biology, researchers are uncovering the molecular basis of Ayurvedic principles. Learn why the integration of traditional knowledge with modern biology is not just possible—it\'s necessary for the future of personalized medicine.',
    category: 'Science & Tradition',
    date: 'March 15, 2025',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'Lessons from The Longevity Project: What 80 Years of Research Reveals',
    excerpt: 'An 80-year study tracking 1,500 individuals reveals surprising truths about longevity: conscientiousness matters more than cheerfulness, social connections outweigh genetics, and the quality of your marriage can predict your lifespan.',
    category: 'Longevity Research',
    date: 'March 10, 2025',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'Climbing the Longevity Pyramid: Evidence-Based Prevention Strategies',
    excerpt: 'From biomarker diagnostics at the base to experimental gene therapies at the apex, the "Longevity Pyramid" framework maps out progressive levels of intervention for extending healthy lifespan. Explore the science of living longer—and better.',
    category: 'Preventive Health',
    date: 'March 5, 2025',
    readTime: '10 min read',
  },
  {
    id: 5,
    title: 'Adaptogens: From Traditional Remedies to Modern Stress Medicine',
    excerpt: 'Used for centuries in Ayurveda, Chinese medicine, and Russian officinal practice, adaptogens are nature\'s stress vaccines. Modern pharmacology is now revealing how these remarkable plants boost resilience, restore balance, and combat aging at the cellular level.',
    category: 'Herbal Science',
    date: 'February 28, 2025',
    readTime: '9 min read',
  },
  {
    id: 6,
    title: 'AI Meets Ayurveda: The Future of Integrative Healthcare',
    excerpt: 'Artificial intelligence is revolutionizing how we understand traditional medicine. From AI-powered pulse diagnosis (Nadi Pariksha) to machine-learning models that decode herbal formulations, the convergence of AI and Ayurveda is creating a new paradigm in healthcare.',
    category: 'Technology & Wellness',
    date: 'February 20, 2025',
    readTime: '7 min read',
  },
]

export default function BlogPage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  const [message, setMessage] = useState('')

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      // Only show success message if subscription was successful
      if (response.ok && (data.success || data.data?.id)) {
        setStatus('success')
        setMessage('Thank you for subscribing! Check your email for confirmation.')
        setEmail('')
      } else {
        // Silently fail - don't show error message
        setStatus('idle')
      }
    } catch (error) {
      // Silently fail - don't show error message
      setStatus('idle')
    }
  }

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
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={status === 'loading'}
                  className="flex-1 rounded-full px-4 py-3 border border-[#eef6f0] bg-white focus:outline-none focus:ring-2 focus:ring-[#2c6b58] focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="rounded-full bg-[#2b5f4f] text-white px-6 py-3 shadow hover:opacity-95 transition-all duration-200 font-semibold whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
              {status === 'success' && message && (
                <div className="mt-4 p-4 rounded-lg bg-green-50 text-green-800 border border-green-200 max-w-md mx-auto">
                  {message}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
