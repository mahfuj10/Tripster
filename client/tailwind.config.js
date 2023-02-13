module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'thinOrange': '#FFDABE',
      'white': '#fff',
      'orange': '#D85726',
      'goldenbg': '#FBF6F2',
      'cream': '#FFDABC',
      'footer': '#19191B',
      'blue': '#40526A'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
