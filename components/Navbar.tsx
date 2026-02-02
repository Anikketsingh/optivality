'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar-font fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl">
        {/* Dark pill-shaped navbar with shadow */}
        <div className="rounded-full bg-[#1a1a1a] shadow-lg px-4 md:px-6 py-3 md:py-3.5">
          <div className="flex items-center justify-between gap-4 md:gap-6">
            {/* Left: White circle with logo */}
            <Link
              href="/"
              className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-[#1a1a1a] flex items-center justify-center hover:opacity-90 transition-opacity"
              aria-label="OptiVitality home"
            >
              {/* Logo icon - using a simple O for OptiVitality */}
              <div className="w-6 h-6 md:w-7 md:h-7 rounded-full border-2 border-[#1a1a1a] flex items-center justify-center">
                <span className="text-[#1a1a1a] font-bold text-xs md:text-sm">O</span>
              </div>
            </Link>

            {/* Center: Brand name as text logo */}
            <div className="hidden md:flex items-center flex-1 justify-center">
              <span className="text-sm md:text-base lg:text-lg font-semibold tracking-[0.2em] text-white uppercase">
                Optivality
              </span>
            </div>

            {/* Right: Navigation links */}
            <div className="flex items-center gap-3">
              <Link
                href="/blog"
                className="hidden md:flex items-center text-sm md:text-base font-medium text-white hover:opacity-80 transition-opacity"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="hidden md:flex items-center rounded-full bg-white border-2 border-[#1a1a1a] px-4 py-2 hover:opacity-90 transition-opacity"
              >
                <span className="text-[#1a1a1a] text-sm font-medium">Contact</span>
              </Link>

              {/* Mobile menu button */}
              <button
                type="button"
                className="md:hidden p-2 text-white hover:opacity-80 transition-opacity"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {isOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 7h16M4 12h16M4 17h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-3 rounded-2xl bg-[#1a1a1a] shadow-lg px-4 py-3 space-y-1">
            <Link
              href="/blog"
              className="block w-full rounded-lg px-4 py-3 text-white hover:opacity-80 transition-opacity font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block w-full rounded-lg px-4 py-3 text-white hover:opacity-80 transition-opacity font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
