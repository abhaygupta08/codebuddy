const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  plugins: [
    require('@tailwindcss/typography'),],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
      },
      transitionProperty: {
        'height': 'height',
      },
      colors: {
        dark: '#2E3035',
      },
      red: {
        '100': '#FFF5F5',
        '200': '#FED7D7',
        '300': '#FBB6B6',
        '400': '#F68788',
        '500': '#ED4C4C',
        '600': '#D41E1E',
        '700': '#B80000',
        '800': '#9B0000',
        '900': '#7F0000',
      },
    },
  },
  variants: {
    extend: {},
  },
};
