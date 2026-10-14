/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#E60000',
          redLight: '#FF2A2A',
          redDark: '#B80000',
          white: '#FFFFFF',
        },
        gym: {
          black: '#0A0B0E',
          carbon: '#111318',
          charcoal: '#191C24',
          steel: '#242834',
          silver: '#9AA1B2',
          metal: '#3E4454',
        }
      },
      fontFamily: {
        heading: ['Unbounded', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-red': '0 0 25px -4px rgba(230, 0, 0, 0.5)',
        'glow-red-sm': '0 0 14px -2px rgba(230, 0, 0, 0.4)',
        'glow-white': '0 0 20px -3px rgba(255, 255, 255, 0.3)',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      }
    },
  },
  plugins: [],
}
