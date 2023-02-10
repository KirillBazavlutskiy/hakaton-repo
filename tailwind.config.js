/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      screens: {
        usm: '400px',
      },
    },
  },
  plugins: [],
};