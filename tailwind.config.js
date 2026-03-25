/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#3a3131',
        correct: '#44835C',
        incorrect: '#A72F2F',
        neutral: '#D1D5DB',
        hover: '#9CA3AF',
        card: '#FAEBD7',
        next: '#3f6ff2',
        nextDisabled: '#5b86ff',
        nextEnabled: '#1F5AFE',
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities }) => {
      matchUtilities({
        txt: (value) => {
          const [fontSize, lineHeight, fontWeight] = value.split(' ')
          return {
            fontSize: fontSize + 'px',
            lineHeight: lineHeight + 'px',
            fontWeight,
          }
        },
      })
    }),
  ],
}
