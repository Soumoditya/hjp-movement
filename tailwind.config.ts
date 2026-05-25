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
        saffron: {
          DEFAULT: '#d4621a',
          light: '#e8721a',
          dim: '#a34d14',
        },
        cream: {
          DEFAULT: '#f5f1ea',
          dim: '#d6d0c7',
        },
        void: '#070707',
      },
      fontFamily: {
        display: ['var(--font-anton)', 'Impact', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        devanagari: ['Noto Serif Devanagari', 'serif'],
      },
      boxShadow: {
        saffron: '0 0 80px rgba(212, 98, 26, 0.2)',
        'saffron-sm': '0 0 30px rgba(212, 98, 26, 0.15)',
      },
      animation: {
        marquee: 'marquee 50s linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
