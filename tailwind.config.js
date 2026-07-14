/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF5EC',
          200: '#F4EBD9',
          300: '#EBDCC2',
          400: '#DEC9A3',
          500: '#CDB07F',
        },
        espresso: {
          50: '#F6F4F2',
          100: '#E8E0DC',
          200: '#C9B8AE',
          300: '#A08676',
          400: '#7A5C49',
          500: '#5A4334',
          600: '#433326',
          700: '#322519',
          800: '#231A12',
          900: '#1A130D',
        },
        sage: {
          50: '#F2F5F0',
          100: '#E2E9DC',
          200: '#C5D3BA',
          300: '#A3B894',
          400: '#7E9C6B',
          500: '#607D4E',
          600: '#4C643D',
          700: '#3B4F30',
        },
        burgundy: {
          50: '#FBF3F3',
          100: '#F5E0E0',
          200: '#E8B8B8',
          300: '#D48888',
          400: '#B85D5D',
          500: '#9A3D3D',
          600: '#7C2E2E',
          700: '#5E2222',
        },
        terracotta: {
          50: '#FBF5F0',
          100: '#F5E8DC',
          200: '#E8C9AE',
          300: '#D9A878',
          400: '#C6884F',
          500: '#A66B38',
          600: '#835229',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.4s ease-out forwards',
        'scroll-cue': 'scrollCue 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollCue: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.4' },
          '50%': { transform: 'translateY(8px)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
