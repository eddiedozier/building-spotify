const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Circular Spotify Tx T Book', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        darkgray: '#121212',
        appGreen: '#1db954',
        activeGray: '#282828',
        textGray: '#b3b3b3',
        opaqueBlack: 'rgba(0, 0, 0, 0.7)',
        lightGray: '#333'
      }
    },
  },
}