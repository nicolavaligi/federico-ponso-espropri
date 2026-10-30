/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        navy: {
          700: '#1b3150',
          800: '#13233a',
          900: '#0b1524',
          950: '#070f1c',
        },
      },
      spacing: {
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
};
