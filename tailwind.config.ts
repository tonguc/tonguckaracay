import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette - Deep navy to slate
        // Primary palette — nötr, sıcak gri (2026-11: lacivert ton kaldırıldı; marka = siyah + turuncu)
        primary: {
          50: '#f7f6f3',
          100: '#f2f0eb',
          200: '#dedbd4',
          300: '#c8c5be',
          400: '#a6a39c',
          500: '#8a877f',
          600: '#6b6862',
          700: '#4a4844',
          800: '#2e2d2a',
          900: '#1c1b19',
          950: '#0c0c0c',
        },
        // Accent - Warm orange (custom ramp, not stock Tailwind amber)
        accent: {
          50: '#fef6ee',
          100: '#fce9d3',
          200: '#f8cea3',
          300: '#f2ad6e',
          400: '#ec8f3f',
          500: '#db7420',
          600: '#b85c16',
          700: '#944813',
          800: '#783a14',
          900: '#632f13',
        },
        // Surface colors
        surface: {
          dark: '#121212',
          darker: '#0c0c0c',
          card: '#161616',
          border: '#2a2a2a',
          paper: '#f2f0eb',
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'marquee': 'marquee 70s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(236, 143, 63, 0.1)' },
          '100%': { boxShadow: '0 0 40px rgba(236, 143, 63, 0.2)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
