/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a', // for primary elements
        secondary: '#9333ea', // for accents
        correct: '#10b981', // for correct answers
        incorrect: '#ef4444', // for incorrect answers
        neutral: '#f3f4f6', // for backgrounds
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
