'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    const form = e.currentTarget
    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      // Only show success message if email was actually sent
      if (response.ok && (data.success || data.data?.id)) {
        setStatus('success')
        setMessage('Thank you! Your message has been sent. We\'ll get back to you soon.')
        e.currentTarget.reset()
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
          {/* Single rounded container with background image */}
          <div
            className="relative rounded-3xl overflow-hidden border border-[#eef6f0] shadow-2xl bg-cover bg-center"
            style={{
              backgroundImage: "url('/assets/esaias-tan-WmpCzw4QXLA-unsplash.jpg')",
            }}
          >
            {/* Minimal overlay - image is highly visible */}
            <div className="absolute inset-0 bg-white/5" />

            <div className="relative z-10 p-6 md:p-10 lg:p-14">
              {/* Header Section */}
              <div className="text-center mb-12 md:mb-16">
                <h4 className="text-sm text-[#1f5a4a] font-medium mb-4 tracking-wider uppercase">
                  Get in Touch
                </h4>
                <h1 className="text-4xl md:text-6xl font-serif leading-tight text-[#133a2f] mb-6">
                  Let's start a conversation
                </h1>
                <p className="text-gray-700 max-w-2xl mx-auto text-lg">
                  Have questions about our products, wellness philosophy, or want to collaborate?
                  We'd love to hear from you.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                {/* Left: Contact Form */}
                <div className="rounded-2xl bg-white/80 backdrop-blur-sm border border-white/30 p-8 md:p-12 shadow-md">
                  <h2 className="text-2xl md:text-3xl font-semibold text-[#133a2f] mb-6">
                    Send us a message
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#133a2f] mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-lg px-4 py-3 border border-[#eef6f0] bg-white focus:outline-none focus:ring-2 focus:ring-[#2c6b58] focus:border-transparent transition-all"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#133a2f] mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded-lg px-4 py-3 border border-[#eef6f0] bg-white focus:outline-none focus:ring-2 focus:ring-[#2c6b58] focus:border-transparent transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#133a2f] mb-2">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full rounded-lg px-4 py-3 border border-[#eef6f0] bg-white focus:outline-none focus:ring-2 focus:ring-[#2c6b58] focus:border-transparent transition-all"
                        placeholder="9111611948"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-[#133a2f] mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full rounded-lg px-4 py-3 border border-[#eef6f0] bg-white focus:outline-none focus:ring-2 focus:ring-[#2c6b58] focus:border-transparent transition-all"
                      >
                        <option value="">Select a topic</option>
                        <option value="product">Product Inquiry</option>
                        <option value="wellness">Wellness Consultation</option>
                        <option value="partnership">Partnership</option>
                        <option value="support">Customer Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#133a2f] mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        className="w-full rounded-lg px-4 py-3 border border-[#eef6f0] bg-white focus:outline-none focus:ring-2 focus:ring-[#2c6b58] focus:border-transparent transition-all resize-none"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    {status === 'success' && message && (
                      <div className="p-4 rounded-lg bg-green-50 text-green-800 border border-green-200">
                        {message}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-[#2b5f4f] text-white px-6 py-3 rounded-full shadow hover:opacity-95 transition-all duration-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? 'Sending...' : 'Send Message →'}
                    </button>
                  </form>
                </div>

                {/* Right: Contact Information */}
                <div className="space-y-6">
                  {/* Contact Card */}
                  <div className="rounded-2xl bg-white/80 backdrop-blur-sm border border-white/30 p-8 md:p-12 shadow-md">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#133a2f] mb-6">
                      Contact Information
                    </h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-sm font-medium text-[#1f5a4a] mb-2 uppercase tracking-wider">
                          Email
                        </h3>
                        <a 
                          href="mailto:Optivitality5@gmail.com" 
                          className="text-lg text-[#133a2f] hover:text-[#2c6b58] transition-colors"
                        >
                          Optivitality5@gmail.com
                        </a>
                      </div>

                      <div>
                        <h3 className="text-sm font-medium text-[#1f5a4a] mb-2 uppercase tracking-wider">
                          Phone
                        </h3>
                        <a 
                          href="tel:9111611948" 
                          className="text-lg text-[#133a2f] hover:text-[#2c6b58] transition-colors"
                        >
                          9111611948
                        </a>
                      </div>

                      <div>
                        <h3 className="text-sm font-medium text-[#1f5a4a] mb-2 uppercase tracking-wider">
                          Address
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                          253, Satyadev Nagar Sudama Nagar<br />
                          Indore, 452009<br />
                          India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
