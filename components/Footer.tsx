'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
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

      if (response.ok) {
        setStatus('success')
        setMessage('Thank you for subscribing! Check your email for confirmation.')
        setEmail('')
      } else {
        throw new Error(data.error || 'Failed to subscribe')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Sorry, there was an error. Please try again.')
    }
  }
  return (
    <footer className="bg-black text-white px-4 sm:px-6 lg:px-8 pt-10 pb-6 rounded-2xl m-4 md:m-6 lg:m-8">
      <div className="max-w-6xl mx-auto">
        {/* Brand Logo */}
        <div className="flex flex-col items-center text-center mb-10">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-wide mb-2">
            Optivality<span className="align-super text-xs">®</span>
          </h1>
        </div>

        {/* Newsletter + Social */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-t border-white/15 pt-8 pb-6">
          {/* Newsletter */}
          <div className="w-full md:w-2/3">
            <p className="italic text-sm md:text-base mb-4">Know it first. Know it all.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full rounded-full px-4 py-2.5 bg-white text-black placeholder:text-black/60 text-sm outline-none border border-white/60 focus:border-white"
              />
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center justify-center rounded-full px-6 py-2.5 bg-white text-black text-sm font-medium hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{status === 'loading' ? '...' : '→'}</span>
              </button>
            </form>
            {message && (
              <p className={`mt-2 text-xs ${
                status === 'success' ? 'text-green-300' : 'text-red-300'
              }`}>
                {message}
              </p>
            )}
          </div>

          {/* Social */}
          <div className="w-full md:w-auto md:text-right">
            <p className="italic text-sm md:text-base mb-4">Find us at</p>
            <div className="flex md:justify-end gap-3">
              {/* Simple circular social placeholders */}
              <button
                aria-label="Visit Optivality on Facebook"
                className="h-9 w-9 rounded-full border border-white/60 flex items-center justify-center hover:bg-white/10 transition-colors text-sm"
              >
                f
              </button>
              <button
                aria-label="Visit Optivality on Instagram"
                className="h-9 w-9 rounded-full border border-white/60 flex items-center justify-center hover:bg-white/10 transition-colors text-sm"
              >
                IG
              </button>
              <button
                aria-label="Visit Optivality on YouTube"
                className="h-9 w-9 rounded-full border border-white/60 flex items-center justify-center hover:bg-white/10 transition-colors text-sm"
              >
                ▶
              </button>
              <button
                aria-label="Visit Optivality on LinkedIn"
                className="h-9 w-9 rounded-full border border-white/60 flex items-center justify-center hover:bg-white/10 transition-colors text-sm"
              >
                in
              </button>
            </div>
          </div>
        </div>

        {/* Company Info + Policies */}
        <div className="border-t border-white/15 pt-6 mt-2 text-[11px] md:text-xs text-white/80 space-y-4">
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div className="space-y-1 max-w-md">
              <p className="font-medium">Optivality</p>
              <p>
                253, Satyadev Nagar Sudama Nagar, Indore, 452009, India
              </p>
            </div>

            <div className="space-y-1 md:text-right">
              <p className="font-medium">Contact</p>
              <p>
                <a href="mailto:Optivitality5@gmail.com" className="underline underline-offset-2">
                  Optivitality5@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:9111611948" className="underline underline-offset-2">
                  9111611948
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pt-2 border-t border-white/10 mt-2">
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <Link href="/" className="hover:underline underline-offset-2">
                Refund policy
              </Link>
              <Link href="/" className="hover:underline underline-offset-2">
                Privacy policy
              </Link>
              <Link href="/" className="hover:underline underline-offset-2">
                Terms of service
              </Link>
              <Link href="/" className="hover:underline underline-offset-2">
                Shipping policy
              </Link>
              <Link href="/" className="hover:underline underline-offset-2">
                Contact information
              </Link>
            </div>

            <div className="flex flex-col md:items-end gap-1">
              <p>
                © Copyright, Optivality® {new Date().getFullYear()}
              </p>
              <p className="text-[10px] md:text-[11px] leading-snug">
                Disclaimer: This statement has not been evaluated by the Food and Drug Administration.
                This product is not intended to diagnose, treat, cure, or prevent any disease.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

