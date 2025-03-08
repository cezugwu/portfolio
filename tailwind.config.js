/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    screens: {
        'sm': '340px',
        'md': '600px',
        'lg': '800px',
        'xl': '1180px',
    },

    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            textAlign: "justify",
          },
        },
      }),
    },

        keyframes: {
      move: {
        '50%': {transform: 'translateY(-1rem)'},
      },
      rotate: {
        '0%': {transform: 'rotate(0deg)'},
        '100%': {transform: 'rotate(360deg)'},
      },
      scaleup: {
        '0%': {transform: 'scale(0.8)'},
        '50%': {transform: 'scale(1.2)'},
        '100%': {transform: 'scale(0.8)'},
      },
      fadeBg: {
          "0%": { backgroundColor: "rgb(225, 226, 228)" }, /* gray-100 */
          "100%": { backgroundColor: "rgb(209, 213, 219)" }, /* gray-300 */
      },
    },
     animation: {
      movingY: 'move 3s linear infinite',
      rotating: 'rotate 15s linear infinite',
      scaleup: 'scaleup 3s linear infinite',
      fadeBg: "fadeBg 3s infinite alternate ease-in-out",
    },

    fontFamily: {
      jost: [ "Jost", "serif"],
      lobster: ["Lobster", "serif"],
      play: ["Playwrite IT Moderna", "serif"],
      funnel: ["Funnel Display", "serif"],
    },
  },
  plugins: [],
}

