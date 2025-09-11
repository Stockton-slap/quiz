/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a',
        secondary: '#9333ea',
        correct: '#10b981',
        incorrect: '#ef4444',
        neutral: '#f3f4f6',
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities }) => {
      matchUtilities({
        txt: (value) => {
          const [fontSize, lineHeight, fontWeight] = value.split(' ');
          return {
            fontSize: fontSize + 'px',
            lineHeight: lineHeight + 'px',
            fontWeight,
          };
        },
      });
    }),
  ],
};
