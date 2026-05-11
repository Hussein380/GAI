/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gai: {
          teal: {
            DEFAULT: '#085041',
            light: '#1D9E75',
          },
          white: {
            DEFAULT: '#F4F2ED',
          },
          gold: {
            DEFAULT: '#C8861A',
          }
        },
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
