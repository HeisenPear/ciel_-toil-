/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#C4962A',
        champagne: '#E8D5A3',
        bronze: '#8B7355',
        ink: '#06060C',
        surface: '#0D0D18',
        'surface-2': '#141428',
        'warm-white': '#F0EDE6',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Outfit"', 'sans-serif'],
      },
      letterSpacing: {
        luxury: '0.25em',
        widest: '0.3em',
      },
    },
  },
  plugins: [],
};
