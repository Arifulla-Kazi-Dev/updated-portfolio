/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
    theme: {
      extend: {
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
          fadeInUp: {
            '0%': { opacity: 0, transform: 'translateY(20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
        },
        animation: {
          fadeIn: 'fadeIn 1s ease-out',
          fadeInUp: 'fadeInUp 1s ease-out',
        },
      },
    },
    plugins: [],
  }
  


