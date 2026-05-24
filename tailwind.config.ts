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
        background: '#0b0b0b',
        foreground: '#f5f5f2',
        saffron: '#c97822',
      },
      boxShadow: {
        glow: '0 0 60px rgba(201,120,34,0.18)',
      },
      borderRadius: {
        hero: '2rem',
      },
    },
  },
  plugins: [],
}

export default config
