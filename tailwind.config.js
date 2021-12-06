module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#ff4800"
      },
    },
    backgroundColor: theme => ({
       ...theme('colors'),
       'primary': '#3490dc',
       'secondary': '#ffed4a',
       'nav': '#101f4b',
      })  
  },
  variants: {
    extend: {},
  },
  plugins: [],
}