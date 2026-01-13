import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B5E20', // Deep Forest Green
          light: '#2E7D32',
          dark: '#0D3E10',
        },
        secondary: {
          DEFAULT: '#E8DCC6', // Warm Beige / Sand
          light: '#F5EDE0',
          dark: '#D4C4A8',
        },
        accent: {
          DEFAULT: '#D4AF37', // Soft Gold
          light: '#E5C158',
          dark: '#B8941F',
        },
        text: {
          dark: '#2C2C2C', // Charcoal
          muted: '#6B7280', // Gray
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

